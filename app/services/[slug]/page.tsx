import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';

const services: Record<string, {
  name: string;
  icon: string;
  tagline: string;
  description: string;
  intro: string;
  features: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}> = {
  'brand-strategy': {
    name: 'Brand Strategy',
    icon: '🎯',
    tagline: 'Build a brand that people remember',
    description: 'Professional brand strategy services in Hounslow. We define your brand identity, voice, and positioning to help your business stand out and connect with your ideal customers.',
    intro: 'A strong brand is the foundation of every successful business. Without clear positioning and a consistent identity, even the best products and services struggle to gain traction. Our brand strategy service gives you the clarity, direction, and tools to build a brand that stands out — and sticks in the minds of your customers.',
    features: [
      { title: 'Brand Identity & Visual Direction', description: 'We define your brand\'s visual language — colours, typography, logo direction, and design style — creating a consistent look that resonates with your audience.' },
      { title: 'Brand Voice & Messaging', description: 'We craft your tone of voice, key messages, and brand story so every piece of communication feels cohesive and compelling.' },
      { title: 'Competitor & Market Analysis', description: 'We research your competitors and market landscape to identify gaps and opportunities, positioning your brand where it can win.' },
      { title: 'Brand Guidelines', description: 'We produce a clear brand guidelines document so every team member, supplier, and partner uses your brand correctly and consistently.' },
      { title: 'Target Audience Definition', description: 'We build detailed audience personas so your brand speaks directly to the people most likely to become loyal customers.' },
      { title: 'Positioning Strategy', description: 'We define exactly where your brand sits in the market and what makes it uniquely valuable — giving you a clear competitive edge.' },
    ],
    faqs: [
      { q: 'Do I need a brand strategy if I already have a logo?', a: 'A logo is just one part of your brand. A brand strategy defines your values, voice, positioning, and audience — the foundation that makes all your marketing more effective.' },
      { q: 'How long does a brand strategy project take?', a: 'Most brand strategy projects take 2–4 weeks depending on the scope. We work efficiently without cutting corners.' },
      { q: 'Can you work with my existing branding?', a: 'Absolutely. We can build a strategy around your existing visual identity, or recommend refinements if needed.' },
    ],
  },
  'digital-advertising': {
    name: 'Digital Advertising',
    icon: '📈',
    tagline: 'Targeted ads that deliver real ROI',
    description: 'Expert digital advertising management in Hounslow. Google Ads, Meta Ads, and LinkedIn campaigns optimised for conversions and maximum return on investment.',
    intro: 'Digital advertising puts your business in front of the right people at exactly the right moment. Whether you\'re looking to drive website traffic, generate leads, or increase sales, our team builds and manages campaigns that deliver measurable results — without wasting your budget.',
    features: [
      { title: 'Google Search Ads', description: 'Appear at the top of Google when customers actively search for your products or services. Pay only when someone clicks.' },
      { title: 'Meta Ads (Facebook & Instagram)', description: 'Reach your ideal audience on social media with visually compelling ads that drive engagement, leads, and sales.' },
      { title: 'LinkedIn Advertising', description: 'Target professionals, decision-makers, and B2B buyers with precision on the world\'s leading professional network.' },
      { title: 'Retargeting Campaigns', description: 'Re-engage website visitors who didn\'t convert first time. Retargeting dramatically improves conversion rates and reduces wasted ad spend.' },
      { title: 'Conversion Tracking & Analytics', description: 'We set up full conversion tracking so you can see exactly what your ads are delivering — leads, calls, purchases, and more.' },
      { title: 'Ongoing Optimisation', description: 'We continuously test, refine, and improve your campaigns to lower your cost per acquisition and increase your return on ad spend.' },
    ],
    faqs: [
      { q: 'How much do I need to spend on ads?', a: 'We recommend a minimum budget of £300–500/month for Google Ads to see meaningful results. We\'ll advise on the right budget for your goals.' },
      { q: 'How quickly will I see results from paid ads?', a: 'Unlike SEO, paid ads can drive traffic from day one. Most clients see results within the first 2–4 weeks.' },
      { q: 'Do you take a percentage of my ad spend?', a: 'No. We charge a flat monthly management fee. Your ad budget goes entirely to the platforms.' },
    ],
  },
  'content-marketing': {
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
      { q: 'Do you write the content yourselves?', a: 'Yes. Our in-house team researches, writes, and optimises all content. We\'ll always check facts specific to your business with you.' },
      { q: 'How many blog posts do I need per month?', a: 'We recommend a minimum of 2 posts per month. Consistency matters more than volume — a steady cadence outperforms sporadic publishing.' },
    ],
  },
  'social-media': {
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
      { title: 'Platform Management', description: 'We manage Facebook, Instagram, LinkedIn, TikTok, and more — adapting content to suit each platform\'s format and audience.' },
      { title: 'Monthly Analytics & Reporting', description: 'Clear monthly reports showing follower growth, engagement, reach, and how social media is contributing to your business goals.' },
    ],
    faqs: [
      { q: 'Which social media platforms do you manage?', a: 'We manage Facebook, Instagram, LinkedIn, TikTok, X (Twitter), and Google Business Profile. We\'ll recommend the right platforms for your audience.' },
      { q: 'How many posts per week will you create?', a: 'Our standard package includes 3–4 posts per week per platform. We can scale up or down based on your needs.' },
      { q: 'Will I need to approve content before it goes live?', a: 'Yes, if you\'d like to. We offer an approval workflow where you review content before it\'s published, or we can manage it autonomously.' },
    ],
  },
  'seo-sem': {
    name: 'SEO & SEM',
    icon: '🔍',
    tagline: 'Get found on Google — and stay there',
    description: 'Expert SEO and SEM services in Hounslow. Technical audits, keyword strategy, on-page optimisation, and link building to boost your search visibility and drive organic growth.',
    intro: 'Search engine optimisation is the most sustainable way to grow your online presence. When your website ranks highly on Google for the right keywords, you get a consistent stream of high-intent visitors — without paying for every click. Our SEO service covers everything from technical foundations to content and authority building.',
    features: [
      { title: 'Technical SEO Audit', description: 'We analyse your website\'s technical health — speed, structure, crawlability, and mobile performance — and fix issues that hold back your rankings.' },
      { title: 'Keyword Research & Strategy', description: 'We identify the exact search terms your customers use and build a strategy to rank for the keywords that drive the most valuable traffic.' },
      { title: 'On-Page Optimisation', description: 'We optimise your page titles, meta descriptions, headings, content, and internal linking to maximise your relevance for target keywords.' },
      { title: 'Local SEO', description: 'We optimise your Google Business Profile and local citations to ensure you appear in map searches and local results in your area.' },
      { title: 'Link Building', description: 'We build high-quality backlinks from relevant, authoritative websites — a key factor in improving your Google rankings.' },
      { title: 'Monthly Reporting', description: 'Transparent reporting on your keyword rankings, organic traffic, and the actions we\'ve taken — so you always know what\'s happening.' },
    ],
    faqs: [
      { q: 'How long does SEO take to work?', a: 'SEO is a long-term investment. Most clients start seeing meaningful improvements within 3–6 months, with significant results at 6–12 months.' },
      { q: 'Do you guarantee page one rankings?', a: 'No ethical SEO agency can guarantee specific rankings — Google\'s algorithm is constantly evolving. We do guarantee a rigorous, transparent process that delivers results.' },
      { q: 'What\'s the difference between SEO and SEM?', a: 'SEO is organic (unpaid) search visibility. SEM (Search Engine Marketing) includes paid search ads like Google Ads. Both are powerful — we recommend combining them.' },
    ],
  },
  'email-marketing': {
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
      { q: 'I don\'t have an email list yet. Can you still help?', a: 'Absolutely. We\'ll help you build a list from scratch using lead magnets, sign-up forms, and other list-building strategies.' },
      { q: 'Which email platforms do you work with?', a: 'We work with Mailchimp, Klaviyo, ActiveCampaign, and more. We\'ll recommend the best platform for your business size and goals.' },
      { q: 'How often should I send emails?', a: 'For most businesses, once or twice a month is ideal for newsletters. Automated sequences run independently and are triggered by customer behaviour.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: 'Not Found' };
  return {
    title: `${service.name} | Eurasia Marketing Hounslow`,
    description: service.description,
    openGraph: {
      title: `${service.name} | Eurasia Marketing Hounslow`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      <Hero
        tag={service.icon + ' ' + service.name}
        title={service.tagline.split(' ').slice(0, -2).join(' ')}
        highlight={service.tagline.split(' ').slice(-2).join(' ')}
        subtitle={service.intro.split('.')[0] + '.'}
        buttons={[
          { label: 'Get a Free Quote →', href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/pricing', variant: 'outline' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-lg text-muted dark:text-dark-muted leading-relaxed">{service.intro}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`What's Included in Our ${service.name} Service`}
            subtitle="Everything you need to succeed"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {service.features.map((f, i) => (
              <AnimateIn key={f.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 shadow-sm h-full">
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{f.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{f.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.name} service`}
          />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 shadow-sm">
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-12 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimateIn>
            <p className="text-sm text-muted dark:text-dark-muted mb-4">Explore our other services:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(services)
                .filter(([s]) => s !== slug)
                .map(([s, data]) => (
                  <Link
                    key={s}
                    href={`/services/${s}`}
                    className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors"
                  >
                    {data.icon} {data.name}
                  </Link>
                ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTA
        title={`Ready to get started with ${service.name}?`}
        subtitle="Get a free consultation and find out how we can help your business grow."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
