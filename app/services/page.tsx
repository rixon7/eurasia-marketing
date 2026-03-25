import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import ProcessStep from '@/components/ProcessStep';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Digital Marketing Services Hounslow',
  description: 'Full-service digital marketing in Hounslow — web design, SEO, social media & paid ads. Tailored strategies that drive real results for local businesses.',
  keywords: ['digital marketing services Hounslow', 'web design Hounslow', 'SEO services Hounslow', 'social media management Hounslow', 'Google Ads Hounslow', 'email marketing Hounslow', 'AI automation Hounslow'],
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Digital Marketing Services in Hounslow | Eurasia Marketing',
    description: 'Full-service digital marketing in Hounslow — web design, SEO, social media & paid ads. Tailored strategies that drive real results for local businesses.',
    url: 'https://eurasiamarketing.com/services',
  },
};

const services = [
  { id: 'website-building',    href: '/services/website-building',   icon: '🌐', title: 'Website Building',          description: 'Modern, responsive websites built to convert visitors into customers — fast, SEO-optimised, and beautifully designed to represent your brand.',          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop' },
  { id: 'ai-automation',       href: '/services/ai-automation',       icon: '🤖', title: 'AI Automation & Workflows', description: 'Custom AI workflows that automate lead follow-ups, content generation, reporting, and repetitive tasks — saving you hours every week.',                 image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop' },
  { id: 'digital-advertising', href: '/services/digital-advertising', icon: '📈', title: 'Digital Advertising',       description: 'Targeted campaigns across Google, Meta, LinkedIn, and display networks optimised for conversions and maximum return on ad spend.',                    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80&auto=format&fit=crop' },
  { id: 'social-media',        href: '/services/social-media',        icon: '📱', title: 'Social Media Management',   description: 'Strategic planning, content creation, community management, and analytics across all major social platforms.',                                        image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop' },
  { id: 'seo-sem',             href: '/services/seo-sem',             icon: '🔍', title: 'SEO & SEM',                 description: 'Technical audits, keyword strategy, on-page optimisation, and link building to boost your search visibility and rankings.',                         image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop' },
  { id: 'email-marketing',     href: '/services/email-marketing',     icon: '📨', title: 'Email Marketing',           description: 'Automated drip campaigns, newsletters, and segmented outreach that keep your audience engaged and drive repeat business.',                            image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80&auto=format&fit=crop' },
];

const process = [
  { number: '01', title: 'Discovery', description: 'We learn your business, audience, and goals through in-depth research and stakeholder interviews.' },
  { number: '02', title: 'Strategy', description: 'We build a custom marketing roadmap with clear KPIs, timelines, and channel recommendations.' },
  { number: '03', title: 'Execution', description: 'Our team launches and manages campaigns, creating assets and optimizing performance in real time.' },
  { number: '04', title: 'Reporting', description: 'Transparent monthly reports with actionable insights so you always know what\'s working and what\'s next.' },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Digital Marketing"
        highlight="Services in Hounslow"
        subtitle="Website design, SEO, social media management, paid advertising and more — tailored for local businesses."
      />

      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// What We Offer"
            title="End-to-End Marketing"
            subtitle="Tailored solutions for every stage of your growth"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[10px]">
            {services.map((s, i) => (
              <div key={s.title} id={s.id}>
                <Card {...s} delay={i * 0.1} href={s.href} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// How We Work"
            title="Our Process"
            subtitle="A proven approach to delivering results"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[10px]">
            {process.map((p, i) => (
              <ProcessStep key={p.number} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to get started?"
        subtitle="Let's build a marketing strategy that drives real results for your business."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
