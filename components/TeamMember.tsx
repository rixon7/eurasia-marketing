import AnimateIn from './AnimateIn';

interface TeamMemberProps {
  initials: string;
  name: string;
  role: string;
  delay?: number;
}

export default function TeamMember({ initials, name, role, delay = 0 }: TeamMemberProps) {
  return (
    <AnimateIn delay={delay}>
      <div className="bg-white dark:bg-dark-card rounded-[var(--radius-lg)] p-8 text-center shadow-sm">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-blue to-[#38bdf8] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
          {initials}
        </div>
        <h4 className="font-semibold text-primary dark:text-dark-text">{name}</h4>
        <p className="text-sm text-muted dark:text-dark-muted mt-1">{role}</p>
      </div>
    </AnimateIn>
  );
}
