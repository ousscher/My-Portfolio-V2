import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Only run ESLint on development, not during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
