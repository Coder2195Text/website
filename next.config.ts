import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        // us-east-1.graphassets.com
        protocol: "https",
        hostname: "us-east-1.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
