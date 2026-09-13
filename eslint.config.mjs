// @ts-check
import withNuxt, { defineFlatConfigs } from "./.nuxt/eslint.config.mjs";

export default defineFlatConfigs(
  // Top-level ignore so ESLint CLI never considers this file
  {
    ignores: [
      ".agents/",
      ".claude/",
      ".codex/",
      "_AMBIO/",
      "_cloudflare/",
      "worker-configuration.d.ts",
    ],
  },
  withNuxt({
    rules: {
      "vue/first-attribute-linebreak": "off",
      "vue/html-self-closing": "off",
    },
  }),
);
