import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';
import { client, areaBySlugQuery, allAreaSlugsQuery } from '@/lib/sanity';

export const revalidate = 60;

type AreaData = {
  name: string;
  slug: string;
  description: string;
  intro: string;
  nearby: string[];
};

const services = [
  { icon: '🔍', title: 'SEO & Google Rankings', description: 'Get found on Google when local customers search for your services. We optimise your website to rank higher in local search results and the Google Map Pack.' },
  { icon: '🌐', title: 'Website Design & Development', description: 'Professional, fast, mobile-friendly websites that convert visitors into customers. SEO-optimised from day one and built to represent your brand beautifully.' },
  { icon: '📱', title: 'Social Media Management', description: 'Engaging content, consistent posting, and community management across Facebook, Instagram, and LinkedIn — growing your following and driving enquiries.' },
  { icon: '📣', title: 'Google Ads & PPC', description: 'Targeted Google Ads and paid social campaigns that put your business in front of the right customers at the right time, maximising your return on ad spend.' },
  { icon: '✍️', title: 'Content Marketing', description: 'Blog posts, landing pages, and local content that builds authority, drives organic traffic, and nurtures potential customers through the buying journey.' },
  { icon: '📍', title: 'Google Business Profile', description: 'Optimise your Google Business listing to dominate local map searches, collect more reviews, and attract nearby customers actively searching for your services.' },
];

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allAreaSlugsQuery);
  return slugs.map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const data = await client.fetch<AreaData | null>(areaBySlugQuery, { slug: area });
  if (!data) return { title: 'Not Found' };
  return {
    title: `Digital Marketing Agency in ${data.name} | SEO, Web Design & Google Ads`,
    description: data.description,
    alternates: { canonical: `/areas/${area}` },
    openGraph: {
      title: `Digital Marketing Agency in ${data.name} | Eurasia Marketing`,
      description: data.description,
      url: `https://eurasiamarketing.com/areas/${area}`,
    },
    twitter: {
      title: `Digital Marketing Agency in ${data.name} | Eurasia Marketing`,
      description: data.description,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = await client.fetch<AreaData | null>(areaBySlugQuery, { slug: area });
  if (!data) notFound();

  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://eurasiamarketing.com/areas/${area}`,
    name: 'Eurasia Marketing',
    url: `https://eurasiamarketing.com/areas/${area}`,
    telephone: '+442038863311',
    email: 'info@eurasiamarketing.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '65-73 Staines Road',
      addressLocality: 'Hounslow',
      addressRegion: 'London',
      postalCode: 'TW3 3HW',
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'City', name: data.name },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Digital Marketing Services in ${data.name}`,
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `SEO Agency ${data.name}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Web Design ${data.name}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Social Media Management ${data.name}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Google Ads ${data.name}` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: `Digital Marketing Agency ${data.name}` } },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you offer digital marketing services in ${data.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: `Yes! Eurasia Marketing is based in ${data.name} and provides a full range of digital marketing services including SEO, website design, social media management, and Google Ads for local businesses.` },
      },
      {
        '@type': 'Question',
        name: `How much does SEO cost in ${data.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: 'Our SEO plans start from £300/month with no long-term contracts. We offer flexible monthly plans tailored to your budget and business goals.' },
      },
      {
        '@type': 'Question',
        name: `Can you build a website for my ${data.name} business?`,
        acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We design and build professional, mobile-friendly websites from £500. Every site is SEO-optimised, fast-loading, and built to convert visitors into paying customers.' },
      },
      {
        '@type': 'Question',
        name: `Do you manage Google Ads for businesses in ${data.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manage Google Ads (PPC) and Meta/Facebook ad campaigns for local businesses. We handle everything from strategy and setup to daily optimisation and reporting.' },
      },
      {
        '@type': 'Question',
        name: `How quickly can I rank on Google in ${data.name}?`,
        acceptedAnswer: { '@type': 'Answer', text: 'With Google Ads you can appear at the top of search results immediately. For organic SEO, most clients start seeing meaningful improvements within 3–6 months, with strong local rankings typically achieved within 6–12 months.' },
      },
    ],
  };

  const faqs = [
    { q: `Do you offer digital marketing services in ${data.name}?`, a: `Yes! Eurasia Marketing is based in ${data.name} and provides a full range of digital marketing services including SEO, website design, social media management, and Google Ads for local businesses.` },
    { q: `How much does SEO cost in ${data.name}?`, a: 'Our SEO plans start from £300/month with no long-term contracts. We offer flexible monthly plans tailored to your budget and business goals.' },
    { q: `Can you build a website for my ${data.name} business?`, a: 'Absolutely. We design and build professional, mobile-friendly websites from £500. Every site is SEO-optimised, fast-loading, and built to convert visitors into paying customers.' },
    { q: `Do you manage Google Ads for businesses in ${data.name}?`, a: 'Yes, we manage Google Ads (PPC) and Meta/Facebook ad campaigns for local businesses. We handle everything from strategy and setup to daily optimisation and reporting.' },
    { q: `How quickly can I rank on Google in ${data.name}?`, a: 'With Google Ads you can appear at the top of search results immediately. For organic SEO, most clients start seeing meaningful improvements within 3–6 months, with strong local rankings typically achieved within 6–12 months.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        title={`Digital Marketing Agency in`}
        highlight={data.name}
        subtitle={`Hounslow's #1 digital marketing agency — expert SEO, web design, social media & Google Ads for local businesses. No long-term contracts.`}
        buttons={[
          { label: 'Get a Free Consultation →', href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/pricing', variant: 'outline' },
        ]}
      />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-base sm:text-lg text-muted dark:text-dark-muted leading-relaxed">{data.intro}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`Our Digital Marketing Services in ${data.name}`}
            subtitle={`SEO, web design, social media management & Google Ads — everything your ${data.name} business needs to grow online`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[10px]">
            {services.map((s, i) => (
              <Card key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`Why ${data.name} Businesses Choose Eurasia Marketing`}
            subtitle="Local expertise, proven results, no long-term contracts"
          />
          <div className="grid sm:grid-cols-3 gap-3 md:gap-[10px]">
            {[
              { icon: '📍', title: 'Based in Hounslow', description: `We're a local ${data.name} marketing agency. We understand your market and create strategies that resonate with your local audience.` },
              { icon: '📊', title: '150+ Businesses Grown', description: 'Our clients see real growth — more website traffic, higher Google rankings, and more enquiries from local customers.' },
              { icon: '🤝', title: 'No Long-Term Contracts', description: 'Rolling monthly plans with no lock-in. A dedicated account manager who knows your business and is always on hand to help.' },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 shadow-sm text-center">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-accent-blue mb-2 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`Digital Marketing FAQs for ${data.name} Businesses`}
            subtitle="Common questions from local businesses we work with"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 border border-border-light dark:border-border-dark">
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-primary dark:text-dark-text mb-2">We also serve nearby areas</p>
            <p className="text-sm text-muted dark:text-dark-muted mb-4">Our digital marketing services cover the whole of West London</p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearby.map((a) => (
                <Link
                  key={a}
                  href={`/areas/${a.toLowerCase()}`}
                  className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors"
                >
                  Digital Marketing in {a}
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTA
        title={`Ready to grow your ${data.name} business online?`}
        subtitle="Get a free consultation and find out how we can help you rank higher on Google and reach more local customers."
        buttonText="Get a Free Consultation"
        buttonHref="/contact"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
