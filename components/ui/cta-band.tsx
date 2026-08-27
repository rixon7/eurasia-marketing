import { AuroraBackground } from '@/components/ui/aurora-background';
import { MagneticButton } from '@/components/ui/magnetic-button';
import { Reveal } from '@/components/ui/reveal';

/**
 * Generalised from MoveEasyMe's cta-band.tsx (which hardcoded a single
 * quote-request CTA) into the shape used by Bento's own CTA panel
 * (app/concepts/bento/page.tsx "Let's ship something good.") — a title,
 * description, a primary + secondary action, and a small contact line.
 */
export function CtaBand({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  contactLines,
}: {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  contactLines?: string[];
}) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background">
      <AuroraBackground />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground-soft">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            <a
              href={primaryHref}
              target={primaryHref.startsWith('http') ? '_blank' : undefined}
              rel={primaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              {primaryLabel}
            </a>
          </MagneticButton>
          {secondaryHref && secondaryLabel && (
            <MagneticButton>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-border bg-surface-glass-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent"
              >
                {secondaryLabel}
              </a>
            </MagneticButton>
          )}
        </div>
        {contactLines && contactLines.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-foreground-faint">
            {contactLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
