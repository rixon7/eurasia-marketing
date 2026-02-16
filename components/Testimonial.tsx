import AnimateIn from './AnimateIn';

interface TestimonialProps {
  quote: string;
  initials: string;
  name: string;
  role: string;
  delay?: number;
}

export default function Testimonial({ quote, initials, name, role, delay = 0 }: TestimonialProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 shadow-sm">
        <blockquote className="text-primary dark:text-dark-text leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent-blue text-white flex items-center justify-center text-xs font-bold">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-primary dark:text-dark-text">{name}</p>
            <p className="text-xs text-muted dark:text-dark-muted">{role}</p>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
