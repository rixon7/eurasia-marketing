'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { FAQS } from '@/lib/faqs';

// Restyled from components/FAQ.tsx. Content now comes from lib/faqs.ts,
// the single source shared with the FAQPage JSON-LD in app/page.tsx, so
// the two can no longer drift out of sync (see lib/faqs.ts doc comment).
// AnimatePresence here wraps a *conditionally-rendered* child (mounted only
// while a panel is open), not a re-keyed one — the pattern that
// legitimately works with framer-motion's exit animations, unlike the
// single-child re-keyed case documented in image-slider.tsx.
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-sunken py-20">
      <div className="bg-grid fade-grid-bottom absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative max-w-3xl">
        <SectionHeading align="center" eyebrow="// FAQ" title="Frequently Asked Questions" description="Got questions? We've got answers." />

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <div className="overflow-hidden rounded-[20px] border border-border bg-surface-glass">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-semibold leading-snug text-foreground">{faq.q}</span>
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
                    className="flex-shrink-0 text-foreground-faint"
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
                      <div className="border-t border-border px-5 pb-4 pt-3 text-sm leading-relaxed text-foreground-faint sm:px-6 sm:pb-5 sm:pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
