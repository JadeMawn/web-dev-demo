/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any external domains if needed
    unoptimized: true // Add this line for development
  },
}

module.exports = nextConfig 