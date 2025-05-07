import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import { remarkReadingTime } from './src/plugin/reading-time.mjs';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkReadingTime, [remarkToc, { heading: 'toc', maxDepth: 3 }]],
  },
});