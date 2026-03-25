import { client, allPostsQuery, postBySlugQuery, allPostSlugsQuery, urlFor } from './sanity';
import type { SanityImageSource } from '@sanity/image-url';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  image: string;
  author: string;
  authorTitle: string;
}

function estimateReadingTime(body: unknown[]): string {
  if (!Array.isArray(body)) return '1 min read';
  let wordCount = 0;
  for (const block of body) {
    if (
      block &&
      typeof block === 'object' &&
      '_type' in block &&
      block._type === 'block' &&
      'children' in block &&
      Array.isArray((block as { children: unknown[] }).children)
    ) {
      for (const child of (block as { children: { text?: string }[] }).children) {
        if (child.text) {
          wordCount += child.text.split(/\s+/).filter(Boolean).length;
        }
      }
    }
  }
  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

function resolveImage(mainImage: SanityImageSource | null | undefined): string {
  if (!mainImage) return '';
  try {
    return urlFor(mainImage).width(1200).quality(80).auto('format').url();
  } catch {
    return '';
  }
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const raw = await client.fetch<
    {
      slug: string;
      title: string;
      date: string;
      excerpt: string;
      tags: string[] | null;
      mainImage: SanityImageSource | null;
      body?: unknown[];
      author?: string | null;
      authorTitle?: string | null;
    }[]
  >(allPostsQuery);

  return raw.map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt ?? '',
    tags: post.tags ?? [],
    readingTime: estimateReadingTime(post.body ?? []),
    image: resolveImage(post.mainImage),
    author: post.author ?? 'Eurasia Marketing',
    authorTitle: post.authorTitle ?? 'Digital Marketing Expert',
  }));
}

export async function getPostBySlug(slug: string): Promise<{
  meta: PostMeta;
  body: unknown[];
}> {
  const post = await client.fetch<{
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    tags: string[] | null;
    mainImage: SanityImageSource | null;
    body: unknown[];
    author?: string | null;
    authorTitle?: string | null;
  } | null>(postBySlugQuery, { slug });

  if (!post) throw new Error(`Post not found: ${slug}`);

  return {
    meta: {
      slug: post.slug,
      title: post.title,
      date: post.date,
      excerpt: post.excerpt ?? '',
      tags: post.tags ?? [],
      readingTime: estimateReadingTime(post.body ?? []),
      image: resolveImage(post.mainImage),
      author: post.author ?? 'Eurasia Marketing',
      authorTitle: post.authorTitle ?? 'Digital Marketing Expert',
    },
    body: post.body ?? [],
  };
}

export async function getAllPostSlugs(): Promise<string[]> {
  return client.fetch<string[]>(allPostSlugsQuery);
}
