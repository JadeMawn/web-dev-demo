/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add actual domains you're using
    unoptimized: true // Skip optimization for now to speed up build
  },
  // For Netlify, add this to increase build memory
  webpack: (config, { isServer }) => {
    // Reduce chunk size
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendors: false,
      },
    };
    return config;
  },
}

module.exports = nextConfig 