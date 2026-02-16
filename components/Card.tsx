import AnimateIn from './AnimateIn';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function Card({ icon, title, description, delay = 0 }: CardProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="gradient-border bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-primary dark:text-dark-text mb-3">{title}</h3>
        <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{description}</p>
      </div>
    </AnimateIn>
  );
}
