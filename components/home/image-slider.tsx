'use client';

// Restyled from the old components/ImageSlider.tsx (promo ticker split out
// into promo-ticker.tsx — see that file). All 5 slides' copy, links, and
// behaviour (5s autoplay, pause-on-hover, arrows, dots, touch-swipe,
// desktop counter, progress bar) are preserved exactly.
//
// Bug fix while restyling: the old version wrapped a single re-keyed
// `motion.div` in `<AnimatePresence mode="wait">` — framer-motion's exit
// animation never reliably fires for this single-child re-keyed pattern
// (same gotcha MoveEasyMe's src/components/slider.tsx documents for
// `motion/react`), so only ever one slide existed in the DOM at a time,
// which is also an SEO/accessibility problem. Replaced with the
// always-mounted pattern: all 5 slides render `absolute inset-0`
// simultaneously and crossfade via plain CSS opacity/scale transitions,
// with `aria-hidden` on the inactive ones.
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const ACCENTS = ['--accent', '--accent-2', '--accent-3'] as const;

const slides = [
  {
    title: 'Website Design & Build',
    subtitle: 'Stunning sites that convert visitors into customers',
    description: 'Modern, responsive websites crafted with clean code and beautiful design — optimized for speed, SEO, and conversions.',
    accent: ACCENTS[0],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <polyline points="9 10 12 7 15 10" />
        <path d="M12 7v6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=90&auto=format&fit=crop',
    href: '/services/website-building',
  },
  {
    title: 'Social Media Management',
    subtitle: 'Engage your audience across every platform',
    description: 'Strategic content creation, community management, and analytics that build loyal followings and drive real business results.',
    accent: ACCENTS[1],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="10" r="1" fill="currentColor" />
        <circle cx="15" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1920&q=90&auto=format&fit=crop',
    href: '/services/social-media',
  },
  {
    title: 'SEO & Search Rankings',
    subtitle: 'Climb the rankings and get found by customers',
    description: 'Technical audits, keyword strategy, content optimization, and link building that put your business at the top of search results.',
    accent: ACCENTS[2],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=90&auto=format&fit=crop',
    href: '/services/seo-sem',
  },
  {
    title: 'AI Automation & Workflows',
    subtitle: 'Work smarter — automate the repetitive, focus on growth',
    description: 'Custom AI workflows that handle lead follow-ups, content creation, reporting, and customer service automatically — saving your business hours every week.',
    accent: ACCENTS[0],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=90&auto=format&fit=crop',
    href: '/services/ai-automation',
  },
  {
    title: 'Digital Advertising',
    subtitle: 'Reach the right people at the right moment',
    description: 'Targeted campaigns across Google, Meta, LinkedIn, and display networks — built for maximum ROI and real business growth.',
    accent: ACCENTS[1],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=90&auto=format&fit=crop',
    href: '/services/digital-advertising',
  },
];

export function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <section className="pb-8 md:pb-12">
      <Container>
        <div
          className="relative aspect-[16/7] overflow-hidden rounded-[28px] border border-border sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/5]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, i) => {
            const active = i === current;
            return (
              <div
                key={slide.title}
                aria-hidden={!active}
                className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  active ? 'z-10 scale-100 opacity-100' : 'z-0 scale-[1.03] opacity-0'
                }`}
              >
                <Image src={slide.image} alt="" fill priority={i === 0} className="object-cover" sizes="(max-width: 768px) 100vw, 1280px" />
                <div className="absolute inset-0" style={{ background: `color-mix(in srgb, var(${slide.accent}) 30%, transparent)` }} />
                <div className="absolute inset-0 hero-gradient-overlay" />
                <div
                  className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: `var(${slide.accent})` }}
                  aria-hidden="true"
                />

                {/* Content — bottom-anchored on mobile, centred on desktop */}
                <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end px-5 pb-14 sm:justify-center sm:px-8 sm:pb-0 md:px-16 lg:px-20">
                  <div className="mb-3 sm:mb-5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-glass-strong text-foreground sm:h-14 sm:w-14 sm:rounded-2xl"
                    >
                      {slide.icon}
                    </div>
                  </div>

                  <h3 className="mb-1 text-lg font-bold tracking-tight text-foreground sm:mb-2 sm:text-2xl md:text-4xl lg:text-5xl">
                    {slide.title}
                  </h3>
                  <p className="mb-1 text-xs font-medium text-foreground-soft sm:mb-2 sm:text-sm md:text-base">
                    {slide.subtitle}
                  </p>
                  <p className="mb-4 hidden text-sm leading-relaxed text-foreground-faint sm:block md:text-base">
                    {slide.description}
                  </p>

                  <div className="flex gap-2 sm:gap-3">
                    <a
                      href="https://calendly.com/rixon7/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2.5 text-xs font-semibold text-accent-foreground transition hover:brightness-110 sm:px-6 sm:py-3 sm:text-sm"
                    >
                      📅 Book a Free Call
                    </a>
                    <Link
                      href="/services"
                      className="whitespace-nowrap rounded-full border border-border bg-surface-glass-strong px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-accent sm:px-6 sm:py-3 sm:text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Slide counter — desktop only */}
          <div className="absolute right-4 top-4 z-20 hidden items-center gap-2 rounded-full border border-border bg-surface-glass-strong px-3 py-1.5 font-mono backdrop-blur-sm md:flex">
            <span className="text-sm font-semibold text-foreground">{current + 1}</span>
            <span className="text-sm text-foreground-faint">/</span>
            <span className="text-sm text-foreground-faint">{slides.length}</span>
          </div>

          {/* Arrow buttons — hidden on mobile */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-glass-strong text-foreground backdrop-blur-sm transition-colors hover:border-accent sm:left-4 sm:flex md:h-12 md:w-12"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-glass-strong text-foreground backdrop-blur-sm transition-colors hover:border-accent sm:right-4 sm:flex md:h-12 md:w-12"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                  i === current ? 'w-6 bg-accent sm:w-8' : 'w-1.5 bg-foreground/30 hover:bg-foreground/50 sm:w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
            <motion.div
              key={`progress-${current}`}
              className="h-full"
              style={{ backgroundColor: `var(${slides[current].accent})` }}
              initial={{ width: '0%' }}
              animate={{ width: isPaused ? undefined : '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
