import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
};

export default nextConfig;
