import Link from 'next/link';
import AnimateIn from './AnimateIn';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTA({ title, subtitle, buttonText, buttonHref, secondaryText, secondaryHref }: CTAProps) {
  return (
    <section className="px-4 sm:px-6 py-12 md:py-24">
      <AnimateIn>
        <div className="cta-gradient max-w-[1280px] mx-auto rounded-[var(--radius-xl)] px-5 sm:px-8 py-10 sm:py-14 md:py-20 text-center">
          {/* Small label */}
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-mono tracking-wider mb-4 sm:mb-5">
            Ready to grow?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 sm:mb-4">{title}</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-7 sm:mb-10 text-base sm:text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-white text-primary rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5 shadow-lg"
            >
              {buttonText} →
            </Link>
            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/20 transition-all"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
