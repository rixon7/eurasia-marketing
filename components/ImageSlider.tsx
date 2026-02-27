'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    title: 'Website Design & Build',
    subtitle: 'Stunning sites that convert visitors into customers',
    description: 'Modern, responsive websites crafted with clean code and beautiful design — optimized for speed, SEO, and conversions.',
    gradient: 'from-violet-900 via-indigo-800 to-blue-900',
    accent: '#a78bfa',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <polyline points="9 10 12 7 15 10" stroke="white" />
        <path d="M12 7v6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=90&auto=format&fit=crop',
    href: '/services/brand-strategy',
  },
  {
    title: 'Social Media Management',
    subtitle: 'Engage your audience across every platform',
    description: 'Strategic content creation, community management, and analytics that build loyal followings and drive real business results.',
    gradient: 'from-pink-900 via-rose-800 to-purple-900',
    accent: '#f472b6',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9" cy="10" r="1" fill="white" />
        <circle cx="12" cy="10" r="1" fill="white" />
        <circle cx="15" cy="10" r="1" fill="white" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1920&q=90&auto=format&fit=crop',
    href: '/services/social-media',
  },
  {
    title: 'SEO & Search Rankings',
    subtitle: 'Climb the rankings and get found by customers',
    description: 'Technical audits, keyword strategy, content optimization, and link building that put your business at the top of search results.',
    gradient: 'from-emerald-900 via-teal-800 to-cyan-900',
    accent: '#34d399',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=90&auto=format&fit=crop',
    href: '/services/seo-sem',
  },
  {
    title: 'Digital Advertising',
    subtitle: 'Reach the right people at the right moment',
    description: 'Targeted campaigns across Google, Meta, LinkedIn, and display networks — built for maximum ROI and real business growth.',
    gradient: 'from-orange-900 via-amber-800 to-yellow-900',
    accent: '#fb923c',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=90&auto=format&fit=crop',
    href: '/services/digital-advertising',
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <section className="px-6 pb-12">
      <div className="max-w-[1280px] mx-auto">
        <div
          className="relative rounded-[var(--radius-xl)] overflow-hidden aspect-[16/8] md:aspect-[16/7]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {/* Background image — full colour, no desaturation */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[current].image})` }}
              />
              {/* Lighter gradient overlay so image colour shows through */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].gradient} opacity-60`} />
              {/* Gentle darken for text readability only */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Decorative accent circle */}
              <div
                className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: slides[current].accent }}
              />
              <div
                className="absolute -left-12 -top-12 w-64 h-64 rounded-full opacity-15 blur-2xl"
                style={{ backgroundColor: slides[current].accent }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-20 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="mb-5"
                >
                  {/* Coloured icon background */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${slides[current].accent}30`, border: `1px solid ${slides[current].accent}50` }}
                  >
                    {slides[current].icon}
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3"
                >
                  {slides[current].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-white/80 text-sm md:text-base font-medium mb-2"
                >
                  {slides[current].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-white/60 text-sm md:text-base leading-relaxed mb-8 hidden sm:block"
                >
                  {slides[current].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex gap-3"
                >
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-white text-primary rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5"
                  >
                    Get a Free Quote →
                  </Link>
                  <Link
                    href={slides[current].href}
                    className="inline-block px-6 py-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/25 transition-all"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>

              {/* Slide counter top-right */}
              <div className="absolute top-5 right-5 z-20 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/20 backdrop-blur-sm">
                <span className="text-white font-semibold text-sm">{current + 1}</span>
                <span className="text-white/40 text-sm">/</span>
                <span className="text-white/50 text-sm">{slides.length}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/35 transition-colors"
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
            <motion.div
              key={`progress-${current}`}
              className="h-full bg-white/60"
              style={{ backgroundColor: slides[current].accent }}
              initial={{ width: '0%' }}
              animate={{ width: isPaused ? undefined : '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
