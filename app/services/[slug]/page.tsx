import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';
import { client, serviceBySlugQuery, allServiceSlugsQuery, allServicesQuery } from '@/lib/sanity';

export const revalidate = 60;

const serviceImages: Record<string, string> = {
  'website-building':   'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=85&auto=format&fit=crop',
  'ai-automation':      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=85&auto=format&fit=crop',
  'digital-advertising':'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1600&q=85&auto=format&fit=crop',
  'social-media':       'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&q=85&auto=format&fit=crop',
  'seo-sem':            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop',
  'email-marketing':    'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1600&q=85&auto=format&fit=crop',
};

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
    title: `${service.name} Services in Hounslow`,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.name} | Eurasia Marketing`,
      description: service.description,
      url: `https://eurasiamarketing.com/services/${slug}`,
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

  let heroTitle = service.tagline.split(' ').slice(0, -2).join(' ');
  let heroHighlight = service.tagline.split(' ').slice(-2).join(' ');
  if (slug === 'social-media') {
    heroTitle = 'Be the Business Everyone';
    heroHighlight = 'Recognises';
  }

  return (
    <>
      <Hero
        tag={service.icon + ' ' + service.name}
        title={heroTitle}
        highlight={heroHighlight}
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

      {/* Hero Image */}
      {serviceImages[slug] && (
        <section className="px-4 sm:px-6 pb-10 md:pb-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="rounded-[var(--radius-xl)] overflow-hidden aspect-[21/9] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImages[slug]}
                alt={service.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// What's Included"
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

      {/* Website Building Process — shown only on the website-building page */}
      {slug === 'website-building' && (
        <section className="py-10 md:py-16 px-4 sm:px-6">
          <div className="max-w-[1280px] mx-auto">
            <SectionHeader
              tag="// Our Process"
              title="How We Build Your Website"
              subtitle="A clear, structured process from first call to launch — and beyond"
            />
            <div className="relative">
              {/* Vertical connector line (desktop) */}
              <div className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-border-light dark:bg-border-dark" />

              <div className="flex flex-col gap-4 md:gap-6">
                {[
                  {
                    number: '01',
                    title: 'Discovery & Strategy',
                    description: 'We start by learning your business inside-out — your goals, target audience, competitors, and what makes you different. From this we define the site structure, key messaging, and a clear brief so everyone is aligned before a single pixel is designed.',
                    icon: '🔍',
                  },
                  {
                    number: '02',
                    title: 'Design & Prototyping',
                    description: 'Our designers create high-fidelity mockups tailored to your brand — no templates, no shortcuts. You review and approve the design before any development begins, so you know exactly what you\'re getting.',
                    icon: '🎨',
                  },
                  {
                    number: '03',
                    title: 'Development & Build',
                    description: 'We turn the approved designs into a fast, responsive website built for both users and search engines. Every page is coded to load quickly, work flawlessly on mobile, and be structured for strong SEO from day one.',
                    icon: '⚙️',
                  },
                  {
                    number: '04',
                    title: 'Quality Assurance & Testing',
                    description: 'Before anything goes live we run thorough checks — cross-device testing, page speed optimisation, form testing, broken link checks, and a full review against the original brief. Nothing launches until it\'s right.',
                    icon: '✅',
                  },
                  {
                    number: '05',
                    title: 'Launch & Handover',
                    description: 'We manage the full launch — domain setup, SSL, hosting, and going live. We then walk you through the site so you\'re confident managing it yourself, and provide a 30-day support window for any post-launch tweaks.',
                    icon: '🚀',
                  },
                ].map((step, i) => (
                  <AnimateIn key={step.number} delay={i * 0.1}>
                    <div className="relative flex gap-5 sm:gap-8 bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-7 shadow-sm">
                      {/* Number bubble */}
                      <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 flex flex-col items-center justify-center z-10">
                        <span className="text-[10px] font-bold text-accent-blue tracking-wider">{step.number}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{step.icon}</span>
                          <h3 className="font-bold text-primary dark:text-dark-text text-base sm:text-lg">{step.title}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted dark:text-dark-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* AI Automation Process — shown only on the ai-automation page */}
      {slug === 'ai-automation' && (
        <section className="py-10 md:py-16 px-4 sm:px-6">
          <div className="max-w-[1280px] mx-auto">
            <SectionHeader
              tag="// Our Process"
              title="How We Build Your AI Workflows"
              subtitle="From discovery to deployment — a structured process that saves you hours every week"
            />
            <div className="relative">
              <div className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-border-light dark:bg-border-dark" />
              <div className="flex flex-col gap-4 md:gap-6">
                {[
                  {
                    number: '01',
                    title: 'Workflow Discovery',
                    description: 'We audit your current operations to identify where time is being wasted on repetitive tasks — lead follow-ups, data entry, reporting, scheduling, and more. We map out exactly which processes are ripe for automation and calculate the potential time savings.',
                    icon: '🔍',
                  },
                  {
                    number: '02',
                    title: 'Strategy & Solution Design',
                    description: 'We design a custom automation blueprint tailored to your business. This includes selecting the right AI tools, defining triggers and actions, mapping data flows between your existing software (CRM, email, calendar, etc.), and setting measurable goals.',
                    icon: '📐',
                  },
                  {
                    number: '03',
                    title: 'Build & Integration',
                    description: 'Our team builds and connects your AI workflows — from chatbots and lead follow-up sequences to automated reporting and content generation. We integrate everything seamlessly with the tools you already use so there\'s no disruption to your team.',
                    icon: '⚙️',
                  },
                  {
                    number: '04',
                    title: 'Testing & Refinement',
                    description: 'Before going live we run every workflow end-to-end, testing edge cases and failure points. We refine the logic based on real data, ensure handoffs between systems are clean, and confirm the outputs meet your quality standards.',
                    icon: '✅',
                  },
                  {
                    number: '05',
                    title: 'Launch & Training',
                    description: 'We deploy your automations and walk your team through how everything works — so you stay in control. You\'ll receive clear documentation for every workflow built.',
                    icon: '🚀',
                  },
                  {
                    number: '06',
                    title: 'Ongoing Optimisation',
                    description: 'AI automation isn\'t set-and-forget. We monitor performance monthly, identify new automation opportunities as your business grows, and continuously refine your workflows to keep them efficient and effective.',
                    icon: '📈',
                  },
                ].map((step, i) => (
                  <AnimateIn key={step.number} delay={i * 0.1}>
                    <div className="relative flex gap-5 sm:gap-8 bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-7 shadow-sm">
                      <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 flex flex-col items-center justify-center z-10">
                        <span className="text-[10px] font-bold text-accent-blue tracking-wider">{step.number}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xl">{step.icon}</span>
                          <h3 className="font-bold text-primary dark:text-dark-text text-base sm:text-lg">{step.title}</h3>
                        </div>
                        <p className="text-sm sm:text-base text-muted dark:text-dark-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            tag="// FAQs"
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
