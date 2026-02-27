import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const envPath = resolve(process.cwd(), '.env.local');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8').split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);
Object.assign(process.env, env);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const doc = {
  _type: 'service',
  _id: 'service-web-design',
  name: 'Web Design',
  slug: { _type: 'slug', current: 'web-design' },
  icon: '🎨',
  tagline: 'Beautiful designs that make your brand unforgettable',
  description: 'Professional web design services in Hounslow. We create visually stunning, user-friendly designs that reflect your brand, engage your visitors, and drive conversions.',
  intro: 'A great website starts with great design. We craft custom visual experiences that instantly communicate your brand\'s personality, build trust with visitors, and guide them naturally towards taking action. Whether you need a complete redesign or a fresh new look, our designers create something that stands out.',
  features: [
    { _key: 'f1', title: 'Custom Visual Identity', description: 'Every design is crafted specifically for your brand — your colours, fonts, tone, and personality reflected throughout.' },
    { _key: 'f2', title: 'UI/UX Design', description: 'Intuitive layouts and user flows that make it easy for visitors to find what they need and convert into customers.' },
    { _key: 'f3', title: 'Mobile-First Design', description: 'Designed for smartphones first — over 60% of web traffic is mobile, and your site will look stunning on every screen.' },
    { _key: 'f4', title: 'Landing Page Design', description: 'High-converting landing pages designed specifically for ad campaigns, promotions, or product launches.' },
    { _key: 'f5', title: 'Brand Consistency', description: 'We ensure your website design aligns perfectly with your logo, marketing materials, and overall brand guidelines.' },
    { _key: 'f6', title: 'Design Handoff & Assets', description: 'Receive all final design files, brand assets, and style guides so you own everything we create for you.' },
  ],
  faqs: [
    { _key: 'q1', q: 'What is the difference between web design and website building?', a: 'Web design is the visual and UX layer — how it looks and feels. Website building is the technical layer — turning that design into a working, live website. We offer both as a combined service or separately.' },
    { _key: 'q2', q: 'Can you redesign my existing website?', a: 'Absolutely. We can give your existing site a full visual refresh without rebuilding it from scratch, or we can redesign and rebuild it entirely depending on your needs.' },
    { _key: 'q3', q: 'Do you provide design mockups before building?', a: 'Yes. We always share design concepts and mockups for your approval before any development begins, so you know exactly what you\'re getting.' },
    { _key: 'q4', q: 'How many design revisions are included?', a: 'We include two rounds of revisions in every project to ensure you\'re completely happy with the result before we move to development.' },
    { _key: 'q5', q: 'Can you also create logos and branding?', a: 'Yes. We offer brand identity design including logo creation, colour palettes, typography, and brand guidelines as an add-on service.' },
  ],
};

const result = await client.createOrReplace(doc);
console.log('✅ Created:', result._id);
