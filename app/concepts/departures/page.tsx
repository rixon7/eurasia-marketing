import type { Metadata } from 'next';
import { Bebas_Neue, Karla } from 'next/font/google';
import './departures.css';

const display = Bebas_Neue({ variable: '--dep-font-display', subsets: ['latin'], weight: ['400'] });
const body = Karla({ variable: '--dep-font-body', subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Departures — Concept',
  robots: { index: false, follow: false },
};

const stops = [
  'Website Building',
  'AI Automation',
  'Digital Advertising',
  'SEO & SEM',
  'Social Media',
  'Email Marketing',
];

const board = [
  { value: '150+', dest: 'Businesses grown across West London', status: 'ON TIME' },
  { value: '3.0×', dest: 'Average ROI on marketing spend', status: 'ON TIME' },
  { value: '95%', dest: 'Client retention rate', status: 'ON TIME' },
  { value: '500+', dest: 'Campaigns successfully launched', status: 'ARRIVED' },
];

const stations = [
  { title: 'Website Building', desc: 'Fast, mobile-first sites built to convert visitors into customers.', bar: 'var(--dep-red)' },
  { title: 'AI Automation', desc: 'Workflows that handle lead follow-ups and reporting automatically.', bar: 'var(--dep-amber)' },
  { title: 'Digital Advertising', desc: 'Search, social, and display campaigns tuned for ROI, not just clicks.', bar: 'var(--dep-surface-raised)' },
  { title: 'SEO & SEM', desc: 'Local rankings and paid search that get you found in Hounslow and beyond.', bar: 'var(--dep-red)' },
  { title: 'Social Media', desc: 'Content and community management that builds an audience you own.', bar: 'var(--dep-amber)' },
  { title: 'Email Marketing', desc: 'Newsletter and lifecycle sends that bring customers back.', bar: 'var(--dep-surface-raised)' },
];

export default function Departures() {
  return (
    <div className={`dep ${display.variable} ${body.variable}`}>
      <nav className="dep-nav">
        <div className="dep-nav-inner">
          <div className="dep-wordmark">
            EURASIA <small>West London</small>
          </div>
          <div className="dep-nav-links">
            <a href="#route">Route</a>
            <a href="#board">Board</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="dep-shell">
        <section className="dep-hero">
          <div className="dep-eyebrow">Serving Hounslow &amp; 9 surrounding areas</div>
          <h1 className="dep-h1 dep-display">
            Next stop:<br />
            <span className="dep-accent">growth.</span>
          </h1>
          <p className="dep-sub">
            A West London marketing agency that builds your website, runs your ads, and gets you ranking on Google — no jargon, no long contracts.
          </p>
          <div className="dep-cta-row">
            <a className="dep-btn dep-btn-primary" href="mailto:info@eurasiamarketing.com">Get on board →</a>
            <a className="dep-btn dep-btn-ghost" href="#route">View the route</a>
          </div>

          <div className="dep-line-map" id="route">
            <div className="dep-line-track">
              <div className="dep-line-fill" />
            </div>
            <div className="dep-stops">
              {stops.map((s) => (
                <div className="dep-stop" key={s}>
                  <div className="dep-stop-dot" />
                  <div className="dep-stop-label">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dep-section" id="board">
          <div className="dep-section-head">
            <p className="dep-section-tag">Departure Board</p>
            <h2 className="dep-section-title dep-display">Results, on schedule.</h2>
          </div>
          <div className="dep-board">
            <div className="dep-board-row dep-board-head">
              <span>ROUTE</span>
              <span>DESTINATION</span>
              <span style={{ justifySelf: 'end' }}>STATUS</span>
            </div>
            {board.map((b) => (
              <div className="dep-board-row" key={b.dest}>
                <span className="dep-board-value">{b.value}</span>
                <span className="dep-board-dest">{b.dest}</span>
                <span className="dep-board-status">{b.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="dep-section">
          <div className="dep-section-head">
            <p className="dep-section-tag">All Stations</p>
            <h2 className="dep-section-title dep-display">Every stop, fully staffed.</h2>
          </div>
          <div className="dep-stations">
            {stations.map((s) => (
              <div className="dep-station" key={s.title}>
                <div className="dep-station-bar" style={{ background: s.bar }} />
                <div className="dep-station-body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dep-section">
          <div className="dep-section-head">
            <p className="dep-section-tag">Announcements</p>
            <h2 className="dep-section-title dep-display">What passengers are saying.</h2>
          </div>
          <div className="dep-announcements">
            <div className="dep-announcement">
              <span className="dep-announcement-tag">Announcement — TechFlow Solutions</span>
              <p className="quote">&ldquo;Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.&rdquo;</p>
              <cite><b>Amira Khan</b> — CEO, TechFlow Solutions</cite>
            </div>
            <div className="dep-announcement">
              <span className="dep-announcement-tag">Announcement — GreenLeaf Co.</span>
              <p className="quote">&ldquo;Professional, creative, and always on top of the latest trends. They feel like an extension of our team.&rdquo;</p>
              <cite><b>David Morris</b> — Founder, GreenLeaf Co.</cite>
            </div>
          </div>
        </section>
      </div>

      <div className="dep-cta-band" id="contact">
        <div className="dep-cta-band-inner">
          <h2 className="dep-display">All aboard.</h2>
          <p>Rolling monthly plans from £100/month. No long-term lock-in — just 30 days&rsquo; notice if you ever want off.</p>
          <div className="dep-cta-row">
            <a className="dep-btn dep-btn-primary" href="mailto:info@eurasiamarketing.com">Book your free consult</a>
            <a className="dep-btn dep-btn-ghost" href="tel:02038863311">020 3886 3311</a>
          </div>
          <div className="dep-cta-contact">
            <span>info@eurasiamarketing.com</span>
            <span>65-73 Staines Road, Hounslow TW3 3HW</span>
          </div>
        </div>
      </div>

      <div className="dep-foot">
        <span>Eurasia / Departures — Concept 02</span>
        <span>Not for production</span>
      </div>
    </div>
  );
}
