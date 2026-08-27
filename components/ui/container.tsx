/**
 * Ported from ~/Studio/clients/moveeasyme/site/src/components/container.tsx.
 *
 * Gotcha: never wrap Container (or anything else with `mx-auto`) in a
 * `flex` parent — the auto margins get absorbed by flex's own margin
 * handling and the content shrink-wraps + centers instead of filling the
 * row. If you need Container to fill a flex row, put `flex items-center`
 * on Container itself (via `className`) rather than on its parent.
 */
export function Container({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>;
}
