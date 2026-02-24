import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import ProcessStep from '@/components/ProcessStep';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Digital Marketing Services in Hounslow | Website Design, SEO & Social Media',
  description: 'Expert website designer, SEO specialist, and social media manager in Hounslow. Full-service digital marketing including web design, search engine optimisation, content marketing, and paid advertising.',
};

const services = [
  { id: 'brand-strategy', icon: '🎯', title: 'Brand Strategy', description: 'We craft a clear brand identity, voice, and positioning that sets you apart from the competition and resonates with your target audience.' },
  { id: 'digital-advertising', icon: '📈', title: 'Digital Advertising', description: 'Targeted campaigns across Google, Meta, LinkedIn, and display networks optimized for conversions and maximum return on ad spend.' },
  { id: 'content-marketing', icon: '✍️', title: 'Content Marketing', description: 'Blog posts, whitepapers, case studies, and video content that build authority, drive organic traffic, and nurture leads.' },
  { id: 'social-media', icon: '📱', title: 'Social Media Management', description: 'Strategic planning, content creation, community management, and analytics across all major social platforms.' },
  { id: 'seo-sem', icon: '🔍', title: 'SEO & SEM', description: 'Technical audits, keyword strategy, on-page optimization, and link building to boost your search visibility and rankings.' },
  { id: 'email-marketing', icon: '📨', title: 'Email Marketing', description: 'Automated drip campaigns, newsletters, and segmented outreach that keep your audience engaged and drive repeat business.' },
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
        title="Our"
        highlight="Services"
        subtitle="Full-service digital marketing in Hounslow — website design, SEO, social media management, and more."
      />

      <section className="py-16 px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title="End-to-End Marketing"
            subtitle="Tailored solutions for every stage of your growth"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
            {services.map((s, i) => (
              <div key={s.title} id={s.id}>
                <Card {...s} delay={i * 0.1} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            title="Our Process"
            subtitle="A proven approach to delivering results"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
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
