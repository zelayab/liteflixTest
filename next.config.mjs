/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
