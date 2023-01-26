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
    plugins: [VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}',
        ],
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: null,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.cdnfonts\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'cdn-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
        ]
      },
    })]
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
  , webmanifest(
    {
      /**
       * required
       **/
      name: 'Salon Essentia.nl',

      /**
       * optional
       **/
      icon: 'public/images/essentia-sun.png', // source for favicon & icons

      short_name: 'Essentia',
      description: 'Uw plek voor complete verzorging tot in de kern',
      start_url: '/',
      theme_color: '#3367D6',
      background_color: '#3367D6',
      display: 'standalone',
    }
  )],
  output: "server",
  adapter: netlify()
});