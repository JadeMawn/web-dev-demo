/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add any external domains if needed
    unoptimized: false // Use Next.js image optimization
  },
}

module.exports = nextConfig 