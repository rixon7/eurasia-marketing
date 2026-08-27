'use client';

// Already existed at app/concepts/_shared/Spotlight.tsx (built for the
// Bento concept preview) — copied here as a named export so the homepage
// rebuild can depend on it without importing from the /concepts tree.
import { useRef } from 'react';

export function Spotlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  }

  return (
    <div ref={ref} className={className} onMouseMove={handleMove}>
      {children}
    </div>
  );
}
