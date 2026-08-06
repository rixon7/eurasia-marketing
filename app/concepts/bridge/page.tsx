import type { Metadata } from 'next';
import { Fraunces, Work_Sans, Space_Mono } from 'next/font/google';
import './bridge.css';

const display = Fraunces({ variable: '--br-font-display', subsets: ['latin'], weight: ['500', '600'], style: ['normal', 'italic'] });
const body = Work_Sans({ variable: '--br-font-body', subsets: ['latin'], weight: ['400', '500', '600'] });
const mono = Space_Mono({ variable: '--br-font-mono', subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Bridge — Concept',
  robots: { index: false, follow: false },
};

const services = [
  { title: 'Website Building', desc: 'Modern, responsive websites built to convert visitors into customers.' },
  { title: 'AI Automation', desc: 'Custom workflows that automate lead follow-ups and reporting.' },
  { title: 'Digital Advertising', desc: 'Targeted campaigns across search, social, and display.' },
  { title: 'SEO & SEM', desc: 'Local rankings and paid search working toward the same keywords.' },
  { title: 'Social Media', desc: 'Content and community management that builds an owned audience.' },
  { title: 'Email Marketing', desc: 'Lifecycle sends that turn one-time buyers into regulars.' },
];

export default function Bridge() {
  return (
    <div className={`br ${display.variable} ${body.variable} ${mono.variable}`}>
      <nav className="br-nav">
        <div className="br-nav-inner">
          <div className="br-wordmark">Eurasia</div>
          <div className="br-nav-links">
            <a href="#services">Services</a>
            <a href="#proof">Clients</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="br-hero">
        <div className="br-hero-left">
          <p className="br-eyebrow">Eurasia Marketing — Hounslow, London</p>
          <h1 className="br-h1 br-serif">
            Marketing that moves <em>between worlds.</em>
          </h1>
          <p className="br-sub">
            A Hounslow-born agency for businesses with globally-minded ambitions — websites, advertising, and AI-run workflows built to carry your brand further.
          </p>
          <div className="br-cta-row">
            <a className="br-btn br-btn-primary" href="mailto:info@eurasiamarketing.com">Start the conversation</a>
            <a className="br-link" href="#services">Read our approach ↓</a>
          </div>
        </div>
        <div className="br-hero-right">
          <div className="br-meridian">
            <div className="br-globe">
              <div className="br-meridian-line" style={{ width: '38%', left: '31%', transform: 'rotate(0deg)' }} />
              <div className="br-meridian-line" style={{ width: '38%', left: '31%', transform: 'rotate(60deg)' }} />
              <div className="br-meridian-line" style={{ width: '38%', left: '31%', transform: 'rotate(120deg)' }} />
              <div className="br-lat-line" style={{ top: '32%' }} />
              <div className="br-lat-line" style={{ top: '68%' }} />
              <div className="br-marker" style={{ top: '30%', left: '58%' }} />
              <div className="br-marker-label" style={{ top: '32%', left: '64%' }}>51.4685°N, 0.3614°W</div>
              <div className="br-marker-label" style={{ top: '38%', left: '64%' }}>Hounslow</div>
            </div>
          </div>
        </div>
      </section>

      <div className="br-shell">
        <div className="br-proof" id="proof">
          <span><b>150+</b> businesses</span>
          <span className="sep">·</span>
          <span><b>3.0×</b> average ROI</span>
          <span className="sep">·</span>
          <span><b>95%</b> retention</span>
          <span className="sep">·</span>
          <span><b>500+</b> campaigns</span>
        </div>

        <section className="br-section" id="services">
          <p className="br-section-tag">What We Carry Across</p>
          <h2 className="br-section-title br-serif">Six disciplines, one line of thinking.</h2>
          <div>
            {services.map((s, i) => (
              <div className="br-list-row" key={s.title}>
                <span className="br-list-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="br-list-title">{s.title}</span>
                <span className="br-list-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="br-quote-wrap">
          <span className="br-quote-mark" aria-hidden="true">&rdquo;</span>
          <p className="br-quote">Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.</p>
          <p className="br-quote-cite"><b>Amira Khan</b> — CEO, TechFlow Solutions</p>
        </section>

        <section className="br-cta" id="contact">
          <h2>Let&rsquo;s build the bridge.</h2>
          <p>Rolling monthly plans from £100/month. No long-term contracts — just 30 days&rsquo; notice if you ever want to cancel.</p>
          <div className="br-cta-row">
            <a className="br-btn br-btn-primary" href="mailto:info@eurasiamarketing.com">Get in touch</a>
            <a className="br-link" href="tel:02038863311">020 3886 3311</a>
          </div>
          <div className="br-cta-contact">
            <span>info@eurasiamarketing.com</span>
            <span>65-73 Staines Road, Hounslow TW3 3HW</span>
          </div>
        </section>
      </div>

      <div className="br-foot">
        <span>Eurasia / Bridge — Concept 03</span>
        <span>51.4685°N / 0.3614°W — not for production</span>
      </div>
    </div>
  );
}
