import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Areas We Serve | Eurasia Marketing Hounslow',
  description: 'Eurasia Marketing provides digital marketing services across Hounslow, Feltham, Sunbury, Hampton, Isleworth, Heston, Brentford, and Hayes.',
};

const areas = [
  { slug: 'hounslow',  name: 'Hounslow',  description: 'Our home base — helping Hounslow businesses dominate local search and grow online.' },
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
        subtitle="Based in Hounslow, we provide expert digital marketing services across West London and the surrounding areas."
      />

      <section className="py-24 px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
            {areas.map((area, i) => (
              <AnimateIn key={area.slug} delay={i * 0.07}>
                <Link href={`/areas/${area.slug}`} className="group block h-full">
                  <div className="gradient-border bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md transition-all h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-lg font-bold text-primary dark:text-dark-text group-hover:text-accent-blue transition-colors">
                        {area.name}
                      </h2>
                      <span className="text-accent-blue text-lg">→</span>
                    </div>
                    <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{area.description}</p>
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
