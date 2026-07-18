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

This section documents version-specific API changes for nitro-cloudflare-dev v0.2.2 — prioritising recent major/minor releases.

## Breaking Changes and New Features

- BREAKING: `shamefullyPatchR2Buckets` configuration option removed in v0.2.0 — if your code uses this option in `cloudflareDev` or `nitro.cloudflareDev` config, it will be silently ignored and R2 buckets will no longer be patched in development [source](./.skilld/releases/v0.2.0.md#refactors)

- NEW: Configuration file format support — v0.2.2 now recognises `wrangler.json` and `wrangler.jsonc` in addition to the previously supported `wrangler.toml`, automatically detecting the closest configuration file in the directory tree [source](./.skilld/releases/v0.2.2.md#enhancements)

**Also changed:** `environment` configuration option · `configPath` and `silent` options
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Register the module differently for Nuxt vs Nitro — Nuxt uses string-based module registration in `defineNuxtConfig()` whilst Nitro requires an explicit import and function call in `modules` array. [source](./.skilld/pkg/README.md:L16:L32)

- Support both `wrangler.toml` and `wrangler.json`/`wrangler.jsonc` configuration files — the module automatically detects and uses the closest wrangler config file in the directory hierarchy without explicit configuration. [source](./.skilld/releases/v0.2.2.md:L13)

- Configure the `environment` option only when targeting specific multi-environment setups — passing an undefined environment can cause issues; v0.2.1 fixes this by checking if environment is actually defined before setting it. [source](./.skilld/releases/v0.2.1.md:L13)

- Access Cloudflare bindings through the h3 event context using three complementary patterns: `event.cf` for metadata, `event.cloudflare.env` for bindings, and `event.cloudflare.context` for the platform context. [source](./.skilld/pkg/dist/index.d.ts:L4:L13)

- Customise the persistence directory away from the default `.wrangler/state/v3` only if you need to isolate state across multiple development environments — the default location is automatically added to `.gitignore` on first use. [source](./.skilld/pkg/README.md:L34:L47)

- Pass `configPath` when your wrangler configuration is in a non-standard location or multiple projects share a monorepo — this allows the module to find the correct configuration without walking up the directory tree. [source](./.skilld/pkg/README.md:L40:L47)

- Use `silent: true` in development configurations where the module banner clutters output (CI logs, script execution) — the module logs initialisation time when not silent, which is useful for performance tracking during local development. [source](./.skilld/pkg/README.md:L40:L47)

- Avoid using R2 bucket patching workarounds since `shamefullyPatchR2Buckets` was removed in v0.2.0 — the module now provides clean access to R2 through standard Cloudflare bindings without requiring shims. [source](./.skilld/releases/v0.2.0.md:L13)

- Access the request metadata via `event.cloudflare.request` which includes the decorated `cf` property — this gives you per-request Cloudflare metadata (client country, threat score, cache status) in a single object. [source](./.skilld/pkg/dist/index.d.ts:L6:L9)

- Configure Nuxt-specific options through the `nitro.cloudflareDev` property in `nuxt.config.ts` rather than top-level `cloudflareDev` — this namespace prevents conflicts with other frameworks and clearly signals Nitro-specific configuration. [source](./.skilld/pkg/README.md:L40)

- Ensure wrangler is installed as a dev dependency alongside nitro-cloudflare-dev — the module depends on `getPlatformProxy` from wrangler's SDK, which is not included in nitro-cloudflare-dev itself. [source](./.skilld/pkg/README.md:L10:L14)

- Initialize bindings eagerly on server startup rather than lazily — the module performs eager proxy initialisation for better dev server startup performance and to surface configuration errors earlier. [source](./.skilld/releases/CHANGELOG.md:L149)

- Bind the plugin context correctly to preserve `this` scope in plugin methods — v0.1.6 fixed context binding issues that could cause runtime errors when calling methods from plugin hooks. [source](./.skilld/releases/CHANGELOG.md:L65)

- Verify wrangler configuration is valid and readable when the module starts — the module gracefully handles missing wrangler.toml files and logs helpful errors rather than crashing silently. [source](./.skilld/releases/CHANGELOG.md:L273:L275)

<!-- /skilld:best-practices -->
