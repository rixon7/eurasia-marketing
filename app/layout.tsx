import type { Metadata } from 'next';
import { DM_Sans, DM_Mono, Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://eurasiamarketing.com',
  name: 'Eurasia Marketing',
  description: 'Best digital marketing agency in Hounslow offering website design, SEO, social media management, and digital advertising services.',
  url: 'https://eurasiamarketing.com',
  telephone: '+442038863311',
  email: 'info@eurasiamarketing.com',
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
    'https://facebook.com/eurasiamarketing',
    'https://instagram.com/eurasiamarketing',
    'https://linkedin.com/company/eurasiamarketing',
  ],
  priceRange: '££',
  areaServed: {
    '@type': 'City',
    name: 'Hounslow',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Services in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Advertising in Hounslow' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Email Marketing in Hounslow' } },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Force dark mode on mobile — runs before paint to avoid flash */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (window.innerWidth < 768) {
              document.documentElement.classList.add('dark');
              try { localStorage.setItem('theme', 'dark'); } catch(e) {}
            }
          })();
        `}} />
      </head>
      <body className={`${dmSans.variable} ${dmMono.variable} ${cormorant.variable} ${jakarta.variable} antialiased bg-cream dark:bg-dark-bg text-primary dark:text-dark-text`}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
