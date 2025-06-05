import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: process.env.NODE_ENV !== "production" },
  output: "standalone",
  compress: false,
  poweredByHeader: false,
  trailingSlash: false,
};

export default nextConfig;
