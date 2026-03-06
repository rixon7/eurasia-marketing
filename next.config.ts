import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Sanity Studio embedded in Next.js
  transpilePackages: ['sanity'],

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
