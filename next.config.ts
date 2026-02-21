import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/timlen-photography",
  images: { unoptimized: true },
};

export default nextConfig;
