import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  other: {
    'geo.region': 'GB-ENG',
    'geo.placename': 'Hounslow',
    'geo.position': '51.4685;-0.3614',
    'ICBM': '51.4685, -0.3614',
  },
};
import ImageSlider from '@/components/ImageSlider';
import LogoSlider from '@/components/LogoSlider';
import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/Card';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';
import CountUp from '@/components/CountUp';
import FAQ from '@/components/FAQ';
import WhatWeDoBest from '@/components/WhatWeDoBest';
import { getAllPosts } from '@/lib/blog';
import { client, homepageSettingsQuery } from '@/lib/sanity';

const defaultServices = [
  { icon: '🌐', title: 'Website Building',    href: '/services/website-building',   description: 'Modern, responsive websites built to convert visitors into customers — fast, SEO-ready, and beautifully designed.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop' },
  { icon: '🤖', title: 'AI Automation',        href: '/services/ai-automation',       description: 'Save hours every week with custom AI workflows that automate lead follow-ups, reporting, and more.',              image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80&auto=format&fit=crop' },
  { icon: '📈', title: 'Digital Advertising',  href: '/services/digital-advertising', description: 'Targeted ad campaigns across search, social, and display channels that maximize your ROI.',                       image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80&auto=format&fit=crop' },
];

const defaultFeatures = [
  { icon: '💡', title: 'Creative Approach', description: 'Fresh ideas and innovative campaigns that capture attention.' },
  { icon: '📊', title: 'Data-Driven', description: 'Every decision backed by analytics for measurable outcomes.' },
  { icon: '🤝', title: 'Dedicated Support', description: 'A committed team that treats your business like their own.' },
  { icon: '⚡', title: 'Fast Turnaround', description: 'Quick execution without compromising on quality or strategy.' },
];

const defaultTestimonials = [
  { quote: 'Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.', initials: 'AK', name: 'Amira Khan', role: 'CEO, TechFlow Solutions' },
  { quote: 'Professional, creative, and always on top of the latest trends. They feel like an extension of our team.', initials: 'DM', name: 'David Morris', role: 'Founder, GreenLeaf Co.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What services does Eurasia Marketing offer?', acceptedAnswer: { '@type': 'Answer', text: 'We provide a full range of digital marketing services including social media management, SEO & SEM, website design and development, Google Business Profile management, content marketing, email marketing, brand strategy, and digital advertising.' } },
    { '@type': 'Question', name: 'How much do your services cost?', acceptedAnswer: { '@type': 'Answer', text: 'Our pricing starts from just £100/month for website building and email marketing, £200/month for social media management, and £300/month for SEO management. We also offer custom bundles with discounts when you combine multiple services.' } },
    { '@type': 'Question', name: 'Do you require long-term contracts?', acceptedAnswer: { '@type': 'Answer', text: "No. All our plans are rolling monthly contracts with no long-term lock-in. We believe in earning your business every month through results, not contracts. We just ask for 30 days' notice if you wish to cancel." } },
    { '@type': 'Question', name: 'How quickly will I see results?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the service. Social media and paid advertising can show results within weeks. SEO is a longer-term strategy — most clients start seeing meaningful improvements within 3-6 months.' } },
    { '@type': 'Question', name: 'Do you work with small businesses?', acceptedAnswer: { '@type': 'Answer', text: "Absolutely! We were founded on the belief that every business deserves great marketing. Whether you're a startup, a local shop, or a growing company, we tailor our services to fit your budget and goals." } },
    { '@type': 'Question', name: 'What areas do you serve?', acceptedAnswer: { '@type': 'Answer', text: "While we're based in Hounslow, London, we work with clients across the UK and internationally. Most of our work is done remotely, but we're always happy to meet in person for local clients." } },
    { '@type': 'Question', name: 'How do I get started?', acceptedAnswer: { '@type': 'Answer', text: 'Simply get in touch via our contact page, email us at info@eurasiamarketing.com, or call us on 020 3886 3311. We\'ll schedule a free consultation to understand your goals and recommend the best approach.' } },
  ],
};

type HomepageSettings = {
  heroTitle?: string;
  heroHighlight?: string;
  heroSubtitle?: string;
  featuredServices?: { icon: string; title: string; href: string; description: string }[];
  features?: { icon: string; title: string; description: string }[];
  testimonials?: { quote: string; initials: string; name: string; role: string }[];
};

export default async function Home() {
  const [posts, settings] = await Promise.all([
    getAllPosts(),
    client.fetch<HomepageSettings | null>(homepageSettingsQuery),
  ]);

  const heroTitle = settings?.heroTitle ?? 'Grow Your Brand';
  const heroHighlight = settings?.heroHighlight ?? 'With Confidence';
  const heroSubtitle = settings?.heroSubtitle ?? 'We help businesses build powerful marketing strategies that drive real results and lasting growth.';
  const services = settings?.featuredServices ?? defaultServices;
  const features = settings?.features ?? defaultFeatures;
  const testimonials = settings?.testimonials ?? defaultTestimonials;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ImageSlider />

      {/* Mobile stat tiles — shown below slider on mobile only */}
      <div className="md:hidden px-3 pb-6 grid grid-cols-2 gap-3">
        {[
          { value: '150+', label: 'Businesses grown across West London' },
          { value: '3×',   label: 'Average ROI on marketing spend' },
          { value: '95%',  label: 'Client retention rate' },
          { value: '500+', label: 'Campaigns successfully launched' },
        ].map((s) => (
          <div key={s.label} className="stat-card">
            <p className="text-2xl font-bold text-primary dark:text-dark-text tracking-tight">
              <CountUp value={s.value} />
            </p>
            <p className="text-xs text-primary/70 dark:text-dark-muted mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      <Hero
        title={heroTitle}
        highlight={heroHighlight}
        subtitle={heroSubtitle}
        displayFont
        buttons={[
          { label: 'Get Started →', href: '/contact', variant: 'primary', hideOnMobile: true },
          { label: 'Get a Free Quote →', href: '/contact', variant: 'outline' },
        ]}
        stats={[
          { value: '150+', label: 'Businesses grown across West London' },
          { value: '3×', label: 'Average ROI on marketing spend' },
          { value: '95%', label: 'Client retention rate' },
          { value: '500+', label: 'Campaigns successfully launched' },
        ]}
      />

      <LogoSlider />

      <WhatWeDoBest />

      <section className="py-14 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Our Services"
            title="Digital Marketing Services in Hounslow"
            subtitle="From website design to SEO and social media — tailored solutions for your business"
          />
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Card key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Why Choose Us"
            title="Why Hounslow Businesses Choose Eurasia"
            subtitle="Results-driven digital marketing backed by data and local expertise"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <AnimateIn key={f.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 border border-border-light dark:border-border-dark shadow-sm h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 dark:bg-accent-blue/15 flex items-center justify-center text-xl mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-primary dark:text-dark-text mb-2">{f.title}</h3>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{f.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Client Reviews"
            title="What Our Clients Say"
            subtitle="Don't take our word for it"
          />
          <div className="grid md:grid-cols-2 gap-[10px]">
            {testimonials.map((t, i) => (
              <Testimonial key={t.name} {...t} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-14 md:py-24 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Portfolio"
            title="Our Work"
            subtitle="Real websites built for real businesses"
          />

          {/* Featured project */}
          <AnimateIn>
            <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-center mb-10 md:mb-16">
              {/* Browser mockup */}
              <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-xl border border-border-light dark:border-border-dark">
                <div className="bg-[#1e1e1e] px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex-1 bg-white/10 rounded-md px-3 py-1 text-xs text-white/50 font-mono truncate">
                    skinhealthpractice.com
                  </div>
                </div>
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-dark-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://image.thum.io/get/width/1200/crop/750/https://skinhealth-wine.vercel.app/"
                    alt="Skin Health Practice website"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Project details */}
              <div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {['Website Building', 'Local SEO', 'Booking Integration'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary dark:text-dark-text mb-4">
                  Skin Health Practice
                </h3>
                <p className="text-sm sm:text-base text-muted dark:text-dark-muted leading-relaxed mb-5">
                  A modern, conversion-focused website for Hounslow&apos;s leading cosmetic and aesthetic clinic. We built a fast, mobile-optimised site complete with an online booking system, full treatments catalogue, and local SEO to attract nearby customers.
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-7 text-xs text-muted dark:text-dark-muted font-mono">
                  <span>📍 Hounslow, London</span>
                  <span className="hidden sm:inline text-border-light dark:text-border-dark">|</span>
                  <span>🏥 Cosmetic &amp; Aesthetic Clinic</span>
                </div>
                <a
                  href="https://www.skinhealthpractice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-accent-blue text-white rounded-[var(--radius-md)] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Visit Live Site
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimateIn>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Urban Cart',
                industry: '🛍️ E-commerce & Retail',
                location: '📍 London',
                tags: ['E-commerce', 'Product Catalogue', 'Payments'],
                description: 'A fully custom online store with product filtering, secure checkout, stock management, and a sleek mobile-first design built to maximise conversions.',
                image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&auto=format&fit=crop',
              },
              {
                title: 'Apex Build',
                industry: '🏗️ Construction & Renovation',
                location: '📍 West London',
                tags: ['Website Building', 'Local SEO', 'Lead Generation'],
                description: 'A bold, trust-building website for a residential and commercial construction firm — showcasing projects, services, and driving inbound enquiries through targeted local SEO.',
                image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
              },
              {
                title: 'Luxe Salon',
                industry: '💇 Hair &amp; Beauty',
                location: '📍 Hounslow, London',
                tags: ['Website Building', 'Booking System', 'Social Media'],
                description: 'A premium salon website with online booking, a treatments menu, stylist profiles, and a gallery — paired with a social media strategy that grew their Instagram following by 3×.',
                image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80&auto=format&fit=crop',
              },
              {
                title: 'GreenSpace Landscapes',
                industry: '🌿 Garden &amp; Landscaping',
                location: '📍 Surrey & West London',
                tags: ['Website Building', 'SEO', 'Google Ads'],
                description: 'A visually stunning website for a landscaping business featuring a project portfolio, service pages, and a Google Ads campaign that doubled their enquiries within 60 days.',
                image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop',
              },
            ].map((project, i) => (
              <AnimateIn key={project.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-xl)] overflow-hidden border border-border-light dark:border-border-dark shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-accent-blue/10 dark:bg-accent-blue/15 text-accent-blue text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-primary dark:text-dark-text mb-2">{project.title}</h3>
                    <p className="text-sm text-muted dark:text-dark-muted leading-relaxed flex-1 mb-4" dangerouslySetInnerHTML={{ __html: project.description }} />
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted dark:text-dark-muted font-mono">
                      <span>{project.location}</span>
                      <span className="text-border-light dark:text-border-dark">|</span>
                      <span dangerouslySetInnerHTML={{ __html: project.industry }} />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-14 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <SectionHeader
            tag="// Blog"
            title="Latest Insights"
            subtitle="Tips, strategies, and ideas from our marketing experts"
          />
          <div className="grid md:grid-cols-3 gap-[10px]">
            {posts.slice(0, 3).map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article className="gradient-border bg-white dark:bg-dark-card rounded-[var(--radius-lg)] shadow-sm hover:shadow-md transition-shadow h-full flex flex-col overflow-hidden">
                    {post.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-5 sm:p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-soft-green dark:bg-dark-surface text-xs font-mono text-mint-text dark:text-mint-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-primary dark:text-dark-text mb-3 group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted dark:text-dark-muted leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted dark:text-dark-muted font-mono">
                      <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                    </div>
                  </article>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/blog"
                className="inline-block px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-dark-muted dark:text-dark-text dark:hover:bg-dark-card rounded-[var(--radius-md)] text-sm font-semibold transition-all"
              >
                View All Posts &rarr;
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      <CTA
        title="Ready to grow your brand?"
        subtitle="Let's build a marketing strategy that drives real, measurable results for your business."
        buttonText="Start a Project"
        buttonHref="/contact"
        secondaryText="View Pricing"
        secondaryHref="/pricing"
      />
    </>
  );
}
