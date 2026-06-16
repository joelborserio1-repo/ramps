// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to your production domain so canonical URLs and Open Graph
// URLs all resolve correctly on hunterramps.au.
export default defineConfig({
  site: 'https://hunterramps.au',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
