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

This section documents version-specific API changes — prioritise recent major/minor releases.

- BREAKING: Font format default changed to `woff2` only — v0.14 removes multiple format resolution by default, reducing CSS size. Configure `formats` in `defaults` to restore previous behaviour [source](./.skilld/releases/v0.14.0.md#breaking-changes)

- BREAKING: Migration to `unifont` provider system — v0.10 and v0.12 major upgrade. Custom providers must use new `unifont` API instead of previous provider interface [source](./.skilld/releases/v0.10.0.md#breaking-changes)

- BREAKING: CommonJS outputs removed — v0.11 removed CJS distribution and requires `@nuxt/module-builder` alpha. Projects importing CJS entry points will fail [source](./.skilld/releases/v0.11.0.md#breaking-changes)

- BREAKING: Default font weight is now `'400 700'` — v0.12 changed default from unspecified to weight range, affecting variable font resolution and fallback metrics [source](./.skilld/releases/v0.12.0.md:L30:31)

- NEW: `npm` provider — v0.14 adds built-in provider to resolve fonts installed as npm packages via CDN metadata lookup [source](./.skilld/releases/v0.14.0.md#resolve-fonts-from-node_modules)

- NEW: `defaults.formats` option — v0.14 allows control over which font formats are resolved (e.g., `['woff2']`, `['woff2', 'woff', 'ttf']`) [source](./.skilld/releases/v0.14.0.md#font-format-resolution)

- NEW: `googleicons` provider — v0.8 added dedicated provider for Material Design Icons as a font source [source](./.skilld/releases/v0.8.0.md:L14)

- NEW: `providerOptions` property for font families — v0.14 allows per-family provider-specific options via `families[].providerOptions` object [source](./.skilld/releases/v0.14.0.md#provider-specific-font-family-options)

- NEW: `throwOnError` configuration option — v0.14 allows configuring whether font resolution errors throw or warn (default: `false`) [source](./.skilld/releases/v0.14.0.md#throwonerror-option)

- NEW: `fonts:public-asset-context` hook — v0.13 exposes hook for customising public asset context during font resolution [source](./.skilld/releases/v0.13.0.md:L15)

- DEPRECATED: CSS variable processing default changed — v0.11 defaults `processCSSVariables` to `'font-prefixed-only'` (was `true`). Full CSS variable support now requires explicit `true` value [source](./.skilld/docs/content/1.get-started/2.configuration.md:L244:258)

- NEW: CSS variable prefix processing — v0.11 automatically processes CSS variables prefixed with `--font` by default (when `processCSSVariables: 'font-prefixed-only'`) [source](./.skilld/releases/v0.11.0.md:L14)

- NEW: Experimental `disableLocalFallbacks` option — v0.8 adds experimental feature to disable automatic local fallback font generation [source](./.skilld/releases/v0.8.0.md:L15)

- BREAKING: `fontless` package integration — v0.12 extracts core utilities into separate `fontless` package. Direct imports from `@nuxt/fonts` may need updating [source](./.skilld/releases/v0.12.0.md#refactors)

**Also changed:** `devtools` font file size display new v0.11 · `$fetch` proxy support new v0.13 · relative font URL injection v0.9 · devtools UI improvements v0.8
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- **Declare font weights explicitly when using multiple weights** — By default @nuxt/fonts only loads 400 and 700. If your design system uses additional weights (300, 500, 600, etc.), explicitly configure them in defaults or per-family to avoid bold text rendering in the wrong weight [source](./.skilld/docs/content/1.get-started/2.configuration.md:L48:58)

- **Leave default format as woff2-only for production** — The v0.14 default only resolves woff2 fonts, which are universally supported in modern browsers. This reduces CSS size with no user impact in most cases. Only add additional formats if you need to support legacy browsers [source](./.skilld/docs/content/1.get-started/5.upgrade.md:L10:26)

- **Use `defaults` configuration for consistent font options across all fonts** — Rather than repeating weights, styles, and subsets per-family, define them once in `defaults` to ensure consistent behaviour and reduce config duplication [source](./.skilld/docs/content/1.get-started/2.configuration.md:L21:46)

- **Customize `fallbacks` map to match your design system** — The default fallback fonts (Arial, Times New Roman, etc.) are generic system fonts. Adjust the `fallbacks` config to use fonts from your actual design system for better metric matching and reduced layout shift [source](./.skilld/docs/content/1.get-started/2.configuration.md:L70:99)

- **Explicitly specify provider for critical fonts instead of relying on provider order** — Use the `provider` property on individual font families to guarantee a font is resolved from a specific source, rather than depending on provider priority. This prevents font selection from varying if providers are unavailable [source](./.skilld/docs/content/1.get-started/2.configuration.md:L135:139)

- **Use priority to control provider resolution order when using multiple providers** — If you want some fonts from Google and others from Bunny for privacy reasons, explicitly set `priority: ['bunny', 'google']` rather than relying on defaults [source](./.skilld/docs/content/1.get-started/2.configuration.md:L200:211)

- **Leverage the npm provider for @fontsource packages** — If you have @fontsource fonts installed as npm dependencies, @nuxt/fonts will auto-detect and resolve them locally. No CDN requests are made, making this ideal for self-hosted fonts [source](./.skilld/docs/content/1.get-started/4.providers.md:L44:62)

- **Use Tailwind v4 `@theme` block syntax for font-family declarations** — In Tailwind v4, define fonts via CSS variables in the `@theme` block instead of the fontFamily config object. Setting `processCSSVariables: true` is no longer needed for v0.11.0+ [source](./.skilld/docs/content/1.get-started/3.usage.md:L44:56)

- **Understand that font-family declarations work only in CSS stylesheets** — Inline styles with `font-family` in templates do not get processed by @nuxt/fonts; always declare fonts in separate CSS files or `<style>` blocks [source](./.skilld/docs/content/1.get-started/3.usage.md:L19:21)

- **Only use `global: true` for fonts that must be injected regardless of usage** — By default @nuxt/fonts only injects `@font-face` for fonts actually referenced in your CSS. Set `global: true` only when you want a font injected unconditionally (e.g., custom icon fonts) [source](./.skilld/docs/content/1.get-started/2.configuration.md:L129:133)

- **Use provider-specific options for fine-grained per-family control** — The new `providerOptions` field allows passing provider-specific settings to individual font families without affecting global provider config, useful for variable font axes or subset filtering [source](./.skilld/docs/content/1.get-started/5.upgrade.md:L46:70)

- **Rely on automatic font metric optimization to reduce layout shift** — @nuxt/fonts generates fallback `@font-face` declarations that morph system fonts to match web font metrics, dramatically reducing Cumulative Layout Shift. This happens automatically; no configuration needed [source](./.skilld/docs/content/2.advanced.md:L35:43)

- **Configure `throwOnError: true` in production for early detection** — By default font resolution errors only warn. Set `throwOnError: true` in production builds to catch misconfigured font families before they silently fail on users' machines [source](./.skilld/docs/content/1.get-started/5.upgrade.md:L72:82)

- **Use provider 'none' to opt out of resolution for custom fonts** — If you are manually providing a font via `src`, set `provider: 'none'` to skip provider resolution and use only the URL you specify [source](./.skilld/docs/content/1.get-started/2.configuration.md:L112:113)

- **Apply `processCSSVariables: 'font-prefixed-only'` for optimal performance** — This is the recommended default in v0.11.0+. It processes only CSS variables prefixed with `font-`, avoiding performance impacts from processing all variables [source](./.skilld/docs/content/1.get-started/2.configuration.md:L240:258)

- **Verify variable font weight specifications when using weight ranges** — Variable fonts require explicit weight ranges (e.g., `'100 900'`) to be downloaded. Simply naming a font "Inter Variable" without specifying the range may not load the variable font file [source](./.skilld/docs/content/1.get-started/2.configuration.md:L54:56)

- **Cache invalidation on upgrade — v0.14 invalidates font metadata caches per provider** — After upgrading to v0.14, the cache at `node_modules/.cache/nuxt/fonts/` is invalidated automatically. Fonts will be re-fetched on the next build; this is a one-time occurrence [source](./.skilld/docs/content/1.get-started/5.upgrade.md:L33:35)

<!-- /skilld:best-practices -->
