/**
 * Migration script: Hardcoded homepage settings → Sanity
 *
 * Usage:
 *   SANITY_API_TOKEN=<token> NEXT_PUBLIC_SANITY_PROJECT_ID=<id> node scripts/migrate-homepage.mjs
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

const homepageSettings = {
  _type: 'homepageSettings',
  _id: 'homepageSettings',
  heroTitle: 'Grow Your Brand',
  heroHighlight: 'With Confidence',
  heroSubtitle: 'We help businesses build powerful marketing strategies that drive real results and lasting growth.',
  // Fixed 2026-08-26 (homepage rebuild): this previously listed Brand
  // Strategy and Content Marketing, both deleted services whose URLs now
  // 301-redirect to /services/social-media (see next.config.ts) — the
  // homepage was advertising services that no longer exist. Now the real
  // six, matching components/home/service-illustrations.tsx and
  // components/home/services-bento.tsx (which currently render this list
  // hardcoded rather than reading it from Sanity, precisely to avoid this
  // class of drift — this document is kept in sync as the canonical
  // record for any other future consumer).
  featuredServices: [
    { icon: '🌐', title: 'Website Building',    href: '/services/website-building',   description: 'Modern, responsive websites built to convert visitors into customers — fast, SEO-ready, and beautifully designed.' },
    { icon: '🤖', title: 'AI Automation',        href: '/services/ai-automation',       description: 'Save hours every week with custom AI workflows that automate lead follow-ups, reporting, and more.' },
    { icon: '📈', title: 'Digital Advertising',  href: '/services/digital-advertising', description: 'Targeted ad campaigns across search, social, and display channels that maximize your ROI.' },
    { icon: '📱', title: 'Social Media Management', href: '/services/social-media',    description: 'Strategic content creation, community management, and analytics across every platform.' },
    { icon: '🔍', title: 'SEO & SEM',            href: '/services/seo-sem',             description: 'Data-driven SEO strategies that consistently deliver page-one rankings.' },
    { icon: '📨', title: 'Email Marketing',      href: '/services/email-marketing',     description: 'Automated campaigns and targeted sequences that drive consistent repeat revenue.' },
  ],
  features: [
    { icon: '💡', title: 'Creative Approach',  description: 'Fresh ideas and innovative campaigns that capture attention.' },
    { icon: '📊', title: 'Data-Driven',         description: 'Every decision backed by analytics for measurable outcomes.' },
    { icon: '🤝', title: 'Dedicated Support',   description: 'A committed team that treats your business like their own.' },
    { icon: '⚡', title: 'Fast Turnaround',     description: 'Quick execution without compromising on quality or strategy.' },
  ],
  testimonials: [
    { quote: 'Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.', initials: 'AK', name: 'Amira Khan', role: 'CEO, TechFlow Solutions' },
    { quote: 'Professional, creative, and always on top of the latest trends. They feel like an extension of our team.', initials: 'DM', name: 'David Morris', role: 'Founder, GreenLeaf Co.' },
  ],
};

async function main() {
  console.log(`Migrating homepage settings to project ${projectId} / dataset ${dataset}...`);

  try {
    await client.createOrReplace(homepageSettings);
    console.log('  ✓ homepageSettings');
  } catch (err) {
    console.error('  ✗ homepageSettings:', err.message);
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
