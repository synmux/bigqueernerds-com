# Task Completion Checklist

Run from repo root when a coding task is done:

1. `bun run format` — prettier --write . then trunk fmt -a.
2. `bun x eslint .` — must pass clean.
3. `bun run build` — de-facto type/compile gate (no separate typecheck script; no vue-tsc installed).
4. If wrangler.jsonc bindings changed: `bun run cf-typegen` and commit the regenerated `worker-configuration.d.ts`.
5. If `server/database/schema.ts` changed: `bun run db:generate`, commit the new `drizzle/` migration, apply with `db:migrate:local` (and `db:migrate:remote` only when deploying).
6. No test suite exists (as of 2026-07-19) — if tests get added, run them here.
7. Commit per feature/fix with GitMoji + Conventional Commits title and detailed multiline body.
8. Committing triggers a git hook that runs `bun install` and the full postinstall chain (nuxt prepare, skilld, cf-typegen, prettier, trunk fmt) — expect ~30s+ per commit and working-tree rewrites of generated files (`worker-configuration.d.ts`, `drizzle/meta/*.json`). To commit selectively while other work is staged, use pathspec form: `git add <file> && git commit -m "..." -- <file>`.
