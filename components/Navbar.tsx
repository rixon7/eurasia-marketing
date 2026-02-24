'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const areas = [
  { href: '/areas/hounslow',  label: 'Hounslow' },
  { href: '/areas/feltham',   label: 'Feltham' },
  { href: '/areas/sunbury',   label: 'Sunbury' },
  { href: '/areas/hampton',   label: 'Hampton' },
  { href: '/areas/isleworth', label: 'Isleworth' },
  { href: '/areas/heston',    label: 'Heston' },
  { href: '/areas/brentford', label: 'Brentford' },
  { href: '/areas/hayes',     label: 'Hayes' },
  { href: '/areas/staines',   label: 'Staines' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const isAreasActive = pathname.startsWith('/areas');

  return (
    <div className="sticky top-0 z-50 bg-cream/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-border-light dark:border-border-dark">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Eurasia Marketing" className="h-10 dark:brightness-0 dark:invert" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
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

          {/* Areas dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAreasOpen(!areasOpen)}
              className={`flex items-center gap-1 px-4 py-2 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                isAreasActive
                  ? 'bg-primary text-white dark:bg-accent-blue'
                  : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
              }`}
            >
              Areas
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={`transition-transform duration-200 ${areasOpen ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {areasOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-card rounded-[var(--radius-md)] shadow-lg border border-border-light dark:border-border-dark overflow-hidden z-50">
                <Link
                  href="/areas"
                  onClick={() => setAreasOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold text-muted dark:text-dark-muted uppercase tracking-wider border-b border-border-light dark:border-border-dark hover:bg-sky dark:hover:bg-dark-surface transition-colors"
                >
                  All Areas
                </Link>
                {areas.map((area) => (
                  <Link
                    key={area.href}
                    href={area.href}
                    onClick={() => setAreasOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === area.href
                        ? 'bg-sky dark:bg-dark-surface text-accent-blue font-medium'
                        : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-surface'
                    }`}
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://calendly.com/rixon7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-md)] bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
          >
            📅 Book a Call
          </a>
          <ThemeToggle />
          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-primary dark:bg-dark-text transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-primary dark:bg-dark-text transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-primary dark:bg-dark-text transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border-light dark:border-border-dark bg-cream dark:bg-dark-bg px-6 py-4">
          <a
            href="https://calendly.com/rixon7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 mb-3 rounded-[var(--radius-md)] bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
          >
            📅 Book a Free Call
          </a>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
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

            {/* Mobile Areas */}
            <li>
              <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-[var(--radius-sm)] text-sm font-medium transition-colors ${
                  isAreasActive
                    ? 'bg-primary text-white dark:bg-accent-blue'
                    : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
                }`}
              >
                Areas
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {mobileAreasOpen && (
                <ul className="mt-1 ml-4 flex flex-col gap-1">
                  <li>
                    <Link
                      href="/areas"
                      onClick={() => { setOpen(false); setMobileAreasOpen(false); }}
                      className="block px-4 py-2 rounded-[var(--radius-sm)] text-sm text-muted dark:text-dark-muted hover:bg-sky dark:hover:bg-dark-card transition-colors"
                    >
                      All Areas
                    </Link>
                  </li>
                  {areas.map((area) => (
                    <li key={area.href}>
                      <Link
                        href={area.href}
                        onClick={() => { setOpen(false); setMobileAreasOpen(false); }}
                        className={`block px-4 py-2 rounded-[var(--radius-sm)] text-sm transition-colors ${
                          pathname === area.href
                            ? 'text-accent-blue font-medium'
                            : 'text-primary dark:text-dark-text hover:bg-sky dark:hover:bg-dark-card'
                        }`}
                      >
                        {area.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
