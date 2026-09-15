import type { MetadataRoute } from 'next';
import { client, allAreaSlugsQuery } from '@/lib/sanity';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://eurasiamarketing.com';

  const rawPosts = await client.fetch<{ slug: string; date: string }[]>(
    `*[_type == "blogPost" && publishedAt <= now()] | order(publishedAt desc) { "slug": slug.current, "date": publishedAt }`
  );

  // Fetched live from Sanity (2026-09-15 fix) rather than a hardcoded slug
  // array — the array previously had to be kept in sync by hand with
  // whatever `area` docs actually existed, and drifted out of sync when
  // 'mumbai' was added here ahead of its doc existing. Fetching means a
  // slug only ever appears once its doc is real, and a new area added in
  // Sanity Studio shows up automatically without a code change.
  const areaSlugs = await client.fetch<string[]>(allAreaSlugsQuery);

  const posts = rawPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...posts,
    ...['website-building', 'digital-advertising', 'social-media', 'seo-sem', 'email-marketing', 'ai-automation'].map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    {
      url: `${baseUrl}/areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...areaSlugs.map((area) => ({
      url: `${baseUrl}/areas/${area}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
