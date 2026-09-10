import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Areas We Serve | Hounslow & Mumbai Website Design',
  description: 'Eurasia Marketing provides website design and digital marketing services across Hounslow, West London, and Mumbai, India.',
  alternates: { canonical: '/areas' },
};

// NOTE: 'mumbai' is listed here but its /areas/mumbai page (a Sanity `area`
// document, see scripts/add-mumbai-area.mjs) hasn't been created yet — the
// write token in .env.local lacks create permission. Don't deploy this
// change until that doc exists, or the Mumbai card links to a 404. See
// memory/project_eurasia_marketing_redesign or ask Claude for the fix.
const areas = [
  { slug: 'hounslow',  name: 'Hounslow',  description: 'Our home base — helping Hounslow businesses dominate local search and grow online.' },
  { slug: 'mumbai',    name: 'Mumbai',    description: 'Affordable website design and AI-powered digital marketing for growing Mumbai businesses.' },
  { slug: 'feltham',   name: 'Feltham',   description: 'SEO, website design, and social media services for Feltham businesses.' },
  { slug: 'sunbury',   name: 'Sunbury',   description: 'Digital marketing strategies tailored to Sunbury-on-Thames businesses.' },
  { slug: 'hampton',   name: 'Hampton',   description: 'Helping Hampton businesses attract more local customers online.' },
  { slug: 'isleworth', name: 'Isleworth', description: 'Full-service digital marketing for businesses in Isleworth.' },
  { slug: 'heston',    name: 'Heston',    description: 'SEO, social media, and paid advertising for Heston businesses.' },
  { slug: 'brentford', name: 'Brentford', description: 'Expert digital marketing for Brentford\'s growing business community.' },
  { slug: 'hayes',     name: 'Hayes',     description: 'Website design, SEO, and digital advertising in Hayes, Middlesex.' },
];

export default function AreasPage() {
  return (
    <>
      <Hero
        title="Areas We"
        highlight="Serve"
        subtitle="With teams in Hounslow, UK and Mumbai, India, we provide expert website design and digital marketing services across West London and Mumbai."
      />

      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[10px]">
            {areas.map((area, i) => (
              <AnimateIn key={area.slug} delay={i * 0.07}>
                <Link href={`/areas/${area.slug}`} className="group block h-full">
                  <div className="gradient-border bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-4 sm:p-6 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <h2 className="text-base sm:text-lg font-bold text-accent-blue group-hover:text-accent-blue/80 transition-colors">
                        {area.name}
                      </h2>
                      <span className="text-accent-blue text-lg">→</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted dark:text-dark-muted leading-relaxed">{area.description}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
