/**
 * The six hand-drawn illustrations from the old components/WhatWeDoBest.tsx,
 * extracted and remapped for the Bento-dark palette. They were originally
 * monochrome line art (#1a1a1a strokes/fills + white/grey panels) designed
 * to sit on a light `#eef1f6` plate — invisible as-is on `#07080b`.
 *
 * Mechanical substitution applied throughout:
 *   #1a1a1a (strokes + dark fills) → currentColor  (wrapper sets text-foreground/75)
 *   white (panel fills)            → var(--background)   — reads as a cut-out, not a white block
 *   #f0f0f0 #f5f5f5 #e8e8e8        → var(--surface-glass)
 *   #e5e5e5 #e0e0e0                → var(--surface-glass-strong)
 *   #d0d0d0 #b0b0b0 #999 #666      → var(--foreground-faint)
 *
 * On top of that mechanical pass, one focal element per illustration is
 * hand-picked and set to var(--accent) or var(--accent-2) — the cursor
 * arrow, the trend line, a circuit node — so these read as designed for
 * this palette rather than just inverted.
 */
export const SERVICE_ILLUSTRATIONS: Record<string, React.ReactNode> = {
  'website-building': (
    <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="22" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="230" y="18" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="12" y="165" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="238" y="170" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      {/* Browser window */}
      <rect x="40" y="28" width="160" height="120" rx="8" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Title bar */}
      <rect x="40" y="28" width="160" height="22" rx="8" fill="currentColor" />
      <rect x="40" y="38" width="160" height="12" fill="currentColor" />
      {/* Traffic lights */}
      <circle cx="56" cy="39" r="4" fill="var(--foreground-faint)" />
      <circle cx="70" cy="39" r="4" fill="var(--foreground-faint)" />
      <circle cx="84" cy="39" r="4" fill="var(--foreground-faint)" />
      {/* Layout blocks inside browser */}
      <rect x="52" y="60" width="136" height="16" rx="3" fill="var(--surface-glass-strong)" stroke="currentColor" strokeWidth="1.5" />
      <rect x="52" y="82" width="60" height="52" rx="3" fill="var(--surface-glass)" stroke="currentColor" strokeWidth="1.5" />
      <rect x="120" y="82" width="68" height="22" rx="3" fill="var(--surface-glass-strong)" stroke="currentColor" strokeWidth="1.5" />
      <rect x="120" y="110" width="68" height="12" rx="3" fill="var(--surface-glass)" stroke="currentColor" strokeWidth="1" />
      <rect x="120" y="126" width="44" height="8" rx="2" fill="currentColor" opacity="0.15" />
      {/* Code lines in left block */}
      <line x1="60" y1="94" x2="100" y2="94" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="60" y1="102" x2="88" y2="102" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="60" y1="110" x2="96" y2="110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <line x1="60" y1="118" x2="82" y2="118" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      {/* Cursor arrow — focal element */}
      <path d="M195 148 L195 165 L200 160 L204 168 L207 167 L203 159 L210 159 Z" fill="var(--accent)" />
    </svg>
  ),

  'ai-automation': (
    <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="22" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="230" y="18" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="12" y="165" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="238" y="170" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      {/* Robot head */}
      <rect x="90" y="30" width="80" height="70" rx="10" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Eyes */}
      <rect x="105" y="48" width="18" height="14" rx="4" fill="currentColor" />
      <rect x="137" y="48" width="18" height="14" rx="4" fill="currentColor" />
      <circle cx="114" cy="55" r="4" fill="var(--background)" />
      <circle cx="146" cy="55" r="4" fill="var(--background)" />
      {/* Mouth */}
      <rect x="105" y="74" width="50" height="12" rx="4" fill="var(--surface-glass)" stroke="currentColor" strokeWidth="1.5" />
      <line x1="115" y1="74" x2="115" y2="86" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="125" y1="74" x2="125" y2="86" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="135" y1="74" x2="135" y2="86" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="145" y1="74" x2="145" y2="86" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {/* Antenna */}
      <line x1="130" y1="30" x2="130" y2="18" stroke="currentColor" strokeWidth="2" />
      <circle cx="130" cy="14" r="5" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Ears */}
      <rect x="74" y="50" width="16" height="24" rx="4" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <rect x="170" y="50" width="16" height="24" rx="4" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Body / circuit board */}
      <rect x="80" y="104" width="100" height="60" rx="8" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Circuit lines */}
      <line x1="100" y1="120" x2="160" y2="120" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="134" x2="160" y2="134" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      <line x1="100" y1="148" x2="140" y2="148" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Circuit nodes — focal elements, "active" nodes lit teal */}
      <circle cx="110" cy="120" r="4" fill="var(--accent-2)" />
      <circle cx="130" cy="120" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="120" r="4" fill="var(--accent-2)" />
      <circle cx="120" cy="134" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="140" cy="134" r="4" fill="var(--accent-2)" />
      <circle cx="160" cy="134" r="4" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      {/* Neck connector */}
      <rect x="116" y="100" width="28" height="8" rx="2" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),

  'digital-advertising': (
    <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="22" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="230" y="18" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="12" y="165" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="238" y="170" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      {/* Chart bars */}
      <rect x="46" y="110" width="28" height="58" rx="4" fill="var(--surface-glass-strong)" stroke="currentColor" strokeWidth="2" />
      <rect x="84" y="84" width="28" height="84" rx="4" fill="var(--foreground-faint)" stroke="currentColor" strokeWidth="2" />
      <rect x="122" y="60" width="28" height="108" rx="4" fill="var(--foreground-faint)" stroke="currentColor" strokeWidth="2" />
      <rect x="160" y="38" width="28" height="130" rx="4" fill="currentColor" />
      {/* Trend line + arrow tip — focal elements */}
      <polyline points="60,108 98,82 136,58 174,36" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 3" />
      <path d="M168 30 L180 34 L174 36 L176 42 Z" fill="var(--accent)" />
      {/* X axis */}
      <line x1="36" y1="170" x2="210" y2="170" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Y axis */}
      <line x1="36" y1="20" x2="36" y2="170" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Target circle top right */}
      <circle cx="210" cy="50" r="22" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <circle cx="210" cy="50" r="14" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="210" cy="50" r="6" fill="currentColor" />
    </svg>
  ),

  'social-media': (
    <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="22" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="230" y="18" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="12" y="165" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="238" y="170" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      {/* Phone */}
      <rect x="95" y="18" width="70" height="130" rx="12" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Screen */}
      <rect x="101" y="32" width="58" height="100" rx="4" fill="var(--surface-glass)" />
      {/* Notch */}
      <rect x="118" y="22" width="24" height="6" rx="3" fill="currentColor" opacity="0.4" />
      {/* Post card 1 */}
      <rect x="105" y="36" width="50" height="40" rx="3" fill="var(--surface-glass-strong)" stroke="currentColor" strokeWidth="1" />
      <rect x="105" y="80" width="32" height="5" rx="2" fill="currentColor" opacity="0.3" />
      <rect x="105" y="89" width="44" height="4" rx="2" fill="currentColor" opacity="0.15" />
      {/* Like / comment row — heart is the focal element */}
      <circle cx="111" cy="104" r="5" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M108 104 C108 102 114 102 114 104 C114 106 111 108 111 108 C111 108 108 106 108 104Z" fill="var(--accent-3)" />
      <rect x="120" y="99" width="18" height="10" rx="3" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      {/* Post card 2 partial */}
      <rect x="105" y="116" width="50" height="14" rx="3" fill="var(--surface-glass)" stroke="currentColor" strokeWidth="1" />
      {/* Floating icons */}
      <circle cx="54" cy="60" r="18" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <text x="47" y="66" fontSize="15">📷</text>
      <circle cx="206" cy="80" r="18" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <text x="198" y="86" fontSize="15">👍</text>
      <circle cx="50" cy="130" r="14" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <text x="43" y="136" fontSize="12" fill="currentColor">in</text>
      <circle cx="210" cy="135" r="14" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <text x="203" y="141" fontSize="11" fill="currentColor">𝕏</text>
    </svg>
  ),

  'seo-sem': (
    <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="22" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="230" y="18" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="12" y="165" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="238" y="170" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      {/* Globe */}
      <circle cx="120" cy="105" r="72" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Latitude lines */}
      <ellipse cx="120" cy="105" rx="72" ry="28" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <ellipse cx="120" cy="105" rx="72" ry="56" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.15" />
      {/* Longitude lines */}
      <ellipse cx="120" cy="105" rx="30" ry="72" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      <line x1="120" y1="33" x2="120" y2="177" stroke="currentColor" strokeWidth="1.2" opacity="0.25" />
      {/* Map pin — focal element */}
      <path d="M148 62 C148 50 162 44 170 54 C178 64 170 78 158 90 C146 78 148 74 148 62Z" fill="var(--accent)" />
      <circle cx="159" cy="62" r="6" fill="var(--background)" />
      {/* Magnifying glass */}
      <circle cx="76" cy="70" r="28" fill="var(--background)" stroke="currentColor" strokeWidth="3" />
      <circle cx="76" cy="70" r="18" fill="var(--surface-glass)" stroke="currentColor" strokeWidth="2" />
      <line x1="97" y1="91" x2="116" y2="110" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Search lines inside glass */}
      <line x1="66" y1="64" x2="86" y2="64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="66" y1="72" x2="82" y2="72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="66" y1="80" x2="78" y2="80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* Smiley on globe */}
      <circle cx="168" cy="142" r="16" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      <circle cx="163" cy="138" r="2" fill="currentColor" />
      <circle cx="173" cy="138" r="2" fill="currentColor" />
      <path d="M162 144 Q168 150 174 144" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  ),

  'email-marketing': (
    <svg viewBox="0 0 260 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <text x="18" y="22" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="230" y="18" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="12" y="165" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      <text x="238" y="170" fontSize="16" fill="currentColor" opacity="0.3">+</text>
      {/* Main envelope */}
      <rect x="38" y="60" width="160" height="110" rx="8" fill="var(--background)" stroke="currentColor" strokeWidth="2" />
      {/* Envelope flap */}
      <path d="M38 60 L118 118 L198 60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round" />
      {/* Envelope bottom creases */}
      <path d="M38 170 L88 118" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M198 170 L148 118" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      {/* Notification badge — focal element */}
      <circle cx="185" cy="52" r="20" fill="var(--accent-2)" />
      <text x="178" y="58" fontSize="14" fill="var(--accent-foreground)" fontWeight="bold">3</text>
      {/* Flying paper planes */}
      <path d="M32 30 L56 42 L44 48 Z" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M44 48 L50 38 L56 42" fill="var(--surface-glass-strong)" stroke="currentColor" strokeWidth="1" />
      <line x1="44" y1="48" x2="48" y2="56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      <path d="M200 22 L224 34 L212 40 Z" fill="var(--background)" stroke="currentColor" strokeWidth="1.5" />
      <path d="M212 40 L218 30 L224 34" fill="var(--surface-glass-strong)" stroke="currentColor" strokeWidth="1" />
    </svg>
  ),
};
