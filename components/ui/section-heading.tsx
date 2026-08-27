// Reconciles three conventions: MoveEasyMe's section-heading.tsx shape,
// Eurasia's existing `// ` eyebrow prefix (components/SectionHeader.tsx),
// and Bento's two-column `.bn-section-head` layout (a `note` on the right,
// used when a section needs a short qualifying line next to its title).
export function SectionHeading({
  eyebrow,
  title,
  description,
  note,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  note?: string;
  align?: 'left' | 'center';
}) {
  const heading = (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs tracking-[0.04em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-foreground-soft">{description}</p>
      )}
    </div>
  );

  if (!note) return heading;

  return (
    <div className="flex flex-wrap items-baseline justify-between gap-6">
      {heading}
      <p className="max-w-[300px] text-sm text-foreground-faint">{note}</p>
    </div>
  );
}
