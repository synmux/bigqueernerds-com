---
name: nuxt-icon-skilld
description: "ALWAYS use when writing code importing \"@nuxt/icon\". Consult for debugging, best practices, or modifying @nuxt/icon, nuxt/icon, nuxt icon, icon."
metadata:
  version: 2.5.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# nuxt/icon `@nuxt/icon@2.5.1`
**Tags:** latest: 2.5.1

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/icon` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/icon` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- BREAKING: Nuxt v4 requirement — v2.0.0 requires Nuxt v4, v1.x compatible with Nuxt 3 [source](./.skilld/releases/v2.0.0.md#breaking-changes)

- NEW: `NuxtIconBundle` Vite plugin — standalone icon bundler for non-Nuxt Vue apps, introduced v2.3.0 [source](./.skilld/releases/v2.3.0.md:L11)

- NEW: `icon.serverBundle.externalizeIconsJson` option — v2.x feature to externalize icon JSON instead of inlining, requires Node.js JSON module support [source](./.skilld/pkg-icon/README.md:L415:L434)

- NEW: Nested folder scanning for custom collections — v2.1.0 added automatic discovery of nested icon directories (recursive: true or auto) [source](./.skilld/releases/v2.1.0.md:L11)

- NEW: `icon.serverBundle` mode options — v2.x supports `'local'`, `'remote'`, and `'auto'` modes for serving icons from different sources [source](./.skilld/pkg-icon/README.md:L368:L411)

- NEW: `icon.clientBundle.includeCustomCollections` option — v2.x feature to include all custom collections in client bundle, auto-enabled when `ssr: false` [source](./.skilld/pkg-icon/README.md:L519:L529)

- NEW: `icon.cssLayer` option — v2.x support for specifying CSS layer for icon styles (e.g., for TailwindCSS v4) [source](./.skilld/pkg-icon/README.md:L85:L90)

- NEW: `icon.aliases` configuration — ability to define icon aliases for easier swapping and reuse [source](./.skilld/pkg-icon/README.md:L297:L299)

- NEW: `provider: 'none'` option — v1.13.0 added ability to disable runtime icon fetching entirely, rely on client bundle only [source](./.skilld/releases/v1.13.0.md:L12)

- NEW: `:customize="false"` prop — v1.12.0 added ability to disable per-icon customization override [source](./.skilld/releases/v1.12.0.md:L12)

- NEW: IconifyJSON object support in customCollections — v1.12.0 allows passing full IconifyJSON objects instead of just file paths [source](./.skilld/releases/v1.12.0.md:L13)

- NEW: `icon.customize` global option — ability to define SVG customization functions globally in app.config.ts for all icons [source](./.skilld/pkg-icon/README.md:L356:L362)

- NEW: `icon.normalizeIconName` option for custom collections — v1.10+ feature to opt-in to case-sensitive icon names, defaults true but planned to flip in v2 [source](./.skilld/pkg-icon/README.md:L254:L277)

- NEW: `icon.clientBundle.scan` with globInclude/globExclude — fine-grained control over which files are scanned for icon usage in client bundle [source](./.skilld/pkg-icon/README.md:L542:L551)

- NEW: `icon.localApiEndpoint` configuration — customise the default `/api/_nuxt_icon/:collection` server endpoint path [source](./.skilld/pkg-icon/README.md:L311)

- NEW: `icon.fallbackToApi` option — control whether to fallback to Iconify API when icon not in local bundle [source](./.skilld/pkg-icon/README.md:L311)

- NEW: `icon.iconifyApiEndpoint` option — override default Iconify API endpoint with custom hosted API [source](./.skilld/pkg-icon/README.md:L311)

- NEW: `icon.componentName` option — rename the component from `<Icon />` to custom name (e.g., `<NuxtIcon />`) [source](./.skilld/pkg-icon/README.md:L139:L143)

- NEW: `icon.serverBundle.remote` provider option — v2.x support for remote CDN providers (jsdelivr, unpkg, github-raw) instead of bundling locally [source](./.skilld/pkg-icon/README.md:L395:L405)

**Also changed:** Provider mode `'auto'` as default behavior · Client bundle globbing patterns · Server provider endpoint registration in v2.5.0 · SSR adapter fixes v2.5.1
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Install icon collections locally with `npm i -D @iconify-json/collection-name` instead of relying on Iconify API fetching — improves performance on both SSR and client-side, and keeps the server bundle lean by only including used collections [source](./.skilld/pkg/README.md#L102:L108)

- Use `createResolver()` from `nuxt/kit` when defining custom collection paths — ensures paths resolve correctly both in regular projects and when your project is used as an extendable Nuxt layer by other projects [source](./.skilld/pkg/README.md#L160:L183)

```ts
import { createResolver } from "nuxt/kit"
const { resolve } = createResolver(import.meta.url)
// Then use resolve() for paths in customCollections
```

- Configure icon customization and defaults in `app.config.ts` (not `nuxt.config.ts`) — enables runtime configuration changes without rebuilding the server [source](./.skilld/pkg/README.md#L288)

- Switch server bundle mode to `'remote'` when deploying to serverless or edge computing environments like Vercel Edge or Cloudflare Workers — avoids bundling large icon JSON files and fetches from CDN instead [source](./.skilld/pkg/README.md#L369:L411)

- Use `fill="currentColor"` in custom SVG icon definitions — automatically generates `mask-image` CSS rules instead of `background-image`, making icons respond to Tailwind text-colour utilities [source](./.skilld/issues/issue-367.md#L26:L36)

- Switch icon rendering `mode` to `'svg'` when using custom icons that need colour control — allows SVG native rendering with currentColor support, bypassing CSS mask limitations [source](./.skilld/issues/issue-402.md#L70:L77)

- Set `icon.serverBundle.externalizeIconsJson: true` for large icon collections — reduces build memory usage and improves bundling speed at the cost of requiring dynamic JSON imports in Node.js v22+ [source](./.skilld/pkg/README.md#L415:L434)

- Enable client bundle with static scanning (`scan: true`) to pre-bundle all statically-detected icon usages — eliminates network requests for known icons while keeping the client bundle lean [source](./.skilld/pkg/README.md#L478:L494)

- Write icon names literally in templates instead of dynamic string construction — enables the static scanner to detect and pre-bundle icons, avoiding runtime network requests [source](./.skilld/pkg/README.md#L555:L565)

- Configure `cssLayer: 'base'` in app.config when using TailwindCSS v4 with CSS mode rendering — ensures icon styles are injected into the correct CSS layer for proper cascade [source](./.skilld/pkg/README.md#L78:L90)

- Set `provider: 'server'` explicitly when building SPAs (`ssr: false`) with custom collections — routes icon fetching to the server endpoint instead of falling back to Iconify API [source](./.skilld/pkg/README.md#L218:L236)

- Use `provider: 'none'` with client bundle when you want zero runtime fetching — useful for offline-first apps or static generation where all icons are pre-bundled [source](./.skilld/pkg/README.md#L240:L252)

- Enable `normalizeIconName: false` in custom collections to preserve icon name casing (requires v1.10+) — allows using custom icons like `my-icon:FooBar` without kebab-case conversion [source](./.skilld/pkg/README.md#L254:L277)

- Configure test-mode icon handling with `provider: 'none'` and client bundle using node_modules scan paths — component testing environments lack server routes, so icons must be pre-bundled with explicit dynamic icon includes [source](./.skilld/pkg/README.md#L649:L679)
<!-- /skilld:best-practices -->
