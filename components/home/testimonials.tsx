import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';
import { TiltCard } from '@/components/ui/tilt-card';

type Testimonial = { quote: string; initials: string; name: string; role: string };

// Restyled from components/Testimonial.tsx + its usage in app/page.tsx.
// Quote/name/role copy is unchanged — kept exactly as-is per user
// confirmation these are real clients.
export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="border-y border-border bg-surface-sunken py-20">
      <Container>
        <SectionHeading align="center" eyebrow="// Client Reviews" title="What Our Clients Say" description="Don't take our word for it" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <TiltCard className="flex h-full flex-col p-8">
                <div className="mb-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="var(--highlight)" className="flex-shrink-0">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-accent-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-foreground-faint">{t.role}</p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
