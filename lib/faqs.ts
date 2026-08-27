/**
 * Single source of truth for the homepage FAQ content. Previously these 7
 * Q/As existed twice — once as the FAQPage JSON-LD in app/page.tsx, once
 * as the visible copy in components/FAQ.tsx — and could silently drift out
 * of sync with each other, which Google penalises (FAQPage markup must
 * match the visible text). Both the schema and the rendered accordion now
 * import this array, so that class of regression is no longer possible.
 */
export const FAQS: { q: string; a: string }[] = [
  {
    q: 'What services does Eurasia Marketing offer?',
    a: 'We provide a full range of digital marketing services including social media management, SEO & SEM, website design and development, Google Business Profile management, content marketing, email marketing, brand strategy, and digital advertising.',
  },
  {
    q: 'How much do your services cost?',
    a: 'Our pricing starts from just £100/month for website building and email marketing, £200/month for social media management, and £300/month for SEO management. We also offer custom bundles with discounts when you combine multiple services.',
  },
  {
    q: 'Do you require long-term contracts?',
    a: "No. All our plans are rolling monthly contracts with no long-term lock-in. We believe in earning your business every month through results, not contracts. We just ask for 30 days' notice if you wish to cancel.",
  },
  {
    q: 'How quickly will I see results?',
    a: 'It depends on the service. Social media and paid advertising can show results within weeks. SEO is a longer-term strategy — most clients start seeing meaningful improvements within 3-6 months.',
  },
  {
    q: 'Do you work with small businesses?',
    a: "Absolutely! We were founded on the belief that every business deserves great marketing. Whether you're a startup, a local shop, or a growing company, we tailor our services to fit your budget and goals.",
  },
  {
    q: 'What areas do you serve?',
    a: "While we're based in Hounslow, London, we work with clients across the UK and internationally. Most of our work is done remotely, but we're always happy to meet in person for local clients.",
  },
  {
    q: 'How do I get started?',
    a: "Simply get in touch via our contact page, email us at info@eurasiamarketing.com, or call us on 020 3886 3311. We'll schedule a free consultation to understand your goals and recommend the best approach.",
  },
];
