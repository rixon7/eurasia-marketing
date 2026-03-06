import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Contact Us - Free Consultation Hounslow',
  description: 'Get a free consultation with Eurasia Marketing — Hounslow\'s leading digital marketing agency. Visit us at 65-73 Staines Road, Hounslow TW3 3HW.',
  alternates: { canonical: '/contact' },
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2486.0!2d-0.3614!3d51.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760d9e8d3e9b1f%3A0x0!2s65-73+Staines+Road%2C+Hounslow+TW3+3HW!5e0!3m2!1sen!2suk!4v1700000000000"
                width="100%"
                height="300"
                className="sm:!h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eurasia Marketing office location"
              />
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
