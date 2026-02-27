'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  tag?: string;
  title: string;
  highlight: string;
  subtitle: string;
  buttons?: { label: string; href: string; variant: 'primary' | 'outline' | 'blue'; external?: boolean }[];
  displayFont?: boolean;
  stats?: { value: string; label: string }[];
}

export default function Hero({ tag, title, highlight, subtitle, buttons, displayFont, stats }: HeroProps) {
  const hasStats = stats && stats.length > 0;

  return (
    <section className={`relative overflow-hidden bg-hero-mesh ${tag ? 'pt-12 md:pt-16' : 'pt-12 md:pt-20'} pb-12 md:pb-20 px-6`}>
      {/* Dot grid overlay */}
      <div className="bg-grid-dots absolute inset-0 pointer-events-none" />

      <div className={`relative max-w-[1280px] mx-auto ${hasStats ? 'grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-center' : 'text-center'}`}>
        {/* Left / Main content */}
        <div className={hasStats ? '' : 'max-w-3xl mx-auto'}>
          {tag && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-dark-card border border-border-light dark:border-border-dark text-xs font-mono font-medium text-accent-blue shadow-sm mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue inline-block" />
                {tag}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.06] tracking-[-0.02em] text-primary dark:text-dark-text mb-6 ${displayFont ? 'font-[family-name:var(--font-cormorant)]' : ''}`}
          >
            {title}{' '}
            <span className="relative inline-block">
              <span className="text-accent-blue">{highlight}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg md:text-xl text-muted dark:text-dark-muted leading-relaxed mb-8 ${hasStats ? 'max-w-lg' : 'max-w-2xl mx-auto'}`}
          >
            {subtitle}
          </motion.p>

          {buttons && buttons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`flex flex-col sm:flex-row gap-3 ${hasStats ? '' : 'justify-center'}`}
            >
              {buttons.map((btn) => {
                const className = `px-7 py-3.5 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-200 ${
                  btn.variant === 'primary'
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 dark:bg-accent-blue dark:hover:bg-accent-blue/90'
                    : btn.variant === 'blue'
                    ? 'bg-accent-blue text-white hover:bg-accent-blue/90 shadow-sm hover:shadow-md hover:-translate-y-0.5'
                    : 'bg-white dark:bg-dark-card border border-border-light dark:border-border-dark text-primary dark:text-dark-text hover:border-accent-blue hover:text-accent-blue dark:hover:border-accent-blue dark:hover:text-accent-blue shadow-sm'
                }`;
                return btn.external ? (
                  <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {btn.label}
                  </a>
                ) : (
                  <Link key={btn.label} href={btn.href} className={className}>
                    {btn.label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </div>

        {/* Right — stats bento grid */}
        {hasStats && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-3"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`stat-card ${i === 0 ? 'col-span-2' : ''}`}
              >
                <p className="text-3xl font-bold text-primary dark:text-dark-text tracking-tight">{s.value}</p>
                <p className="text-sm text-muted dark:text-dark-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
