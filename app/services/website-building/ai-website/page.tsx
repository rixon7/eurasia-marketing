import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'AI Website Design Hounslow | Eurasia Marketing',
  description: 'Get a cutting-edge AI-powered website built for your business in Hounslow. Smart chatbots, automated lead capture, personalised content and 24/7 engagement — all built in.',
  alternates: { canonical: '/services/website-building/ai-website' },
};

const features = [
  {
    icon: '🤖',
    title: 'Built-in AI Chatbot',
    description: 'An intelligent chatbot trained on your business answers visitor questions instantly, qualifies leads, and books appointments — 24 hours a day, 7 days a week.',
  },
  {
    icon: '🎯',
    title: 'Smart Lead Capture',
    description: 'AI-driven forms and pop-ups that adapt based on visitor behaviour, increasing the number of enquiries you receive without adding any manual effort.',
  },
  {
    icon: '✍️',
    title: 'AI-Assisted Content',
    description: 'Product descriptions, service pages, and blog posts generated and optimised with AI — saving you hours of writing while keeping your content fresh and SEO-friendly.',
  },
  {
    icon: '📊',
    title: 'Smart Analytics & Insights',
    description: 'AI-powered analytics that surface what is working and what is not — so you can make better decisions without spending hours reading reports.',
  },
  {
    icon: '⚡',
    title: 'Automated Follow-Ups',
    description: 'When a visitor fills in a form or starts a chat, automated email and SMS follow-ups are triggered instantly — so no lead goes cold.',
  },
  {
    icon: '🔍',
    title: 'SEO Optimised from Day One',
    description: 'Every page is structured for search engines using AI-assisted keyword research and on-page optimisation, giving you the best chance of ranking locally.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discovery & AI Strategy',
    description: 'We learn about your business, your customers, and the repetitive questions or tasks your team handles daily — then design an AI strategy that automates them on your website.',
  },
  {
    number: '02',
    title: 'Design & UX',
    description: 'We design a modern, branded website with AI touchpoints built in from the start — chatbot placement, smart forms, and lead flows that feel natural to visitors.',
  },
  {
    number: '03',
    title: 'AI Build & Training',
    description: 'We build and train your AI chatbot using your FAQs, services, and pricing. We also set up automated lead capture, follow-up sequences, and analytics integrations.',
  },
  {
    number: '04',
    title: 'Testing & Refinement',
    description: 'We stress-test every AI interaction — checking chatbot responses, form submissions, automations, and page speed — before anything goes live.',
  },
  {
    number: '05',
    title: 'Launch & Optimisation',
    description: 'We launch your site and monitor AI performance in the first 30 days, refining chatbot responses and automation flows based on real visitor interactions.',
  },
];

const faqs = [
  {
    q: 'What is an AI website?',
    a: 'An AI website is a standard website enhanced with artificial intelligence tools — such as a chatbot, smart lead capture, automated follow-ups, and AI-assisted content — that help your site engage visitors and generate leads automatically.',
  },
  {
    q: 'Will the chatbot actually answer my customers\' questions correctly?',
    a: 'Yes. We train the chatbot using your specific business information — your services, pricing, FAQs, and processes — so it gives accurate, helpful answers. We review and refine responses before launch.',
  },
  {
    q: 'Do I need any technical knowledge to manage an AI website?',
    a: 'No. We build everything and handle all the technical setup. After handover we walk you through a simple dashboard so you can see conversations and update information without touching any code.',
  },
  {
    q: 'How is an AI website different from a standard website?',
    a: 'A standard website is passive — visitors read your content and may or may not contact you. An AI website actively engages visitors, answers their questions, captures their details, and follows up automatically — working for your business around the clock.',
  },
  {
    q: 'What is the monthly cost?',
    a: 'AI websites start from £150/month. This includes hosting, the AI chatbot, automated follow-ups, and ongoing optimisation. Get in touch for a quote tailored to your requirements.',
  },
];

export default function AIWebsitePage() {
  return (
    <>
      <Hero
        tag="🤖 AI Website"
        title="Websites That Work"
        highlight="While You Sleep"
        subtitle="An AI-powered website that engages visitors, captures leads, and follows up automatically — 24/7, without lifting a finger."
        buttons={[
          { label: 'Get a Free Quote →', href: '/contact', variant: 'primary' },
          { label: 'View Pricing', href: '/pricing', variant: 'outline' },
        ]}
      />

      {/* Intro */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-base sm:text-lg text-muted dark:text-dark-muted leading-relaxed">
              Most websites are digital brochures — they look good but do very little on their own. An AI website is different. It greets your visitors, answers their questions, collects their details, and sends automated follow-ups the moment they show interest. It is like having a member of staff on your website around the clock, at a fraction of the cost.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-4 sm:px-6 pb-10 md:pb-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="rounded-[var(--radius-xl)] overflow-hidden aspect-[21/9] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=85&auto=format&fit=crop"
              alt="AI Website"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// What's Included"
            title="What's Included in Your AI Website"
            subtitle="Everything you need to turn your website into a lead generation machine"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[10px]">
            {features.map((f, i) => (
              <AnimateIn key={f.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 shadow-sm h-full">
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{f.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{f.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Our Process"
            title="How We Build Your AI Website"
            subtitle="A clear process from strategy to launch"
          />
          <div className="relative">
            <div className="hidden lg:block absolute left-[39px] top-8 bottom-8 w-px bg-border-light dark:bg-border-dark" />
            <div className="flex flex-col gap-4 md:gap-6">
              {process.map((step, i) => (
                <AnimateIn key={step.number} delay={i * 0.1}>
                  <div className="relative flex gap-5 sm:gap-8 bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-7 shadow-sm">
                    <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 flex items-center justify-center z-10">
                      <span className="text-[10px] font-bold text-accent-blue tracking-wider">{step.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary dark:text-dark-text text-base sm:text-lg mb-1.5">{step.title}</h3>
                      <p className="text-sm sm:text-base text-muted dark:text-dark-muted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 md:py-16 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            tag="// FAQs"
            title="Frequently Asked Questions"
            subtitle="Common questions about AI websites"
          />
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-6 shadow-sm">
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2 text-sm sm:text-base">{faq.q}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-10 md:py-12 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto text-center">
          <AnimateIn>
            <p className="text-sm text-muted dark:text-dark-muted mb-4">Also interested in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/website-building/wordpress-website" className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors">
                🔷 WordPress Website
              </Link>
              <Link href="/services/website-building" className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors">
                🌐 Website Building
              </Link>
              <Link href="/services/ai-automation" className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors">
                🤖 AI Automation
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTA
        title="Ready for a website that never stops working?"
        subtitle="Get a free consultation and find out how an AI website can transform your business."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
