import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://ipfs.io/ipfs/*')],
  },
};

export default nextConfig;
