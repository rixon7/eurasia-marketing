'use client';

// Ported from ~/Studio/clients/moveeasyme/site/src/components/aurora-background.tsx.
// Added a third blob on --accent-3 to mirror Bento's three-blob mesh
// (.bn-blob-1/2/3 are violet .35 / teal .35 / amber .22 — see
// app/concepts/bento/bento.css) and tightened the blur from 100px to 70px
// to match Bento's `filter: blur(70px)`.
import { motion } from 'framer-motion';

export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: ['-10%', '10%', '-10%'], y: ['-5%', '8%', '-5%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-1/4 top-[-20%] h-[700px] w-[700px] rounded-full opacity-40 blur-[70px]"
        style={{ background: 'radial-gradient(circle, var(--accent-from) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: ['5%', '-8%', '5%'], y: ['0%', '10%', '0%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[-15%] top-[10%] h-[600px] w-[600px] rounded-full opacity-30 blur-[70px]"
        style={{ background: 'radial-gradient(circle, var(--accent-2) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: ['0%', '-6%', '0%'], y: ['5%', '-8%', '5%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-20%] left-1/3 h-[480px] w-[480px] rounded-full opacity-25 blur-[70px]"
        style={{ background: 'radial-gradient(circle, var(--accent-3) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
}
