import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pages',
        destination: '/pages/about-us',
        permanent: true, 
      },
    ];
  },
  images: {
    domains: ["mindray.scene7.com", "i.ibb.co"],
  },
};

export default nextConfig;
