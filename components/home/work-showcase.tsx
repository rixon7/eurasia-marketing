import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { TiltCard } from '@/components/ui/tilt-card';

/**
 * Restyled from the "Our Work" section in app/page.tsx. Skin Health
 * Practice is a real, verifiable client (skinhealthpractice.com) and is
 * kept as the featured project, unmarked. The other four — Urban Cart,
 * Apex Build, Luxe Salon, GreenSpace Landscapes — could not be verified as
 * real during the rebuild audit and are rendered with the `.placeholder-
 * flag` marker (app/globals.css) per user decision, so the page can never
 * present them as genuine client work by accident. Replace with real
 * projects (or drop) as they become available.
 */
const PROJECTS = [
  {
    title: 'Urban Cart',
    industry: '🛍️ E-commerce & Retail',
    location: '📍 London',
    tags: ['E-commerce', 'Product Catalogue', 'Payments'],
    description: 'A fully custom online store with product filtering, secure checkout, stock management, and a sleek mobile-first design built to maximise conversions.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Apex Build',
    industry: '🏗️ Construction & Renovation',
    location: '📍 West London',
    tags: ['Website Building', 'Local SEO', 'Lead Generation'],
    description: 'A bold, trust-building website for a residential and commercial construction firm — showcasing projects, services, and driving inbound enquiries through targeted local SEO.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Luxe Salon',
    industry: '💇 Hair & Beauty',
    location: '📍 Hounslow, London',
    tags: ['Website Building', 'Booking System', 'Social Media'],
    description: 'A premium salon website with online booking, a treatments menu, stylist profiles, and a gallery — paired with a social media strategy that grew their Instagram following by 3×.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'GreenSpace Landscapes',
    industry: '🌿 Garden & Landscaping',
    location: '📍 Surrey & West London',
    tags: ['Website Building', 'SEO', 'Google Ads'],
    description: 'A visually stunning website for a landscaping business featuring a project portfolio, service pages, and a Google Ads campaign that doubled their enquiries within 60 days.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop',
  },
];

export function WorkShowcase() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="// Portfolio" title="Our Work" description="Real websites built for real businesses" />

        {/* Featured project — real, verified client */}
        <Reveal className="mt-10">
          <div className="grid items-center gap-8 md:gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[20px] border border-border">
              <div className="flex items-center gap-3 bg-[#1e1e1e] px-4 py-3">
                <div className="flex flex-shrink-0 gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 truncate rounded-md bg-white/10 px-3 py-1 font-mono text-xs text-white/50">
                  skinhealthpractice.com
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <Image
                  src="https://image.thum.io/get/width/1200/crop/750/https://skinhealth-wine.vercel.app/"
                  alt="Skin Health Practice website"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 640px"
                />
              </div>
            </div>

            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                {['Website Building', 'Local SEO', 'Booking Integration'].map((tag) => (
                  <span key={tag} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">Skin Health Practice</h3>
              <p className="mb-5 text-sm leading-relaxed text-foreground-soft sm:text-base">
                A modern, conversion-focused website for Hounslow&apos;s leading cosmetic and aesthetic clinic. We built a fast, mobile-optimised site complete with an online booking system, full treatments catalogue, and local SEO to attract nearby customers.
              </p>
              <div className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-foreground-faint">
                <span>📍 Hounslow, London</span>
                <span className="hidden text-border-strong sm:inline">|</span>
                <span>🏥 Cosmetic &amp; Aesthetic Clinic</span>
              </div>
              <a
                href="https://www.skinhealthpractice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
              >
                Visit Live Site
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Unverified projects — visibly flagged, not presented as genuine */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08} className="placeholder-flag">
              <TiltCard className="flex h-full flex-col">
                <div className="relative aspect-[16/9] flex-shrink-0 overflow-hidden rounded-t-[20px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{project.title}</h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground-faint">{project.description}</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-foreground-faint">
                    <span>{project.location}</span>
                    <span className="text-border-strong">|</span>
                    <span>{project.industry}</span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
