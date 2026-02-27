import Link from 'next/link';
import AnimateIn from './AnimateIn';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
  href?: string;
}

export default function Card({ icon, title, description, delay = 0, href }: CardProps) {
  const inner = (
    <div className={`bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 border border-border-light dark:border-border-dark shadow-sm h-full flex flex-col transition-all duration-300 ${href ? 'group hover:shadow-lg hover:-translate-y-1 hover:border-accent-blue/30 dark:hover:border-accent-blue/30' : ''}`}>
      {/* Icon container */}
      <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 dark:bg-accent-blue/15 flex items-center justify-center text-2xl mb-5 flex-shrink-0">
        {icon}
      </div>
      <h3 className={`text-base font-semibold text-primary dark:text-dark-text mb-2.5 ${href ? 'group-hover:text-accent-blue transition-colors' : ''}`}>
        {title}
      </h3>
      <p className="text-sm text-muted dark:text-dark-muted leading-relaxed flex-1">{description}</p>
      {href && (
        <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent-blue">
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <AnimateIn delay={delay}>
      {href ? <Link href={href} className="block h-full">{inner}</Link> : inner}
    </AnimateIn>
  );
}
