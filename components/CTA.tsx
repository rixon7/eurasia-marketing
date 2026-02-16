import Link from 'next/link';
import AnimateIn from './AnimateIn';

interface CTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTA({ title, subtitle, buttonText, buttonHref }: CTAProps) {
  return (
    <section className="px-6 py-24">
      <AnimateIn>
        <div className="cta-glow max-w-[1280px] mx-auto bg-primary dark:bg-dark-surface rounded-[var(--radius-xl)] px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-dark-muted max-w-xl mx-auto mb-8">{subtitle}</p>
          <Link
            href={buttonHref}
            className="inline-block px-8 py-3.5 bg-white text-primary rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            {buttonText} &rarr;
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
