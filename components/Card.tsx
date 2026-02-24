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
    <div className={`gradient-border bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 shadow-sm hover:shadow-md transition-shadow h-full ${href ? 'group' : ''}`}>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className={`text-lg font-semibold text-primary dark:text-dark-text mb-3 ${href ? 'group-hover:text-accent-blue transition-colors' : ''}`}>{title}</h3>
      <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{description}</p>
      {href && <p className="mt-4 text-xs font-semibold text-accent-blue">Learn more →</p>}
    </div>
  );

  return (
    <AnimateIn delay={delay}>
      {href ? <Link href={href} className="block h-full">{inner}</Link> : inner}
    </AnimateIn>
  );
}
