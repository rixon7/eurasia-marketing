import type { Metadata } from 'next';
import { Bricolage_Grotesque, Archivo, Fragment_Mono } from 'next/font/google';
import Spotlight from '../_shared/Spotlight';
import Magnetic from '../_shared/Magnetic';
import './aurora.css';

const display = Bricolage_Grotesque({ variable: '--au-font-display', subsets: ['latin'], weight: ['500', '700'] });
const body = Archivo({ variable: '--au-font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const mono = Fragment_Mono({ variable: '--au-font-mono', subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Aurora — Concept',
  robots: { index: false, follow: false },
};

const proof = [
  { value: '150+', label: 'Businesses grown' },
  { value: '3×', label: 'Average ROI' },
  { value: '95%', label: 'Client retention' },
  { value: '500+', label: 'Campaigns launched' },
];

const features = [
  { title: 'Website Building', desc: 'Modern, responsive websites built to convert visitors into customers — fast, SEO-ready, and beautifully designed.' },
  { title: 'AI Automation', desc: 'Custom AI workflows that automate lead follow-ups, reporting, and the busywork that eats your week.' },
  { title: 'Digital Advertising', desc: 'Targeted campaigns across search, social, and display that maximise return on every pound spent.' },
  { title: 'SEO & SEM', desc: 'Local rankings and paid search working from the same keyword map, not two separate strategies.' },
  { title: 'Social Media', desc: 'Content and community management that builds an audience you actually own.' },
  { title: 'Email Marketing', desc: 'Lifecycle sends that turn one-time buyers into customers who come back.' },
];

const ticker = ['Websites', 'AI Automation', 'Paid Ads', 'SEO', 'Social', 'Email'];

export default function Aurora() {
  return (
    <div className={`au ${display.variable} ${body.variable} ${mono.variable}`}>
      <nav className="au-nav">
        <div className="au-nav-inner">
          <div className="au-wordmark">Eurasia</div>
          <div className="au-nav-links">
            <a href="#work">Services</a>
            <a href="#proof">Clients</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="au-nav-cta" href="mailto:info@eurasiamarketing.com">Book a call</a>
        </div>
      </nav>

      <div className="au-hero-wrap">
        <Spotlight className="au-hero">
          <div className="au-aurora-bg" aria-hidden="true" />
          <div className="au-grain" aria-hidden="true" />
          <div className="au-hero-spot" aria-hidden="true" />
          <p className="au-eyebrow">Eurasia Marketing — Hounslow, London</p>
          <h1 className="au-h1">
            Marketing with <em>momentum.</em>
          </h1>
          <p className="au-sub">
            Websites, ads, SEO and AI-run workflows for West London businesses who want to look like the biggest thing in the room.
          </p>
          <div className="au-cta-row">
            <Magnetic><a className="au-btn au-btn-primary" href="mailto:info@eurasiamarketing.com">Start a project →</a></Magnetic>
            <Magnetic><a className="au-btn au-btn-ghost" href="#work">See our services</a></Magnetic>
          </div>
        </Spotlight>
      </div>

      <div className="au-marquee-wrap">
        <div className="au-marquee-track">
          {[...ticker, ...ticker].map((t, i) => (
            <span className="au-marquee-item" key={i}>{t} <span>✺</span></span>
          ))}
        </div>
      </div>

      <div className="au-shell">
        <div className="au-proof-strip" id="proof">
          {proof.map((p) => (
            <div key={p.label}>
              <b>{p.value}</b>
              {p.label}
            </div>
          ))}
        </div>

        <section className="au-section" id="work">
          <p className="au-tag">// What we build</p>
          <h2 className="au-section-title">Six services, each one pulling its weight.</h2>
          <div>
            {features.map((f, i) => (
              <div className="au-feature-row" key={f.title}>
                <span className="au-feature-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="au-feature-title">{f.title}</span>
                <span className="au-feature-desc">{f.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="au-quote-wrap">
        <p className="au-quote">&ldquo;Eurasia Marketing transformed our online presence completely. Our leads have <span>tripled</span> in just six months.&rdquo;</p>
        <p className="au-quote-cite"><b>Amira Khan</b> — CEO, TechFlow Solutions</p>
      </div>

      <div className="au-shell">
        <section className="au-cta" id="contact">
          <div className="au-cta-inner">
            <div>
              <h2>Let&rsquo;s make some noise.</h2>
              <p>Rolling monthly plans from £100/month. No long-term contracts — just 30 days&rsquo; notice if you ever want to cancel.</p>
              <div className="au-cta-row">
                <Magnetic><a className="au-btn" style={{ background: 'var(--au-ink)', color: '#fff' }} href="mailto:info@eurasiamarketing.com">Book a free consult</a></Magnetic>
              </div>
            </div>
            <div className="au-cta-contact">
              <span>info@eurasiamarketing.com</span>
              <span>020 3886 3311</span>
              <span>65-73 Staines Road, Hounslow TW3 3HW</span>
            </div>
          </div>
        </section>
      </div>

      <div className="au-foot">
        <span>Eurasia / Aurora — Concept 05</span>
        <span>Not for production</span>
      </div>
    </div>
  );
}
