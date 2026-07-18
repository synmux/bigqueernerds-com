---
name: nitropack-skilld
description: 'ALWAYS use when writing code importing "nitropack". Consult for debugging, best practices, or modifying nitropack, nitro.'
metadata:
  version: 2.13.4
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# nitrojs/nitro `nitropack@2.13.4`

**Tags:** latest: 2.13.4

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p nitropack` instead of grepping `.skilld/` directories. Run `skilld search --guide -p nitropack` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

## DEPRECATED Imports

- DEPRECATED: `defineNitroConfig()` — v2 moved to `nitropack/config`, avoid importing from main entry [source](./.skilld/pkg/dist/core/index.d.ts:L66:L68)

- DEPRECATED: `NitroRuntimeConfig` interface — import from `nitropack/types` instead, main export is legacy [source](./.skilld/pkg/dist/core/index.d.ts:L70:L82)

- DEPRECATED: `NitroRuntimeHooks` interface — import from `nitropack/types` instead, main export is legacy [source](./.skilld/pkg/dist/core/index.d.ts:L83:L92)

- DEPRECATED: `NitroRuntimeConfigApp` interface — import from `nitropack/types` instead, main export is legacy [source](./.skilld/pkg/dist/core/index.d.ts:L94:L98)

## NEW Experimental Task APIs

- NEW: `runTask(taskEvent, opts)` (experimental) — run tasks programmatically with name and payload; throws 404 if task missing, 501 if no handler; requires `experimental.tasks: true` in config [source](./.skilld/docs/1.docs/50.tasks.md:L150:L164)

- NEW: `listTasks(opts)` (experimental) — list all available tasks with metadata; requires `experimental.tasks: true` in config [source](./.skilld/pkg/dist/core/index.d.ts:L20:L25)

- NEW: `defineTask()` — task definition helper with optional `meta` (name, description) and required `run(event)` function [source](./.skilld/docs/1.docs/50.tasks.md:L27:L60)

## NEW Task Configuration

- NEW: `scheduledTasks` config — map cron expressions to task names for automatic execution; tasks receive `payload.scheduledTime` with current timestamp; supported by dev, node_server, bun, deno_server, cloudflare_module, vercel presets [source](./.skilld/docs/1.docs/50.tasks.md:L100:L129)

- NEW: `experimental.tasks` config flag — must be `true` to enable task APIs; tasks are scanned from `tasks/` directory with nested naming via `:` delimiter [source](./.skilld/docs/1.docs/50.tasks.md:L9:L25)

- NEW: Task file structure — define tasks in `tasks/[name].ts` with nested directories joined by `:`, e.g. `tasks/db/migrate.ts` → task name `db:migrate` [source](./.skilld/docs/1.docs/50.tasks.md:L27:L31)

## NEW Configuration Options

- NEW: `ssrRoutes` config option — added in v2.12.0 for server-side rendering routes configuration [source](./.skilld/releases/v2.12.0.md:L17)

## NEW Provider Features

- NEW: Vercel observability route hints — route-level observability tracking in v2.12.0; configurable via `nitro.config.ts` [source](./.skilld/releases/v2.12.0.md:L15:L15)

- NEW: Cloudflare dev preset — development preset for Cloudflare Workers added in v2.12.0 with full docs support [source](./.skilld/releases/v2.12.0.md:L13:L14)

- NEW: Vercel skew protection support — added in v2.13.0 for deployment skew tolerance [source](./.skilld/releases/v2.13.0.md:L13)

## NEW Runtime Features

- NEW: `NITRO_BUN_IDLE_TIMEOUT` environment variable — control Bun runtime idle timeout; added in v2.13.0 [source](./.skilld/releases/v2.13.0.md:L14)

## Preset Deprecations

- DEPRECATED: `edgio` preset — no longer recommended; migrate to alternative provider [source](./.skilld/releases/v2.12.5.md:L27)

**Also changed:** `AWS Amplify` node.js default to 20.x · Version meta endpoint for build info · Bun runtime support in Vercel preset
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Pass `event` as the first argument to `defineCachedFunction` in edge workers — keeps the instance alive during cache updates without blocking the response to clients [source](./.skilld/docs/1.docs/7.cache.md:L99:122)

- Use generic type parameters with `useStorage()` to type-safely access storage values — apply generics either to `useStorage()` or to individual `getItem()` calls [source](./.skilld/docs/1.docs/8.storage.md:L27:29)

- Define OpenAPI metadata at build-time with `defineRouteMeta` macro — zero runtime overhead since metadata is statically extracted during the build process [source](./.skilld/docs/1.docs/50.openapi.md:L38:62)

- Use `$development` and `$production` keys in `nitro.config.ts` to apply environment-specific configuration overrides — cleaner than separate config files and works with c12 conventions [source](./.skilld/docs/1.docs/50.configuration.md:L42:62)

- Leverage route rule merging with pattern specificity — least-specific patterns match first, more-specific rules override them, use `false` to explicitly disable inherited rules [source](./.skilld/docs/1.docs/5.routing.md:L460:477)

- Pass an `upgrade` hook to `defineWebSocketHandler` to authenticate connections and attach context data before the connection opens [source](./.skilld/docs/1.docs/50.websocket.md:L78:110)

- Use `devStorage` to override storage drivers only during development and prerendering — allows local filesystem or in-memory storage while production uses managed services like Redis [source](./.skilld/docs/1.docs/8.storage.md:L104:129)

- Map nested runtime config keys to environment variables with `UPPER_SNAKE_CASE` prefix — Nitro automatically converts nested objects to env vars using the `NITRO_` prefix [source](./.skilld/docs/1.docs/50.configuration.md:L145:159)

- Organize related routes without affecting file-based routing using route groups wrapped in parentheses — useful for separating `/api` (admin) and `/api` (public) handlers in the same directory [source](./.skilld/docs/1.docs/5.routing.md:L59:75)

- Set `lazy: true` in route configuration to defer handler imports until they're first requested — improves initial build and startup time especially for large projects [source](./.skilld/docs/1.docs/5.routing.md:L245:253)

- Define scheduled tasks with cron expressions in `scheduledTasks` config — Nitro automatically handles platform-specific scheduling (Cloudflare, Vercel) without manual setup [source](./.skilld/docs/1.docs/50.tasks.md:L100:129)

- Request deduplication happens automatically for concurrent cache misses on the same key — only one handler invocation runs, all waiting requests share the result [source](./.skilld/docs/1.docs/7.cache.md:L50:52)

- Use `handlers` config with `middleware: true` and a specific `route` pattern for route-scoped middleware — avoids running global middleware on every request when you only need protection on `/api/**` [source](./.skilld/docs/1.docs/5.routing.md:L392:410)

- Prefix numbered middleware files with zero-padding (e.g., `01`, `02`) when you have more than ten middleware in the same directory — prevents string-based sorting issues where `10.ts` would run before `2.ts` [source](./.skilld/docs/1.docs/5.routing.md:L361:371)

<!-- /skilld:best-practices -->
