/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  reactStrictMode: false,
  output: "standalone",
};

module.exports = nextConfig;
