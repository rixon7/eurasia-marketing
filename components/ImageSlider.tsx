'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    title: 'Social Media Management',
    subtitle: 'Engage your audience across every platform',
    description: 'Strategic content creation, community management, and analytics that build loyal followings and drive real business results.',
    gradient: 'from-[#0c2d4a] via-[#1565c0] to-[#0c2d4a]',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <circle cx="18" cy="3" r="3" fill="#38bdf8" stroke="none" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1920&q=80&auto=format&fit=crop',
  },
  {
    title: 'SEO Services',
    subtitle: 'Climb the rankings and get found',
    description: 'Technical audits, keyword strategy, content optimization, and link building that put your business at the top of search results.',
    gradient: 'from-[#0c2d4a] via-[#0d47a1] to-[#1565c0]',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
        <path d="M11 8v6" />
        <path d="M8 11h6" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80&auto=format&fit=crop',
  },
  {
    title: 'Website Design & Build',
    subtitle: 'Stunning sites that convert visitors into customers',
    description: 'Modern, responsive websites crafted with clean code and beautiful design — optimized for speed, SEO, and conversions.',
    gradient: 'from-[#1565c0] via-[#0c2d4a] to-[#0d47a1]',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="m8 10 3-3 3 3" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1920&q=80&auto=format&fit=crop',
  },
  {
    title: 'Google Profile Management',
    subtitle: 'Dominate local search and build trust',
    description: 'Optimize your Google Business Profile with compelling content, regular updates, review management, and local SEO strategies.',
    gradient: 'from-[#0d47a1] via-[#1565c0] to-[#0c2d4a]',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=1920&q=80&auto=format&fit=crop',
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
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slides[current].image})` }}
              />
              {/* Dark overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].gradient} opacity-80`} />
              {/* Extra darken for readability */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-20 max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="mb-6">{slides[current].icon}</div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3"
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
                >
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 bg-white text-primary rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/90 transition-colors"
                  >
                    Get a Free Quote &rarr;
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() => { setCurrent((c) => (c + 1) % slides.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors"
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
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/10">
            <motion.div
              key={`progress-${current}`}
              className="h-full bg-white/50"
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
