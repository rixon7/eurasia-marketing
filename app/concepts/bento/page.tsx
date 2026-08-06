import type { Metadata } from 'next';
import { Instrument_Sans, Manrope, JetBrains_Mono } from 'next/font/google';
import CountUp from '@/components/CountUp';
import Spotlight from '../_shared/Spotlight';
import Magnetic from '../_shared/Magnetic';
import './bento.css';

const display = Instrument_Sans({ variable: '--bn-font-display', subsets: ['latin'], weight: ['600', '700'] });
const body = Manrope({ variable: '--bn-font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const mono = JetBrains_Mono({ variable: '--bn-font-mono', subsets: ['latin'], weight: ['400', '500'] });

export const metadata: Metadata = {
  title: 'Bento — Concept',
  robots: { index: false, follow: false },
};

const stats = [
  { value: '150+', label: 'Businesses grown across West London' },
  { value: '3×', label: 'Average ROI on marketing spend' },
  { value: '95%', label: 'Client retention rate' },
  { value: '500+', label: 'Campaigns successfully launched' },
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

export default function Bento() {
  return (
    <div className={`bn ${display.variable} ${body.variable} ${mono.variable}`}>
      <div className="bn-grain" aria-hidden="true" />
      <div className="bn-mesh" aria-hidden="true">
        <div className="bn-blob bn-blob-1" />
        <div className="bn-blob bn-blob-2" />
        <div className="bn-blob bn-blob-3" />
      </div>

      <nav className="bn-nav">
        <div className="bn-nav-inner">
          <div className="bn-wordmark"><span className="bn-wordmark-dot" />Eurasia</div>
          <div className="bn-nav-links">
            <a href="#services">Services</a>
            <a href="#proof">Proof</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="bn-nav-cta" href="mailto:info@eurasiamarketing.com">Book a call</a>
        </div>
      </nav>

      <div className="bn-shell">
        <section className="bn-hero">
          <Spotlight className="bn-hero-spot">
            <p className="bn-eyebrow"><span className="bn-eyebrow-dot" />HOUNSLOW · WEST LONDON</p>
            <h1 className="bn-h1">
              Marketing built like <span className="bn-grad">good software.</span>
            </h1>
            <p className="bn-sub">
              Websites, ads, SEO and AI-run workflows — shipped fast, measured constantly, and designed to compound.
            </p>
            <div className="bn-cta-row">
              <Magnetic><a className="bn-btn bn-btn-primary" href="mailto:info@eurasiamarketing.com">Start a project →</a></Magnetic>
              <Magnetic><a className="bn-btn bn-btn-ghost" href="#services">See what we build</a></Magnetic>
            </div>
          </Spotlight>

          <div className="bn-bento">
            {stats.map((s) => (
              <div className="bn-glass bn-tile" key={s.label}>
                <span className="bn-tile-value"><CountUp value={s.value} /></span>
                <span className="bn-tile-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bn-marquee-wrap">
          <div className="bn-marquee-track">
            {[...ticker, ...ticker].map((t, i) => (
              <span className="bn-marquee-item" key={i}><b>{t}</b> ✦</span>
            ))}
          </div>
        </div>

        <section className="bn-section" id="services">
          <div className="bn-section-head">
            <div>
              <p className="bn-tag">// What we ship</p>
              <h2 className="bn-section-title">Six services. One system.</h2>
            </div>
            <p className="bn-section-note">Every service is measured against the same dashboard — nothing runs in isolation.</p>
          </div>
          <div className="bn-services">
            {services.map((s) => (
              <div className={`bn-glass bn-service ${s.wide ? 'bn-service-span-2' : ''}`} key={s.title}>
                <span className="bn-service-icon">{s.icon}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bn-section" id="proof">
          <div className="bn-section-head">
            <div>
              <p className="bn-tag">// Client proof</p>
              <h2 className="bn-section-title">What it looks like in practice.</h2>
            </div>
          </div>
          <div className="bn-proof-grid">
            <div className="bn-glass bn-proof-card">
              <blockquote>&ldquo;Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.&rdquo;</blockquote>
              <cite><b>Amira Khan</b> — CEO, TechFlow Solutions</cite>
            </div>
            <div className="bn-glass bn-proof-card">
              <blockquote>&ldquo;Professional, creative, and always on top of the latest trends. They feel like an extension of our team.&rdquo;</blockquote>
              <cite><b>David Morris</b> — Founder, GreenLeaf Co.</cite>
            </div>
          </div>
        </section>

        <section className="bn-section" id="contact">
          <div className="bn-glass bn-cta-panel">
            <h2>Let&rsquo;s ship something good.</h2>
            <p>Rolling monthly plans from £100/month. No long-term lock-in — just 30 days&rsquo; notice if you ever want to cancel.</p>
            <div className="bn-cta-row">
              <Magnetic><a className="bn-btn bn-btn-primary" href="mailto:info@eurasiamarketing.com">Book a free consult</a></Magnetic>
              <Magnetic><a className="bn-btn bn-btn-ghost" href="tel:02038863311">020 3886 3311</a></Magnetic>
            </div>
            <div className="bn-cta-contact">
              <span>info@eurasiamarketing.com</span>
              <span>65-73 Staines Road, Hounslow TW3 3HW</span>
            </div>
          </div>
        </section>
      </div>

      <div className="bn-foot">
        <span>Eurasia / Bento — Concept 04</span>
        <span>Not for production</span>
      </div>
    </div>
  );
}
