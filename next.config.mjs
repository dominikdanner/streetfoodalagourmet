/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    IMAGE_QUALITY: process.env.IMAGE_QUALITY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '134.255.180.250',
        port: '8055',
        pathname: '/assets/**',
      },
    ],
  },
}

export default nextConfig;
