import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kevin-turnbull.example',
  integrations: [mdx()],
  output: 'static',
});
