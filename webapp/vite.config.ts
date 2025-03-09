import type { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA }  from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default {
    plugins: [
        react(),
        VitePWA(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "../app/src"),
            "@webapp": path.resolve(__dirname, "../webapp"),
        }
    },
    server: {
        port: 8000,
    }
} satisfies UserConfig;