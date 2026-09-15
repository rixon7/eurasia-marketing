'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

/**
 * Fires GA4 conversion events for the site's three real lead signals —
 * "Book a Call" (Calendly links), WhatsApp chat clicks, and phone taps —
 * via a single delegated document click listener instead of instrumenting
 * every CTA individually across Navbar/Hero/area pages/services/etc (the
 * same Calendly link appears in a dozen+ places sitewide). Contact form
 * submissions are tracked separately in ContactForm.tsx, since that needs
 * the actual fetch result (a click alone doesn't mean the lead landed).
 *
 * Added 2026-09-15 per the lead-gen plan's "fix conversion tracking" item
 * — GA4 was only tracking pageviews before this. These fire as GA4 events
 * immediately, but each still needs to be marked as a "key event" in the
 * GA4 UI (Admin -> Events -> toggle "Mark as key event") before it counts
 * as a conversion in reports — that's a dashboard action, not something
 * this code can do without login access.
 */
export function ConversionTracking() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';

      if (href.includes('calendly.com')) {
        trackEvent('book_a_call_click', { event_category: 'lead_generation', link_url: href });
      } else if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackEvent('whatsapp_click', { event_category: 'lead_generation', link_url: href });
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { event_category: 'lead_generation', phone_number: href.replace('tel:', '') });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
