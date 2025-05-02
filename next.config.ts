import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.enoughbadge.com',
      },
    ],
  },
};

export default nextConfig;
