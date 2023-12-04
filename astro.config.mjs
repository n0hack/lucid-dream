import expressiveCode from 'astro-expressive-code';
import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

/** @type {import('astro-expressive-code').AstroExpressiveCodeOptions}  */
const expressiveCodeOptions = {
  themes: ['dracula-soft'],
  styleOverrides: {
    codeFontFamily: 'Fira Code',
  },
  defaultLocale: 'ko-KR',
};

/** @type {import("@astrojs/sitemap").SitemapOptions} */
const sitemapOptions = {
  filter: (page) =>
    !page.includes('https://lucid-dream.net/search') &&
    !(page.includes('/page/') && Number(page.match(/\d+$/g)[0]) > 1),
};

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwindcss(), expressiveCode(expressiveCodeOptions), mdx(), sitemap(sitemapOptions)],
  output: 'hybrid',
  site: 'https://lucid-dream.net',
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
});
