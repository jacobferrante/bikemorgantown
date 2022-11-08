/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.bikemgtwn.com',
        port: '',
        pathname: '/assets/**',
      }
    ]
   }
}

module.exports = nextConfig
