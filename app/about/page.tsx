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
  alternates: { canonical: '/about' },
};

const stats = [
  { number: '150', suffix: '+', label: 'Clients Served' },
  { number: '500', suffix: '+', label: 'Campaigns Launched' },
  { number: '3', suffix: 'x', label: 'Average ROI' },
  { number: '95', suffix: '%', label: 'Client Retention' },
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
                Eurasia Marketing is a trading name for Eurasia Supply and Services Limited — a company established in 2013 that has been successfully delivering IT and digital services for over a decade.
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

      <CTA
        title="Want to join the team?"
        subtitle="We're always looking for talented people who share our passion for great marketing."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
