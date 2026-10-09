import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isStaticExport = isGitHubPages || process.env.STATIC_EXPORT === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = isGitHubPages && repositoryName ? `/${repositoryName}` : '';

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  output: isStaticExport ? 'export' : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  trailingSlash: isStaticExport,
  images: { unoptimized: isStaticExport },
  ...(isStaticExport ? {} : {
    async headers() {
      return [{ source: '/:path*', headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ] }];
    },
  }),
};

export default nextConfig;
