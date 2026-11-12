import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Preview is a GitHub Pages project site.
// `site` is the origin. `base` is the repository path.
export default defineConfig({
  site: 'https://kevinandseven.github.io',
  base: '/scs-aviation-preview',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
