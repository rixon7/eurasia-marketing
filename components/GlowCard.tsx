'use client';

import { useRef, useState } from 'react';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, visible: true });
  }

  function handleMouseLeave() {
    setGlow(prev => ({ ...prev, visible: false }));
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: glow.visible ? 1 : 0,
          background: `radial-gradient(280px circle at ${glow.x}px ${glow.y}px, rgba(33,150,243,0.13), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
