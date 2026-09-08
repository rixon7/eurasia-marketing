import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { TiltCard } from '@/components/ui/tilt-card';

/**
 * Restyled from the "Our Work" section in app/page.tsx. All four projects
 * below are real, verifiable clients — no invented companies, metrics, or
 * stock-photo stand-ins (the four fictional placeholder cards this section
 * used to carry, each with fabricated results, were removed 2026-09-08).
 *
 * - Skin Health Practice (skinhealthpractice.com) — the featured project.
 * - BlueGrid Financial Services (bluegridfs.com) — live on its own domain.
 * - MoveEasyMe (moveeasyme.vercel.app) — the rebuild is real and live, but
 *   the client's custom domain (moveeasyme.com) still points at their old
 *   WordPress site pending cutover, so this links to the Vercel URL until
 *   that happens. Update the URL here once the domain switch is done.
 * - PRIME Teleservices (primetele-site.vercel.app) — real and live, but
 *   still mid-build for the client (content/data-quality questions still
 *   open, not yet client-approved or launched on its real domain). Added
 *   at the user's explicit choice despite that; update the URL and
 *   description once it's finished and cut over to primeteleservices.com.
 */
const PROJECTS = [
  {
    title: 'BlueGrid Financial Services',
    industry: '💰 Financial Services',
    location: '📍 Mumbai, India',
    tags: ['Website Building', 'SEO', 'Schema Markup'],
    description: 'A ground-up Next.js rebuild for a Mumbai-based AMFI-registered Mutual Fund Distributor — replacing an ageing WordPress site with a fast, secure platform and technical SEO built in from day one.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://bluegridfs.com/',
    href: 'https://bluegridfs.com',
  },
  {
    title: 'MoveEasyMe',
    industry: '🚚 Movers & Freight',
    location: '📍 Dubai, UAE',
    tags: ['Website Building'],
    description: 'A full website rebuild for a Dubai-based movers, relocation, and freight company — covering warehousing, transportation, freight forwarding, and project logistics services.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://moveeasyme.vercel.app/',
    href: 'https://moveeasyme.vercel.app',
  },
  {
    title: 'PRIME Teleservices',
    industry: '📞 Managed Services & BPO',
    location: '📍 6 cities, India',
    tags: ['Website Building', 'Brand Identity'],
    description: 'A full Next.js rebuild for a managed-services and BPO provider spanning customer experience, back-office operations, and digital transformation — including a new brand system built directly from the client\'s own logo files.',
    image: 'https://image.thum.io/get/width/800/crop/600/https://primetele-site.vercel.app/',
    href: 'https://primetele-site.vercel.app',
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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <TiltCard className="flex h-full flex-col">
                <div className="relative aspect-[16/9] flex-shrink-0 overflow-hidden rounded-t-[20px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} website`}
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
                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-foreground-faint">
                    <span>{project.location}</span>
                    <span className="text-border-strong">|</span>
                    <span>{project.industry}</span>
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:brightness-110"
                  >
                    Visit Live Site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
