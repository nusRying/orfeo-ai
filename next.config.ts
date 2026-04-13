import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const configuredBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH?.trim();
const normalizedBasePath =
  configuredBasePath && configuredBasePath !== '/'
    ? `/${configuredBasePath.replace(/^\/+|\/+$/g, '')}`
    : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: normalizedBasePath || '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
