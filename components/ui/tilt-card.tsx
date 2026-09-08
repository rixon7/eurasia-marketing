'use client';

// Ported from ~/Studio/clients/moveeasyme/site/src/components/tilt-card.tsx.
// The two hardcoded MoveEasyMe-orange rgba values are tokenised via
// color-mix() against --accent instead of being substituted with violet
// literals, so this card never needs touching again on a future palette
// change. Radius bumped from rounded-2xl to the exact 20px of Bento's
// `.bn-glass` (app/concepts/bento/bento.css).
import { motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';

export function TiltCard({
  children,
  className = '',
  accent = '--accent',
}: {
  children: React.ReactNode;
  className?: string;
  /** CSS custom property name (e.g. '--accent-2') to tint the hover
   * spotlight/border/glow with. Defaults to the site accent so every
   * existing caller (testimonials, work-showcase, recent-posts) is
   * unaffected — only callers that want a per-card colour pass this.
   *
   * Piped through the `--card-accent` custom property (set via inline
   * style below) rather than interpolated straight into the Tailwind
   * arbitrary-value classes: Tailwind's JIT scanner only generates CSS
   * for class strings it can see literally in source, and `accent` is
   * a runtime prop — `var(${accent})` inside a template literal would
   * produce a different class string per call that Tailwind never sees
   * at build time, so nothing would actually apply. Referencing the
   * fixed `var(--card-accent)` name keeps the class strings static
   * (Tailwind generates them once) while the colour itself still
   * varies per instance via the inline style. */
  accent?: string;
}) {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [6, -6]);
  const rotateY = useTransform(x, [-40, 40], [-6, 6]);

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const spotlight = useTransform(
    [spotX, spotY],
    ([sx, sy]) => `radial-gradient(240px circle at ${sx}% ${sy}%, color-mix(in srgb, var(--card-accent) 18%, transparent), transparent 70%)`,
  );

  const cardStyle = { '--card-accent': `var(${accent})` } as React.CSSProperties;

  const baseClassName = `group relative overflow-hidden rounded-[20px] border border-border bg-surface-glass backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_srgb,var(--card-accent)_40%,transparent)] hover:shadow-[0_0_40px_-12px_color-mix(in_srgb,var(--card-accent)_38%,transparent)] ${className}`;

  if (reduceMotion) {
    return (
      <div className={baseClassName} style={cardStyle}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
        spotX.set(((e.clientX - rect.left) / rect.width) * 100);
        spotY.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{ ...cardStyle, rotateX, rotateY, transformPerspective: 800 }}
      className={baseClassName}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlight }}
      />
      {children}
    </motion.div>
  );
}
