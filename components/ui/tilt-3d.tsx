'use client';

// Generic 3D-tilt + idle-float wrapper, same spirit as tilt-card.tsx but
// for text/headline content rather than a card surface: a CSS `perspective`
// context holds a motion.div whose rotateX/rotateY track the cursor
// (independent motion values, driven via `style`) while a separate
// `animate`/`transition` pair drives a gentle continuous y-float. These
// are two different mechanisms (external motion values vs. the built-in
// animate prop) but framer-motion composes every transform-related key —
// x/y/rotateX/rotateY/etc., regardless of which mechanism set them — into
// one combined `transform`, so the float and the cursor-tilt combine
// correctly without a prop conflict (unlike stacking two `animate` calls
// on the same element, which *would* conflict — see channel-network.tsx's
// entrance/float split for that gotcha).
import { useReducedMotion, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function Tilt3D({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 100, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 100, damping: 18 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      className={className}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
