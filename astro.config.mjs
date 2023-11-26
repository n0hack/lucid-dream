import expressiveCode from 'astro-expressive-code';
import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
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

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwindcss(), expressiveCode(expressiveCodeOptions), mdx()],
  output: 'hybrid',
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
});
