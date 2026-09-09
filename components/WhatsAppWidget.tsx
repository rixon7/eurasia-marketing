'use client';

// Floating WhatsApp click-to-chat widget — same pattern already built for
// the BlueGrid Financial Services site (collapsed pill with a "Need Help?
// Chat with us" tag, expanding to a small panel on click).
//
// Originally built with two contact cards (UK + India, since the Navbar
// shows both office phone numbers) — client decided against that after
// learning WhatsApp Business only supports one number per app, and didn't
// want to run two separate WhatsApp apps for the two offices. Single
// number now (India), used for both UK and India visitors — no "India
// Office" label on the card, since the number isn't India-specific from a
// visitor's point of view. Number lives in lib/contact.ts (WHATSAPP_NUMBER),
// shared with Footer.tsx's WhatsApp social icon so both stay in sync.
import { useState } from 'react';
import { WHATSAPP_NUMBER } from '@/lib/contact';

const WHATSAPP_GREEN = '#25D366';

function WhatsAppGlyph({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.52 22 22 17.52 22 12S17.52 2 12.02 2Zm5.87 14.1c-.25.7-1.24 1.28-2.03 1.45-.54.11-1.24.2-3.6-.77-3.02-1.25-4.96-4.32-5.11-4.52-.15-.2-1.22-1.62-1.22-3.09 0-1.47.77-2.19 1.04-2.49.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.52.25.6.86 2.08.93 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.3.38-.44.51-.15.15-.3.31-.13.6.17.3.75 1.24 1.62 2 1.11.99 2.05 1.3 2.35 1.45.3.15.47.12.65-.07.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.75.83 2.05.98.3.15.5.22.57.35.07.13.07.72-.18 1.42Z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-5 sm:right-5">
      {open && (
        <div className="w-72 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-2xl">
          <div className="px-4 py-4" style={{ backgroundColor: WHATSAPP_GREEN }}>
            <p className="text-sm font-semibold text-white">Start a Conversation</p>
            <p className="mt-1 text-xs text-white/80">
              Hi! Send us a message on WhatsApp and we&apos;ll get back to you.
            </p>
          </div>
          <div className="p-3">
            <p className="px-1 pb-2 text-xs text-foreground-faint">
              We typically reply within a few minutes.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-surface-glass p-3 transition-colors hover:border-accent/40"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: WHATSAPP_GREEN }}
              >
                <WhatsAppGlyph size={20} />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">Eurasia Marketing</span>
                <span className="block text-xs text-foreground-soft">Chat with us</span>
              </span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        className="flex items-center gap-2 rounded-full p-3.5 text-sm font-medium text-white shadow-lg transition-transform hover:scale-[1.03] sm:py-3 sm:pl-4 sm:pr-5"
        style={{ backgroundColor: WHATSAPP_GREEN }}
      >
        <WhatsAppGlyph size={22} />
        <span className="hidden sm:inline">
          Need Help? <strong>Chat with us</strong>
        </span>
      </button>
    </div>
  );
}
