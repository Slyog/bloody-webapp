const path = require("path");
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
};

module.exports = nextConfig;
