// Shared contact-number data — the single source for both office numbers,
// consumed by Navbar.tsx (desktop bar + mobile menu) and WhatsAppWidget.tsx,
// so all three surfaces can never drift out of sync with each other.
export const PHONE_NUMBERS = [
  {
    label: 'UK',
    display: '+44 20 3886 3311',
    tel: '+442038863311',
    // wa.me wants digits only, no leading '+'.
    whatsapp: '442038863311',
  },
  {
    label: 'India',
    display: '+91 97696 72227',
    tel: '+919769672227',
    whatsapp: '919769672227',
  },
];
