---
name: nuxt-fonts-skilld
description: 'ALWAYS use when writing code importing "@nuxt/fonts". Consult for debugging, best practices, or modifying @nuxt/fonts, nuxt/fonts, nuxt fonts, fonts.'
metadata:
  version: 0.14.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# nuxt/fonts `@nuxt/fonts@0.14.0`

**Tags:** latest: 0.14.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/fonts` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/fonts` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes in @nuxt/fonts v0.14.0 and recent releases.

### Breaking Changes (v0.14.0)

- BREAKING: Default font format is now `woff2` only — Previously, font providers returned multiple formats (`woff2`, `woff`, `truetype`, etc.). v0.14.0 resolves only `woff2` fonts by default, reducing CSS size. To restore previous behaviour, configure `fonts.defaults.formats` with additional formats like `['woff2', 'woff', 'ttf']` [source](./.skilld/releases/v0.14.0.md#breaking-changes)

- BREAKING: Font metadata cache invalidation — Font metadata caches are now isolated per provider and per provider options. After upgrading, your cache at `node_modules/.cache/nuxt/fonts/` will be invalidated and fonts re-fetched on next build (one-time occurrence) [source](./.skilld/releases/v0.14.0.md#cache-invalidation)

- BREAKING: Default font weight changed to `400 700` — In v0.12.0, the default font weight was explicitly set to `400 700`. Existing configurations without explicit weight defaults will now resolve differently [source](./.skilld/releases/v0.12.0.md:L30)

- BREAKING: Unified provider interface via `unifont` — v0.10.0 and v0.12.0 migrated to `unifont` for provider handling. Custom provider implementations or provider-specific integrations may require updates to match the new unifont interface [source](./.skilld/releases/v0.10.0.md#breaking-changes)

- BREAKING: CommonJS output removed — v0.11.0 removed CJS outputs and uses `@nuxt/module-builder`. Projects requiring CommonJS imports of `@nuxt/fonts` must migrate to ESM [source](./.skilld/releases/v0.11.0.md:L55)

### New Configuration Options (v0.14.0)

- NEW: `fonts.defaults.formats` — Control which font formats are resolved. Specify an array from `['woff2', 'woff', 'ttf', 'otf', 'eot']` to customise provider output [source](./.skilld/releases/v0.14.0.md:L54:L65)

- NEW: `fonts.throwOnError` — Configure whether font resolution errors should throw (stops build) or warn (build continues). Default is `false` (warn only) [source](./.skilld/releases/v0.14.0.md:L89:L99)

- NEW: `providerOptions` in font family config — Pass provider-specific options when configuring individual font families. Allows per-family customisation: `{ name: 'My Font', provider: 'google', providerOptions: { google: { /* ... */ } } }` [source](./.skilld/releases/v0.14.0.md:L67:L87)

### New Features (v0.14.0)

- NEW: `npm` provider — Built-in provider resolves fonts installed as npm packages via CDN metadata. Automatically attempts to find fonts in `node_modules` if no other provider matches. Configure with optional settings: `fonts: { npm: { /* options */ } }` [source](./.skilld/releases/v0.14.0.md:L39:L51)

- NEW: lightningcss support — If Nuxt uses Vite's lightningcss mode (e.g. with rolldown-vite), injected `@font-face` declarations are now minified with lightningcss instead of esbuild [source](./.skilld/releases/v0.14.0.md:L101:L103)

### New Hooks

- NEW: `fonts:public-asset-context` hook — Added in v0.13.0 for customising public asset paths during font resolution [source](./.skilld/releases/v0.13.0.md#enhancements)

### Stable APIs

- STABLE: `useFlatConfig` — Moved out of experimental in v0.11.0. Safe for production use in linting and config workflows [source](./.skilld/releases/v0.11.0.md:L34:L35)

### CSS Variables Processing (v0.11.0)

- NEW: CSS variables prefixed with `--font` are now processed by default — No explicit opt-in required. Variables matching `--font*` are recognised and inlined during font resolution [source](./.skilld/releases/v0.11.0.md:L14)

### Fixes & Improvements (v0.14.0)

- FIXED: Font flashes in development — Dev font proxy now returns `Cache-Control: public, max-age=31536000, immutable` headers, preventing flashes during HMR on SSR frameworks [source](./.skilld/releases/v0.14.0.md#fixes)

- FIXED: Font format prioritisation — woff2 subsets are now correctly prioritised over full ttf files when both are available [source](./.skilld/releases/v0.14.0.md#fixes)

**Also changed:** `devtools font file size display` · `Bunny provider subset filtering fixed` · `Adobe provider race condition fixed` · `Emit .cjs version of @nuxt/fonts/utils` · `Scan font families in font: CSS property`
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Only load font weights and styles you actually use in your design—configure `defaults.weights` and `defaults.styles` in `nuxt.config` to exclude 400/700 or italic if not needed. This directly reduces CSS size and download volume [source](./.skilld/docs/content/1.get-started/2.configuration.md#weights)

- Use pure CSS `font-family` declarations in stylesheets rather than inline styles—Nuxt Fonts processes CSS files to auto-detect and resolve fonts, but inline `style` attributes are not processed [source](./.skilld/docs/content/1.get-started/3.usage.md#pure-css)

- Customise `subsets` to include only the character ranges needed for your audience—default includes all major subsets (cyrillic, greek, vietnamese, latin, etc.), but a Latin-only site can reduce downloads by 70%+ [source](./.skilld/docs/content/1.get-started/2.configuration.md#subsets)

- Specify a single explicit `provider` when ambiguity exists across multiple font sources—use `provider: 'google'` (or `local`, `npm`, etc.) in family config to ensure deterministic resolution and avoid fallback chains [source](./.skilld/docs/content/1.get-started/2.configuration.md#provider)

- Name local fonts by weight and style in the filename to match detection conventions—e.g. `roboto.woff2` (400/normal), `roboto-700-italic.woff2` (700/italic), or use keywords like `bold` instead of numeric weight [source](./.skilld/docs/content/1.get-started/4.providers.md#local)

- Leverage the npm provider for `@fontsource/*` packages instead of CDN providers—fonts resolve at build time from `node_modules`, eliminating external requests and guaranteeing offline-first builds (v0.14.0+) [source](./.skilld/releases/v0.14.0.md#resolve-fonts-from-node_modules)

- Set `formats: ['woff2']` (or omit it—this is now the default in v0.14.0)—woff2 is universally supported in modern browsers and reduces CSS by eliminating redundant format fallbacks [source](./.skilld/releases/v0.14.0.md#default-font-format-is-now-woff2-only)

- Configure `priority: ['bunny', 'google']` to control which provider is checked first for each font family—prioritise privacy-focused or self-hosted options before public CDNs [source](./.skilld/docs/content/1.get-started/2.configuration.md#priority)

- Customise fallback font families via the `fallbacks` config option to align system fonts with your web font metrics—default fallbacks are generic (Arial for sans-serif, Times New Roman for serif) but can be tailored by generic family [source](./.skilld/docs/content/1.get-started/2.configuration.md#fallbacks)

- Avoid setting `global: true` on every font family—use it only for fonts actually used site-wide; injecting unused `@font-face` rules adds CSS bloat [source](./.skilld/docs/content/1.get-started/2.configuration.md#global)

- For Tailwind v4, define fonts as CSS variables in `@theme` without needing `processCSSVariables: true`—the module now handles this automatically (v0.11.0+) [source](./.skilld/docs/content/1.get-started/2.configuration.md#processcss-variables)

- Pass provider-specific options per font family using `providerOptions` (v0.14.0+)—e.g. Google Fonts variable weight ranges or Adobe Fonts subset filtering without global config changes [source](./.skilld/releases/v0.14.0.md#provider-specific-font-family-options)

- Use `provider: 'none'` to fully self-host or reference external CDN fonts with a manual `src` URL, bypassing all automatic resolution logic [source](./.skilld/docs/content/1.get-started/2.configuration.md#provider)

- Enable `throwOnError: true` in CI/build environments to catch font resolution failures early—defaults to `false` (warn only) to avoid blocking dev, but production builds should fail fast [source](./.skilld/releases/v0.14.0.md#throwonerror-option)

- Hooks into `fonts:providers` to add or replace providers via module authors, and `fonts:public-asset-context` for prerender access to resolved font URLs (e.g., OG image generation) [source](./.skilld/docs/content/2.advanced.md#module-hooks)

- The dev server now returns immutable cache headers (`max-age=31536000`) for font proxies (v0.14.0+)—prevents font flashes during HMR on SSR frameworks without requiring additional configuration [source](./.skilld/releases/v0.14.0.md#prevent-font-flashes-in-development)

- Expect font metadata caches (`node_modules/.cache/nuxt/fonts/`) to invalidate and refetch fonts after major version upgrades—this is intentional to ensure correct subset/format resolution with new provider logic [source](./.skilld/releases/v0.14.0.md#cache-invalidation)

<!-- /skilld:best-practices -->
