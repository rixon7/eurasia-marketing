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
    default: 'Eurasia Marketing | Best Digital Marketing Agency in Hounslow',
    template: '%s | Eurasia Marketing Hounslow',
  },
  description: 'Expert digital marketing agency in Hounslow. Website design, SEO, social media & paid ads — helping local businesses grow online with proven strategies.',
  keywords: [
    'best digital marketing in Hounslow',
    'website designer in Hounslow',
    'SEO specialist in Hounslow',
    'social media manager in Hounslow',
    'digital marketing agency Hounslow',
    'web design Hounslow',
    'SEO services Hounslow',
    'social media management Hounslow',
    'marketing agency near me',
    'Hounslow marketing company',
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
    title: 'Eurasia Marketing | Best Digital Marketing Agency in Hounslow',
    description: 'Expert website designer, SEO specialist, and social media manager in Hounslow. We help businesses grow with data-driven digital marketing strategies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eurasia Marketing | Best Digital Marketing in Hounslow',
    description: 'Expert website designer, SEO specialist, and social media manager in Hounslow. Grow your business with proven marketing strategies.',
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
  description: 'Best digital marketing agency in Hounslow offering website design, SEO, social media management, digital advertising, email marketing, and AI automation services.',
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
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Advertising in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation & Workflows in Hounslow' } },
    ],
  },
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
