/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    typedRoutes: true,
  },
  images: {
    domains: ['ui-avatars.com', 'cdn.sanity.io', 'res.cloudinary.com'],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias['~'] = path.join(__dirname, 'src');
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    sanityToken: process.env.SANITY_SECRET_TOKEN,
  },
};

module.exports = nextConfig;
