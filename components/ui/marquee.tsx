'use client';

// Ported from ~/Studio/clients/moveeasyme/site/src/components/marquee.tsx,
// retinted to Bento's mono label treatment (.bn-marquee-item).
import { useEffect, useRef } from 'react';
import { useAnimate, useReducedMotion } from 'framer-motion';

export function Marquee({ items }: { items: string[] }) {
  const reduceMotion = useReducedMotion();
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    if (items.length === 0 || reduceMotion) return;
    controlsRef.current = animate(
      scope.current,
      { x: ['0%', '-50%'] },
      { duration: 28, repeat: Infinity, ease: 'linear' },
    );
    return () => controlsRef.current?.stop();
  }, [items.length, reduceMotion, animate, scope]);

  if (items.length === 0) return null;

  const looped = reduceMotion ? items : [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-border bg-surface-glass py-4"
      onMouseEnter={() => controlsRef.current?.pause()}
      onMouseLeave={() => controlsRef.current?.play()}
    >
      <div ref={scope} className="flex w-max gap-10 whitespace-nowrap">
        {looped.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-[13px] text-foreground-faint">
            <span className="h-1 w-1 rounded-full bg-foreground-faint/60" />
            <b className="font-medium text-foreground">{item}</b>
          </span>
        ))}
      </div>
    </div>
  );
}
