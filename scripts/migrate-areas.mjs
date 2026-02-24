/**
 * Migration script: Hardcoded areas → Sanity
 *
 * Usage:
 *   SANITY_API_TOKEN=<token> NEXT_PUBLIC_SANITY_PROJECT_ID=<id> node scripts/migrate-areas.mjs
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

const areas = [
  {
    slug: 'hounslow',
    name: 'Hounslow',
    description: 'Leading digital marketing agency in Hounslow offering website design, SEO, social media management, and digital advertising to local businesses.',
    intro: "As Hounslow's trusted digital marketing agency, we help local businesses grow their online presence. From high street shops to professional services, we've helped hundreds of Hounslow businesses reach more customers online.",
    nearby: ['Feltham', 'Isleworth', 'Heston', 'Brentford'],
  },
  {
    slug: 'feltham',
    name: 'Feltham',
    description: 'Expert digital marketing services in Feltham. Website design, SEO, and social media management helping Feltham businesses grow online.',
    intro: "We help Feltham businesses compete online with tailored digital marketing strategies. Whether you're a new start-up or an established business in Feltham, our team delivers results-driven marketing that grows your customer base.",
    nearby: ['Hounslow', 'Sunbury', 'Hampton', 'Heston'],
  },
  {
    slug: 'sunbury',
    name: 'Sunbury',
    description: 'Digital marketing agency serving Sunbury-on-Thames. SEO, website design, and social media services for Sunbury businesses.',
    intro: 'Our digital marketing team works with businesses across Sunbury-on-Thames to build powerful online strategies. We understand the local market and create campaigns that connect you with customers in Sunbury and the surrounding areas.',
    nearby: ['Hampton', 'Feltham', 'Hounslow', 'Hayes'],
  },
  {
    slug: 'hampton',
    name: 'Hampton',
    description: 'Professional digital marketing in Hampton. Helping Hampton businesses with SEO, website design, social media, and digital advertising.',
    intro: 'From Hampton Hill to Hampton Wick, we support businesses across the Hampton area with comprehensive digital marketing services. Our strategies are tailored to the local community and designed to drive real, measurable results.',
    nearby: ['Sunbury', 'Feltham', 'Hounslow', 'Isleworth'],
  },
  {
    slug: 'isleworth',
    name: 'Isleworth',
    description: 'Digital marketing services in Isleworth. Website design, SEO, and social media management for Isleworth businesses.',
    intro: 'Eurasia Marketing supports Isleworth businesses with expert digital marketing strategies. We help local businesses stand out online, attract more customers, and grow their revenue through proven digital marketing techniques.',
    nearby: ['Hounslow', 'Brentford', 'Heston', 'Hampton'],
  },
  {
    slug: 'heston',
    name: 'Heston',
    description: 'Digital marketing agency in Heston offering SEO, website design, social media management, and Google advertising for local businesses.',
    intro: 'We work with businesses throughout Heston to deliver impactful digital marketing campaigns. Our local expertise means we know the Heston market and can create strategies that resonate with your target customers.',
    nearby: ['Hounslow', 'Feltham', 'Isleworth', 'Hayes'],
  },
  {
    slug: 'brentford',
    name: 'Brentford',
    description: 'Expert digital marketing in Brentford. SEO, website design, social media, and paid advertising for Brentford businesses.',
    intro: 'Brentford is a fast-growing business hub and we help local businesses keep pace online. From SEO to social media management, our team creates digital marketing strategies that put Brentford businesses in front of more customers.',
    nearby: ['Isleworth', 'Hounslow', 'Heston', 'Hayes'],
  },
  {
    slug: 'hayes',
    name: 'Hayes',
    description: 'Digital marketing services in Hayes, Middlesex. Website design, SEO, social media management, and digital advertising for Hayes businesses.',
    intro: 'Our digital marketing team helps Hayes businesses build a strong online presence. Whether you need a new website, better Google rankings, or a stronger social media presence, we provide the full range of digital marketing services tailored to the Hayes market.',
    nearby: ['Heston', 'Feltham', 'Brentford', 'Hounslow'],
  },
  {
    slug: 'staines',
    name: 'Staines',
    description: 'Digital marketing agency in Staines-upon-Thames. Expert website design, SEO, social media management, and digital advertising for Staines businesses.',
    intro: 'We help Staines-upon-Thames businesses grow their online presence with tailored digital marketing strategies. From the town centre to the surrounding business parks, our team delivers results-driven campaigns that connect you with more local customers.',
    nearby: ['Hounslow', 'Feltham', 'Sunbury', 'Hampton'],
  },
  {
    slug: 'london',
    name: 'London',
    description: 'Digital marketing agency serving London businesses. Expert SEO, website design, social media management, and digital advertising to help London businesses grow online.',
    intro: "Eurasia Marketing works with businesses across London to deliver powerful digital marketing strategies. Whether you're a small independent business or a growing company in the capital, our team builds data-driven campaigns that increase your visibility, attract more customers, and grow your revenue.",
    nearby: ['Hounslow', 'Brentford', 'Isleworth', 'Hayes'],
  },
];

async function main() {
  console.log(`Migrating ${areas.length} areas to project ${projectId} / dataset ${dataset}...`);

  for (const area of areas) {
    const doc = {
      _type: 'area',
      _id: `area-${area.slug}`,
      name: area.name,
      slug: { _type: 'slug', current: area.slug },
      description: area.description,
      intro: area.intro,
      nearby: area.nearby,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ ${area.slug}`);
    } catch (err) {
      console.error(`  ✗ ${area.slug}:`, err.message);
    }
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
