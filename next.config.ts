import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
    experimental: {
      preloadEntriesOnStart: false,
      webpackMemoryOptimizations: true 
    },
  },
}
export default nextConfig;
