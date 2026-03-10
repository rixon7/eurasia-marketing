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
  {
    icon: '🔍',
    title: 'SEO & Google Rankings',
    description: 'Get found on Google when local customers search for your services. We optimise your website to rank higher in local search results and the Google Map Pack.',
    href: '/services/seo-sem',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'SEO agency Hounslow — analytics dashboard showing Google search rankings and traffic growth',
  },
  {
    icon: '🌐',
    title: 'Website Design & Development',
    description: 'Professional, fast, mobile-friendly websites that convert visitors into customers. SEO-optimised from day one and beautifully designed.',
    href: '/services/website-building',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Website design Hounslow — professional web design agency for local businesses',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description: 'Engaging content, consistent posting, and community management across Facebook, Instagram, and LinkedIn — growing your following and driving enquiries.',
    href: '/services/social-media',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Social media management Hounslow — managing Facebook and Instagram on laptop and mobile',
  },
  {
    icon: '📣',
    title: 'Google Ads & PPC',
    description: 'Targeted Google Ads and paid social campaigns that put your business in front of the right customers at the right time, maximising your return on ad spend.',
    href: '/services/digital-advertising',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Google Ads and PPC agency Hounslow — paid digital advertising for local businesses',
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    description: 'Blog posts, landing pages, and local content that builds authority, drives organic traffic, and nurtures potential customers through the buying journey.',
    href: '/services/email-marketing',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Content marketing Hounslow — blog posts and landing pages for local SEO',
  },
  {
    icon: '📍',
    title: 'Google Business Profile',
    description: 'Optimise your Google Business listing to dominate local map searches, collect more reviews, and attract nearby customers actively searching for you.',
    href: '/services/seo-sem',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Google Business Profile optimisation Hounslow — local SEO and Google Maps marketing',
  },
];

const stats = [
  { value: '150+', label: 'Local businesses grown' },
  { value: '3×', label: 'Average ROI on ad spend' },
  { value: '95%', label: 'Client retention rate' },
  { value: '£300', label: 'SEO plans from /month' },
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
    title: {
      absolute: `Digital Marketing Agency in ${data.name} | SEO, Web Design & Google Ads | Eurasia Marketing`,
    },
    description: data.description,
    keywords: [
      `digital marketing agency ${data.name}`,
      `SEO agency ${data.name}`,
      `web design ${data.name}`,
      `social media management ${data.name}`,
      `Google Ads ${data.name}`,
      `marketing agency ${data.name}`,
      `SEO services ${data.name}`,
      `website designer ${data.name}`,
      `PPC agency ${data.name}`,
      `local SEO ${data.name}`,
    ],
    alternates: { canonical: `/areas/${area}` },
    openGraph: {
      title: `Digital Marketing Agency in ${data.name} | SEO, Web Design & Google Ads`,
      description: data.description,
      url: `https://eurasiamarketing.com/areas/${area}`,
    },
    twitter: {
      title: `Digital Marketing Agency in ${data.name} | SEO, Web Design & Google Ads`,
      description: data.description,
    },
    other: {
      'geo.region': 'GB-ENG',
      'geo.placename': data.name,
      'geo.position': '51.4685;-0.3614',
      'ICBM': '51.4685, -0.3614',
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = await client.fetch<AreaData | null>(areaBySlugQuery, { slug: area });
  if (!data) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://eurasiamarketing.com' },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: 'https://eurasiamarketing.com/areas' },
      { '@type': 'ListItem', position: 3, name: `Digital Marketing in ${data.name}`, item: `https://eurasiamarketing.com/areas/${area}` },
    ],
  };

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
      { '@type': 'Question', name: `Do you offer digital marketing services in ${data.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Yes! Eurasia Marketing is based in ${data.name} and provides SEO, website design, social media management, and Google Ads for local businesses.` } },
      { '@type': 'Question', name: `How much does SEO cost in ${data.name}?`, acceptedAnswer: { '@type': 'Answer', text: 'Our SEO plans start from £300/month with no long-term contracts.' } },
      { '@type': 'Question', name: `Can you build a website for my ${data.name} business?`, acceptedAnswer: { '@type': 'Answer', text: 'Yes. We design professional, mobile-friendly websites from £500, SEO-optimised and built to convert.' } },
      { '@type': 'Question', name: `Do you manage Google Ads for businesses in ${data.name}?`, acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manage Google Ads and Meta/Facebook campaigns — strategy, setup, daily optimisation and reporting.' } },
      { '@type': 'Question', name: `How quickly can I rank on Google in ${data.name}?`, acceptedAnswer: { '@type': 'Answer', text: 'Google Ads gives immediate visibility. Organic SEO typically shows strong results within 3–6 months.' } },
    ],
  };

  const faqs = [
    { q: `Do you offer digital marketing services in ${data.name}?`, a: `Yes! Eurasia Marketing is based in ${data.name} and provides a full range of digital marketing services including SEO, website design, social media management, and Google Ads for local businesses.` },
    { q: `How much does SEO cost in ${data.name}?`, a: 'Our SEO plans start from £300/month with no long-term contracts. We offer flexible monthly plans tailored to your budget and business goals.' },
    { q: `Can you build a website for my ${data.name} business?`, a: 'Absolutely. We design and build professional, mobile-friendly websites from £500. Every site is SEO-optimised, fast-loading, and built to convert visitors into paying customers.' },
    { q: `Do you manage Google Ads for businesses in ${data.name}?`, a: 'Yes, we manage Google Ads (PPC) and Meta/Facebook ad campaigns. We handle everything from strategy and setup to daily optimisation and reporting.' },
    { q: `How quickly can I rank on Google in ${data.name}?`, a: 'With Google Ads you can appear at the top immediately. For organic SEO, most clients see strong improvements within 3–6 months.' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        title="Digital Marketing Agency in"
        highlight={data.name}
        subtitle={`Hounslow's #1 digital marketing agency — expert SEO, web design, social media & Google Ads for local businesses. No long-term contracts.`}
        displayFont
        buttons={[
          { label: '📅 Book a Free Call', href: 'https://calendly.com/rixon7/30min', variant: 'blue', external: true },
          { label: 'Get a Free Consultation →', href: '/contact', variant: 'outline' },
        ]}
      />

      {/* Stats bar */}
      <section className="py-8 px-4 sm:px-6 bg-primary dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs sm:text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <AnimateIn>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold mb-4">
                📍 Based in {data.name}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-dark-text mb-4 leading-tight">
                Your local digital marketing agency in {data.name}
              </h2>
              <p className="text-base text-muted dark:text-dark-muted leading-relaxed mb-6">{data.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://calendly.com/rixon7/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent-blue text-white rounded-[var(--radius-md)] text-sm font-semibold hover:bg-accent-blue/90 transition-all text-center"
                >
                  📅 Book a Free Call
                </a>
                <Link
                  href="/pricing"
                  className="px-6 py-3 border border-border-light dark:border-border-dark text-primary dark:text-dark-text rounded-[var(--radius-md)] text-sm font-semibold hover:border-accent-blue hover:text-accent-blue transition-all text-center"
                >
                  View Pricing →
                </Link>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📍', title: 'Based in Hounslow', desc: 'We know your local market inside out' },
                  { icon: '🏆', title: '150+ Clients', desc: 'Businesses grown across West London' },
                  { icon: '📋', title: 'No Contracts', desc: 'Rolling monthly plans, cancel anytime' },
                  { icon: '📞', title: 'Free Consultation', desc: 'Talk to us before committing to anything' },
                ].map((item) => (
                  <div key={item.title} className="bg-warm dark:bg-dark-card rounded-[var(--radius-lg)] p-4 sm:p-5 border border-border-light dark:border-border-dark">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-sm font-semibold text-primary dark:text-dark-text mb-1">{item.title}</p>
                    <p className="text-xs text-muted dark:text-dark-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Our Services"
            title={`Digital Marketing Services in ${data.name}`}
            subtitle={`Everything your ${data.name} business needs to grow online — all under one roof`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {services.map((s, i) => (
              <Card key={s.title} {...s} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Why Us"
            title={`Why ${data.name} Businesses Choose Eurasia Marketing`}
            subtitle="Local expertise, proven results, no long-term contracts"
          />
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                icon: '📍',
                title: 'Based in Hounslow',
                description: `We're a local ${data.name} marketing agency. We understand your market and create strategies that resonate with your local audience.`,
                bg: 'bg-accent-blue/10 dark:bg-accent-blue/15',
              },
              {
                icon: '📊',
                title: '150+ Businesses Grown',
                description: 'Our clients see real growth — more website traffic, higher Google rankings, and more enquiries from local customers.',
                bg: 'bg-green-50 dark:bg-green-900/10',
              },
              {
                icon: '🤝',
                title: 'No Long-Term Contracts',
                description: 'Rolling monthly plans with no lock-in. A dedicated account manager who knows your business and is always on hand to help.',
                bg: 'bg-orange-50 dark:bg-orange-900/10',
              },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-xl)] p-6 sm:p-8 shadow-sm border border-border-light dark:border-border-dark h-full">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-3xl mb-5`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-primary dark:text-dark-text mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// FAQs"
            title={`Common Questions from ${data.name} Businesses`}
            subtitle="Everything you need to know before getting started"
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 border border-border-light dark:border-border-dark hover:border-accent-blue/40 transition-colors">
                  <div className="flex gap-4 items-start">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-blue text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-primary dark:text-dark-text mb-2 text-sm sm:text-base">{faq.q}</h3>
                      <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-10 md:py-14 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimateIn>
            <p className="text-sm font-semibold text-primary dark:text-dark-text mb-1">We also serve nearby areas</p>
            <p className="text-sm text-muted dark:text-dark-muted mb-5">Our digital marketing services cover the whole of West London</p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearby.map((a) => (
                <Link
                  key={a}
                  href={`/areas/${a.toLowerCase()}`}
                  className="px-5 py-2.5 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-accent-blue hover:text-white hover:border-accent-blue dark:hover:bg-accent-blue transition-all"
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
        buttonText="📅 Book a Free Call"
        buttonHref="https://calendly.com/rixon7/30min"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
