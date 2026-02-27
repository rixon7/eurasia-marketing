import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Load .env.local manually
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
  _id: 'service-website-building',
  name: 'Website Building',
  slug: { _type: 'slug', current: 'website-building' },
  icon: '🌐',
  tagline: 'Stunning websites that convert visitors into customers',
  description: 'Professional website design and development in Hounslow. We build modern, fast, mobile-friendly websites that look great and rank on Google.',
  intro: 'Your website is your most powerful sales tool — it works 24/7 and is often the first impression a customer has of your business. We build websites that not only look stunning but are engineered to convert visitors into paying customers.',
  features: [
    { _key: 'f1', title: 'Custom Responsive Design', description: 'Every site is designed from scratch to match your brand, not a generic template. Looks perfect on every device.' },
    { _key: 'f2', title: 'SEO-Ready from Day One', description: 'Fast load times, clean code, proper meta tags, and structured data built in from the start to help you rank.' },
    { _key: 'f3', title: 'Conversion-Focused Layout', description: 'We place CTAs, trust signals, and user journeys strategically to turn visitors into enquiries and sales.' },
    { _key: 'f4', title: 'Content Management System', description: 'Update your own pages, blog posts, and services easily without needing a developer.' },
    { _key: 'f5', title: 'Fast Hosting & SSL', description: 'Hosted on enterprise-grade infrastructure with free SSL, automatic backups, and 99.9% uptime.' },
    { _key: 'f6', title: 'Ongoing Support', description: 'We maintain and update your site monthly so it stays secure, fast, and up to date.' },
  ],
  faqs: [
    { _key: 'q1', q: 'How long does it take to build a website?', a: 'Most websites are completed within 2–4 weeks depending on the complexity. We provide a clear timeline at the start of each project.' },
    { _key: 'q2', q: 'Do I need to provide content?', a: 'We can work with your existing content or help create it from scratch. We offer copywriting as an add-on service.' },
    { _key: 'q3', q: 'Will my website work on mobile?', a: 'Absolutely. All our websites are fully responsive and tested across all major devices and browsers.' },
    { _key: 'q4', q: 'Can I update the website myself?', a: 'Yes. We connect your site to a CMS so you can update text, images, blog posts, and more without any technical knowledge.' },
    { _key: 'q5', q: 'What happens after the site is launched?', a: 'We offer ongoing monthly maintenance plans starting from £100/month, covering updates, backups, security monitoring, and support.' },
  ],
};

const result = await client.createOrReplace(doc);
console.log('✅ Created:', result._id);
