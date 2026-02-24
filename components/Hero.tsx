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
}

export default function Hero({ tag, title, highlight, subtitle, buttons, displayFont }: HeroProps) {
  return (
    <section className={`${tag ? 'pt-12 md:pt-16' : 'pt-8 md:pt-12'} pb-10 md:pb-12 px-6`}>
      <div className="max-w-[1280px] mx-auto text-center">
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-soft-green dark:bg-dark-card text-xs font-mono font-medium text-mint-text dark:text-mint-badge mb-6">
              {tag}
            </span>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-dark-text mb-6 ${displayFont ? 'font-[family-name:var(--font-cormorant)] tracking-normal' : 'tracking-tight'}`}
        >
          {title} <span className="text-accent-blue">{highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted dark:text-dark-muted max-w-2xl mx-auto mb-8"
        >
          {subtitle}
        </motion.p>

        {buttons && buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {buttons.map((btn) => {
              const className = `px-8 py-3.5 rounded-[var(--radius-md)] text-sm font-semibold transition-all ${
                btn.variant === 'primary'
                  ? 'bg-primary text-white hover:bg-primary/90 dark:bg-accent-blue dark:hover:bg-accent-blue/90'
                  : btn.variant === 'blue'
                  ? 'bg-accent-blue text-white hover:bg-accent-blue/90'
                  : 'border-2 border-primary text-primary hover:bg-primary hover:text-white dark:border-dark-muted dark:text-dark-text dark:hover:bg-dark-card'
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
    </section>
  );
}
