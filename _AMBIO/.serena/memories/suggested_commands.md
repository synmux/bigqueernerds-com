# Suggested Commands

All via Bun from repo root.

- `bun install` — postinstall chain runs: nuxt prepare → skilld prepare → wrangler types → format.
- `bun run dev` — full `nuxt build` then `wrangler dev` (NOT hot-reload `nuxt dev`; every run is a complete build served by workerd with real bindings). `bun run dev:wrangler` skips the rebuild.
- `bun run build` — nuxt build. `bun run generate` — static generate.
- `bun run deploy` — build + `wrangler deploy`. `bun run deploy:wrangler` — deploy without rebuild.
- DB: `bun run db:generate` (drizzle-kit generate → `drizzle/`), `bun run db:migrate:local` / `bun run db:migrate:remote` (wrangler d1 migrations apply bigqueernerds-com), `bun run db:studio` (needs the three CLOUDFLARE_* env vars).
- `bun run cf-typegen` — regenerate `worker-configuration.d.ts` after changing wrangler.jsonc bindings.
- Format: `bun run format` (prettier --write . then trunk fmt -a). Lint: `bun x eslint .` (flat config via @nuxt/eslint) and/or `bun x trunk check`.
- No test script and no typecheck script exist (as of 2026-07-19); `bun run build` is the de-facto compile gate.
- Darwin/BSD userland: `sed -i ''` needs the empty suffix; prefer `rg`/`fd` where available. Shell is fish.
