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
};

module.exports = nextConfig;
