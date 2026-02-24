import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';

const areas: Record<string, {
  name: string;
  description: string;
  intro: string;
  nearby: string[];
}> = {
  hounslow: {
    name: 'Hounslow',
    description: 'Leading digital marketing agency in Hounslow offering website design, SEO, social media management, and digital advertising to local businesses.',
    intro: 'As Hounslow\'s trusted digital marketing agency, we help local businesses grow their online presence. From high street shops to professional services, we\'ve helped hundreds of Hounslow businesses reach more customers online.',
    nearby: ['Feltham', 'Isleworth', 'Heston', 'Brentford'],
  },
  feltham: {
    name: 'Feltham',
    description: 'Expert digital marketing services in Feltham. Website design, SEO, and social media management helping Feltham businesses grow online.',
    intro: 'We help Feltham businesses compete online with tailored digital marketing strategies. Whether you\'re a new start-up or an established business in Feltham, our team delivers results-driven marketing that grows your customer base.',
    nearby: ['Hounslow', 'Sunbury', 'Hampton', 'Heston'],
  },
  sunbury: {
    name: 'Sunbury',
    description: 'Digital marketing agency serving Sunbury-on-Thames. SEO, website design, and social media services for Sunbury businesses.',
    intro: 'Our digital marketing team works with businesses across Sunbury-on-Thames to build powerful online strategies. We understand the local market and create campaigns that connect you with customers in Sunbury and the surrounding areas.',
    nearby: ['Hampton', 'Feltham', 'Hounslow', 'Hayes'],
  },
  hampton: {
    name: 'Hampton',
    description: 'Professional digital marketing in Hampton. Helping Hampton businesses with SEO, website design, social media, and digital advertising.',
    intro: 'From Hampton Hill to Hampton Wick, we support businesses across the Hampton area with comprehensive digital marketing services. Our strategies are tailored to the local community and designed to drive real, measurable results.',
    nearby: ['Sunbury', 'Feltham', 'Hounslow', 'Isleworth'],
  },
  isleworth: {
    name: 'Isleworth',
    description: 'Digital marketing services in Isleworth. Website design, SEO, and social media management for Isleworth businesses.',
    intro: 'Eurasia Marketing supports Isleworth businesses with expert digital marketing strategies. We help local businesses stand out online, attract more customers, and grow their revenue through proven digital marketing techniques.',
    nearby: ['Hounslow', 'Brentford', 'Heston', 'Hampton'],
  },
  heston: {
    name: 'Heston',
    description: 'Digital marketing agency in Heston offering SEO, website design, social media management, and Google advertising for local businesses.',
    intro: 'We work with businesses throughout Heston to deliver impactful digital marketing campaigns. Our local expertise means we know the Heston market and can create strategies that resonate with your target customers.',
    nearby: ['Hounslow', 'Feltham', 'Isleworth', 'Hayes'],
  },
  brentford: {
    name: 'Brentford',
    description: 'Expert digital marketing in Brentford. SEO, website design, social media, and paid advertising for Brentford businesses.',
    intro: 'Brentford is a fast-growing business hub and we help local businesses keep pace online. From SEO to social media management, our team creates digital marketing strategies that put Brentford businesses in front of more customers.',
    nearby: ['Isleworth', 'Hounslow', 'Heston', 'Hayes'],
  },
  hayes: {
    name: 'Hayes',
    description: 'Digital marketing services in Hayes, Middlesex. Website design, SEO, social media management, and digital advertising for Hayes businesses.',
    intro: 'Our digital marketing team helps Hayes businesses build a strong online presence. Whether you need a new website, better Google rankings, or a stronger social media presence, we provide the full range of digital marketing services tailored to the Hayes market.',
    nearby: ['Heston', 'Feltham', 'Brentford', 'Hounslow'],
  },
  staines: {
    name: 'Staines',
    description: 'Digital marketing agency in Staines-upon-Thames. Expert website design, SEO, social media management, and digital advertising for Staines businesses.',
    intro: 'We help Staines-upon-Thames businesses grow their online presence with tailored digital marketing strategies. From the town centre to the surrounding business parks, our team delivers results-driven campaigns that connect you with more local customers.',
    nearby: ['Hounslow', 'Feltham', 'Sunbury', 'Hampton'],
  },
};

const services = [
  { icon: '🔍', title: 'SEO & Google Rankings', description: 'Get found on Google when local customers search for your services. We optimise your website to rank higher in local search results.' },
  { icon: '🌐', title: 'Website Design', description: 'Professional, fast, mobile-friendly websites that convert visitors into customers. Designed to represent your brand beautifully.' },
  { icon: '📱', title: 'Social Media Management', description: 'Engaging content, consistent posting, and community management across Facebook, Instagram, and LinkedIn.' },
  { icon: '📣', title: 'Digital Advertising', description: 'Targeted Google and social media ads that reach the right customers at the right time, maximising your return on investment.' },
  { icon: '✍️', title: 'Content Marketing', description: 'Blog posts, landing pages, and content that builds authority, drives traffic, and nurtures potential customers.' },
  { icon: '📍', title: 'Google Business Profile', description: 'Optimise your Google Business listing to appear in local map searches and attract nearby customers.' },
];

export async function generateStaticParams() {
  return Object.keys(areas).map((area) => ({ area }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const data = areas[area];
  if (!data) return { title: 'Not Found' };
  return {
    title: `Digital Marketing Agency in ${data.name} | Eurasia Marketing`,
    description: data.description,
    openGraph: {
      title: `Digital Marketing Agency in ${data.name} | Eurasia Marketing`,
      description: data.description,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = areas[area];
  if (!data) notFound();

  return (
    <>
      <Hero
        title={`Digital Marketing in`}
        highlight={data.name}
        subtitle={`Helping ${data.name} businesses grow online with expert SEO, website design, social media management, and digital advertising.`}
        buttons={[
          { label: 'Get a Free Consultation →', href: '/contact', variant: 'primary' },
          { label: 'Our Services', href: '/services', variant: 'outline' },
        ]}
      />

      {/* Intro */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-lg text-muted dark:text-dark-muted leading-relaxed">{data.intro}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`Our Services in ${data.name}`}
            subtitle={`Everything your ${data.name} business needs to grow online`}
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {services.map((s, i) => (
              <Card key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`Why ${data.name} Businesses Choose Eurasia Marketing`}
            subtitle="Local expertise, proven results"
          />
          <div className="grid md:grid-cols-3 gap-[10px]">
            {[
              { icon: '📍', title: 'Local Knowledge', description: `We understand the ${data.name} market and create strategies that resonate with your local audience.` },
              { icon: '📊', title: 'Proven Results', description: 'Our clients see real growth — more website traffic, higher rankings, and more enquiries.' },
              { icon: '🤝', title: 'Dedicated Support', description: 'A dedicated account manager who knows your business and is always on hand to help.' },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 shadow-sm text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimateIn>
            <p className="text-sm text-muted dark:text-dark-muted mb-4">We also serve nearby areas:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearby.map((a) => (
                <Link
                  key={a}
                  href={`/areas/${a.toLowerCase()}`}
                  className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors"
                >
                  {a}
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTA
        title={`Ready to grow your business in ${data.name}?`}
        subtitle="Get a free consultation and find out how we can help you reach more customers online."
        buttonText="Get Started Today"
        buttonHref="/contact"
      />
    </>
  );
}
