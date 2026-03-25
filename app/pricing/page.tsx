import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import AnimateIn from '@/components/AnimateIn';

export const metadata: Metadata = {
  title: 'Digital Marketing Pricing Hounslow',
  description: 'Transparent monthly pricing for digital marketing in Hounslow. Websites from £100/mo, social media from £200/mo, SEO from £300/mo. No long-term contracts.',
  alternates: { canonical: '/pricing' },
};

const plans = [
  {
    name: 'Website Building',
    price: '100',
    originalPrice: '200',
    period: '/month',
    description: 'Stunning, responsive websites built to convert visitors into customers.',
    badge: 'Most Affordable',
    badgeColor: 'bg-accent-blue/10 text-accent-blue dark:bg-accent-blue/20',
    features: [
      'Custom responsive design',
      'Up to 5 pages included',
      'Mobile-optimised layout',
      'Contact form integration',
      'Basic SEO setup',
      'SSL certificate included',
      'Monthly maintenance & updates',
      '30-day launch guarantee',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    highlight: false,
  },
  {
    name: 'AI Automation',
    price: '150',
    originalPrice: '300',
    period: '/month',
    description: 'Custom AI workflows that save hours every week — automating lead follow-ups, reports, and more.',
    badge: 'New Service',
    badgeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
    features: [
      'Custom AI workflow design',
      'Lead follow-up automation',
      'Automated reporting & insights',
      'CRM & tool integrations',
      'AI chatbot setup',
      'Email & SMS automation',
      'Ongoing optimisation',
      'Monthly performance review',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-600 dark:text-violet-400">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M12 11V7" />
        <path d="M8 7h8" />
        <circle cx="12" cy="5" r="2" />
        <path d="M8 15h.01" />
        <path d="M12 15h.01" />
        <path d="M16 15h.01" />
      </svg>
    ),
    highlight: false,
  },
  {
    name: 'Social Media Management',
    price: '200',
    originalPrice: '400',
    period: '/month',
    description: 'Full-service social media that builds your brand and engages your audience.',
    badge: 'Most Popular',
    badgeColor: 'bg-accent-blue/10 text-accent-blue dark:bg-accent-blue/20',
    features: [
      'Up to 3 platforms managed',
      '12 posts per month',
      'Custom graphics & captions',
      'Hashtag & trend research',
      'Community management',
      'Monthly analytics report',
      'Content calendar planning',
      'Competitor monitoring',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    highlight: true,
  },
  {
    name: 'SEO Management',
    price: '300',
    originalPrice: '600',
    period: '/month',
    description: 'Dominate search results and drive high-quality organic traffic to your site.',
    badge: 'Best ROI',
    badgeColor: 'bg-soft-green text-mint-text dark:bg-mint-badge/20 dark:text-mint-badge',
    features: [
      'Full technical SEO audit',
      'Keyword research & strategy',
      'On-page optimisation',
      'Monthly link building',
      'Content recommendations',
      'Google Search Console setup',
      'Rank tracking & reporting',
      'Competitor analysis',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-mint-text dark:text-mint-badge">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
    highlight: false,
  },
  {
    name: 'Email Marketing',
    price: '100',
    originalPrice: '200',
    period: '/month',
    description: 'Automated campaigns that nurture leads and drive repeat business.',
    badge: 'Great Value',
    badgeColor: 'bg-accent-blue/10 text-accent-blue dark:bg-accent-blue/20',
    features: [
      'Campaign strategy & setup',
      'Up to 4 campaigns per month',
      'Custom email templates',
      'Audience segmentation',
      'A/B testing',
      'Automated drip sequences',
      'Performance analytics',
      'List growth strategies',
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    highlight: false,
  },
];

const faqs = [
  { q: 'Are there any setup fees?', a: 'No hidden fees. The monthly price covers everything listed. For website builds, a one-time design deposit may apply for bespoke projects.' },
  { q: 'Can I cancel at any time?', a: 'Yes. All our plans are rolling monthly contracts with no long-term lock-in. We just ask for 30 days\' notice.' },
  { q: 'Can I combine multiple services?', a: 'Absolutely! We offer bundle discounts when you combine two or more services. Get in touch for a custom quote.' },
  { q: 'What if I need something custom?', a: 'These are starting prices. We\'ll tailor a package to your exact needs after an initial consultation — no obligation.' },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        tag="💰 Simple, Transparent Pricing"
        title="Plans That"
        highlight="Fit Your Budget"
        subtitle="Flexible monthly payment plans with no long-term contracts. Scale up or down as your business grows."
      />

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 pb-14 md:pb-24">
        <div className="max-w-[1280px] mx-auto">

          {/* Limited offer banner */}
          <AnimateIn>
            <div className="mb-8 flex items-center justify-center gap-3 px-5 py-3.5 rounded-[var(--radius-lg)] bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50">
              <span className="flex-shrink-0 text-lg">⏰</span>
              <p className="text-sm font-semibold text-red-700 dark:text-red-400 text-center">
                <span className="font-extrabold">50% OFF — Limited Time Only.</span> These prices won&apos;t last. Lock in your rate before the offer ends.
              </p>
            </div>
          </AnimateIn>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {plans.map((plan, i) => (
              <AnimateIn key={plan.name} delay={i * 0.1}>
                <div className={`relative flex flex-col h-full rounded-[var(--radius-xl)] p-5 sm:p-8 transition-shadow hover:shadow-xl ${
                  plan.highlight
                    ? 'bg-primary dark:bg-accent-blue text-white shadow-lg ring-2 ring-accent-blue/50 dark:ring-accent-blue'
                    : 'bg-white dark:bg-dark-card shadow-sm'
                }`}>
                  {/* Badge */}
                  <span className={`inline-block self-start px-3 py-1 rounded-full text-xs font-semibold mb-4 sm:mb-6 ${
                    plan.highlight ? 'bg-accent-blue text-white' : plan.badgeColor
                  }`}>
                    {plan.badge}
                  </span>

                  {/* Icon + Name */}
                  <div className="mb-4">{plan.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-primary dark:text-dark-text'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 sm:mb-6 leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-muted dark:text-dark-muted'}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-5 sm:mb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm ${plan.highlight ? 'text-white/60' : 'text-muted dark:text-dark-muted'}`}>Starting from</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${plan.highlight ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
                        50% OFF
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-white' : 'text-primary dark:text-dark-text'}`}>
                        &pound;{plan.price}
                      </span>
                      <span className={`text-sm font-medium ${plan.highlight ? 'text-white/60' : 'text-muted dark:text-dark-muted'}`}>
                        {plan.period}
                      </span>
                      <span className={`text-base font-medium line-through ${plan.highlight ? 'text-white/40' : 'text-muted/60 dark:text-dark-muted/60'}`}>
                        &pound;{plan.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-5 sm:mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="12" cy="12" r="10" className={plan.highlight ? 'fill-white/20' : 'fill-soft-green dark:fill-dark-surface'} />
                          <path d="M8 12l3 3 5-5" stroke={plan.highlight ? '#fff' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={plan.highlight ? '' : 'text-accent-blue'} />
                        </svg>
                        <span className={`text-sm ${plan.highlight ? 'text-white/80' : 'text-muted dark:text-dark-muted'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="/contact"
                    className={`block text-center px-6 py-3.5 rounded-[var(--radius-md)] text-sm font-semibold transition-all ${
                      plan.highlight
                        ? 'bg-white text-primary hover:bg-white/90'
                        : 'bg-primary dark:bg-accent-blue text-white hover:opacity-90'
                    }`}
                  >
                    Get Started &rarr;
                  </a>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Custom bundle banner */}
          <AnimateIn delay={0.3}>
            <div className="mt-8 sm:mt-12 bg-gradient-to-r from-accent-blue/5 via-[#38bdf8]/5 to-accent-blue/5 dark:from-accent-blue/10 dark:via-[#38bdf8]/10 dark:to-accent-blue/10 rounded-[var(--radius-xl)] p-6 sm:p-8 md:p-12 text-center border border-accent-blue/10 dark:border-accent-blue/20">
              <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-dark-text mb-3">
                Need a custom package?
              </h3>
              <p className="text-sm sm:text-base text-muted dark:text-dark-muted max-w-xl mx-auto mb-5 sm:mb-6">
                Combine multiple services and save. We&apos;ll create a tailored plan that fits your exact needs and budget.
              </p>
              <a
                href="/contact"
                className="inline-block w-full sm:w-auto px-8 py-3.5 bg-primary dark:bg-accent-blue text-white rounded-[var(--radius-md)] text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Request a Custom Quote &rarr;
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-24 px-4 sm:px-6 bg-warm dark:bg-dark-surface">
        <div className="max-w-3xl mx-auto">
          <AnimateIn>
            <div className="text-center mb-8 sm:mb-12">
              <span className="font-mono text-xs text-accent-blue tracking-wider">// FAQ</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent-blue mt-3 mb-4">Common Questions</h2>
              <p className="text-muted dark:text-dark-muted">Everything you need to know about our pricing</p>
            </div>
          </AnimateIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateIn key={faq.q} delay={i * 0.1}>
                <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-6 shadow-sm">
                  <h4 className="font-semibold text-primary dark:text-dark-text mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to get started?"
        subtitle="Choose a plan and let's start growing your business today. No setup fees, no long-term contracts."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
