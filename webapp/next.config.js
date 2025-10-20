/* eslint-disable @typescript-eslint/no-require-imports */
const { SITE } = require("./src/config.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use an absolute turbopack root to avoid root inference warnings
  turbopack: {
    root: __dirname,
  },
  // Do not fail production build on lint errors
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Use Next.js defaults for React resolution to avoid RSC/SSR alias issues
  webpack: (config) => {
    return config;
  },
  output: "standalone",
  experimental: {
    // Disable static page generation for now
    workerThreads: false,
    cpus: 1,
  },
  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== "/" ? SITE.basePathname : "",
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
