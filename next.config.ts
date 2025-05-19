import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },

  images: {
    unoptimized: true, // Disable image optimization for static export
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      {
        source: '/blogs/category',
        destination: '/blogs/categories',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
