'use client';

// Ported from ~/Studio/clients/moveeasyme/site/src/components/counter.tsx.
import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Counts up from 0 to `value` once it scrolls into view. */
export function Counter({
  value,
  decimals = 0,
  duration = 1.4,
  locale = 'en-GB',
  className,
}: {
  value: number;
  decimals?: number;
  duration?: number;
  locale?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: setDisplay,
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  const shown = reduceMotion ? value : display;
  const formatted = new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(shown);

  return (
    <span ref={ref} className={className}>
      {formatted}
    </span>
  );
}
