import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import webmanifest from 'astro-webmanifest';
import netlify from '@astrojs/netlify';
import { partytown } from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    prefetch(),
    sitemap(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    webmanifest({
      "name": "Salon Essentia.nl",
      "icon": "/images/Icon.png",
      "short_name": "Essentia",
      "description": "Uw plek voor complete verzorging tot in de kern",
      "start_url": "/",
      "theme_color": "#514350",
      "background_color": "#514350",
      "display": "standalone",
      "icons": [
        {
          "src": "/images/manifest/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/images/manifest/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/images/manifest/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/images/manifest/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ]
    }),
  ],
  output: "static",
  adapter: netlify()
});