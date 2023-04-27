/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["drive.google.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
