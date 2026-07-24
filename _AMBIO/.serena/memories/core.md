# Core

Single-page Nuxt 4 site "Ambio" at bigqueernerds.com (tagline: "Something is listening."). Landing page with email subscribe list, deployed as a Cloudflare Worker. Repo: github.com/synmux/bigqueernerds-com, default branch `main`.

## Source map

- `app/` — Vue side. `app.vue` is the whole UI (no pages/ dir, no routing). `components/`: EmailForm, WebGLBackground (three.js), AmbioLogo, ThemeToggle. `composables/useTheme.ts` + `plugins/theme.client.ts` for theming. `assets/css/tailwind.css` imports Tailwind v4 (no tailwind.config file).
- `server/` — Nitro side. `api/subscribe.post.ts`, `api/unsubscribe.post.ts`, `api/admin/subscriptions.get.ts`. `utils/` (auto-imported): `db.ts`, `auth.ts`, `ratelimit.ts`. `database/schema.ts` = Drizzle schema.
- `drizzle/` — generated SQL migrations + meta. Never hand-edit; regenerate (see `mem:suggested_commands` for db commands).
- `wrangler.jsonc` — Worker config. Bindings: `DB` (D1 "bigqueernerds-com"), `AI`, `ANALYTICS` (Analytics Engine), `BROWSER`, `IMAGES`, `ASSETS`, `CF_VERSION_METADATA`. Custom domains bigqueernerds.com + www. After editing bindings run cf-typegen (regenerates `worker-configuration.d.ts`, checked in, ~500KB).

## Invariants / gotchas

- DB: single `subscriptions` table — email (unique idx), status enum active|unsubscribed, ipAddress, userAgent, createdAt/updatedAt (integer timestamp mode, `$defaultFn`).
- `.env` is a NAMED PIPE (secrets injected at runtime) — never read or write it directly. `.dev.vars` → `.env` symlink; `.env.example` documents required vars (CLOUDFLARE_ACCOUNT_ID / CLOUDFLARE_DATABASE_ID / CLOUDFLARE_D1_TOKEN, consumed by `drizzle.config.ts` which throws if missing).
- `.claude` → `.agents` symlink; `CLAUDE.md` → `AGENTS.md` symlink. skilld manages per-dependency skills under `.agents/skills/`; AGENTS.md instructs evaluating installed skills per task.
- Design leans Catppuccin (theme-color #24273a = Macchiato base; code TODOs reference Catppuccin colours).

Details: `mem:tech_stack` (frameworks/versions), `mem:suggested_commands` (dev/db/deploy commands), `mem:conventions` (code style), `mem:task_completion` (done-checklist).
