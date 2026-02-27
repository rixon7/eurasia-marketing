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
  _id: 'service-ai-automation',
  name: 'AI Automation & Workflows',
  slug: { _type: 'slug', current: 'ai-automation' },
  icon: '🤖',
  tagline: 'Work smarter with AI-powered business automation',
  description: 'Custom AI automation workflows for Hounslow businesses. Save hours every week by automating repetitive tasks, lead follow-ups, reporting, content generation, and more.',
  intro: 'Most businesses waste hours every week on repetitive tasks that could be automated. From following up with leads to generating reports, scheduling social posts, and responding to enquiries — we build custom AI workflows that do the heavy lifting so you can focus on growing your business.',
  features: [
    { _key: 'f1', title: 'Lead Follow-Up Automation', description: 'Automatically follow up with new enquiries via email or WhatsApp within seconds of them submitting a form — never lose a lead again.' },
    { _key: 'f2', title: 'AI Content Generation', description: 'Generate first drafts of blog posts, social media captions, email newsletters, and ad copy using your brand voice and guidelines.' },
    { _key: 'f3', title: 'CRM & Pipeline Automation', description: 'Automatically update your CRM, assign leads, send notifications, and move deals through your pipeline without manual data entry.' },
    { _key: 'f4', title: 'Reporting & Analytics Dashboards', description: 'Pull data from Google Analytics, Meta Ads, and other sources into a single automated weekly report delivered to your inbox.' },
    { _key: 'f5', title: 'Customer Service Chatbots', description: 'Deploy an AI chatbot on your website trained on your FAQs, services, and pricing — available 24/7 to qualify and convert leads.' },
    { _key: 'f6', title: 'Social Media Scheduling', description: 'Plan, generate, and schedule weeks of social content in one session using AI — then let it post automatically across your channels.' },
  ],
  faqs: [
    { _key: 'q1', q: 'Do I need any technical knowledge to use AI automation?', a: 'No. We handle the entire setup and integration. You just use the end result — whether that\'s a daily report, automated emails, or a chatbot on your website.' },
    { _key: 'q2', q: 'What tools do you use to build automations?', a: 'We use a combination of tools including Make (Integromat), Zapier, n8n, OpenAI, and custom-built solutions depending on what fits your business best.' },
    { _key: 'q3', q: 'How quickly can an automation be set up?', a: 'Simple automations (like lead follow-up emails) can be live within a day. More complex multi-step workflows typically take 1–2 weeks.' },
    { _key: 'q4', q: 'What kinds of businesses benefit most from AI automation?', a: 'Any business with repetitive tasks benefits. Trades, professional services, retail, and hospitality businesses typically see the biggest time savings.' },
    { _key: 'q5', q: 'Is there an ongoing cost?', a: 'There is a small monthly maintenance fee to keep workflows running and updated. We also monitor automations and fix any issues proactively.' },
  ],
};

const result = await client.createOrReplace(doc);
console.log('✅ Created:', result._id);
