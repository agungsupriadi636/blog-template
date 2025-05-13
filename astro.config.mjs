import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
import remarkToc from 'remark-toc';
import { remarkReadingTime } from './src/plugin/reading-time.mjs';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-anda.com',
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-family"
    }
    ]
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap(), icon()],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
    // Applied to .md and .mdx files
    remarkPlugins: [remarkReadingTime, [remarkToc, { heading: 'toc', maxDepth: 3 }]],
  },
});