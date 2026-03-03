import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';
import { client, serviceBySlugQuery, allServiceSlugsQuery, allServicesQuery } from '@/lib/sanity';

export const revalidate = 60;

type ServiceData = {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  intro: string;
  features: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

type ServiceListItem = { name: string; slug: string; icon: string };

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(allServiceSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await client.fetch<ServiceData | null>(serviceBySlugQuery, { slug });
  if (!service) return { title: 'Not Found' };
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} | Eurasia Marketing`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [service, allServices] = await Promise.all([
    client.fetch<ServiceData | null>(serviceBySlugQuery, { slug }),
    client.fetch<ServiceListItem[]>(allServicesQuery),
  ]);

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
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-base sm:text-lg text-muted dark:text-dark-muted leading-relaxed">{service.intro}</p>
          </AnimateIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title={`What's Included in Our ${service.name} Service`}
            subtitle="Everything you need to succeed"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[10px]">
            {service.features.map((f, i) => (
              <AnimateIn key={f.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 shadow-sm h-full">
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{f.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{f.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.name} service`}
          />
          <div className="space-y-3 sm:space-y-4">
            {service.faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 shadow-sm">
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-10 md:py-12 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimateIn>
            <p className="text-sm text-muted dark:text-dark-muted mb-4">Explore our other services:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {allServices
                .filter((s) => s.slug !== slug)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors"
                  >
                    {s.icon} {s.name}
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
