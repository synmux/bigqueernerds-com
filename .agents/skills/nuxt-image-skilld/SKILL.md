---
name: nuxt-image-skilld
description: 'ALWAYS use when writing code importing "@nuxt/image". Consult for debugging, best practices, or modifying @nuxt/image, nuxt/image, nuxt image, image.'
metadata:
  version: 2.0.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# nuxt/image `@nuxt/image@2.0.0`

**Tags:** rc: 1.0.0-rc.3, alpha: 2.0.0-alpha.1, latest: 2.0.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/image` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/image` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- BREAKING: `defineProvider()` replaces old provider export pattern — v2 changed provider API from `export const getImage` to `export default defineProvider({ getImage() { ... } })`, old pattern no longer works [source](./.skilld/releases/v2.0.0.md#breaking-changes)

- BREAKING: `layer0` and `edgio` providers removed — these providers have been deleted in v2, custom code using them will fail [source](./.skilld/releases/v2.0.0.md:L244)

- BREAKING: Default screen sizes changed — removed `xs` (320px) and `xxl` (2560px) breakpoints to align with Tailwind CSS, may require updating `sizes` props in components [source](./.skilld/docs/content/1.get-started/5.migration.md:L55-L85)

- BREAKING: `createOperationsGenerator` formatter required — if using `joinWith` for custom URL formatting, must now explicitly provide `formatter` function; URLSearchParams is the new default [source](./.skilld/docs/content/1.get-started/5.migration.md:L137-L157)

- NEW: `defineProvider<T>()` — type-safe provider definition with full TypeScript support, replaces plain function export pattern and enables modifier typing [source](./.skilld/releases/v2.0.0.md:L22-L41)

- NEW: `useImage()` composable — strongly typed image helper with full autocomplete for modifiers, available on client and server (Nitro endpoints) [source](./.skilld/releases/v2.0.0.md:L60-L94)

- NEW: Image helpers in Nitro endpoints — `useImage()` can now be called directly in server-side event handlers for dynamic image URL generation [source](./.skilld/releases/v2.0.0.md:L79-L94)

- NEW: `NuxtImg` template refs — components expose underlying `<img>` element via `useTemplateRef()` for direct DOM access [source](./.skilld/releases/v2.0.0.md:L100-L115)

- NEW: Typed slots — `<NuxtImg>` and `<NuxtPicture>` slots are now properly typed with DefaultSlotProps [source](./.skilld/releases/v2.0.0.md:L118-L119)

- NEW: Custom modifier typing — extend `ImageModifiers` interface to type custom provider modifiers with full autocomplete [source](./.skilld/docs/content/1.get-started/5.migration.md:L113-L134)

- NEW: Shopify provider — new built-in provider for Shopify store images with baseURL configuration [source](./.skilld/releases/v2.0.0.md:L125-L137)

- NEW: GitHub provider — new built-in provider for GitHub avatars and user content [source](./.skilld/releases/v2.0.0.md:L126)

- NEW: URLSearchParams default formatter — improved URL parameter encoding via URLSearchParams instead of custom joinWith logic [source](./.skilld/releases/v2.0.0.md:L143)

- NEW: Custom image directories in layers — Nuxt Image now properly supports image directories within Nuxt layers for modular projects [source](./.skilld/releases/v2.0.0.md:L148-L150)

- NEW: IPX v3 upgrade — dependency upgraded for better performance and automatic sharp binary detection for deployment architecture [source](./.skilld/releases/v2.0.0.md:L73-L75)

**Also changed:** Requires Nuxt 3.1+ · Removed unused runtime utilities · Improved preload link handling for multiple densities · Fixed crossorigin attributes on preload links · Provider-specific format allow lists for AWS Amplify and Vercel · Hygraph URL validation improved · Preset size application when sizes prop undefined · Cloudflare baseURL handling refined
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Use `presets` to unify image transformations across your application — centralize modifiers (width, height, format, quality) in `nuxt.config` rather than repeating them in components, reducing duplication and enabling site-wide changes in one place [source](./.skilld/docs/content/1.get-started/2.configuration.md#presets)

- Use `<NuxtPicture>` instead of `<NuxtImg>` when serving modern formats like AVIF or WebP alongside fallbacks — the component automatically generates legacy formats for older browsers without extra configuration [source](./.skilld/docs/content/2.usage/2.nuxt-picture.md#format)

- Define responsive sizes with breakpoint-prefixed syntax (e.g. `sizes="100vw sm:50vw md:400px"`) to generate correctly optimized images per device — Nuxt Image multiplies dimensions by density settings to produce responsive srcsets that adapt to actual viewport widths [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#sizes)

- Enable `densities` prop for icons and avatars on high-DPI/Retina devices — specify `densities="x1 x2"` to automatically generate multiple resolutions without manual srcset wiring [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#densities)

- Use `placeholder` prop with auto-generated or custom images to improve perceived performance — Nuxt Image creates low-quality placeholders on-the-fly while full images load, reducing perceived latency [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#placeholder)

- Define custom providers with `defineProvider` from `@nuxt/image/runtime` and add modifier types via `ImageModifiers` interface for full TypeScript support — v2 enforces type-safe provider contracts that catch configuration errors at build time [source](./.skilld/docs/content/4.advanced/1.custom-provider.md#provider-entry) and [source](./.skilld/docs/content/1.get-started/5.migration.md#add-modifier-types-optional)

- Store local images in `public/` directory and external images in `assets/` only if they bypass Nuxt Image optimization — use the `dir` config to customize the source directory for local image scanning when deploying without a `public/` folder [source](./.skilld/docs/content/1.get-started/3.providers.md#local-images)

- Use URL aliases (e.g. `alias: { unsplash: 'https://images.unsplash.com' }`) to shorten HTML output and simplify component usage — aliases resolve server-side with IPX, keeping external URLs out of generated HTML [source](./.skilld/docs/content/1.get-started/2.configuration.md#alias)

- Apply `loading="lazy"` to images below the fold to defer network requests until they enter the viewport — native browser lazy loading is supported on all modern browsers since March 2022 [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#loading)

- Use `preload` prop only on critical above-the-fold images to prioritize them in the browser's resource queue — generates a `<link>` tag in the page head that signals high priority to the browser [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#preload)

- Enable the `inject` config option to provide a global `$img` helper throughout your application — useful for background images and dynamic image URL generation without importing `useImage()` in every component [source](./.skilld/docs/content/1.get-started/2.configuration.md#inject)

- Use `useImage()` composable in Nitro server endpoints (v2+) to generate optimized image URLs server-side — enables dynamic OG image generation and API responses without client-side rendering [source](./.skilld/repos/nuxt/image/releases/v2.0.0.md:L79)

- Set explicit `legacyFormat` in `<NuxtPicture>` when serving AVIF/WebP to control the fallback format — by default PNG is used for transparent images and JPEG for others, but explicit configuration clarifies intent [source](./.skilld/docs/content/2.usage/2.nuxt-picture.md#legacyformat)

- Use the `custom` prop with default slot to implement custom loading states and placeholders — disables default rendering while Nuxt Image continues to optimize and provide data, enabling full control over placeholder transitions [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#custom)

<!-- /skilld:best-practices -->
