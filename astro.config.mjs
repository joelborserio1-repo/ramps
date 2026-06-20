// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// `site` is the production domain that all ads land on. hunterramps.au
// redirects here (see public/_redirects).
export default defineConfig({
  site: 'https://newcastleramps.com.au',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
