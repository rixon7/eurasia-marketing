import Link from 'next/link';
import { Spotlight } from '@/components/ui/spotlight';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { HeroHeadline } from '@/components/ui/hero-headline';
import { Counter } from '@/components/ui/counter';
import { Container } from '@/components/ui/container';
import { parseStatValue } from '@/lib/stat-format';

type Stat = { value: string; label: string };

/**
 * The homepage hero — Bento's `.bn-hero-spot` glass panel (a Spotlight-
 * wrapped card with a cursor-tracked violet radial, see the `bg-[radial-
 * gradient(...)]` below) containing a mono eyebrow, the word-by-word H1,
 * subtitle, CTA row, and the 4-tile stat bento.
 *
 * A plain server component — Spotlight/HeroHeadline/MagneticButton/Counter
 * are all client leaves it renders, so the hero itself doesn't need
 * 'use client'. Per the Container gotcha (components/ui/container.tsx):
 * `flex items-center` lives on Container itself below, not on a wrapping
 * flex parent.
 */
export function HomeHero({
  heroTitle,
  heroHighlight,
  heroSubtitle,
  stats,
}: {
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  stats: Stat[];
}) {
  const headline = `${heroTitle} ${heroHighlight}`;
  const highlightWords = heroHighlight.split(' ');

  return (
    <section className="pb-8 pt-12 sm:pt-16">
      <Container>
        <Spotlight
          className="relative overflow-hidden rounded-[28px] border border-border bg-[radial-gradient(480px_circle_at_var(--spot-x,30%)_var(--spot-y,20%),color-mix(in_srgb,var(--accent)_18%,transparent),transparent_60%),var(--surface-glass)] px-6 py-16 sm:px-12 sm:py-20"
        >
          <p className="mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-[0.04em] text-accent-2">
            <span className="eyebrow-dot h-1.5 w-1.5 rounded-full bg-accent-2" />
            HOUNSLOW · WEST LONDON
          </p>

          <HeroHeadline
            text={headline}
            highlight={highlightWords}
            className="max-w-[720px] text-[clamp(38px,6vw,66px)] font-bold leading-[1.03] text-foreground"
          />

          <p className="mt-6 max-w-[480px] text-[17px] leading-relaxed text-foreground-soft">
            {heroSubtitle}
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <MagneticButton>
              <a
                href="https://calendly.com/rixon7/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3.5 text-sm font-semibold text-accent-foreground transition hover:brightness-110"
              >
                Get a Free Quote →
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-glass-strong px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
              >
                Explore our services
              </Link>
            </MagneticButton>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {stats.map((stat) => {
              const { prefix, number, suffix } = parseStatValue(stat.value);
              return (
                <div
                  key={stat.label}
                  className="flex min-h-[128px] flex-col justify-between rounded-[20px] border border-border bg-surface-glass p-[22px] backdrop-blur-xl transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-border-strong"
                >
                  <span className="font-display text-[30px] font-bold tabular-nums text-foreground">
                    {prefix}
                    {number !== null ? <Counter value={number} /> : stat.value}
                    {suffix}
                  </span>
                  <span className="mt-2 text-xs text-foreground-faint">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </Spotlight>
      </Container>
    </section>
  );
}
