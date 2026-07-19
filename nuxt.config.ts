// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          href: "/images/favicon.avif",
          rel: "icon",
          type: "image/avif",
        },
      ],
      meta: [
        {
          charset: "utf-8",
        },
        {
          content: "width=device-width, initial-scale=1",
          name: "viewport",
        },
        {
          content: "Something is listening.",
          name: "description",
        },
        {
          content: "#24273a",
          name: "theme-color",
        },
      ],
      title: "Ambio",
    },
  },
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"], // Global CSS - Tailwind v4 is imported here
  devtools: {
    enabled: true,
  },
  fonts: {
    defaults: {
      styles: ["normal"],
      weights: [400],
    },
    families: [
      {
        name: "IBM Plex Sans",
        provider: "google",
        styles: ["normal", "italic"],
        subsets: ["latin"],
        weights: [400, 700],
      },
      {
        name: "Metrophobic",
        provider: "google",
        styles: ["normal"],
        subsets: ["latin"],
        weights: [400],
      },
    ],
  },
  modules: [
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "nitro-cloudflare-dev",
  ],
  nitro: {
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
    preset: "cloudflare_module",
  },
  // Vite configuration with Tailwind CSS v4
  vite: {
    optimizeDeps: {
      include: ["three"],
    },
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["three"],
    },
  },
});
