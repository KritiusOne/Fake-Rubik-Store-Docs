// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), starlight({
    title: "Fake Rubik Store Docs",
    logo: {
      dark: "./src/assets/logo-dark.svg",
      light: "./src/assets/logo-light.svg"
    },
    social: {
      github: "https://github.com/KritiusOne/FakeRubikStoreAPI"
    },
    customCss: ['./src/tailwind.css'],
    sidebar: [
      {
        label: "Introducción",
        items: [
          { label: "Objetivo del proyecto", link: "/introduction/goals"}
        ]
      }
    ]
  }),   mdx()],
  devToolbar: {
    enabled: true
  }
});