import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  other: {
    'geo.region': 'GB-ENG',
    'geo.placename': 'Hounslow',
    'geo.position': '51.4685;-0.3614',
    'ICBM': '51.4685, -0.3614',
  },
};

import { getAllPosts } from '@/lib/blog';
import { client, homepageSettingsQuery } from '@/lib/sanity';
import { FAQS } from '@/lib/faqs';
import { HomeHero } from '@/components/home/home-hero';
import { PromoTicker } from '@/components/home/promo-ticker';
import { ImageSlider } from '@/components/home/image-slider';
import { ServicesBento } from '@/components/home/services-bento';
import { LogoSlider } from '@/components/home/logo-slider';
import { WorkShowcase } from '@/components/home/work-showcase';
import { Testimonials } from '@/components/home/testimonials';
import { RecentPosts } from '@/components/home/recent-posts';
import { Faq } from '@/components/home/faq';
import { CtaBand } from '@/components/ui/cta-band';

const defaultTestimonials = [
  { quote: 'Eurasia Marketing transformed our online presence completely. Our leads have tripled in just six months.', initials: 'AK', name: 'Amira Khan', role: 'CEO, TechFlow Solutions' },
  { quote: 'Professional, creative, and always on top of the latest trends. They feel like an extension of our team.', initials: 'DM', name: 'David Morris', role: 'Founder, GreenLeaf Co.' },
];

const STATS = [
  { value: '150+', label: 'Businesses grown across West London' },
  { value: '3×', label: 'Average ROI on marketing spend' },
  { value: '95%', label: 'Client retention rate' },
  { value: '500+', label: 'Campaigns successfully launched' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

type HomepageSettings = {
  heroTitle?: string;
  heroHighlight?: string;
  heroSubtitle?: string;
  testimonials?: { quote: string; initials: string; name: string; role: string }[];
};

export default async function Home() {
  const [posts, settings] = await Promise.all([
    getAllPosts(),
    client.fetch<HomepageSettings | null>(homepageSettingsQuery),
  ]);

  const heroTitle = settings?.heroTitle ?? 'Grow Your Brand';
  const heroHighlight = settings?.heroHighlight ?? 'With Confidence';
  const heroSubtitle = settings?.heroSubtitle ?? 'We help businesses build powerful marketing strategies that drive real results and lasting growth.';
  const testimonials = settings?.testimonials ?? defaultTestimonials;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <HomeHero heroTitle={heroTitle} heroHighlight={heroHighlight} heroSubtitle={heroSubtitle} stats={STATS} />
      <PromoTicker />
      <ImageSlider />
      <ServicesBento />
      <LogoSlider />
      <WorkShowcase />
      <Testimonials testimonials={testimonials} />
      <RecentPosts posts={posts} />
      <Faq />
      <CtaBand
        title="Ready to grow your brand?"
        description="Let's build a marketing strategy that drives real, measurable results for your business."
        primaryHref="/contact"
        primaryLabel="Start a Project"
        secondaryHref="/pricing"
        secondaryLabel="View Pricing"
        contactLines={['info@eurasiamarketing.com', '020 3886 3311', 'From £100/month, rolling monthly']}
      />
    </>
  );
}
