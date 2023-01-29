/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /** experimental untuk aktifkan folder app yang kita buat manual */
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
