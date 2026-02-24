import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = '2024-01-01';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ─── GROQ query helpers ───────────────────────────────────────────────────────

/** All published blog posts, newest first */
export const allPostsQuery = `
  *[_type == "blogPost" && publishedAt <= now()] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    "date": publishedAt,
    excerpt,
    tags,
    mainImage,
  }
`;

/** A single blog post by slug */
export const postBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    "date": publishedAt,
    excerpt,
    tags,
    mainImage,
    body,
  }
`;

/** All blog post slugs (for generateStaticParams) */
export const allPostSlugsQuery = `
  *[_type == "blogPost" && publishedAt <= now()].slug.current
`;

/** A single service by slug */
export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    icon,
    tagline,
    description,
    intro,
    features,
    faqs,
  }
`;

/** All service slugs (for generateStaticParams) */
export const allServiceSlugsQuery = `
  *[_type == "service"].slug.current
`;

/** All services (for the "other services" links) */
export const allServicesQuery = `
  *[_type == "service"] | order(name asc) {
    name,
    "slug": slug.current,
    icon,
  }
`;

/** A single area by slug */
export const areaBySlugQuery = `
  *[_type == "area" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    description,
    intro,
    nearby,
  }
`;

/** All area slugs (for generateStaticParams) */
export const allAreaSlugsQuery = `
  *[_type == "area"].slug.current
`;

/** Homepage settings singleton */
export const homepageSettingsQuery = `
  *[_type == "homepageSettings"][0] {
    heroTitle,
    heroHighlight,
    heroSubtitle,
    featuredServices,
    features,
    testimonials,
  }
`;
