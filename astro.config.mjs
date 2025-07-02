import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static'; // or '@astrojs/vercel/serverless'

export default defineConfig({
  adapter: vercel(),
  base: '', // or '' if deploying to root
  output: 'static'
});
