import AnimateIn from './AnimateIn';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle: string;
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <AnimateIn className="text-center mb-12">
      {tag && <span className="font-mono text-xs text-accent-blue tracking-wider">{tag}</span>}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-accent-blue ${tag ? 'mt-3' : ''} mb-4`}>{title}</h2>
      <p className="text-muted dark:text-dark-muted max-w-xl mx-auto">{subtitle}</p>
    </AnimateIn>
  );
}
