---
name: unhead-vue-skilld
description: "ALWAYS use when writing code importing \"@unhead/vue\". Consult for debugging, best practices, or modifying @unhead/vue, unhead/vue, unhead vue, unhead."
metadata:
  version: 3.4.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# unjs/unhead `@unhead/vue@3.4.0`
**Tags:** next: 3.0.0-beta.9, beta: 3.0.0-beta.12, rc: 3.0.0-rc.4

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @unhead/vue` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @unhead/vue` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

### v3.0 Breaking Changes (Major Migration)

- BREAKING: `@unhead/addons` package renamed to `@unhead/bundler` with exports now under named `Unhead` rather than default export [source](./.skilld/docs/6.migration-guide/1.v3.md:L47:68)

- BREAKING: Framework Vite plugins (`@unhead/vue/vite`, `@unhead/react/vite`, etc.) now export named `Unhead` instead of default export; update imports and call syntax [source](./.skilld/docs/6.migration-guide/1.v3.md:L103:131)

- BREAKING: `children` property renamed to `innerHTML` on script and style tags; old property silently ignored [source](./.skilld/docs/6.migration-guide/1.v3.md:L141:151)

- BREAKING: `hid` and `vmid` properties renamed to `key` for deduplication; old property names silently ignored [source](./.skilld/docs/6.migration-guide/1.v3.md:L153:175)

- BREAKING: `body: true` on script tags now written as `tagPosition: 'bodyClose'`; old property silently ignored [source](./.skilld/docs/6.migration-guide/1.v3.md:L177:187)

- BREAKING: Server composables `useServerHead`, `useServerHeadSafe`, `useServerSeoMeta` removed; use `useHead`, `useHeadSafe`, `useSeoMeta` instead [source](./.skilld/docs/6.migration-guide/1.v3.md:L249:272)

- BREAKING: `createHeadCore` removed; import `createHead` from `unhead/client` (browser) or `unhead/server` (SSR) depending on platform [source](./.skilld/docs/6.migration-guide/1.v3.md:L279:317)

- BREAKING: `headEntries()` method replaced with `entries` Map; access via `head.entries.values()` instead [source](./.skilld/docs/6.migration-guide/1.v3.md:L291:296)

- BREAKING: `mode` option on `head.push({ ... }, { mode: 'server' })` removed; use platform-specific `createHead` import instead [source](./.skilld/docs/6.migration-guide/1.v3.md:L298:317)

- BREAKING: `PluginSchemaOrg` and `SchemaOrgUnheadPlugin` exports removed; import `UnheadSchemaOrg` instead [source](./.skilld/docs/6.migration-guide/1.v3.md:L200:224)

- BREAKING: `Link` and `Script` types are now strict discriminated unions; known `rel` and `type` values enforce required properties (e.g. font preloads require `crossorigin`) — use `defineLink` and `defineScript` helpers for non-standard values [source](./.skilld/docs/6.migration-guide/1.v3.md:L407:478)

- BREAKING: Meta `content` property now required on name, property, and http-equiv tags; use `null` explicitly to opt out [source](./.skilld/docs/6.migration-guide/1.v3.md:L454:462)

- BREAKING: `init` hook removed; `dom:renderTag` no longer called and is deprecated (prefer `onRendered` entry option); `dom:beforeRender` and SSR hooks are now synchronous (no longer return Promises) [source](./.skilld/docs/6.migration-guide/1.v3.md:L365:383)

- BREAKING: Vue's `/legacy` export path deprecated and scheduled for removal in v4; use explicit `@unhead/vue/client` or `@unhead/vue/server` imports [source](./.skilld/docs/6.migration-guide/1.v3.md:L325:335)

- BREAKING: `TemplateParamsPlugin` and `AliasSortingPlugin` now opt-in (v2 auto-included them); template params like `%siteName` and `before:`/`after:` tag priorities require explicit plugin installation [source](./.skilld/docs/6.migration-guide/1.v3.md:L24:40)

### v3.1 New Tooling and Streaming Unification

- NEW: `@unhead/cli` package introduced for linting, migration, and validation via `npx -y @unhead/cli` with audit, migrate, validate-html, and validate-url commands [source](./.skilld/releases/v3.1.0.md:L9:26)

- NEW: `@unhead/eslint-plugin` provides flat-config ESLint integration with v2→v3 migration autofixes and `prefer-define-helpers` rule [source](./.skilld/releases/v3.1.0.md:L28:47)

- NEW: Streaming SSR support unified via `Unhead({ streaming: true })` option in all framework Vite plugins and `@unhead/bundler` (Webpack, Rollup, Rspack) — replaces scattered `unhead/stream/vite` entries [source](./.skilld/releases/v3.1.0.md:L49:63)

- NEW: `defineLink` and `defineScript` helpers enable type-safe declaration of custom `rel` and `type` values without losing strictness on known values [source](./.skilld/docs/6.migration-guide/1.v3.md:L428:452)

### v3.2 Experimental Server and Script Enhancements

- NEW: Script async readiness and consumer scopes allow coordinating script load order and side effects across components [source](./.skilld/releases/v3.2.0.md:L11:13)

- NEW: Script opt-in trigger primitives for manual or event-driven script execution [source](./.skilld/releases/v3.2.0.md:L13)

- NEW: Experimental `prepareTemplate` API for server-side streaming template preparation (experimental) — API subject to change in future minor releases [source](./.skilld/releases/v3.2.0.md:L15)

### v3.3 Build Dependencies and Validation

- BREAKING: `oxc-parser` is now an optional peer dependency; projects using `@unhead/bundler` with Vite 6/7, Webpack, Rspack, or Rollup must install `pnpm add -D oxc-parser` explicitly (runtime-only and Rolldown projects unaffected) [source](./.skilld/releases/v3.3.0.md:L9:17)

- NEW: Bundler now transpiles static inline scripts for Vite targets [source](./.skilld/releases/v3.3.0.md:L26)

- DEPRECATED: Twitter metadata now emits deprecation warnings; use standard Open Graph metadata instead [source](./.skilld/releases/v3.3.0.md:L27)

### v3.4 Streaming and Validation Refinements

- NEW: Streamed body tags now render before body close to ensure late-pushed head entries appear correctly [source](./.skilld/releases/v3.4.0.md:L11:12)

- NEW: Validate plugin can scope instances with `only` and `key` parameters for granular validation control [source](./.skilld/releases/v3.4.0.md:L15)

### v3.0 Type Changes

- Removed type aliases: `Head` → `SerializableHead`, `ResolvedHead` → `SerializableHead`, `MergeHead` → use generics directly, `MetaFlatInput` → `MetaFlat`, `ResolvedMetaFlat` → `MetaFlat` [source](./.skilld/docs/6.migration-guide/1.v3.md:L388:403)

### Server Utilities Moved

- BREAKING: `extractUnheadInputFromHtml` renamed to `parseHtmlForUnheadExtraction` and moved from `unhead/server` to `unhead/parser` [source](./.skilld/docs/6.migration-guide/1.v3.md:L351:362)

**Also changed:** `resolveScriptKey` internal utility no longer exported · `setHeadInjectionHandler` Vue function removed (head injection now automatic) · `DeprecationsPlugin` remains for backwards compatibility but discouraged in new code · Schema.org config options `canonicalHost`, `canonicalUrl`, `position`, `defaultLanguage`, `defaultCurrency` removed in favour of `host`, `path`, `tagPosition`, `inLanguage`, `currency` · Render functions `renderDOMHead` and `renderSSRHead` now synchronous (no longer return Promises)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Pass refs and computed values directly to `useHead()` without dereferencing — the adapter unwraps them in a `watchEffect()` and updates automatically when dependencies change [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#reactive-values)

- Create head entries synchronously during setup, then patch them from async callbacks — preserves watcher and cleanup attachment to component scope when async work completes outside the setup context [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#create-the-entry-before-awaiting)

- Avoid calling `useHead()` in watchers; instead, update reactive state when data arrives — each watcher call creates a new entry rather than updating an existing one [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#avoid-creating-entries-in-watchers)

- Call translation functions inside functional getters, not before `useHead()` — ensures locale changes update the existing head entry rather than storing a static string [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#translated-titles)

- Use `storeToRefs()` when destructuring from Pinia stores — maintains reactivity so store actions automatically update head entries [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#pinia)

```ts
const store = usePageStore()
const { title, description } = storeToRefs(store)
useHead({ title, meta: [{ name: 'description', content: description }] })
```

- Use `useHeadSafe()` and `useSeoMeta()` instead of `useHead()` when handling untrusted or user-provided input — they avoid exposing `innerHTML` and arbitrary tag attributes [source](./.skilld/docs/head/7.api/composables/0.use-head.md#security-considerations)

- Prefer `useSeoMeta()` over `useHead()` for SEO fields — provides a flat, type-safe API for common meta tags with automatic `name`/`property` selection [source](./.skilld/docs/head/7.api/composables/3.use-seo-meta.md#basic-usage)

- Install `InferSeoMetaPlugin` to auto-generate `og:title`, `og:description`, and `twitter:card` from existing title and description tags — reduces duplication and keeps social metadata in sync [source](./.skilld/docs/head/1.guides/plugins/infer-seo-meta-tags.md#setup)

```ts
const head = createHead({
  plugins: [InferSeoMetaPlugin()]
})
```

- Register `CanonicalPlugin` to normalize relative URLs to absolute URLs in canonical, Open Graph, and link tags — matches SEO guidance from Google and Open Graph protocol [source](./.skilld/docs/head/1.guides/plugins/canonical.md#setup)

- Use `useScript()` with a `trigger` option instead of manually inserting script tags — deduplicates repeated calls, manages lifecycle, and optionally exposes SDK APIs [source](./.skilld/docs/head/7.api/composables/4.use-script.md#loading-triggers)

- Give custom keys to tags that need separate identities even with matching `rel` and `href` — allows two preconnect links with and without `crossorigin` to coexist [source](./.skilld/docs/head/1.guides/1.core-concepts/6.handling-duplicates.md#multiple-links-with-the-same-rel-and-href)

- Pass `titleTemplate` as a function, not wrapped in `computed()` — `computed()` receives the previous computed value, not the page title from Unhead [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/0.reactivity-and-context.md#translated-titles)

- Pause DOM updates during route transitions using the `dom:beforeRender` hook — queues changes until the new route and its Suspense boundary have resolved, preventing flash of old metadata [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/4.pausing-dom-rendering.md)

- Register canonical, robots, and Open Graph tags before the HTML shell in streaming SSR — some bots and link previews do not run inline patch scripts, so critical SEO tags must render with the initial response [source](./.skilld/docs/0.vue/head/guides/1.core-concepts/5.streaming.md#where-tags-render)
<!-- /skilld:best-practices -->
