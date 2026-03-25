'use client';

import { motion } from 'framer-motion';
import AnimateIn from './AnimateIn';

interface TestimonialProps {
  quote: string;
  initials: string;
  name: string;
  role: string;
  delay?: number;
}

export default function Testimonial({ quote, initials, name, role, delay = 0 }: TestimonialProps) {
  return (
    <AnimateIn delay={delay}>
      <motion.div
        whileHover={{ y: -5, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 border border-border-light dark:border-border-dark shadow-sm h-full flex flex-col"
      >
        {/* Stars */}
        <div className="flex gap-0.5 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" className="flex-shrink-0">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-primary dark:text-dark-text leading-relaxed mb-6 flex-1 text-[0.95rem]">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-5 border-t border-border-light dark:border-border-dark">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-sky-400 text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-primary dark:text-dark-text">{name}</p>
            <p className="text-xs text-muted dark:text-dark-muted">{role}</p>
          </div>
        </div>
      </motion.div>
    </AnimateIn>
  );
}
