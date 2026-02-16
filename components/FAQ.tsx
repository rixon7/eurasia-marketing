'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';

const faqs = [
  {
    q: 'What services does Eurasia Marketing offer?',
    a: 'We provide a full range of digital marketing services including social media management, SEO & SEM, website design and development, Google Business Profile management, content marketing, email marketing, brand strategy, and digital advertising.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Our pricing starts from just £100/month for website building and email marketing, £200/month for social media management, and £300/month for SEO management. We also offer custom bundles with discounts when you combine multiple services.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: 'No. All our plans are rolling monthly contracts with no long-term lock-in. We believe in earning your business every month through results, not contracts. We just ask for 30 days\' notice if you wish to cancel.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'It depends on the service. Social media and paid advertising can show results within weeks. SEO is a longer-term strategy — most clients start seeing meaningful improvements within 3-6 months. We set clear expectations and provide regular progress reports.',
  },
  {
    q: 'Do you work with small businesses?',
    a: 'Absolutely! We were founded on the belief that every business deserves great marketing. Whether you\'re a startup, a local shop, or a growing company, we tailor our services to fit your budget and goals.',
  },
  {
    q: 'What areas do you serve?',
    a: 'While we\'re based in Hounslow, London, we work with clients across the UK and internationally. Most of our work is done remotely, but we\'re always happy to meet in person for local clients.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply get in touch via our contact page, email us at info@eurasiamarketing.com, or call us on 07949 774856. We\'ll schedule a free consultation to understand your goals and recommend the best approach.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-dark-text mb-4">Frequently Asked Questions</h2>
            <p className="text-muted dark:text-dark-muted">Got questions? We&apos;ve got answers.</p>
          </div>
        </AnimateIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimateIn key={faq.q} delay={i * 0.05}>
              <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] shadow-sm overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-semibold text-sm text-primary dark:text-dark-text">{faq.q}</span>
                  <motion.svg
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 text-muted dark:text-dark-muted"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-sm text-muted dark:text-dark-muted leading-relaxed border-t border-border-light dark:border-border-dark pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
