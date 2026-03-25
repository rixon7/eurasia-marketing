import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'WordPress Website Design Hounslow | Eurasia Marketing',
  description: 'Professional WordPress websites built for businesses in Hounslow. Custom design, easy content management, WooCommerce, and full SEO setup — built to grow with your business.',
  alternates: { canonical: '/services/website-building/wordpress-website' },
};

const features = [
  {
    icon: '🎨',
    title: 'Fully Custom Design',
    description: 'No off-the-shelf templates. We design your WordPress site from scratch to match your brand, stand out from competitors, and make the right first impression.',
  },
  {
    icon: '✏️',
    title: 'Easy Content Management',
    description: 'WordPress gives you full control over your own content. Update pages, add blog posts, change images, and manage your site without needing a developer every time.',
  },
  {
    icon: '🛒',
    title: 'WooCommerce Ready',
    description: 'Need to sell products or services online? We build fully functional WooCommerce stores with product pages, secure checkout, payment gateways, and order management.',
  },
  {
    icon: '🔍',
    title: 'SEO Plugin Setup',
    description: 'We configure Yoast or Rank Math SEO for you — setting up sitemaps, meta tags, schema markup, and on-page SEO so your site is search-engine ready from launch.',
  },
  {
    icon: '⚡',
    title: 'Speed & Performance Optimised',
    description: 'We optimise your WordPress site for fast load times — caching, image compression, CDN setup, and code minification — so visitors never have to wait.',
  },
  {
    icon: '🔒',
    title: 'Security & Maintenance',
    description: 'We handle plugin updates, security patches, backups, and uptime monitoring so your WordPress site stays secure, fast, and online — without you worrying about it.',
  },
];

const process = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We start by understanding your business, your audience, and what you need your website to do. We then plan the site structure, page layouts, and content before any design work begins.',
  },
  {
    number: '02',
    title: 'Custom Design',
    description: 'Our designers create bespoke mockups tailored to your brand. You review and approve the design — making sure everything looks exactly how you want it before we write a single line of code.',
  },
  {
    number: '03',
    title: 'WordPress Build',
    description: 'We build your approved design in WordPress using clean, well-structured code. Plugins are chosen carefully to keep your site lean, fast, and easy to manage — no bloat.',
  },
  {
    number: '04',
    title: 'SEO & Performance Setup',
    description: 'Before launch we configure your SEO plugin, submit your sitemap, set up Google Analytics, optimise images, and run speed tests to ensure your site performs at its best.',
  },
  {
    number: '05',
    title: 'Training & Handover',
    description: 'We walk you through how to manage your WordPress site — adding pages, writing blog posts, updating images — so you feel fully confident using it independently.',
  },
  {
    number: '06',
    title: 'Ongoing Support & Maintenance',
    description: 'After launch we provide monthly maintenance — plugin updates, security checks, backups, and content updates — so your site stays healthy and your team stays focused on the business.',
  },
];

const faqs = [
  {
    q: 'Why should I choose WordPress for my website?',
    a: 'WordPress powers over 40% of all websites on the internet for good reason — it is flexible, user-friendly, and has a vast ecosystem of plugins. It gives you full ownership of your site and lets you manage your own content without relying on a developer for every small change.',
  },
  {
    q: 'Can I update the website myself after it is built?',
    a: 'Absolutely. One of the biggest advantages of WordPress is how easy it is to manage. After handover we provide training so you can update content, add blog posts, and make changes confidently on your own.',
  },
  {
    q: 'Can you build an online shop with WordPress?',
    a: 'Yes. We build WooCommerce stores that allow you to sell products or services online, accept payments, manage orders, and apply discounts — all from within your WordPress dashboard.',
  },
  {
    q: 'How long does it take to build a WordPress website?',
    a: 'A standard WordPress website typically takes 3–5 weeks from sign-off to launch, depending on the complexity and number of pages. We will give you a clear timeline at the start of your project.',
  },
  {
    q: 'What is included in ongoing maintenance?',
    a: 'Our monthly maintenance covers WordPress core and plugin updates, security monitoring, daily backups, uptime monitoring, and up to 1 hour of content updates per month.',
  },
  {
    q: 'What does a WordPress website cost?',
    a: 'WordPress websites start from £100/month. The final cost depends on the number of pages, features required, and whether ecommerce functionality is needed. Get in touch for a tailored quote.',
  },
];

export default function WordPressWebsitePage() {
  return (
    <>
      <Hero
        tag="🔷 WordPress Website"
        title="A Website You Can"
        highlight="Truly Own"
        subtitle="Professionally designed WordPress websites that are easy to manage, built to rank, and ready to grow with your business."
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
              WordPress is the world's most trusted website platform — and for good reason. It gives you a fully custom design, complete control over your content, and an ecosystem of powerful tools to grow your business. We build WordPress sites that are fast, secure, SEO-optimised, and genuinely easy for you to manage day to day.
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
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=85&auto=format&fit=crop"
              alt="WordPress Website"
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
            title="What's Included in Your WordPress Website"
            subtitle="Everything you need to launch a professional, high-performing site"
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
            title="How We Build Your WordPress Site"
            subtitle="A structured process from discovery to launch and beyond"
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
            subtitle="Common questions about WordPress websites"
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
              <Link href="/services/website-building/ai-website" className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors">
                🤖 AI Website
              </Link>
              <Link href="/services/website-building" className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors">
                🌐 Website Building
              </Link>
              <Link href="/services/seo-sem" className="px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-sm text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card transition-colors">
                🔍 SEO & SEM
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <CTA
        title="Ready to build your WordPress website?"
        subtitle="Get a free consultation and let's create a site that works as hard as you do."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
