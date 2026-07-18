// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },

  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/a11y",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/scripts",
  ],

  fonts: {
    families: [
      {
        name: "IBM Plex Sans",
        provider: "google",
        weights: [400, 700],
        styles: ["normal", "italic"],
        subsets: ["latin"],
      },
      {
        name: "Metrophobic",
        provider: "google",
        weights: [400],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
});
