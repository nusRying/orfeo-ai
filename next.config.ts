import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // Only use basePath in production (GitHub Pages)
  basePath: isProd ? '/orfeo-ai' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
