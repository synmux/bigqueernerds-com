---
name: unhead-vue-skilld
description: 'ALWAYS use when writing code importing "@unhead/vue". Consult for debugging, best practices, or modifying @unhead/vue, unhead/vue, unhead vue, unhead.'
metadata:
  version: 3.2.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-19
---

# unjs/unhead `@unhead/vue@3.2.1`

**Tags:** next: 3.0.0-beta.9, beta: 3.0.0-beta.12, rc: 3.0.0-rc.4

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @unhead/vue` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @unhead/vue` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes between v2.x and v3.x, and within the v3.x release series. Focus on recent major/minor releases that introduce breaking changes and new APIs.

### Breaking Changes from v2 to v3

- BREAKING: `renderDOMHead()` and `renderSSRHead()` now synchronous — remove `await` keyword, these functions no longer return promises [source](./.skilld/releases/v3.0.0.md:L200:L201)

- BREAKING: Import Vite plugin from framework `/vite` subpath with named export — `import { Unhead } from '@unhead/vue/vite'` instead of `import unhead from '@unhead/addons/vite'` [source](./.skilld/releases/v3.0.0.md:L206:L215)

- BREAKING: `Link` and `Script` types no longer accept fallback to `GenericLink` / `GenericScript` — type system now enforces strict per-tag constraints (e.g., `preload + as: 'font'` requires `crossorigin`) [source](./.skilld/releases/v3.0.0.md:L217:L219)

- BREAKING: `Meta` tag `content` is now required — use `content: null` explicitly to remove a meta tag instead of omitting it [source](./.skilld/releases/v3.0.0.md:L217:L219)

- BREAKING: Deprecated properties permanently removed — `children` → use `innerHTML` instead, `hid`/`vmid` → use `key`, `body: true` → use `tagPosition: 'bodyClose'` [source](./.skilld/releases/v3.0.0.md:L221:L232)

- BREAKING: `useServerHead()`, `useServerHeadSafe()`, `useServerSeoMeta()` removed — use `useHead()`, `useHeadSafe()`, `useSeoMeta()` directly [source](./.skilld/releases/v3.0.0.md:L226:L228)

- BREAKING: CJS builds removed — all packages ESM-only, CommonJS imports will fail [source](./.skilld/releases/v3.0.0.md:L233)

- BREAKING: Type exports changed — `Head` → `HeadTag`, `MetaFlatInput` → `MetaFlat`, remove imports from `@unhead/schema` and `@unhead/shared` (use `unhead/types` and `unhead` instead) [source](./.skilld/releases/v3.0.0.md:L248:L256)

- BREAKING: `createHeadCore()` removed — use `createUnhead()` instead [source](./.skilld/releases/v3.0.0.md:L229)

- BREAKING: `@unhead/vue/legacy` removed — use `@unhead/vue/client` or `@unhead/vue/server` (legacy path still works with deprecation warning) [source](./.skilld/releases/v3.0.0.md:L230)

- BREAKING: `TemplateParamsPlugin` and `AliasSortingPlugin` now opt-in — import and register explicitly if you need template variable substitution or alias sorting [source](./.skilld/releases/v3.0.0.md:L237:L239)

- BREAKING: Hooks removed — `init` hook removed, `dom:renderTag` and `dom:rendered` hooks deprecated (will be removed in v4), `dom:beforeRender` is now synchronous (no async handlers) [source](./.skilld/releases/v3.0.0.md:L241:L245)

- BREAKING: Schema.org type changes — `PluginSchemaOrg` / `SchemaOrgUnheadPlugin` replaced with `UnheadSchemaOrg`, `canonicalHost` replaced with `host`, `canonicalUrl` replaced with `host` + `path` [source](./.skilld/releases/v3.0.0.md:L257:L260)

### New Features in v3.0+

- NEW: Streaming SSR support with automatic head tag updates as suspense boundaries resolve — use `createStreamableHead()` from `@unhead/vue/stream/server` and client endpoints [source](./.skilld/releases/v3.0.0.md:L13:L37)

- NEW: Unified Vite plugin with DevTools integration — single `import { Unhead } from '@unhead/vue/vite'` replaces manual composition of addons + streaming + framework glue [source](./.skilld/releases/v3.0.0.md:L40:L58)

- NEW: `ValidatePlugin` detects common mistakes at runtime — missing titles, duplicate meta tags, contradictory preload priorities, render-blocking scripts, late charset, excessive fetchpriority hints, preconnect without crossorigin, and v2 migration issues [source](./.skilld/releases/v3.0.0.md:L83:L102)

- NEW: `CanonicalPlugin` auto-generates canonical links and resolves relative URLs in OG/Twitter tags — includes query parameter filtering (strips `utm_source`, `fbclid`, `gclid` by default), trailing slash normalization, and hash fragment stripping [source](./.skilld/releases/v3.0.0.md:L103:L120)

- NEW: `MinifyPlugin` minifies inline script/style tag content during SSR — uses pure-JS minifiers safe for edge/serverless, companion `MinifyTransform` pre-minifies at build-time [source](./.skilld/releases/v3.0.0.md:L123:L135)

- NEW: `useHead()` type narrowing — tag types now narrow based on input (e.g., `rel: 'stylesheet'` narrows to `StylesheetLink` with media/integrity attributes) [source](./.skilld/releases/v3.0.0.md:L60:L80)

- NEW: `onRendered` callback option on `useHead()` — synchronizes with DOM head updates [source](./.skilld/releases/v3.0.0.md:L178)

- NEW: `tagWeight` option on `createHead()` — override default CAPO tag weight function for custom tag ordering [source](./.skilld/releases/v3.0.0.md:L179)

- NEW: Support for `blocking` attribute on scripts and stylesheets — native browser behavior for render-blocking resources [source](./.skilld/releases/v3.0.0.md:L170)

- NEW: `useHeadSafe()` whitelists CSS styles — now allows safe inline stylesheet definitions [source](./.skilld/releases/v3.0.0.md:L169)

- NEW: `fediverse:creator` meta tag support — new social metadata for Fediverse platforms [source](./.skilld/releases/v3.0.0.md:L172)

- NEW: `@unhead/cli` provides audit, migrate, validate-html, and validate-url commands — automates v2→v3 migration and SEO/performance validation [source](./.skilld/releases/v3.1.0.md:L9:L26)

- NEW: `@unhead/eslint-plugin` with flat-config rules shared from `ValidatePlugin` — catches type-narrowing issues at lint-time with v2→v3 migration autofixes [source](./.skilld/releases/v3.1.0.md:L28:L47)

- NEW: Streaming SSR non-Vite support via bundler-agnostic unplugin factory — `Unhead({ streaming: true })` works with webpack and Vite via bundler-specific entries [source](./.skilld/releases/v3.1.0.md:L49:L61)

- NEW: `nonce` option for streaming — forwards CSP nonce on every injected script during streaming [source](./.skilld/releases/v3.1.0.md:L63)

- NEW: `StreamingGlobal` type ensures server bootstrap, client, and injected IIFE agree on `window.__unhead__` shape [source](./.skilld/releases/v3.1.0.md:L63)

- NEW: Union rel/type support in `defineLink()` and `defineScript()` — type definitions now accept union types for custom link/script relations [source](./.skilld/releases/v3.1.1.md:L12)

- NEW: Open Graph meta types expanded — added `music.radio_station` and `payment.link` OG tags [source](./.skilld/releases/v3.1.4.md:L16)

**Also changed:** 12 new Schema.org nodes (Dataset, MusicAlbum, MusicGroup, etc.) · pure sync rendering engine (resolveTags pipeline) · removed ohash/defu dependencies · HookableCore replaces full hookable · `renderDOMHead()` single-pass composable pipeline · `@unhead/react/helmet` compat export · streaming IIFE mode changed from `async` to `inline` for smaller TTFB · stricter preload link enforcement (requires `as` attribute) · icon links support `media` attribute
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Use reactive state (refs/computed) with `useHead()` rather than calling `useHead()` inside watchers — watchers create new entries on each update, whereas reactive refs update existing entries automatically [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#should-i-use-refs-or-computed-getters)

- Prefer `useSeoMeta()` composable for SEO meta tags instead of manually building `useHead()` calls with raw meta arrays — more ergonomic and the Vite transform automatically rewrites calls to `useHead()` at build time, saving ~3kb from client bundle [source](./.skilld/docs/head/1.guides/build-plugins/2.seo-meta-transform.md)

- Register the unified Unhead Vite plugin in your build configuration to enable automatic tree-shaking, useSeoMeta transforms, minification, and dev validation [source](./.skilld/docs/head/1.guides/build-plugins/0.overview.md#setup)

```ts
import { Unhead } from "@unhead/vue/vite";

export default defineConfig({
  plugins: [vue(), Unhead()],
});
```

- Use `useScript()` for external script loading with automatic singleton deduplication, proxy pattern for safe early calls, and configurable loading triggers [source](./.skilld/docs/head/1.guides/1.core-concepts/9.loading-scripts.md#introduction)

- Encapsulate script initialization in dedicated composables for better organization and reuse across components [source](./.skilld/docs/head/1.guides/1.core-concepts/9.loading-scripts.md#creating-reusable-script-composables)

- Always add `.onError()` handlers for critical scripts — the proxy pattern silently drops failed calls, masking loading failures without error handlers [source](./.skilld/docs/head/1.guides/1.core-concepts/9.loading-scripts.md#benefits-of-the-proxy-pattern)

- Use `useHeadSafe()` when working with untrusted or user-provided input to prevent XSS attacks — implements a strict whitelist of allowed tags and attributes [source](./.skilld/docs/head/7.api/composables/1.use-head-safe.md#how-it-works)

- Place non-critical scripts at `tagPosition: 'bodyClose'` to improve page load performance — scripts at the end of the body won't block initial render [source](./.skilld/docs/head/1.guides/1.core-concepts/2.positions.md#common-use-cases)

- Use `tagPriority` string aliases (`'critical'`, `'high'`, `'low'`) instead of numeric values for clearer intent and to preserve Capo.js performance optimizations [source](./.skilld/docs/head/1.guides/1.core-concepts/2.positions.md#sorting-with-aliases)

- Use the `key` attribute for explicit tag deduplication control when you need multiple similar tags or want to override tags from parent components [source](./.skilld/docs/head/1.guides/1.core-concepts/6.handling-duplicates.md#how-do-i-use-custom-keys-for-deduplication)

- Enable the `ValidatePlugin` at runtime to catch common SEO, performance, and head tag mistakes — detects non-absolute URLs, missing tags, conflicting directives, typos, and performance anti-patterns [source](./.skilld/docs/head/1.guides/plugins/validate.md#what-does-this-plugin-do)

- Set up the `@unhead/eslint-plugin` to catch linting issues at build time that TypeScript can't detect — includes 13 rules covering deprecated v2 props, empty content, typos, and performance issues [source](./.skilld/docs/head/1.guides/eslint-plugin.md#how-do-i-set-up-the-plugin)

- Use the `InferSeoMetaPlugin` to automatically generate `og:title`, `og:description`, and `twitter:card` from existing title and description tags — reduces duplicate meta tag definitions [source](./.skilld/docs/head/1.guides/plugins/infer-seo-meta-tags.md#what-does-this-plugin-do)

- Prefer `useHead()` composable over `<Head>` components for better TypeScript support and flexibility, though template-based components are still available when needed [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/1.components.md)

<!-- /skilld:best-practices -->
