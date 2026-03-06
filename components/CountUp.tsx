'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function parse(value: string) {
  const match = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)([^0-9]*)$/);
  if (!match) return { number: 0, prefix: '', suffix: value };
  return { number: parseFloat(match[2]), prefix: match[1], suffix: match[3] };
}

export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  const { number, prefix, suffix } = parse(value);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * number));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, number]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
