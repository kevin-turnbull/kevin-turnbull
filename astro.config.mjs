import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.kevin-turnbull.com',
  integrations: [mdx()],
  output: 'static',
});
