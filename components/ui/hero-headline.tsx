'use client';

// Ported from ~/Studio/clients/moveeasyme/site/src/components/hero-headline.tsx.
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

// flex-wrap + gap for inter-word spacing, rather than a literal space
// character as the last bit of text inside each inline-block span. The
// latter is the more obvious way to write this, but it collapses to no
// visible space at all between words — a real Chromium bug where
// `text-wrap: balance` (set on every heading in app/globals.css's base
// layer) interacts badly with inline-block boxes containing trailing
// collapsible whitespace. Flex + gap sidesteps the bug entirely rather
// than depending on text-wrap:balance behaving with inline-block.
const wrapClassName = 'flex flex-wrap gap-x-[0.28em]';

/**
 * Reveals a headline word-by-word on mount. Renders the page's single <h1>.
 *
 * `highlight` is an addition over the MoveEasyMe source: an optional list
 * of words (matched exactly, post-split) to render with the `.text-gradient`
 * treatment — e.g. HeroHeadline({ text: 'Marketing built like good
 * software.', highlight: ['good', 'software.'] }).
 */
export function HeroHeadline({
  text,
  className,
  highlight,
}: {
  text: string;
  className?: string;
  highlight?: string[];
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(' ');
  const highlightSet = new Set(highlight ?? []);

  if (reduceMotion) {
    return (
      <h1 className={`${className ?? ''} ${wrapClassName}`}>
        {words.map((w, i) => (
          <span key={i} className={highlightSet.has(w) ? 'text-gradient' : undefined}>{w}</span>
        ))}
      </h1>
    );
  }

  return (
    <motion.h1
      className={`${className ?? ''} ${wrapClassName}`}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className={highlightSet.has(w) ? 'text-gradient' : undefined}>
          {w}
        </motion.span>
      ))}
    </motion.h1>
  );
}
