import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import pandacss from '@pandacss/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), pandacss()],
  output: 'hybrid',
  adapter: vercel(),
});
