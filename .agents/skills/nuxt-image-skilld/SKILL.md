---
name: nuxt-image-skilld
description: "ALWAYS use when writing code importing \"@nuxt/image\". Consult for debugging, best practices, or modifying @nuxt/image, nuxt/image, nuxt image, image."
metadata:
  version: 2.1.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# nuxt/image `@nuxt/image@2.1.0`
**Tags:** rc: 1.0.0-rc.3, alpha: 2.0.0-alpha.1, latest: 2.1.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/image` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/image` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

### Breaking Changes (v2.0.0 → v2.1.0)

- BREAKING: `defineProvider()` now required for custom providers — v2.0.0 changed from exporting `const getImage` to `export default defineProvider({...})`, with full TypeScript support for modifiers [source](./.skilld/releases/v2.0.0.md#breaking-changes)

- BREAKING: `layer0` and `edgio` providers removed — both providers were deprecated and completely removed in v2.0.0 [source](./.skilld/releases/v2.0.0.md:L244)

- BREAKING: URL formatter API changed — `joinWith` parameter no longer accepted in isolation; must now use `createOperationsGenerator` with explicit `formatter` function [source](./.skilld/docs/content/1.get-started/5.migration.md:L139:160)

- BREAKING: Screen sizes `xs` (320px) and `xxl` (2560px) removed — default breakpoints now align with Tailwind CSS; add back via `screens` config if needed [source](./.skilld/docs/content/1.get-started/5.migration.md:L56:88)

- BREAKING: Runtime utilities removed — internal helper functions removed; custom code importing these directly will fail [source](./.skilld/releases/v2.0.0.md:L268)

- BREAKING: SVG sanitization now always runs regardless of `svgo: false` — previously could get unsanitized SVGs; now SMIL, foreign content, and unsafe URIs always filtered for security [source](./.skilld/releases/v2.1.0.md:L20)

- BREAKING: URLSearchParams now default formatter — changed from manual parameter handling to `URLSearchParams`; may affect query parameter encoding for custom providers [source](./.skilld/releases/v2.0.0.md:L250)

### New APIs (v2.0.0 — v2.1.0)

- NEW: `useImage()` composable for server-side use — can now call image helpers in Nitro endpoints (`server/api/*`), not just client components [source](./.skilld/releases/v2.0.0.md:L79:94)

- NEW: Template refs on `<NuxtImg>` — expose underlying `<img>` element via `useTemplateRef()` and access with `imgEl` property [source](./.skilld/releases/v2.0.0.md:L100:115)

- NEW: Typed component slots — `<NuxtImg>` and `<NuxtPicture>` default slots now fully typed with `imgAttrs`, `src`, and `isLoaded` [source](./.skilld/releases/v2.0.0.md:L119)

- NEW: `NuxtImgProps` and `NuxtPictureProps` type exports — exported from `#image` for typing custom components that wrap `<NuxtImg>` or `<NuxtPicture>` [source](./.skilld/releases/v2.1.0.md:L44:50)

- NEW: IPX v4 image modifiers — added `opacity`, `brightness`, `saturation`, `hue`, `lightness`, `autoorient`, `dilate`, `erode`, `clahe`, `linear` [source](./.skilld/releases/v2.1.0.md:L15:23)

- NEW: Shopify provider — new built-in provider for Shopify store images [source](./.skilld/releases/v2.0.0.md:L228)

- NEW: GitHub provider — new built-in provider for GitHub avatars and user content [source](./.skilld/releases/v2.0.0.md:L232)

- NEW: Eight new providers (v2.1.0) — Builder.io Image API, Cloudflare Images, EdgeOne Pages, Flyimg, imgproxy, Lorem Picsum, Supabase, Umbraco [source](./.skilld/releases/v2.1.0.md:L25:36)

### Enhanced APIs (v2.0.0 — v2.1.0)

- ENHANCED: Full TypeScript support throughout — `defineProvider` now includes type-safe modifiers, configuration validation, and typed composables [source](./.skilld/releases/v2.0.0.md:L16:72)

- ENHANCED: Directus provider — added sharp transforms support and configurable `key` modifier for named presets [source](./.skilld/releases/v2.1.0.md:L40)

- ENHANCED: Sanity provider — supports absolute URLs with automatic project/dataset extraction, and configurable `baseURL` for custom CDN [source](./.skilld/releases/v2.1.0.md:L41:42)

- ENHANCED: AWS Amplify & Vercel — `minimumCacheTTL` now configurable [source](./.skilld/releases/v2.1.0.md:L42)

- ENHANCED: IPX v3 upgrade (v2.0.0) — automatic detection of correct sharp binaries for deployment architecture [source](./.skilld/releases/v2.0.0.md:L223)

- ENHANCED: Layer support — Nuxt Image now properly supports custom image directories within Nuxt layers [source](./.skilld/releases/v2.0.0.md:L234)

**Also changed:** Typed modifiers via `ImageModifiers` interface · Custom `$img` helper in Nitro endpoints · Preload link types aligned with unhead v3 · SVG XSS security (SMIL, foreignObject, unsafe URIs sanitised) · Better error messages from IPX (400 instead of 500) · Custom URL parsing via `parseURL` option · `cloudflare` baseURL handling for operations-less URLs · `fastly` absolute URL handling · `shopify` and `bunny` query param merging · `github` max size handling · Multiple provider format allow lists · `hygraph` broken URL prevention
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Always provide an `alt` attribute for every image — it's essential for accessibility and describes the image content or its purpose [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#alt)

- Specify `width` and `height` props to help browsers reserve layout space and prevent cumulative layout shift — use original dimensions for responsive images with `sizes` [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#width--height)

- Create presets for unified image configuration across your project — centralises modifiers like format, quality, and fit in `nuxt.config` to avoid duplication [source](./.skilld/docs/content/1.get-started/2.configuration.md#presets)

- Use the `alias` option to simplify external image URLs and optimise HTML output — map long URLs to short prefixes in configuration [source](./.skilld/docs/content/1.get-started/2.configuration.md#alias)

- Whitelist external image domains with the `domains` option before optimising remote images — required for security to prevent open proxy abuse [source](./.skilld/docs/content/1.get-started/2.configuration.md#domains)

- Prefer `<NuxtPicture>` for modern format support — automatically serves webp/avif with PNG/JPEG fallbacks based on browser capability [source](./.skilld/docs/content/2.usage/2.nuxt-picture.md#format)

- Use the `placeholder` prop to show a low-quality placeholder before the image loads — improves perceived performance and user experience [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#placeholder)

- Add `preload` to critical above-the-fold images with `fetchPriority: 'high'` to improve Core Web Vitals, especially LCP [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#preload)

- Define responsive image sizes using the `sizes` prop with your configured screen breakpoints — enables proper responsive sizing and srcset generation [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#sizes)

- Set `densities` when targeting high-DPI (Retina/HiDPI) displays — specifies which pixel densities to generate, defaulting to `[1, 2]` [source](./.skilld/docs/content/1.get-started/2.configuration.md#densities)

- Restrict IPX endpoint abuse by setting `runtimeConfig.ipx.domains` and using aliases for private images — add CDN/WAF rate limiting in production [source](./.skilld/repos/nuxt/image/discussions/discussion-1787.md)

- Use the `custom` prop to implement custom rendering patterns like image placeholders — enables full control over image element whilst keeping optimisation [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#custom)

- Use `img.getSizes()` composable when manual srcset generation is required — generates responsive sizes and srcset for custom component wrappers [source](./.skilld/docs/content/2.usage/3.use-image.md#imggetsizes)

- Prefer `defineProvider` for custom image providers in v2 — offers proper TypeScript support and modifier typing for provider-specific transformations [source](./.skilld/docs/content/1.get-started/5.migration.md#update-custom-providers)
<!-- /skilld:best-practices -->
