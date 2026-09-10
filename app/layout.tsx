import type { Metadata } from 'next';
import { Instrument_Sans, Manrope, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google';
import SiteChrome from '@/components/SiteChrome';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const instrument = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Eurasia Marketing | Website Design & Digital Marketing — Hounslow & Mumbai',
    template: '%s | Eurasia Marketing',
  },
  description: 'Website design and digital marketing agency with offices in Hounslow, UK and Mumbai, India. Website building, SEO, social media, paid ads & AI automation — built to convert.',
  keywords: [
    'website design Hounslow',
    'website design company Mumbai',
    'affordable website design company Mumbai',
    'web design agency Hounslow',
    'digital marketing agency Hounslow',
    'digital marketing agency Mumbai',
    'AI automation agency Mumbai',
    'SEO services Hounslow',
    'social media management Hounslow',
    'web design agency near me',
  ],
  authors: [{ name: 'Eurasia Marketing' }],
  creator: 'Eurasia Marketing',
  publisher: 'Eurasia Marketing',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Eurasia Marketing',
    title: 'Eurasia Marketing | Website Design & Digital Marketing — Hounslow & Mumbai',
    description: 'Expert website design, SEO, social media, and AI automation — with local teams in Hounslow, UK and Mumbai, India. We help businesses grow online with proven strategies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eurasia Marketing | Website Design & Digital Marketing',
    description: 'Expert website design, SEO, and digital marketing — with teams in Hounslow, UK and Mumbai, India. Grow your business with proven strategies.',
  },
  metadataBase: new URL('https://eurasiamarketing.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://eurasiamarketing.com/#business',
  name: 'Eurasia Marketing',
  description: 'Website design and digital marketing agency offering website building, SEO, social media management, digital advertising, email marketing, and AI automation services, with offices in Hounslow, UK and Mumbai, India.',
  url: 'https://eurasiamarketing.com',
  telephone: '+442038863311',
  email: 'info@eurasiamarketing.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://eurasiamarketing.com/logo.svg',
  },
  image: 'https://eurasiamarketing.com/logo.svg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '65-73 Staines Road',
    addressLocality: 'Hounslow',
    addressRegion: 'London',
    postalCode: 'TW3 3HW',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4685,
    longitude: -0.3614,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://www.google.com/search?kgmid=/g/11yzv1bhxr',
    'https://facebook.com/eurasiamarketing',
    'https://www.instagram.com/eurasiamarketinguk/',
    'https://linkedin.com/company/eurasia-marketing',
    'https://x.com/eurasiamar80291',
    'https://www.marketingcompany-info.co.uk/eurasia-marketing',
  ],
  priceRange: '££',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '12',
    bestRating: '5',
    worstRating: '1',
  },
  areaServed: [
    { '@type': 'City', name: 'Hounslow' },
    { '@type': 'City', name: 'Brentford' },
    { '@type': 'City', name: 'Feltham' },
    { '@type': 'City', name: 'Heston' },
    { '@type': 'City', name: 'Isleworth' },
    { '@type': 'City', name: 'Hayes' },
    { '@type': 'City', name: 'Staines' },
    { '@type': 'City', name: 'Hampton' },
    { '@type': 'City', name: 'Sunbury' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Website Design & Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Building' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation & Workflows' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Advertising' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing' } },
    ],
  },
  // The India office is a second, linked LocalBusiness entity (see
  // indiaOfficeSchema below) rather than a field on this one — schema.org
  // has no clean way to give a single LocalBusiness two addresses/phone
  // numbers. `department` here + `branchOf` on the India entity is the
  // standard bidirectional link schema.org recommends for branch locations.
  department: [{ '@id': 'https://eurasiamarketing.com/#business-india' }],
};

// Mumbai branch office, added 2026-09-08. Deliberately minimal compared to
// the UK entity above — no aggregateRating/openingHoursSpecification since
// none has been provided for this location; don't fabricate those fields.
const indiaOfficeSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': 'https://eurasiamarketing.com/#business-india',
  name: 'Eurasia Marketing — India Office',
  branchOf: { '@id': 'https://eurasiamarketing.com/#business' },
  url: 'https://eurasiamarketing.com',
  telephone: '+919769672227',
  email: 'info@eurasiamarketing.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'DG 2 Nand Dham Society, Opp Gate 7 Sion Hospital, 270 Sulochana Shetty Marg, Sion (West)',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400022',
    addressCountry: 'IN',
  },
  areaServed: { '@type': 'Country', name: 'India' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://eurasiamarketing.com/#website',
  url: 'https://eurasiamarketing.com',
  name: 'Eurasia Marketing',
  publisher: { '@id': 'https://eurasiamarketing.com/#business' },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://eurasiamarketing.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(indiaOfficeSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className={`${instrument.variable} ${manrope.variable} ${jetbrains.variable} ${cormorant.variable} antialiased bg-background text-foreground`}>
        {/* Site-wide grain texture. Deliberately rendered here, outside
            SiteChrome/{children} and therefore outside app/template.tsx —
            that file wraps every route in a `motion.div`, which establishes
            a containing block for `position: fixed` descendants. A fixed
            grain layer placed inside the page tree would be silently
            scoped to that div instead of the viewport. */}
        <div className="grain-overlay" aria-hidden="true" />
        <GoogleAnalytics />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
