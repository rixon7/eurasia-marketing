/**
 * Adds the Mumbai area page to Sanity, mirroring the West London area
 * documents in migrate-areas.mjs (same `area` document type, same
 * `createOrReplace` pattern) but kept as its own script rather than
 * appended to that file's hardcoded `areas` array — that array is scoped
 * to West London suburbs and re-running it would rewrite all nine
 * existing entries even though only Mumbai is new.
 *
 * Positioning: "affordable website design company Mumbai" is the primary
 * target keyword (website-building-led, per the 2026-09-10 dual-location
 * strategy decision) — deliberately not competing head-on for the
 * saturated generic "website design company Mumbai" term, where Mumbai's
 * established agencies (PageTraffic, Techmagnate, Capsicum Mediaworks,
 * etc.) already dominate. The AI-automation angle is leaned on as a
 * genuine differentiator few Mumbai competitors are branding on yet.
 *
 * Usage:
 *   SANITY_API_TOKEN=<token> NEXT_PUBLIC_SANITY_PROJECT_ID=<id> node scripts/add-mumbai-area.mjs
 */

import { createClient } from '@sanity/client';

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

const mumbai = {
  slug: 'mumbai',
  name: 'Mumbai',
  description:
    'Affordable website design and digital marketing agency in Mumbai — AI-powered web design, SEO, and digital advertising for growing businesses.',
  intro:
    "Based in Sion, Mumbai, Eurasia Marketing builds fast, professional websites and AI-powered marketing systems that actually convert. From startups to established local businesses, we combine affordable website design with data-driven SEO, digital advertising, and AI automation — so you get a modern online presence without the agency price tag of Mumbai's bigger players.",
  nearby: ['Dadar', 'Matunga', 'Wadala', 'Chembur', 'King Circle'],
};

async function main() {
  const doc = {
    _type: 'area',
    _id: `area-${mumbai.slug}`,
    name: mumbai.name,
    slug: { _type: 'slug', current: mumbai.slug },
    description: mumbai.description,
    intro: mumbai.intro,
    nearby: mumbai.nearby,
  };

  try {
    await client.createOrReplace(doc);
    console.log(`  ✓ ${mumbai.slug}`);
  } catch (err) {
    console.error(`  ✗ ${mumbai.slug}:`, err.message);
    process.exit(1);
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
