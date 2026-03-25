import AnimateIn from './AnimateIn';
import CountUp from './CountUp';

interface StatCardProps {
  number: string;
  suffix: string;
  label: string;
  delay?: number;
}

export default function StatCard({ number, suffix, label, delay = 0 }: StatCardProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 text-center shadow-sm">
        <h3 className="text-4xl md:text-5xl font-bold text-primary dark:text-dark-text">
          <CountUp value={number} /><span className="text-accent-blue">{suffix}</span>
        </h3>
        <p className="text-sm text-muted dark:text-dark-muted mt-2">{label}</p>
      </div>
    </AnimateIn>
  );
}
