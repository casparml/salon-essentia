import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import { VitePWA } from 'vite-plugin-pwa';

// https://astro.build/config
import purgecss from "astro-purgecss";

// https://astro.build/config
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    },
    plugins: [VitePWA()]
  },
  site: 'http://localhost:3001',
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), prefetch(), sitemap()
  // AstroPWA({
  //   mode: 'development',
  //   base: '/',
  //   scope: '/',
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'Astro PWA',
  //     short_name: 'Astro PWA',
  //     theme_color: '#ffffff',
  //     icons: [
  //       {
  //         src: 'pwa-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png',
  //       },
  //     ],
  //   },
  //   workbox: {
  //     globPatterns: ['**/*.{css,js,jpg,jpeg,woff,woff2,html,svg,png,ico,txt}'],
  //   },
  //   devOptions: {
  //     enabled: true,
  //     navigateFallback: '/404',
  //   },
  // }),
  , purgecss(), webmanifest()]
  // output: "server",
  // adapter: netlify()
});