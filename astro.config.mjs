// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true
  }), starlight({
    title: "Fake Rubik Store Docs",
    customCss: ['./src/tailwind.css']
  }),   mdx()],
  devToolbar: {
    enabled: true
  }
});