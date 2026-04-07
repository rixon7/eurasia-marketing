import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Contact Us - Free Consultation Hounslow',
  description: 'Get a free consultation with Eurasia Marketing — Hounslow\'s leading digital marketing agency. Visit us at 65-73 Staines Road, Hounslow TW3 3HW.',
  keywords: ['contact Eurasia Marketing', 'free marketing consultation Hounslow', 'digital marketing agency contact', 'marketing agency Hounslow phone', 'book consultation Hounslow'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Eurasia Marketing | Free Consultation Hounslow',
    description: 'Get a free consultation with Eurasia Marketing — Hounslow\'s leading digital marketing agency. Visit us at 65-73 Staines Road, Hounslow TW3 3HW.',
    url: 'https://eurasiamarketing.com/contact',
  },
};

const details = [
  { label: 'Email', value: 'info@eurasiamarketing.com' },
  { label: 'Phone', value: '020 3886 3311' },
  { label: 'Office', value: '65-73 Staines Road\nHounslow TW3 3HW' },
  { label: 'Hours', value: 'Mon - Fri: 10:00 am - 6:30 pm\nSat: 10:00 am - 3:00 pm\nSun: Closed' },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        tag="💬 Let's Talk"
        title="Get in"
        highlight="Touch"
        subtitle="Ready to take your marketing to the next level? Let's talk about your goals."
        buttons={[
          { label: '📅 Book a Free Call', href: 'https://calendly.com/rixon7/30min', variant: 'blue', external: true },
        ]}
      />

      <section className="py-12 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            <AnimateIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-accent-blue mb-3 sm:mb-4">
                Let&apos;s start a conversation
              </h2>
              <p className="text-sm sm:text-base text-muted dark:text-dark-muted mb-6 sm:mb-10">
                Whether you&apos;re looking to launch a new campaign or revamp your entire brand strategy, we&apos;d love to hear from you.
              </p>
              <div className="space-y-5 sm:space-y-6">
                {details.map((d) => (
                  <div key={d.label} className="border-l-2 border-accent-blue pl-6">
                    <p className="text-sm font-semibold text-primary dark:text-dark-text mb-1">{d.label}</p>
                    <p className="text-sm text-muted dark:text-dark-muted whitespace-pre-line">{d.value}</p>
                  </div>
                ))}
              </div>

            </AnimateIn>
            <AnimateIn delay={0.2}>
              <ContactForm />
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Location"
            title="Find Us"
            subtitle="65-73 Staines Road, Hounslow TW3 3HW"
          />
          <AnimateIn>
            <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=Eurasia+Marketing,+65-73+Staines+Road,+Hounslow,+TW3+3HW,+UK&output=embed"
                width="100%"
                height="300"
                className="h-[300px] sm:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eurasia Marketing — Digital Marketing Agency Hounslow"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.google.com/search?q=Eurasia+Marketing&kgmid=/g/11yzv1bhxr#lrd=,1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-md)] bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
              >
                ⭐ Leave us a Google Review
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Eurasia+Marketing,+65-73+Staines+Road,+Hounslow,+TW3+3HW"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-[var(--radius-md)] border border-border-light dark:border-border-dark text-primary dark:text-dark-text text-sm font-semibold hover:border-accent-blue hover:text-accent-blue transition-colors"
              >
                📍 Get Directions
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
