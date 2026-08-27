import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Sanity Studio embedded in Next.js
  transpilePackages: ['sanity'],

  // Every homepage image is a remote URL (Unsplash placeholders, a
  // thum.io screenshot proxy for the Our Work section) rendered with
  // next/image as of the 2026-08-26 homepage rebuild. A missing pattern
  // here is a hard 400 from /_next/image, not a graceful fallback — if a
  // new remote image host is added anywhere on the site, it needs an
  // entry here too.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'image.thum.io' },
    ],
  },

  async redirects() {
    return [
      // www → non-www (permanent)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.eurasiamarketing.com' }],
        destination: 'https://eurasiamarketing.com/:path*',
        permanent: true,
      },
      // Removed service pages → nearest equivalent
      {
        source: '/services/brand-strategy',
        destination: '/services/social-media',
        permanent: true,
      },
      {
        source: '/services/content-marketing',
        destination: '/services/social-media',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
