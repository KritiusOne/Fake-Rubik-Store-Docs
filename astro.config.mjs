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
          { label: "Sobre este proyecto", link: "/introduction/goals" },
          { label: "Público objetivo", link: "/introduction/target" },
          { label: "Alcance del proyecto", link: "/introduction/scope" },
        ]
      },
      {
        label: "Guia del desarrollador",
        items: [
          { label: "Configuración del entorno", link: "/guide/env-config" },
          { label: "Autenticación", link: "/guide/auth" },
          { label: "Métodos HTTP soportados", link: "/guide/methods-support" },
        ]
      },
      {
        label: "Entidades",
        items: [
          { label: "Índice", link: "/entities/" },
          { label: "Categorias", link: "/entities/categories" },
          { label: "Dirección", link: "/entities/address" },
          { label: "Envíos", link: "/entities/deliveries" },
          { label: "Órdenes", link: "/entities/orders" },
          { label: "Productos", link: "/entities/products" },
          { label: "Reviews", link: "/entities/reviews" },
          { label: "Rol", link: "/entities/role" },
          { label: "States", link: "/entities/states" },
          { label: "Usuario", link: "/entities/user" }
        ]
      }
    ],
    defaultLocale: "root",
    locales: {
      root: {
        label: "Español",
        lang: "es-ES"
      }
    }
  }), mdx()],
  devToolbar: {
    enabled: true
  }
});