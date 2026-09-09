'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { PHONE_NUMBERS } from '@/lib/contact';

const linksStart = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

const linksEnd = [
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services/website-building',    label: '🌐 Website Building' },
  { href: '/services/ai-automation',       label: '🤖 AI Automation' },
  { href: '/services/digital-advertising', label: '📈 Digital Advertising' },
  { href: '/services/social-media',        label: '📱 Social Media' },
  { href: '/services/seo-sem',             label: '🔍 SEO & SEM' },
  { href: '/services/email-marketing',     label: '📨 Email Marketing' },
];

/* ─── Mobile menu as its own component so state resets on every open ─── */
function MobileMenu({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <div className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl px-4 py-4 overflow-y-auto max-h-[80vh]">
      <a
        href="https://calendly.com/rixon7/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full px-4 py-3 mb-3 rounded-[var(--radius-md)] bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
      >
        📅 Book a Free Call
      </a>

      {/* Phone numbers aren't repeated here — they're always visible in
          the bar above this drawer now (see the mobile-only phone bar
          in the main Navbar component), so duplicating them here would
          just be clutter at the top of the menu. */}

      <ul className="flex flex-col gap-1">
        {/* Home, About */}
        {linksStart.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className={`block px-4 py-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-primary text-white dark:bg-accent-blue'
                  : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* Services */}
        <li>
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
              isServicesActive
                ? 'bg-primary text-white dark:bg-accent-blue'
                : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
            }`}
          >
            Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {servicesOpen && (
            <ul className="mt-1 ml-2 flex flex-col gap-1">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    onClick={onClose}
                    className="block px-4 py-2 rounded-[var(--radius-sm)] text-sm transition-colors text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Contact */}
        {linksEnd.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className={`block px-4 py-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-primary text-white dark:bg-accent-blue'
                  : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLLIElement>(null);

  // Close desktop dropdowns and mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isServicesActive = pathname.startsWith('/services');

  return (
    <div className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-5">
      <nav className="max-w-[1280px] mx-auto bg-background/85 backdrop-blur-xl rounded-2xl border border-border">
        <div className="flex items-center justify-between px-4 sm:px-5 py-2.5">
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Eurasia Marketing" className="h-8 dark:brightness-0 dark:invert" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {linksStart.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-primary text-white dark:bg-accent-blue'
                      : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services dropdown */}
            <li className="relative" ref={servicesDropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                  isServicesActive
                    ? 'bg-primary text-white dark:bg-accent-blue'
                    : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
                }`}
              >
                Services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-dark-card rounded-[var(--radius-md)] shadow-lg border border-border-light dark:border-border-dark z-50 py-1">
                  <Link href="/services" onClick={() => setServicesOpen(false)} className="block px-4 py-2.5 text-xs font-semibold text-muted dark:text-dark-muted uppercase tracking-wider border-b border-border-light dark:border-border-dark hover:bg-sky dark:hover:bg-dark-surface transition-colors mb-1">
                    All Services
                  </Link>
                  {serviceLinks.map((s) => (
                    <Link key={s.href} href={s.href} onClick={() => setServicesOpen(false)} className={`block px-4 py-2.5 text-sm transition-colors ${pathname === s.href ? 'bg-sky dark:bg-dark-surface text-accent-blue font-medium' : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-surface'}`}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            {linksEnd.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? 'bg-primary text-white dark:bg-accent-blue'
                      : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col items-end gap-0.5 text-xs font-semibold whitespace-nowrap">
              {PHONE_NUMBERS.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-1.5 text-primary dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.71 5.71l1.92-1.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" />
                  </svg>
                  <span className="text-foreground-faint font-normal">{p.label}</span>
                  <span>{p.display}</span>
                </a>
              ))}
            </div>
            <a
              href="https://calendly.com/rixon7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
            >
              📅 Book a Call
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 w-11 h-11 items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`block w-5 h-0.5 bg-primary dark:bg-dark-text transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary dark:bg-dark-text transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-primary dark:bg-dark-text transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile-only phone bar — always visible under the main row,
            since there's no room for it inline next to the logo and
            hamburger at these widths. The desktop pair above (hidden
            below md) covers md+; this covers everything below it. */}
        <div className="flex md:hidden items-center justify-center gap-5 border-t border-border px-4 py-2 text-xs font-semibold">
          {PHONE_NUMBERS.map((p) => (
            <a
              key={p.tel}
              href={`tel:${p.tel}`}
              className="flex items-center gap-1.5 text-primary dark:text-dark-text hover:text-accent-blue dark:hover:text-accent-blue transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.58 1.25h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 5.71 5.71l1.92-1.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92z" />
              </svg>
              <span className="text-foreground-faint font-normal">{p.label}</span>
              <span>{p.display}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu — separate component so state is always fresh on open */}
      {open && <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />}
    </div>
  );
}
