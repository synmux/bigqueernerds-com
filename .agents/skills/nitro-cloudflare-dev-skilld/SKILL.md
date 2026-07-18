---
name: nitro-cloudflare-dev-skilld
description: 'ALWAYS use when writing code importing "nitro-cloudflare-dev". Consult for debugging, best practices, or modifying nitro-cloudflare-dev, nitro cloudflare dev.'
metadata:
  version: 0.2.2
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# pi0/nitro-cloudflare-dev `nitro-cloudflare-dev@0.2.2`

**Tags:** latest: 0.2.2

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p nitro-cloudflare-dev` instead of grepping `.skilld/` directories. Run `skilld search --guide -p nitro-cloudflare-dev` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes that affect usage of nitro-cloudflare-dev in v0.2.2.

- BREAKING: `shamefullyPatchR2Buckets` option removed in v0.2.0 — this configuration option was removed and will cause configuration errors if still present in `cloudflareDev` config; remove it from `nitro.config.ts` or `nuxt.config.ts` [source](./.skilld/releases/v0.2.0.md)

- NEW: `environment` config option — added in v0.1.5, allows specifying a particular Cloudflare environment for multi-environment configurations via `cloudflareDev: { environment: 'production' }` [source](./.skilld/releases/v0.1.5.md)

- CHANGED: Configuration file format support — v0.2.2 extends support to include `wrangler.json` and `wrangler.jsonc` in addition to `wrangler.toml`; the module automatically locates the closest configuration file [source](./.skilld/releases/v0.2.2.md)

- CHANGED: Environment variable handling — v0.2.1 fixed behaviour to only set environment when explicitly defined, preventing silent environment mismatches in multi-environment setups [source](./.skilld/releases/v0.2.1.md)

**Also changed:** `configPath` config option · `persistDir` config option · `silent` config option
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Install `wrangler` as a sibling dev dependency — the module requires it to access the Cloudflare runtime. Without it, `getPlatformProxy` will fail and dev mode will not initialise bindings [source](./.skilld/pkg/README.md#usage)

- Use `wrangler.json` or `wrangler.jsonc` instead of `.toml` — JSON/JSONC formats provide better IDE schema support and type hints, while the module auto-discovers all three formats equally [source](./.skilld/releases/v0.2.2.md)

- Rely on auto-discovery for `wrangler.toml` location — the module searches from `srcDir` upward and finds the closest config file. Only set `configPath` if your setup deviates from the standard project layout [source](./pkg-nitro-cloudflare-dev/README.md#available-options)

- Define `environment` only when using multi-environment setups — leave it undefined for single-environment projects. The v0.2.1 fix ensures undefined is handled safely without binding errors [source](./.skilld/releases/v0.2.1.md)

- Do not store persistent state in `.wrangler/state/v3` — this directory is ephemeral and intended for miniflare's internal runtime state only. Use a separate database or KV namespace for application data [source](./pkg-nitro-cloudflare-dev/README.md#configuration-and-persistence)

- Never manually add `.wrangler/state/v3` to `.gitignore` — the module detects whether it exists and adds it automatically on first load [source](./pkg-nitro-cloudflare-dev/README.md#configuration-and-persistence)

- Set `silent: true` in CI/CD environments — suppresses the colourized banner output (which may cause terminal escapes to appear in logs) and reduces noise in build logs. Leave unset for local development [source](./pkg-nitro-cloudflare-dev/README.md#available-options)

- Access Cloudflare bindings via `event.cloudflare.env` and `event.cloudflare.context` in server routes — both are injected automatically by the module as extensions to H3 EventContext [source](./.skilld/pkg/dist/index.d.ts:L4:14)

- The module runs only in dev mode and has zero overhead in production — guard Cloudflare-specific code with `process.dev` checks when needed, but the module itself skips all initialisation in production builds [source](./pkg-nitro-cloudflare-dev/README.md)

- Migrate away from `shamefullyPatchR2Buckets` if upgrading from v0.1.x — this option was removed in v0.2.0. R2 bucket access is now handled natively by `getPlatformProxy` without patching [source](./.skilld/releases/v0.2.0.md)

- Enable eager proxy initialisation for faster dev server startup — the module attempts to initialise the `getPlatformProxy` object before your first request arrives. Errors during this step surface immediately, not lazily [source](./.skilld/releases/v0.1.1.md)

- Bind event context in middleware if passing context between handlers — v0.1.6 fixed context binding for complex handler chains. Ensure the event object is passed directly rather than destructuring context [source](./.skilld/releases/v0.1.6.md)

- Use relative paths for custom `configPath` — paths are resolved relative to the project root (nitro's `rootDir`), not the current working directory. This ensures your config is found regardless of where the dev server is launched [source](./pkg-nitro-cloudflare-dev/README.md#available-options)

- Expect the module to become optional in future Nitro releases — the core framework plans native `miniflare` integration as a dev preset. Code written with this module will continue to work when you upgrade [source](./pkg-nitro-cloudflare-dev/README.md)

<!-- /skilld:best-practices -->
