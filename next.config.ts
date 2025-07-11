import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'out',
    basePath: '/portfolio', //build only, comment out on dev for front end only site
    assetPrefix: '/portfolio', //build only, comment out on dev for front end only site
    images: {
        unoptimized: true
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
