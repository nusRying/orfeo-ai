import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/orfeo-ai',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
