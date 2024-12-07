/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_URL: process.env.SERVER_URL,
    IMAGE_QUALITY: process.env.IMAGE_QUALITY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.streetfoodalagourmet.at",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
