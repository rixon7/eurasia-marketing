// Shared contact-number data — the single source for both office phone
// numbers, consumed by Navbar.tsx (desktop bar + mobile menu), so both
// surfaces can never drift out of sync with each other.
export const PHONE_NUMBERS = [
  {
    label: 'UK',
    display: '+44 20 3886 3311',
    tel: '+442038863311',
  },
  {
    label: 'India',
    display: '+91 97696 72227',
    tel: '+919769672227',
  },
];

// WhatsApp only runs on one number (the India number) — a single WhatsApp
// Business app can't hold two numbers, and the client decided not to run
// two separate WhatsApp apps for the two offices. This number is used for
// both UK and India visitors; it's not India-only. Digits only, no leading
// '+', as required by wa.me links. Consumed by WhatsAppWidget.tsx and
// Footer.tsx's WhatsApp social icon, so both stay in sync.
export const WHATSAPP_NUMBER = '919769672227';
