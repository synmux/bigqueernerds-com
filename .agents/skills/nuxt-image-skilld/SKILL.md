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

### Breaking Changes (v1 → v2)

- BREAKING: `export const getImage` → `export default defineProvider()` — Provider function syntax entirely redesigned; named export replaced with `defineProvider` wrapper for full TypeScript support [source](./.skilld/releases/v2.0.0.md:L155:L166)

- BREAKING: `layer0` and `edgio` providers removed — These deprecated providers have been deleted; migrate to `ipx` or another provider [source](./.skilld/releases/v2.0.0.md:L171:L172)

- BREAKING: Screen sizes `xs` (320px) and `xxl` (2560px) removed — Default breakpoints now align with Tailwind CSS; add back via `nuxt.config.ts` if needed [source](./.skilld/releases/v2.0.0.md:L179:L182)

- BREAKING: `joinWith` parameter replaced with `formatter` function — Custom providers using `createOperationsGenerator` must now provide explicit `formatter` callback instead of relying on `joinWith` alone [source](./.skilld/docs/content/1.get-started/5.migration.md:L136:L158)

- BREAKING: URLSearchParams as default formatter — Parameter encoding switched to `URLSearchParams` for more reliable URL handling [source](./.skilld/releases/v2.0.0.md:L143:L143)

### New APIs (v2.0)

- NEW: `defineProvider()` composable — Type-safe provider wrapper with full TypeScript support and modifiers; replaces v1 named export pattern [source](./.skilld/releases/v2.0.0.md:L20:L41)

- NEW: Typed `useImage()` composable — Full type inference for modifiers; `$img` helper also gains complete autocomplete and validation [source](./.skilld/releases/v2.0.0.md:L60:L71)

- NEW: `useTemplateRef('img')` pattern for `<NuxtImg>` — Access native `<img>` element via `img.value.imgEl` for direct DOM manipulation [source](./.skilld/releases/v2.0.0.md:L98:L115)

- NEW: Image helpers in Nitro server endpoints — `useImage()` now works in `server/api/` routes for server-side image URL generation [source](./.skilld/releases/v2.0.0.md:L77:L94)

- NEW: IPX v3 upgrade — Better performance, automatic `sharp` binary detection for deployment architecture [source](./.skilld/releases/v2.0.0.md:L73:L75)

- NEW: Shopify provider — Built-in provider for Shopify store images with baseURL configuration [source](./.skilld/releases/v2.0.0.md:L125:L137)

- NEW: GitHub provider — Built-in provider for GitHub avatars and user content [source](./.skilld/releases/v2.0.0.md:L126:L126)

- NEW: Typed module configuration — Provider options in `nuxt.config.ts` now enforce required fields at type level (e.g., `baseURL` required for Cloudinary) [source](./.skilld/releases/v2.0.0.md:L43:L56)

- NEW: `DefaultSlotProps` export for typed slots — `<NuxtImg>` and `<NuxtPicture>` default slot content now fully typed [source](./.skilld/releases/v2.0.0.md:L118:L119)

- NEW: Custom image directories within Nuxt layers — Proper support for organizing images in modular layer-based projects [source](./.skilld/releases/v2.0.0.md:L148:L151)

### Deprecations / Removals

- REMOVED: Unused runtime utilities — Internal utility functions simplified; if importing from `@nuxt/image/runtime` directly, check that your functions still exist [source](./.skilld/releases/v2.0.0.md:L184:L186)

- DEPRECATED: `joinWith` property in `createOperationsGenerator` — Use `formatter` callback instead for parameter encoding [source](./.skilld/docs/content/1.get-started/5.migration.md:L140:L147)

### Provider Updates

- `cloudimage` provider: baseURL now optional when using CDN mode [source](./.skilld/releases/v2.0.0.md:L231:L231)

- `awsAmplify` and `vercel` providers: Format allow lists added for stricter format validation [source](./.skilld/releases/v2.0.0.md:L206:L206)

- `hygraph` provider: Fixed broken image URL generation with new asset management system [source](./.skilld/releases/v2.0.0.md:L207:L207)

**Also changed:** `$Img` typing improvements · Preload link fixes for multiple densities · Correct `crossorigin` attributes on preload links · Type-safe `createOperationsGenerator` · Prevent hydration mismatch in `<NuxtImg>` · Better handling of `undefined` image sources
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Use presets for unified image configurations across your application — presets define collections of image modifiers that standardise dimensions, formats, and quality settings, reducing code duplication and ensuring visual consistency [source](./.skilld/docs/content/1.get-started/2.configuration.md#presets)

- Configure URL aliases for external images to optimise HTML output — aliases shorten URLs on the server-side with IPX, reducing the size of generated HTML and improving load times for image-heavy pages [source](./.skilld/docs/content/1.get-started/2.configuration.md#alias)

- Always provide the `alt` attribute on images for accessibility — it should describe the image content if it contains information, explain link destinations when inside an `<a>` tag, or use an empty string for decorative images [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#alt)

- Use responsive sizes with `sizes` attribute for dynamic layouts — sizes follow a responsive-first approach where omitted screen prefixes apply as defaults, and each size applies up to the next specified breakpoint [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#sizes)

- Distinguish between static and responsive image dimensions — use explicit `width` and `height` for fixed-size images like icons or avatars, but use original dimensions when applying `sizes` for responsive images [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#width--height)

- Use `<NuxtPicture>` instead of `<NuxtImg>` when serving multiple formats — `<NuxtPicture>` automatically generates legacy formats alongside modern ones (e.g., webp + png), enabling browser-native format negotiation [source](./.skilld/docs/content/2.usage/2.nuxt-picture.md#format)

- Configure a `domains` whitelist with IPX to prevent abuse — restrict which domains can be optimised to prevent the endpoint becoming an open proxy for image processing attacks [source](./.skilld/repos/nuxt/image/discussions/discussion-1787.md#accepted-answer)

- Use `defineProvider` with TypeScript interfaces for custom providers — v2 requires `defineProvider()` for type-safe provider definition and automatic type inference in component modifiers [source](./.skilld/docs/content/1.get-started/5.migration.md#update-custom-providers)

- Use `placeholder` attribute for improved perceived performance — placeholders create a smooth visual transition while images load, with automatic generation based on the original image or via the `useImage()` composable [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#placeholder)

- Use `densities` to serve sharp images on high-DPI displays — Nuxt Image multiplies base dimensions by each density value to generate appropriately-sized variants for retina and HiDPI screens [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#densities)

- Use `preload` for above-the-fold images to improve Core Web Vitals — preloading generates a `<link rel="preload">` tag for critical images, reducing perceived load time [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#preload)

- Use `loading="lazy"` for below-fold images to defer rendering — this native browser attribute defers image loading until the image appears in the viewport, improving initial page performance [source](./.skilld/docs/content/2.usage/1.nuxt-img.md#loading)

- Use module augmentation to extend provider modifier types — when using custom or extended provider options, augment the provider interface via TypeScript declaration files to add type safety and IDE autocomplete [source](./.skilld/repos/nuxt/image/discussions/discussion-2059.md#accepted-answer)

- Call `useImage()` in Nitro server endpoints to generate optimised URLs for OG images and dynamic content — the image helper works server-side for generating metadata URLs without rendering components [source](./.skilld/repos/nuxt/image/releases/v2.0.0.md#server-side-utilities)

<!-- /skilld:best-practices -->
