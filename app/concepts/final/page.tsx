import type { Metadata } from 'next';
import { Unbounded, Hanken_Grotesk, IBM_Plex_Mono } from 'next/font/google';
import CountUp from '@/components/CountUp';
import Spotlight from '../_shared/Spotlight';
import Magnetic from '../_shared/Magnetic';
import './final.css';

const display = Unbounded({ variable: '--fn-font-display', subsets: ['latin'], weight: ['700', '800'] });
const body = Hanken_Grotesk({ variable: '--fn-font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const mono = IBM_Plex_Mono({ variable: '--fn-font-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Final — Concept',
  robots: { index: false, follow: false },
};

const stats = [
  { value: '150+', label: 'BUSINESSES GROWN', fill: 78 },
  { value: '3×', label: 'AVERAGE ROI', fill: 92 },
  { value: '95%', label: 'CLIENT RETENTION', fill: 95 },
  { value: '500+', label: 'CAMPAIGNS LAUNCHED', fill: 84 },
];

const services = [
  { icon: '◈', title: 'Website Building', desc: 'Modern, responsive sites built to convert.', wide: true },
  { icon: '◇', title: 'AI Automation', desc: 'Workflows that run lead follow-ups on their own.', wide: false },
  { icon: '◆', title: 'Digital Advertising', desc: 'Search, social and display, tuned for ROI.', wide: false },
  { icon: '◉', title: 'SEO & SEM', desc: 'Local rankings and paid search, same keyword map.', wide: false },
  { icon: '◐', title: 'Social Media', desc: 'Content and community that builds an owned audience.', wide: true },
  { icon: '◑', title: 'Email Marketing', desc: 'Lifecycle sends that bring customers back.', wide: false },
];

const ticker = ['Website Building', 'AI Automation', 'Digital Advertising', 'SEO & SEM', 'Social Media', 'Email Marketing'];

export default function Final() {
  return (
    <div className={`fn ${display.variable} ${body.variable} ${mono.variable}`}>
      <div className="fn-grain" aria-hidden="true" />
      <div className="fn-mesh" aria-hidden="true">
        <div className="fn-blob fn-blob-1" />
        <div className="fn-blob fn-blob-2" />
        <div className="fn-blob fn-blob-3" />
      </div>

      <nav className="fn-nav">
        <div className="fn-nav-inner">
          <div className="fn-wordmark"><span className="fn-wordmark-dot" />EURASIA</div>
          <div className="fn-nav-links">
            <a href="#services">Services</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="fn-status-pill"><span className="fn-dot" />ACCEPTING NEW CLIENTS</div>
        </div>
      </nav>

      <div className="fn-shell">
        <section className="fn-hero">
          <Spotlight className="fn-hero-spot">
            <p className="fn-eyebrow"><span className="fn-eyebrow-dot" />HOUNSLOW · WEST LONDON</p>
            <h1 className="fn-h1">
              Marketing built like <span className="fn-grad">good software.</span>
            </h1>
            <p className="fn-sub">
              Websites, ads, SEO and AI-run workflows — shipped fast, measured constantly, and designed to compound.
            </p>
            <div className="fn-cta-row">
              <Magnetic><a className="fn-btn fn-btn-primary" href="mailto:info@eurasiamarketing.com">Start a project →</a></Magnetic>
              <Magnetic><a className="fn-btn fn-btn-ghost" href="#services">See what we build</a></Magnetic>
            </div>
          </Spotlight>

          <div className="fn-bento">
            {stats.map((s) => (
              <div className="fn-glass fn-tile" key={s.label}>
                <div className="fn-tile-top">
                  <span className="fn-tile-value"><CountUp value={s.value} /></span>
                </div>
                <span className="fn-tile-label">{s.label}</span>
                <div className="fn-bar-track"><div className="fn-bar-fill" style={{ width: `${s.fill}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        <div className="fn-marquee-wrap">
          <div className="fn-marquee-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span className="fn-marquee-item" key={i}><b>{t}</b> ✦</span>
            ))}
          </div>
        </div>

        <section className="fn-section" id="services">
          <div className="fn-section-head">
            <div>
              <p className="fn-tag">// What we ship</p>
              <h2 className="fn-section-title">Six services. One system.</h2>
            </div>
            <p className="fn-section-note">Every service is measured against the same dashboard — nothing runs in isolation.</p>
          </div>
          <div className="fn-services">
            {services.map((s) => (
              <div className={`fn-glass fn-service ${s.wide ? 'fn-service-span-2' : ''}`} key={s.title}>
                <span className="fn-service-icon">{s.icon}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="fn-service-status"><span className="fn-dot" />ACTIVE</span>
              </div>
            ))}
          </div>
        </section>

        <section className="fn-section" id="proof">
          <div className="fn-section-head">
            <div>
              <p className="fn-tag">// Client proof</p>
              <h2 className="fn-section-title">What it looks like in practice.</h2>
            </div>
          </div>
          <div className="fn-proof-grid">
            <div className="fn-glass fn-proof-card">
              <span className="fn-proof-tag">Transmission — TechFlow Solutions</span>
              <blockquote>&ldquo;Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.&rdquo;</blockquote>
              <cite><b>Amira Khan</b> — CEO, TechFlow Solutions</cite>
            </div>
            <div className="fn-glass fn-proof-card">
              <span className="fn-proof-tag">Transmission — GreenLeaf Co.</span>
              <blockquote>&ldquo;Professional, creative, and always on top of the latest trends. They feel like an extension of our team.&rdquo;</blockquote>
              <cite><b>David Morris</b> — Founder, GreenLeaf Co.</cite>
            </div>
          </div>
        </section>

        <section className="fn-section" id="contact">
          <div className="fn-glass fn-cta-panel">
            <div className="fn-terminal">
              <span className="fn-prompt">$</span> eurasia deploy <span className="fn-arg">--client=&quot;your-business&quot;</span> <span className="fn-arg">--location=hounslow</span>
            </div>
            <h2>Let&rsquo;s ship something good.</h2>
            <p>Rolling monthly plans from £100/month. No long-term lock-in — just 30 days&rsquo; notice if you ever want to cancel.</p>
            <div className="fn-cta-row">
              <Magnetic><a className="fn-btn fn-btn-primary" href="mailto:info@eurasiamarketing.com">Book a free consult</a></Magnetic>
              <Magnetic><a className="fn-btn fn-btn-ghost" href="tel:02038863311">020 3886 3311</a></Magnetic>
            </div>
            <div className="fn-cta-contact">
              <span>info@eurasiamarketing.com</span>
              <span>65-73 Staines Road, Hounslow TW3 3HW</span>
            </div>
          </div>
        </section>
      </div>

      <div className="fn-foot">
        <span>Eurasia / Final — Concept 06</span>
        <span>Not for production</span>
      </div>
    </div>
  );
}
