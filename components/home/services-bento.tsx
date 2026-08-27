import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { TiltCard } from '@/components/ui/tilt-card';
import { Reveal } from '@/components/ui/reveal';
import { SERVICE_ILLUSTRATIONS } from '@/components/home/service-illustrations';

/**
 * Merges two previously-separate sections that both listed the same six
 * services with different copy and art (the old components/WhatWeDoBest.tsx
 * and the Card grid in app/page.tsx) into one — per user decision. Keeps
 * WhatWeDoBest's illustrations (retinted, see service-illustrations.tsx)
 * and its better-written descriptions.
 *
 * Also fixes stale content: the live Sanity `homepageSettings.
 * featuredServices` document lists two services deleted since
 * (`brand-strategy`, `content-marketing` — both 301-redirect to
 * `/services/social-media`, see next.config.ts), so this section is
 * deliberately hardcoded to the real six rather than reading that field —
 * matching service-illustrations.tsx's keys exactly. The Sanity document
 * itself has also been corrected (scripts/migrate-homepage.mjs) as the
 * canonical record for any other future consumer.
 *
 * The old "Why Choose Us" section (4 generic points — Creative Approach /
 * Data-Driven / Dedicated Support / Fast Turnaround) is folded in here as
 * a compact strip per user decision, rather than kept as its own section.
 */
const SERVICES = [
  {
    slug: 'website-building',
    title: 'Website Building',
    description: 'We build fast, secure, and scalable websites that handle your growth while delivering the seamless experience today’s clients demand.',
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    description: 'Save hours every week with intelligent workflows that automate lead follow-ups, content generation, reporting, and repetitive business tasks.',
  },
  {
    slug: 'digital-advertising',
    title: 'Digital Advertising',
    description: 'Targeted ad campaigns across Google, Meta, LinkedIn, and display networks — built for maximum ROI and measurable business growth.',
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    description: 'Strategic content creation, community management, and analytics across every platform — building loyal audiences that drive real results.',
  },
  {
    slug: 'seo-sem',
    title: 'SEO & SEM',
    description: 'Dominate your market’s search results with data-driven SEO strategies that consistently deliver page-one rankings for terms your ideal clients are searching for.',
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    description: 'Automated campaigns, personalised newsletters, and targeted sequences that keep your audience engaged and drive consistent repeat revenue.',
  },
];

const WHY_US = [
  { icon: '💡', title: 'Creative Approach', description: 'Fresh ideas and innovative campaigns that capture attention.' },
  { icon: '📊', title: 'Data-Driven', description: 'Every decision backed by analytics for measurable outcomes.' },
  { icon: '🤝', title: 'Dedicated Support', description: 'A committed team that treats your business like their own.' },
  { icon: '⚡', title: 'Fast Turnaround', description: 'Quick execution without compromising on quality or strategy.' },
];

export function ServicesBento() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-sunken py-20">
      <div className="bg-grid fade-grid-bottom absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          eyebrow="// Our Services"
          title="Digital Marketing Services in Hounslow"
          description="From website design to SEO and social media — tailored solutions for your business, measured against the same results."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <TiltCard className="flex h-full flex-col">
                  <div className="flex h-40 items-center justify-center rounded-t-[20px] bg-surface-glass p-4 text-foreground/75 sm:h-48">
                    {SERVICE_ILLUSTRATIONS[service.slug]}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-foreground-faint">{service.description}</p>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* "Why Choose Us" — folded into a compact strip rather than its own section */}
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-10">
          {WHY_US.map((item) => (
            <div key={item.title} className="flex max-w-[240px] items-start gap-3">
              <span className="text-xl" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.04em] text-foreground">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground-faint">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
