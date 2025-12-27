/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['grepcoin.io', 'chai.im'],
  },
}

module.exports = nextConfig

