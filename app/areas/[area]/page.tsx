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
  { icon: '🔍', title: 'SEO & Google Rankings', description: 'Get found on Google when local customers search for your services. We optimise your website to rank higher in local search results.' },
  { icon: '🌐', title: 'Website Design', description: 'Professional, fast, mobile-friendly websites that convert visitors into customers. Designed to represent your brand beautifully.' },
  { icon: '📱', title: 'Social Media Management', description: 'Engaging content, consistent posting, and community management across Facebook, Instagram, and LinkedIn.' },
  { icon: '📣', title: 'Digital Advertising', description: 'Targeted Google and social media ads that reach the right customers at the right time, maximising your return on investment.' },
  { icon: '✍️', title: 'Content Marketing', description: 'Blog posts, landing pages, and content that builds authority, drives traffic, and nurtures potential customers.' },
  { icon: '📍', title: 'Google Business Profile', description: 'Optimise your Google Business listing to appear in local map searches and attract nearby customers.' },
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
    title: `Digital Marketing Agency in ${data.name}`,
    description: data.description,
    alternates: { canonical: `/areas/${area}` },
    openGraph: {
      title: `Digital Marketing Agency in ${data.name} | Eurasia Marketing`,
      description: data.description,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = await client.fetch<AreaData | null>(areaBySlugQuery, { slug: area });
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
