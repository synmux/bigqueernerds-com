# Tech Stack

- Package manager/runtime: Bun 1.3.14 (`packageManager` pin). Node 24.17.0 pinned via `.tool-versions` / `mise.toml` (mise manages both).
- Nuxt 4.5, Vue 3.5, vue-router 5 (unused — single app.vue, no pages/).
- Nitro 2.13, preset `cloudflare_module`, `nodeCompat` + `deployConfig` on; `nitro-cloudflare-dev` module gives local access to CF bindings. Prerender: crawlLinks, failOnError=false.
- Styling: Tailwind CSS v4 via `@tailwindcss/vite` plugin (config-less; entry `app/assets/css/tailwind.css`) + daisyUI 5.
- Nuxt modules: @nuxt/fonts (Inter via Google, weights 300–700), @nuxt/hints, @nuxt/icon, @nuxt/image, @nuxt/scripts, @nuxt/a11y (alpha), @nuxt/eslint.
- three.js 0.185 for WebGLBackground; vite `optimizeDeps.include` + `ssr.noExternal` both list `three` (needed for SSR build — keep if touching vite config).
- DB: Drizzle ORM 0.45 + drizzle-kit 0.31, sqlite dialect, Cloudflare D1; `d1-http` driver (remote) for drizzle-kit generate/studio.
- Deploy: wrangler 4 (Worker, not Pages). Formatting: prettier 3 (no config file → defaults) + trunk (`.trunk/trunk.yaml`, launcher `@trunkio/launcher`). skilld 2 generates AI skill docs.
