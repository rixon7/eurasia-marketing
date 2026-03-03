import AnimateIn from './AnimateIn';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessStep({ number, title, description, delay = 0 }: ProcessStepProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-5 sm:p-8 shadow-sm">
        <span className="font-mono text-3xl font-bold text-accent-blue/30">{number}</span>
        <h3 className="text-lg font-semibold text-primary dark:text-dark-text mt-3 mb-3">{title}</h3>
        <p className="text-sm text-muted dark:text-dark-muted leading-relaxed">{description}</p>
      </div>
    </AnimateIn>
  );
}
