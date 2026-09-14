import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kevinturnbull.uk',
  integrations: [mdx(), sitemap()],
  output: 'static',
  // Allow Cloudflare quick-tunnel hostnames during preview demos.
  vite: {
    preview: {
      allowedHosts: true,
    },
    server: {
      allowedHosts: true,
    },
  },
});
