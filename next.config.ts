import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/home", permanent: false },
      { source: "/km", destination: "/home/km", permanent: false },
    ];
  },
};
export default nextConfig;
