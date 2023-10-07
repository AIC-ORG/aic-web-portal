/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['ui-avatars.com', 'cdn.sanity.io'],
  },
};

module.exports = nextConfig;
