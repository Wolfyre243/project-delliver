import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter(), 
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'vite.png'],
      manifest: {
        name: 'HealthNest',
        short_name: 'HealthNest',
        description: 'A simple yet intuitive health tracker that aims to promote healthier living',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ],
      },
    })
  ],
});
