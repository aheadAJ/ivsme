import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
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
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ivsme.vercel.app',
          },
        ],
        destination: 'https://www.ivsme.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
