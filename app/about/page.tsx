import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import StatCard from '@/components/StatCard';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'About Eurasia Marketing Hounslow',
  description: 'Eurasia Marketing is Hounslow\'s trusted digital marketing agency. Website design, SEO, social media & paid ads — helping local businesses grow online.',
  keywords: ['about Eurasia Marketing', 'digital marketing agency Hounslow', 'Hounslow marketing team', 'local marketing experts Hounslow', 'marketing agency west London'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Eurasia Marketing | Digital Marketing Agency Hounslow',
    description: 'Eurasia Marketing is Hounslow\'s trusted digital marketing agency. Website design, SEO, social media & paid ads — helping local businesses grow online.',
    url: 'https://eurasiamarketing.com/about',
  },
};

const stats = [
  { number: '150', suffix: '+', label: 'Clients Served' },
  { number: '500', suffix: '+', label: 'Campaigns Launched' },
  { number: '3', suffix: 'x', label: 'Average ROI' },
  { number: '95', suffix: '%', label: 'Client Retention' },
];

const team = [
  {
    name: 'Rixon Lal',
    initials: 'RL',
    role: 'Founder & Director',
    bio: 'With over a decade of experience in digital marketing and IT services, Rixon founded Eurasia Marketing to help local businesses compete online. He leads strategy, client relationships, and business development.',
    linkedin: 'https://linkedin.com/company/eurasia-marketing',
  },
  {
    name: 'Eurasia Marketing Team',
    initials: 'EM',
    role: 'Digital Marketing Specialists',
    bio: 'Our team brings together expertise in SEO, paid advertising, social media, web design, and AI automation — delivering joined-up digital strategies for businesses across west London.',
    linkedin: 'https://linkedin.com/company/eurasia-marketing',
  },
];

const values = [
  { icon: '🎯', title: 'Results First', description: 'We measure everything. Every campaign is tracked, analysed, and optimised to maximise your return on investment.' },
  { icon: '🤝', title: 'Honest Partnerships', description: 'No long-term contracts, no hidden fees. We earn your business every month by delivering real value.' },
  { icon: '💡', title: 'Local Expertise', description: 'Based in Hounslow, we understand the west London market and tailor strategies to your specific audience and competitors.' },
  { icon: '🚀', title: 'Always Innovating', description: 'From AI automation to the latest ad formats — we stay ahead so you benefit from cutting-edge marketing techniques.' },
];


export default function AboutPage() {
  return (
    <>
      <Hero
        title="About"
        highlight="Eurasia"
        subtitle="A passionate team of marketers helping brands reach their full potential."
      />

      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <AnimateIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-blue mb-4 sm:mb-6">
                Built on a belief that every business deserves great marketing
              </h2>
              <p className="text-sm sm:text-base text-muted dark:text-dark-muted mb-4 leading-relaxed">
                Eurasia Marketing is a trading name for Eurasia Supply and Services Limited — a company established in 2013 that has been successfully delivering IT and digital services for over a decade. Registered in England & Wales.
              </p>
              <p className="text-sm sm:text-base text-muted dark:text-dark-muted mb-6 sm:mb-8 leading-relaxed">
                Built on years of technical expertise and a genuine passion for helping businesses grow, we combine creative thinking with data-driven strategies to deliver marketing that moves the needle. Our team brings together expertise in web design, digital advertising, SEO, social media, and AI automation to provide holistic solutions for local businesses.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto text-center px-8 py-3.5 bg-primary dark:bg-accent-blue text-white rounded-[var(--radius-md)] text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Work With Us &rarr;
              </Link>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="bg-gradient-to-br from-accent-blue/20 to-[#38bdf8]/20 dark:from-accent-blue/10 dark:to-[#38bdf8]/10 rounded-[var(--radius-xl)] aspect-[4/3] flex items-center justify-center">
                <span className="text-lg sm:text-2xl font-bold text-primary/40 dark:text-dark-text/40 text-center px-6">Your Vision, Our Strategy</span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Results"
            title="By the Numbers"
            subtitle="Results that speak for themselves"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Our Team"
            title="The People Behind Your Growth"
            subtitle="Experienced marketers who are invested in your success"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 border border-border-light dark:border-border-dark shadow-sm h-full">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-blue to-sky-400 flex items-center justify-center text-white text-xl font-bold mb-4 flex-shrink-0">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-primary dark:text-dark-text text-base mb-0.5">{member.name}</h3>
                  <p className="text-xs font-mono text-accent-blue mb-3">{member.role}</p>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{member.bio}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-accent-blue hover:underline"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// What We Stand For"
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 border border-border-light dark:border-border-dark shadow-sm h-full">
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{v.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{v.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Want to join the team?"
        subtitle="We're always looking for talented people who share our passion for great marketing."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
