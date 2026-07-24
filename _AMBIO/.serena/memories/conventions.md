# Conventions

- TypeScript everywhere, ESM (`"type": "module"`). Nuxt 4 layout: `app/` is srcDir, `server/` is Nitro.
- Vue SFCs: `<script setup lang="ts">` first, then template (script-first order).
- Formatting: prettier defaults (double quotes, semicolons, trailing commas) — no prettier config file; trunk fmt runs on top. ESLint: flat config `eslint.config.mjs` wrapping `withNuxt()` from `.nuxt/eslint.config.mjs`.
- Drizzle schema: snake_case column names mapped to camelCase TS fields; timestamps `integer(..., { mode: "timestamp" })` with `$defaultFn(() => new Date())`; export `$inferSelect`/`$inferInsert` type aliases.
- Nitro API routes named `<name>.<method>.ts` (e.g. `subscribe.post.ts`); shared server logic in `server/utils/` (auto-imported).
- Commits: Conventional Commits + GitMoji emoji title, multiline body with full details (user-wide rule; history follows it, e.g. "⬆️ chore(deps): …").
- British English in prose/comments.
- Config files favour JSONC (`wrangler.jsonc`) and alphabetically sorted package.json keys.
