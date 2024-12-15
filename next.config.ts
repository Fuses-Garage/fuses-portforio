import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/fuses-portforio",
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
