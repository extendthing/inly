import type { NextConfig } from 'next';

export default {
    async rewrites() {
        return [
            { "source": "/(.*)", "destination": "/" }
        ]
    },
    reactStrictMode: true,
} satisfies NextConfig;