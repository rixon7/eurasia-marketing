/**
 * Migration script: MDX blog posts → Sanity
 *
 * Usage:
 *   SANITY_API_TOKEN=<token> NEXT_PUBLIC_SANITY_PROJECT_ID=<id> node scripts/migrate-blogs.mjs
 *
 * Reads all .mdx files from content/blog/ and content/drafts/ and creates
 * blogPost documents in Sanity. Drafts get their future publishedAt dates
 * which means the GROQ filter "publishedAt <= now()" will automatically
 * hide them until their date arrives — no deployment needed.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { createClient } from '@sanity/client';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_TOKEN;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_TOKEN env vars');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

// ── Markdown → Portable Text ────────────────────────────────────────────────

function mkKey() {
  return randomUUID().replace(/-/g, '').slice(0, 12);
}

function mkSpan(text) {
  return { _type: 'span', _key: mkKey(), text, marks: [] };
}

function mkBlock(style, text) {
  return {
    _type: 'block',
    _key: mkKey(),
    style,
    children: [mkSpan(text)],
    markDefs: [],
  };
}

/**
 * Very simple markdown → Portable Text converter.
 * Handles: ## headings, paragraphs, horizontal rules (skipped).
 * Inline: **bold**, _italic_, [link](url)
 */
function markdownToPortableText(markdown) {
  const lines = markdown.split('\n');
  const blocks = [];
  let paragraphLines = [];

  function flushParagraph() {
    const text = paragraphLines.join(' ').trim();
    paragraphLines = [];
    if (!text) return;

    // Parse inline marks
    const block = {
      _type: 'block',
      _key: mkKey(),
      style: 'normal',
      children: parseInline(text),
      markDefs: [],
    };
    // Move link markDefs to block
    block.markDefs = block.children
      .flatMap((c) => c._linkMark ? [c._linkMark] : [])
      .filter(Boolean);
    block.children.forEach((c) => delete c._linkMark);
    blocks.push(block);
  }

  function parseInline(text) {
    // Split by bold, italic, links
    const spans = [];
    let remaining = text;

    while (remaining.length > 0) {
      // Link: [text](url)
      const linkMatch = remaining.match(/^(.*?)\[([^\]]+)\]\(([^)]+)\)(.*)/s);
      if (linkMatch) {
        const [, before, linkText, href, after] = linkMatch;
        if (before) spans.push(mkSpan(before));
        const markKey = mkKey();
        spans.push({
          _type: 'span',
          _key: mkKey(),
          text: linkText,
          marks: [markKey],
          _linkMark: { _type: 'link', _key: markKey, href },
        });
        remaining = after;
        continue;
      }

      // Bold: **text**
      const boldMatch = remaining.match(/^(.*?)\*\*([^*]+)\*\*(.*)/s);
      if (boldMatch) {
        const [, before, boldText, after] = boldMatch;
        if (before) spans.push(mkSpan(before));
        spans.push({ _type: 'span', _key: mkKey(), text: boldText, marks: ['strong'] });
        remaining = after;
        continue;
      }

      // Italic: _text_ or *text*
      const italicMatch = remaining.match(/^(.*?)[_*]([^_*]+)[_*](.*)/s);
      if (italicMatch) {
        const [, before, italicText, after] = italicMatch;
        if (before) spans.push(mkSpan(before));
        spans.push({ _type: 'span', _key: mkKey(), text: italicText, marks: ['em'] });
        remaining = after;
        continue;
      }

      // No match, push rest as plain text
      spans.push(mkSpan(remaining));
      remaining = '';
    }

    return spans;
  }

  for (const line of lines) {
    // Skip horizontal rules
    if (/^---+$/.test(line.trim())) {
      flushParagraph();
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      flushParagraph();
      const level = headingMatch[1].length;
      const style = level <= 4 ? `h${level}` : 'normal';
      blocks.push(mkBlock(style, headingMatch[2].trim()));
      continue;
    }

    // Empty line = paragraph break
    if (line.trim() === '') {
      flushParagraph();
      continue;
    }

    // List items (treat as paragraphs for simplicity)
    const listMatch = line.match(/^[-*]\s+(.+)/);
    if (listMatch) {
      flushParagraph();
      blocks.push({
        _type: 'block',
        _key: mkKey(),
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children: parseInline(listMatch[1]),
        markDefs: [],
      });
      continue;
    }

    paragraphLines.push(line.trim());
  }

  flushParagraph();
  return blocks;
}

// ── Migration ────────────────────────────────────────────────────────────────

async function migrateDirectory(dir, label) {
  if (!fs.existsSync(dir)) {
    console.log(`Skipping ${label} — directory not found`);
    return;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  console.log(`\nMigrating ${files.length} ${label} posts from ${dir}...`);

  for (const filename of files) {
    const slug = filename.replace(/\.mdx$/, '');
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const body = markdownToPortableText(content);

    const doc = {
      _type: 'blogPost',
      _id: `blog-${slug}`,
      title: data.title,
      slug: { _type: 'slug', current: slug },
      publishedAt: new Date(data.date).toISOString(),
      excerpt: data.excerpt ?? '',
      tags: data.tags ?? [],
      body,
      // If the image is an external URL, store it in a custom field
      // We'll use a simple externalImageUrl approach here
      _externalImageUrl: data.image ?? null,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ ${slug} (${data.date})`);
    } catch (err) {
      console.error(`  ✗ ${slug}:`, err.message);
    }
  }
}

async function main() {
  console.log(`Migrating to project ${projectId} / dataset ${dataset}`);

  await migrateDirectory(path.join(root, 'content/blog'), 'published');
  await migrateDirectory(path.join(root, 'content/drafts'), 'draft');

  console.log('\nDone! Note: External image URLs are stored in _externalImageUrl.');
  console.log('To use Sanity-hosted images, re-upload them via Studio or the Assets API.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
