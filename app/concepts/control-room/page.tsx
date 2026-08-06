import type { Metadata } from 'next';
import { Unbounded, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import './control-room.css';

const display = Unbounded({ variable: '--cr-font-display', subsets: ['latin'], weight: ['700', '800', '900'] });
const body = Hanken_Grotesk({ variable: '--cr-font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const mono = IBM_Plex_Mono({ variable: '--cr-font-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Control Room — Concept',
  robots: { index: false, follow: false },
};

const modules = [
  { code: 'MOD.01', title: 'Website Building', desc: 'Fast, conversion-built sites — SEO-ready from the first deploy.' },
  { code: 'MOD.02', title: 'AI Automation', desc: 'Workflows that run lead follow-ups and reporting without a human in the loop.' },
  { code: 'MOD.03', title: 'Digital Advertising', desc: 'Search, social, and display campaigns tuned to a target ROAS.' },
  { code: 'MOD.04', title: 'SEO & SEM', desc: 'Local rankings and paid search working the same keyword map.' },
  { code: 'MOD.05', title: 'Social Media', desc: 'Content and community management your audience actually follows.' },
  { code: 'MOD.06', title: 'Email Marketing', desc: 'Lifecycle sends that turn one-time buyers into repeat ones.' },
];

const readouts = [
  { label: 'Businesses grown', value: '150+', fill: 78 },
  { label: 'Average ROI', value: '3.0×', fill: 92 },
  { label: 'Client retention', value: '95%', fill: 95 },
  { label: 'Campaigns launched', value: '500+', fill: 84 },
];

export default function ControlRoom() {
  return (
    <div className={`cr ${display.variable} ${body.variable} ${mono.variable}`}>
      <nav className="cr-nav">
        <div className="cr-nav-inner">
          <div className="cr-wordmark">
            EURASIA <span>/ SIGNAL</span>
          </div>
          <div className="cr-nav-links">
            <a href="#modules">Modules</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="cr-status-pill cr-mono">
            <span className="cr-dot" /> ACCEPTING NEW CLIENTS
          </div>
        </div>
      </nav>

      <div className="cr-shell">
        <section className="cr-hero">
          <div>
            <p className="cr-eyebrow cr-mono">HOUNSLOW, LONDON — WEST LONDON COVERAGE</p>
            <h1 className="cr-h1">
              EVERY CAMPAIGN, <em>ON THE RECORD.</em>
            </h1>
            <p className="cr-sub">
              Website builds, paid ads, SEO, and AI-run workflows for West London businesses — tracked, tuned, and reported on, every single week.
            </p>
            <div className="cr-cta-row">
              <a className="cr-btn cr-btn-primary" href="mailto:info@eurasiamarketing.com">Start tracking →</a>
              <a className="cr-btn cr-btn-ghost" href="#modules">See all modules ↓</a>
            </div>
          </div>

          <div className="cr-panel">
            <div className="cr-panel-head cr-mono">
              <span>READOUT — LIVE</span>
              <span className="cr-live">● ONLINE</span>
            </div>
            {readouts.map((r) => (
              <div className="cr-readout-row" key={r.label}>
                <div className="cr-readout-top">
                  <span className="cr-readout-label cr-mono">{r.label}</span>
                  <span className="cr-readout-value">{r.value}</span>
                </div>
                <div className="cr-bar-track">
                  <div className="cr-bar-fill" style={{ width: `${r.fill}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cr-section" id="modules">
          <div className="cr-section-head">
            <div>
              <p className="cr-section-tag cr-mono">MODULE INDEX</p>
              <h2 className="cr-section-title">Six systems. One control room.</h2>
            </div>
            <p className="cr-section-note">Every module reports into the same dashboard — nothing runs in a silo.</p>
          </div>
          <div className="cr-modules">
            {modules.map((m) => (
              <div className="cr-module" key={m.code}>
                <span className="cr-module-index cr-mono">{m.code}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <span className="cr-module-status cr-mono">● ACTIVE</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cr-section" id="proof">
          <div className="cr-section-head">
            <div>
              <p className="cr-section-tag cr-mono">INCOMING TRANSMISSIONS</p>
              <h2 className="cr-section-title">What clients report back.</h2>
            </div>
          </div>
          <div className="cr-transmissions">
            <div className="cr-transmission">
              <span className="cr-transmission-tag cr-mono">TRANSMISSION — TECHFLOW SOLUTIONS</span>
              <blockquote>&ldquo;Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.&rdquo;</blockquote>
              <cite><b>Amira Khan</b> — CEO, TechFlow Solutions</cite>
            </div>
            <div className="cr-transmission">
              <span className="cr-transmission-tag cr-mono">TRANSMISSION — GREENLEAF CO.</span>
              <blockquote>&ldquo;Professional, creative, and always on top of the latest trends. They feel like an extension of our team.&rdquo;</blockquote>
              <cite><b>David Morris</b> — Founder, GreenLeaf Co.</cite>
            </div>
          </div>
        </section>

        <section className="cr-cta" id="contact">
          <div className="cr-terminal cr-mono">
            <span className="cr-prompt">$</span> eurasia deploy <span className="cr-arg">--client=&quot;your-business&quot;</span> <span className="cr-arg">--location=hounslow</span>
          </div>
          <h2>Ready when you are.</h2>
          <p>Rolling monthly plans from £100/month, no long-term lock-in — just 30 days&rsquo; notice if you ever want to cancel.</p>
          <div className="cr-cta-row">
            <a className="cr-btn cr-btn-primary" href="mailto:info@eurasiamarketing.com">Book a free consult</a>
            <a className="cr-btn cr-btn-ghost" href="tel:02038863311">020 3886 3311</a>
          </div>
          <div className="cr-cta-contact cr-mono">
            <span>info@eurasiamarketing.com</span>
            <span>65-73 Staines Road, Hounslow TW3 3HW</span>
          </div>
        </section>
      </div>

      <div className="cr-foot cr-mono">
        <span>EURASIA / SIGNAL — CONCEPT 01</span>
        <span>NOT FOR PRODUCTION</span>
      </div>
    </div>
  );
}
