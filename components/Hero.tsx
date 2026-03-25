'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import CountUp from './CountUp';

interface HeroProps {
  tag?: string;
  title: string;
  highlight: string;
  subtitle: string;
  buttons?: { label: string; href: string; variant: 'primary' | 'outline' | 'blue'; external?: boolean; hideOnMobile?: boolean }[];
  displayFont?: boolean;
  stats?: { value: string; label: string }[];
}

export default function Hero({ tag, title, highlight, subtitle, buttons, displayFont, stats }: HeroProps) {
  const hasStats = stats && stats.length > 0;

  return (
    <section className={`relative overflow-hidden bg-hero-mesh ${tag ? 'pt-0 md:pt-1' : 'pt-0 md:pt-1'} pb-4 md:pb-6 px-4 sm:px-6`}>
      {/* Dot grid overlay */}
      <div className="bg-grid-dots absolute inset-0 pointer-events-none" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute -top-32 right-[-5%] w-[600px] h-[600px] rounded-full bg-accent-blue/[0.08] dark:bg-accent-blue/[0.12] blur-[120px] pointer-events-none"
        animate={{ y: [0, -40, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-[25%] -left-24 w-[420px] h-[420px] rounded-full bg-sky-400/[0.07] dark:bg-sky-400/[0.09] blur-[100px] pointer-events-none"
        animate={{ y: [0, 35, 0], scale: [1, 0.93, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      />
      <motion.div
        className="absolute -bottom-16 right-[15%] w-[360px] h-[360px] rounded-full bg-accent-blue/[0.06] dark:bg-accent-blue/[0.08] blur-[90px] pointer-events-none"
        animate={{ y: [0, -25, 0], x: [0, 18, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className={`relative max-w-[1280px] mx-auto ${hasStats ? 'grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-10 items-center' : 'text-center'}`}>
        {/* Left / Main content */}
        <div className={hasStats ? '' : 'max-w-3xl mx-auto'}>
          {tag && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-dark-card border border-border-light dark:border-border-dark text-xs font-mono font-medium text-accent-blue shadow-sm mb-3 md:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue inline-block" />
                {tag}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={
              displayFont
                ? 'font-[family-name:var(--font-cormorant)] text-[clamp(2.2rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.01em] text-primary dark:text-dark-text mb-2 md:mb-3'
                : 'text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.1] md:leading-[1.06] tracking-[-0.02em] text-primary dark:text-dark-text mb-3 md:mb-4'
            }
          >
            {displayFont ? (
              <span className="text-[clamp(1.4rem,4vw,3rem)]">{title}</span>
            ) : title}{' '}
            <span className="block">
              <span className={`text-accent-blue italic ${displayFont ? 'text-[clamp(2rem,5.5vw,4.2rem)]' : ''}`}>{highlight}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-sm sm:text-base md:text-lg text-muted dark:text-dark-muted leading-relaxed mb-4 md:mb-6 ${hasStats ? 'max-w-lg' : 'max-w-2xl mx-auto'}`}
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
                const className = `${btn.hideOnMobile ? 'hidden sm:block' : ''} w-full sm:w-auto text-center px-6 py-3.5 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-200 ${
                  btn.variant === 'primary'
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 dark:bg-black sm:dark:bg-accent-blue sm:dark:hover:bg-accent-blue/90'
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

          {/* Stats — desktop right column fallback (md only, hidden on mobile and lg) */}
          {hasStats && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden md:grid grid-cols-2 gap-3 mt-6 lg:hidden"
            >
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <p className="text-2xl font-bold text-primary dark:text-dark-text tracking-tight">
                    <CountUp value={s.value} />
                  </p>
                  <p className="text-xs text-muted dark:text-dark-muted mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Right — stats bento grid (desktop only) */}
        {hasStats && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-2"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`stat-card py-3 px-4 ${i === 0 ? 'col-span-2' : ''}`}
              >
                <p className="text-xl font-bold text-primary dark:text-dark-text tracking-tight">
                  <CountUp value={s.value} />
                </p>
                <p className="text-xs text-muted dark:text-dark-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
