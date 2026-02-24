/**
 * Migration script: Hardcoded services → Sanity
 *
 * Usage:
 *   SANITY_API_TOKEN=<token> NEXT_PUBLIC_SANITY_PROJECT_ID=<id> node scripts/migrate-services.mjs
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

const services = [
  {
    slug: 'brand-strategy',
    name: 'Brand Strategy',
    icon: '🎯',
    tagline: 'Build a brand that people remember',
    description: 'Professional brand strategy services in Hounslow. We define your brand identity, voice, and positioning to help your business stand out and connect with your ideal customers.',
    intro: "A strong brand is the foundation of every successful business. Think about the brands you trust most — the reason you choose them over cheaper alternatives isn't always the product itself. It's the way they make you feel, the values they represent, and the consistency of every interaction. That's the power of a well-executed brand strategy.\n\nWithout clear positioning and a consistent identity, even the best products and services struggle to gain traction. You may be getting customers through word of mouth, but without a brand that communicates your value clearly, you're leaving growth on the table. Competitors with inferior offerings but stronger brands will win business that should rightfully be yours.\n\nOur brand strategy service gives you the clarity, direction, and practical tools to build a brand that stands out — one that attracts the right customers, earns trust faster, and makes every pound of your marketing budget work harder. Whether you're starting from scratch, rebranding, or simply looking to sharpen your existing identity, we work closely with you to create something that genuinely represents who you are and what makes you different.",
    features: [
      { title: 'Brand Identity & Visual Direction', description: "Your visual identity is often the first impression a potential customer has of your business. We define your brand's complete visual language — colour palette, typography, logo direction, imagery style, and design system — creating a cohesive look that feels professional, memorable, and true to who you are. Every visual decision is made with your target audience in mind, ensuring your brand connects emotionally as well as aesthetically." },
      { title: 'Brand Voice & Messaging', description: "How you communicate is just as important as what you say. We develop your brand's unique tone of voice — whether that's authoritative and professional, warm and approachable, or bold and disruptive — and craft the key messages that define your brand story. The result is a consistent communication style that feels natural across your website, social media, emails, and any other customer touchpoint." },
      { title: 'Competitor & Market Analysis', description: "A great brand strategy starts with a deep understanding of the landscape you're operating in. We conduct thorough research into your competitors — analysing their positioning, messaging, visual identity, and strengths and weaknesses — to identify white space and opportunities. This intelligence shapes every decision we make, ensuring your brand is positioned to stand out rather than blend in." },
      { title: 'Brand Guidelines Document', description: "Consistency is what transforms a brand from a logo into a trusted identity. We produce a comprehensive brand guidelines document that covers everything from logo usage and colour codes to typography rules, tone of voice examples, and do's and don'ts. This ensures every team member, freelancer, agency, and supplier represents your brand correctly — every single time." },
      { title: 'Target Audience Definition', description: 'Marketing to everyone is marketing to no one. We build detailed audience personas based on research, data, and insight — profiling your ideal customers by their demographics, motivations, pain points, behaviours, and buying triggers. These personas become the lens through which every brand and marketing decision is made, ensuring your messaging speaks directly to the people most likely to buy from you and become loyal advocates.' },
      { title: 'Positioning Strategy', description: 'In a crowded market, your positioning is what makes you the obvious choice for the right customer. We define exactly where your brand sits relative to competitors, what your unique value proposition is, and how to communicate it clearly and compellingly. A strong positioning strategy gives your entire team — from sales to customer service — a shared understanding of what makes your business different and why that matters to customers.' },
    ],
    faqs: [
      { q: 'Do I need a brand strategy if I already have a logo?', a: 'A logo is just one small part of your brand. Brand strategy covers the deeper foundations — your values, purpose, positioning, audience, voice, and messaging. Without these, your logo is just a graphic. With them, it becomes a symbol of something people trust and choose. Many businesses with existing logos benefit enormously from going back to basics and building a proper strategic foundation.' },
      { q: 'How long does a brand strategy project take?', a: 'Most brand strategy projects take 2–4 weeks depending on scope and complexity. We work in a focused, structured way — no unnecessary delays or drawn-out processes. You\'ll receive a clear timeline at the start of the project so you always know what to expect.' },
      { q: 'Can you work with my existing branding?', a: 'Absolutely. We can build a full strategy around your existing visual identity and brand elements, or — if your visuals need updating — we\'ll make those recommendations as part of the process. Many clients come to us with a logo they love but no clear strategy behind it. We meet you where you are.' },
      { q: 'Is brand strategy only for large businesses?', a: 'Not at all. In fact, small and medium-sized businesses often benefit the most from brand strategy because it gives them a clear direction and stops them wasting money on marketing that doesn\'t connect. A well-defined brand helps you punch above your weight and compete confidently against larger players.' },
      { q: 'What\'s the difference between brand strategy and marketing strategy?', a: 'Brand strategy defines who you are — your identity, values, voice, and positioning. Marketing strategy defines how you reach your audience — the channels, campaigns, and tactics you use. Brand strategy comes first; it\'s the foundation that makes your marketing more effective and consistent.' },
      { q: 'What do I need to provide to get started?', a: 'Not much. We\'ll start with a discovery session to understand your business, goals, audience, and competitors. From there, we do the heavy lifting. The more context you can share about your business and customers, the better — but we guide you through the whole process.' },
    ],
  },
  {
    slug: 'digital-advertising',
    name: 'Digital Advertising',
    icon: '📈',
    tagline: 'Targeted ads that deliver real ROI',
    description: 'Expert digital advertising management in Hounslow. Google Ads, Meta Ads, and LinkedIn campaigns optimised for conversions and maximum return on investment.',
    intro: "Digital advertising puts your business in front of the right people at exactly the right moment. Whether you're looking to drive website traffic, generate leads, or increase sales, our team builds and manages campaigns that deliver measurable results — without wasting your budget.",
    features: [
      { title: 'Google Search Ads', description: 'Appear at the top of Google when customers actively search for your products or services. Pay only when someone clicks.' },
      { title: 'Meta Ads (Facebook & Instagram)', description: 'Reach your ideal audience on social media with visually compelling ads that drive engagement, leads, and sales.' },
      { title: 'LinkedIn Advertising', description: "Target professionals, decision-makers, and B2B buyers with precision on the world's leading professional network." },
      { title: 'Retargeting Campaigns', description: "Re-engage website visitors who didn't convert first time. Retargeting dramatically improves conversion rates and reduces wasted ad spend." },
      { title: 'Conversion Tracking & Analytics', description: 'We set up full conversion tracking so you can see exactly what your ads are delivering — leads, calls, purchases, and more.' },
      { title: 'Ongoing Optimisation', description: 'We continuously test, refine, and improve your campaigns to lower your cost per acquisition and increase your return on ad spend.' },
    ],
    faqs: [
      { q: 'How much do I need to spend on ads?', a: "We recommend a minimum budget of £300–500/month for Google Ads to see meaningful results. We'll advise on the right budget for your goals." },
      { q: 'How quickly will I see results from paid ads?', a: 'Unlike SEO, paid ads can drive traffic from day one. Most clients see results within the first 2–4 weeks.' },
      { q: 'Do you take a percentage of my ad spend?', a: 'No. We charge a flat monthly management fee. Your ad budget goes entirely to the platforms.' },
    ],
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing',
    icon: '✍️',
    tagline: 'Content that attracts, engages, and converts',
    description: 'Strategic content marketing services in Hounslow. Blog posts, case studies, and SEO content that builds authority, drives organic traffic, and generates leads.',
    intro: 'Content marketing is one of the most powerful long-term strategies for growing your business online. By creating valuable, relevant content, you attract the right audience, build trust, and drive a steady stream of enquiries — without relying solely on paid advertising.',
    features: [
      { title: 'SEO Blog Posts & Articles', description: 'Well-researched, keyword-optimised blog posts that rank on Google and bring a consistent flow of organic traffic to your website.' },
      { title: 'Content Strategy & Editorial Calendar', description: 'We plan your content months in advance, ensuring every piece serves a purpose and supports your broader marketing goals.' },
      { title: 'Case Studies & Success Stories', description: 'Compelling case studies that showcase your results and build credibility with potential customers.' },
      { title: 'Landing Page Copywriting', description: 'Persuasive page copy that clearly communicates your value and converts visitors into enquiries and sales.' },
      { title: 'Email Content & Newsletters', description: 'Engaging email content that keeps your audience warm, drives repeat business, and nurtures leads through the funnel.' },
      { title: 'Social Media Content', description: 'Platform-optimised captions, carousels, and post ideas that keep your social channels active and engaging.' },
    ],
    faqs: [
      { q: 'How long before content marketing shows results?', a: 'Content marketing is a long-term strategy. Most clients start seeing meaningful organic traffic growth within 3–6 months, with compounding results over time.' },
      { q: 'Do you write the content yourselves?', a: "Yes. Our in-house team researches, writes, and optimises all content. We'll always check facts specific to your business with you." },
      { q: 'How many blog posts do I need per month?', a: 'We recommend a minimum of 2 posts per month. Consistency matters more than volume — a steady cadence outperforms sporadic publishing.' },
    ],
  },
  {
    slug: 'social-media',
    name: 'Social Media Management',
    icon: '📱',
    tagline: 'Social media that builds your brand and drives enquiries',
    description: 'Professional social media management in Hounslow. Strategy, content creation, scheduling, and community management across Facebook, Instagram, LinkedIn, and more.',
    intro: 'A strong social media presence builds trust, keeps your brand visible, and drives a steady flow of new customers to your business. Our social media management service handles everything — from strategy and content creation to posting, engagement, and reporting — so you can focus on running your business.',
    features: [
      { title: 'Social Media Strategy', description: 'We build a tailored strategy for your platforms, audience, and goals — defining your content pillars, posting frequency, and tone of voice.' },
      { title: 'Content Creation', description: 'Our team creates professional graphics, captions, and video content that reflects your brand and engages your audience.' },
      { title: 'Scheduling & Publishing', description: 'We schedule and publish content consistently across your chosen platforms at optimal times for maximum reach.' },
      { title: 'Community Management', description: 'We monitor your accounts, respond to comments and messages, and engage with your audience to build a loyal community.' },
      { title: 'Platform Management', description: "We manage Facebook, Instagram, LinkedIn, TikTok, and more — adapting content to suit each platform's format and audience." },
      { title: 'Monthly Analytics & Reporting', description: 'Clear monthly reports showing follower growth, engagement, reach, and how social media is contributing to your business goals.' },
    ],
    faqs: [
      { q: 'Which social media platforms do you manage?', a: "We manage Facebook, Instagram, LinkedIn, TikTok, X (Twitter), and Google Business Profile. We'll recommend the right platforms for your audience." },
      { q: 'How many posts per week will you create?', a: 'Our standard package includes 3–4 posts per week per platform. We can scale up or down based on your needs.' },
      { q: "Will I need to approve content before it goes live?", a: "Yes, if you'd like to. We offer an approval workflow where you review content before it's published, or we can manage it autonomously." },
    ],
  },
  {
    slug: 'seo-sem',
    name: 'SEO & SEM',
    icon: '🔍',
    tagline: 'Get found on Google — and stay there',
    description: 'Expert SEO and SEM services in Hounslow. Technical audits, keyword strategy, on-page optimisation, and link building to boost your search visibility and drive organic growth.',
    intro: 'Search engine optimisation is the most sustainable way to grow your online presence. When your website ranks highly on Google for the right keywords, you get a consistent stream of high-intent visitors — without paying for every click. Our SEO service covers everything from technical foundations to content and authority building.',
    features: [
      { title: 'Technical SEO Audit', description: "We analyse your website's technical health — speed, structure, crawlability, and mobile performance — and fix issues that hold back your rankings." },
      { title: 'Keyword Research & Strategy', description: 'We identify the exact search terms your customers use and build a strategy to rank for the keywords that drive the most valuable traffic.' },
      { title: 'On-Page Optimisation', description: 'We optimise your page titles, meta descriptions, headings, content, and internal linking to maximise your relevance for target keywords.' },
      { title: 'Local SEO', description: 'We optimise your Google Business Profile and local citations to ensure you appear in map searches and local results in your area.' },
      { title: 'Link Building', description: 'We build high-quality backlinks from relevant, authoritative websites — a key factor in improving your Google rankings.' },
      { title: 'Monthly Reporting', description: "Transparent reporting on your keyword rankings, organic traffic, and the actions we've taken — so you always know what's happening." },
    ],
    faqs: [
      { q: 'How long does SEO take to work?', a: 'SEO is a long-term investment. Most clients start seeing meaningful improvements within 3–6 months, with significant results at 6–12 months.' },
      { q: 'Do you guarantee page one rankings?', a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is constantly evolving. We do guarantee a rigorous, transparent process that delivers results." },
      { q: "What's the difference between SEO and SEM?", a: 'SEO is organic (unpaid) search visibility. SEM (Search Engine Marketing) includes paid search ads like Google Ads. Both are powerful — we recommend combining them.' },
    ],
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    icon: '📨',
    tagline: 'Turn your email list into a revenue engine',
    description: 'Professional email marketing services in Hounslow. Campaign design, automated sequences, list management, and reporting that keeps your audience engaged and drives repeat business.',
    intro: 'Email marketing consistently delivers one of the highest returns on investment of any digital marketing channel. With the right strategy, your email list becomes one of your most valuable business assets — driving repeat purchases, nurturing leads, and keeping your brand front of mind with customers who already know and trust you.',
    features: [
      { title: 'Email Campaign Design & Copywriting', description: 'We design and write professional email campaigns that look great in every inbox and compel your readers to take action.' },
      { title: 'Automated Email Sequences', description: 'We build automation flows — welcome sequences, lead nurture campaigns, abandoned cart emails — that work for you around the clock.' },
      { title: 'List Segmentation', description: 'We segment your email list by behaviour, interests, and purchase history to send the right message to the right person at the right time.' },
      { title: 'Newsletter Management', description: 'Regular newsletters that keep your audience engaged, showcase your expertise, and drive traffic back to your website.' },
      { title: 'Platform Setup & Integration', description: 'We set up and manage your email platform — Mailchimp, Klaviyo, or others — and integrate it with your website and CRM.' },
      { title: 'Analytics & Reporting', description: 'Monthly reports covering open rates, click rates, conversions, and list growth — with recommendations for continuous improvement.' },
    ],
    faqs: [
      { q: "I don't have an email list yet. Can you still help?", a: "Absolutely. We'll help you build a list from scratch using lead magnets, sign-up forms, and other list-building strategies." },
      { q: 'Which email platforms do you work with?', a: "We work with Mailchimp, Klaviyo, ActiveCampaign, and more. We'll recommend the best platform for your business size and goals." },
      { q: 'How often should I send emails?', a: 'For most businesses, once or twice a month is ideal for newsletters. Automated sequences run independently and are triggered by customer behaviour.' },
    ],
  },
];

async function main() {
  console.log(`Migrating ${services.length} services to project ${projectId} / dataset ${dataset}...`);

  for (const service of services) {
    const doc = {
      _type: 'service',
      _id: `service-${service.slug}`,
      name: service.name,
      slug: { _type: 'slug', current: service.slug },
      icon: service.icon,
      tagline: service.tagline,
      description: service.description,
      intro: service.intro,
      features: service.features,
      faqs: service.faqs,
    };

    try {
      await client.createOrReplace(doc);
      console.log(`  ✓ ${service.slug}`);
    } catch (err) {
      console.error(`  ✗ ${service.slug}:`, err.message);
    }
  }

  console.log('\nDone!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
