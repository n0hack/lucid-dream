import expressiveCode from 'astro-expressive-code';
import { defineConfig, passthroughImageService } from 'astro/config';
import rehypeFigure from 'rehype-figure';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { SITE_URL } from './src/constants/seo';

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
  filter: (page) => !page.includes(`${SITE_URL}/search`),
};

export default defineConfig({
  integrations: [react(), tailwindcss(), expressiveCode(expressiveCodeOptions), mdx(), sitemap(sitemapOptions)],
  output: 'hybrid',
  site: SITE_URL,
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    rehypePlugins: [[rehypeFigure, {}]],
  },
});
