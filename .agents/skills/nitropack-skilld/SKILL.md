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

This section documents version-specific API changes in Nitro v2.13.4 and recent releases.

### Import Path Deprecations

- DEPRECATED: `defineNitroConfig` from main export — v2.x redirects to `nitropack/config` module. Import from `nitropack/config` directly instead [source](./.skilld/pkg/./dist/core/index.d.ts:L67-L68)

- DEPRECATED: `NitroRuntimeConfig` interface from main export — moved to `nitropack/types`. Import from `nitropack/types` instead; duplicate exports remain for v2 compatibility [source](./.skilld/pkg/./dist/core/index.d.ts:L70-L82)

- DEPRECATED: `NitroRuntimeHooks` interface from main export — moved to `nitropack/types`. Import from `nitropack/types` instead [source](./.skilld/pkg/./dist/core/index.d.ts:L83-L92)

- DEPRECATED: `NitroRuntimeConfigApp` interface from main export — moved to `nitropack/types`. Import from `nitropack/types` instead [source](./.skilld/pkg/./dist/core/index.d.ts:L93-L97)

### Configuration & Runtime

- NEW: `ssrRoutes` config option — specify custom routes to server-side render independently of page detection (v2.12.0 feature) [source](./.skilld/releases/v2.12.0.md:L17)

- NEW: `workspaceDir` config option — configure workspace directory for multi-package setups (v2.11.12) [source](./.skilld/releases/v2.11.12.md:L24)

- NEW: Dev presets — framework-specific presets for development servers. Cloudflare dev preset (#3470, #3479) adds zero-config Cloudflare environment in dev mode (v2.12.0) [source](./.skilld/releases/v2.12.0.md:L13-L14)

### Deployment & Observability

- NEW: Vercel observability route hints — automatic o11y integration for observability platforms on Vercel deployments (v2.12.0, #3474) [source](./.skilld/releases/v2.12.0.md:L15)

- BREAKING: Vercel `__nitro` function renamed to `__fallback` — Vercel preset internal function name changed (v2.12.5, #3502) [source](./.skilld/releases/v2.12.5.md:L20)

- DEPRECATED: `edgio` preset — deployment preset discontinued and no longer supported (v2.12.5) [source](./.skilld/releases/v2.12.5.md:L27)

### Experimental APIs

- EXPERIMENTAL: `runTask(taskEvent, opts?)` — execute server tasks at runtime. Signature and behavior subject to change [source](./.skilld/pkg/./dist/core/index.d.ts:L17-L19)

- EXPERIMENTAL: `listTasks(opts?)` → `Record<string, { meta: { description } }>` — list available server tasks. API unstable in v2.x [source](./.skilld/pkg/./dist/core/index.d.ts:L21-L25)

- EXPERIMENTAL: Cloudflare durable object `publish` export — new durable object messaging API (v2.11.10, #3305) [source](./.skilld/releases/v2.11.10.md:L19)

**Also changed:** Version metadata enhancement · Bun idle timeout env var support (v2.13.0) · Static asset compression concurrency limits · Firebase gen 1 SDK import fixes · ISR request handling improvements · Gzip encoding for `.gz` static files (v2.13.0) · Vary header for compressed assets · Route rules security hardening for proxy/redirect (v2.13.4)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Use `swr: true` in route rules or cached handlers for stale-while-revalidate caching — serves cached responses immediately while revalidating in the background, improving perceived latency without blocking the user. Default is `swr: true` with `maxAge: 1`. Set `swr: false` only when you need to block and wait for fresh values. [source](./.skilld/docs/1.docs/7.cache.md#swl-behavior)

- Combine `cache.varies` with explicit `headers: { Vary: '...' }` for proper CDN and browser caching — `varies` only creates separate server-side cache entries, it does not emit HTTP `Vary` headers. Use both together to signal to intermediary caches that responses differ by those headers. [source](./.skilld/discussions/discussion-3529.md)

- Use route-scoped middleware via `handlers` config with `middleware: true` instead of global middleware for performance-sensitive routes — file-based middleware in `middleware/` runs on every request; the `handlers` config with a specific `route` pattern runs only when matched, avoiding unnecessary overhead. [source](./.skilld/docs/1.docs/5.routing.md#route-scoped-middleware)

- Pass `event` as the first argument to `defineCachedFunction` on edge workers — edge worker instances are destroyed after each request; passing the event lets Nitro use `event.waitUntil` to keep the instance alive while the cache refreshes in the background, ensuring the response is sent immediately. [source](./.skilld/docs/1.docs/7.cache.md#edge-workers-instructions)

- Prefer `definePlugin` with lifecycle hooks over multiple global middleware for cross-cutting concerns — plugins execute once on startup and register hooks that fire throughout the request lifecycle (request, response, error, close); this is more efficient than middleware that runs on every request. [source](./.skilld/docs/1.docs/50.plugins.md#nitro-runtime-hooks)

- Prefix middleware files with numbers to enforce explicit execution order — file names are sorted as strings, so `10.auth.ts` sorts before `2.logger.ts`. Use zero-padding (e.g., `01`, `02`, `10`) to avoid surprises. [source](./.skilld/docs/1.docs/5.routing.md#execution-order)

- Route rules are merged from least-specific to most-specific; use `false` to explicitly disable inherited rules — when patterns overlap, more specific rules take precedence. Set `cache: false` or `basicAuth: false` to override a parent pattern. [source](./.skilld/docs/1.docs/5.routing.md#rule-merging-and-overrides)

- Use `devStorage` to provide development-only storage drivers while keeping production config intact — this allows you to use a local filesystem driver in development while your production config points to Redis or another remote service, without conditional branching in your code. [source](./.skilld/docs/1.docs/8.storage.md#development-storage)

- Server entry (`server.ts`) runs AFTER route matching fails, not before — it is registered as a catch-all (`/**`) route that matches only when specific routes don't. Use server entry for renderer fallback or catch-all logic, not authentication (use route rules or middleware instead). [source](./.skilld/docs/1.docs/6.server-entry.md#request-lifecycle)

- Apply middleware with conditional logic on URL path to scope global middleware instead of creating multiple files — since global middleware runs on every request, check the URL inside the middleware function (e.g., `event.url.pathname.startsWith('/api/')`) rather than scattering logic across files. This keeps scope rules centralized. [source](./.skilld/docs/1.docs/5.routing.md#request-filtering)

- Use hook `tags` array in error handlers to identify the error source — tags like `"request"`, `"response"`, `"cache"`, `"plugin"`, `"unhandledRejection"` help you differentiate where an error originated, enabling targeted error handling logic. [source](./.skilld/docs/1.docs/50.plugins.md#capturing-errors)

- Enable `envExpansion: true` to substitute environment variable references in runtime config at runtime — set values like `url: "https://{{APP_DOMAIN}}/api"` and Nitro will expand `{{APP_DOMAIN}}` to the environment variable value, useful for multi-environment configs. [source](./.skilld/docs/1.docs/50.configuration.md#env-expansion)

- Use `getKey()` function in `defineCachedFunction` to control cache key generation for complex arguments — without `getKey`, Nitro hashes the entire argument set; a custom `getKey` lets you exclude irrelevant parameters (e.g., return repo name when the function takes `(event, repo, timestamp)`). [source](./.skilld/docs/1.docs/7.cache.md#cache-keys)

- Unregister hooks when you need to conditionally disable behavior in plugins — the `hook()` method returns an unregister function; call it later to remove the hook, useful for feature flags or environment-specific behavior without complex conditional logic inside hooks. [source](./.skilld/docs/1.docs/50.plugins.md#unregistering-hooks)

<!-- /skilld:best-practices -->
