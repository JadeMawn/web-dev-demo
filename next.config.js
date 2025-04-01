/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add any domains you're using
    unoptimized: false // Re-enable optimization for Vercel
  }
}

module.exports = nextConfig 