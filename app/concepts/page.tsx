import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Design Concepts',
  robots: { index: false, follow: false },
};

const concepts = [
  {
    href: '/concepts/control-room',
    name: 'Control Room',
    description: 'Dark, data-dashboard energy for a results- and automation-driven agency. Graphite surfaces, signal-orange accent, tabular stat readouts.',
  },
  {
    href: '/concepts/departures',
    name: 'Departures',
    description: 'Hyper-local West London identity inspired by the transit line-map running through Hounslow. Tunnel-navy ground, roundel red and amber, bold poster type.',
  },
  {
    href: '/concepts/bridge',
    name: 'Bridge',
    description: 'Leans into the "Eurasia" name itself — East meets West. Deep teal and gold, editorial serif display, split-canvas hero.',
  },
  {
    href: '/concepts/bento',
    name: 'Bento',
    description: 'Dark glassmorphic bento-grid SaaS look — the current Linear/Vercel-style agency aesthetic. Mesh-gradient blobs, cursor spotlight, magnetic buttons, glass cards.',
  },
  {
    href: '/concepts/aurora',
    name: 'Aurora',
    description: 'Light maximalist editorial with an animated aurora-gradient hero, huge kinetic type, grain texture, and cursor-reactive glow — the current Awwwards-style agency look.',
  },
  {
    href: '/concepts/final',
    name: 'Final — Bento × Control Room',
    description: 'Bento’s glass bento-grid layout and motion, re-fonted with Control Room’s Unbounded / Hanken Grotesk / IBM Plex Mono pairing and its signal-orange + cyan accent duo. Includes the terminal CTA detail.',
  },
];

export default function ConceptsIndex() {
  return (
    <div style={{ minHeight: '100vh', background: '#0b0e12', color: '#e7eaee', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 880, margin: '0 auto', padding: '80px 24px' }}>
        <p style={{ fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8a95a6', marginBottom: 12 }}>
          Internal preview — not linked from the live site
        </p>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, marginBottom: 16, lineHeight: 1.15 }}>
          Three directions for eurasiamarketing.com
        </h1>
        <p style={{ fontSize: 17, color: '#a6afbb', lineHeight: 1.6, marginBottom: 48, maxWidth: 640 }}>
          Each is a full standalone landing page built with the real site content — same services, same stats, same client quotes — styled as a distinct visual identity. Open each on its own and compare.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {concepts.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{
                display: 'block',
                padding: '28px 28px',
                borderRadius: 14,
                border: '1px solid #232830',
                background: '#12161c',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
                <h2 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{c.name}</h2>
                <span style={{ fontSize: 13, color: '#8a95a6' }}>{c.href} →</span>
              </div>
              <p style={{ fontSize: 15, color: '#a6afbb', lineHeight: 1.6, margin: 0 }}>{c.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
