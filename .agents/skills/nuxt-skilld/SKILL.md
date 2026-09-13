---
name: nuxt-skilld
description: "ALWAYS use when writing code importing \"nuxt\". Consult for debugging, best practices, or modifying nuxt."
metadata:
  version: 4.5.2
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# nuxt/nuxt `nuxt@4.5.2`
**Tags:** 1x: 1.4.5, 2x: 2.18.1, alpha: 4.0.0-alpha.4

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p nuxt` instead of grepping `.skilld/` directories. Run `skilld search --guide -p nuxt` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

- BREAKING: `useHead()` type-narrowing in `unhead` v3 — parameter types are now stricter, which can cause breaking type errors if you relied on looser v2 typing. Runtime behaviour is compatible for most apps, and promise input (deprecated in v2) is no longer supported [source](./.skilld/releases/v4.5.0.md:L266:272)

- NEW: `useLayout()` composable — returns a read-only computed ref of the resolved layout for the current route, keeping in sync as you navigate or as route rules and `definePageMeta` change the resolved layout [source](./.skilld/releases/v4.5.0.md:L112:129)

- NEW: Named views via `@view.vue` filename convention — render multiple `<NuxtPage>` outlets by giving each outlet a `name` attribute and providing sibling page files with the `name@view.vue` naming pattern; `definePageMeta` is only read from the default route file [source](./.skilld/releases/v4.5.0.md:L131:161)

- BREAKING: `statusCode`/`statusMessage` → `status`/`statusText` — Web API naming conventions in preparation for Nitro v3 and H3 v2; old properties still work but are deprecated, becoming breaking in v5 [source](./.skilld/releases/v4.3.0.md:L197:204)

- NEW: `createUseFetch()` and `createUseAsyncData()` factories — create custom instances of fetch/async-data composables with default options; supports both static object defaults and dynamic function-based merging with full control over option composition [source](./.skilld/releases/v4.4.0.md:L14:53)

- NEW: `useAnnouncer()` composable and `<NuxtAnnouncer>` component — announce dynamic in-page changes (form submissions, loading states, search results) to screen readers; exposes `polite()` and `assertive()` methods for different priority levels [source](./.skilld/releases/v4.4.0.md:L94:128)

- NEW: Typed layout props in `definePageMeta` — pass props to layouts directly with full type-checking and autocomplete; layout defines props via `defineProps`, and page specifies them in `definePageMeta({ layout: { name: 'panel', props: { ... } } })` [source](./.skilld/releases/v4.4.0.md:L64:93)

- NEW: `enabled` option for `useFetch` and `useAsyncData` — gate data fetching with a reactive condition; blocks all execution (initial fetch, `execute`/`refresh`, watch triggers) and cancels in-flight requests if toggled from true to false without clearing existing data [source](./.skilld/releases/v4.5.0.md:L163:181)

- NEW: `NuxtLink` custom slot prefetch control — when using `<NuxtLink custom>`, the slot now exposes `prefetch`, `prefetched`, and `shouldPrefetch` so you can wire up prefetching manually and respect user connection preferences [source](./.skilld/releases/v4.5.0.md:L185:209)

- NEW: `appLayout` property in route rules — set layouts centrally via `routeRules` without scattering `definePageMeta` calls; supports admin panels and marketing pages with shared layouts [source](./.skilld/releases/v4.3.0.md:L37:47)

- NEW: `#server` alias — clean imports within the server directory similar to `#shared`, with import protection to prevent accidental client-context imports [source](./.skilld/releases/v4.3.0.md:L138:151)

- NEW: Route groups in page meta — route groups (folders wrapped in parentheses like `(protected)/`) are now exposed in `route.meta.groups`, enabling convention-based route-level authorization without `definePageMeta` on every page [source](./.skilld/releases/v4.3.0.md:L95:114)

- NEW: Layout props with `setPageLayout()` — the composable now accepts a second parameter to pass props to layouts, enabling middleware to parameterise the active layout [source](./.skilld/releases/v4.3.0.md:L117:136)

- NEW: `import.meta.envName` — resolved Nuxt environment name is now available at runtime for both Vite and webpack/Rspack builds, allowing in-app branching on the environment [source](././.skilld/releases/v4.5.0.md:L226:236)

- NEW: `refresh` option for `useCookie` — extend a cookie's expiration without changing its value by setting `refresh: true` and reassigning the same value [source](./.skilld/releases/v4.4.0.md:L158:172)

- NEW: `useState` reset to default — `clearNuxtState()` now resets to the initial value instead of clearing to `undefined`, aligning with `useAsyncData` behaviour [source](./.skilld/releases/v4.4.0.md:L175:186)

- NEW: Abort control for data fetching — `useAsyncData` handler receives a `{ signal }` parameter for `AbortController` support; `refresh()` and `execute()` also accept an `AbortController` signal for fine-grained cancellation [source](./.skilld/releases/v4.2.0.md:L15:48)

- NEW: `createUseFetch()` and factory functions — extracted as dedicated APIs to supplement the ad-hoc module that auto-registers custom instances from composables directory [source](./.skilld/releases/v4.4.0.md:L14:53)

- NEW: `getLayerDirectories()` utility — clean interface to access layer directories (`app`, `appPages`, `server`, `public`) without directly accessing private APIs; replaces reliance on `nuxt.options._layers` [source](./.skilld/releases/v4.1.0.md:L205:218)

- NEW: Module lifecycle hooks `onInstall` and `onUpgrade` — modules can perform additional setup on first install or when upgraded; tracked via `.nuxtrc` file (should be committed to version control) [source](./.skilld/releases/v4.1.0.md:L167:189)

**Also changed:** ISR/SWR payload extraction · Dev mode payload extraction · Draggable error overlay · Async plugin constructors · `tracingChannel` diagnostics · Vite 8 upgrade · Vue Router v5 upgrade · Experimental SSR streaming · Experimental TypeScript plugin support · Enhanced chunk stability with import maps · Vite Environment API · `setGlobalHead` utility in kit · `ignore` option for `resolveFiles` · `moduleDependencies` for specifying module dependencies · `rules` property on NuxtPage objects · Lazy hydration macros without auto-imports · Component `declarationPath` · Module resolution extensions in `resolveModule`
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Use `useFetch` and `useAsyncData` for data fetching to prevent double requests — these composables ensure data fetched on the server is transferred to the client in the payload, avoiding re-fetching during hydration and improving performance and consistency [source](./.skilld/docs/1.getting-started/10.data-fetching.md#the-need-for-usefetch-and-useasyncdata)

- Minimise payload size with `pick` or `transform` options when fetching — reduces the amount of data serialized and transferred from server to client, improving performance and time-to-interactive [source](./.skilld/docs/1.getting-started/10.data-fetching.md#minimize-payload-size)

- Always provide an explicit key as the first argument to `useAsyncData` — keys are crucial for caching, data sharing between components, and refreshing specific data; autogenerated keys can lead to unexpected behaviour in custom composables [source](./.skilld/docs/1.getting-started/10.data-fetching.md#keys)

- Wrap shared state with composables using `useState` — never export `ref()` directly at module level as this causes state to be shared across server requests, leading to memory leaks; use pattern `export const useX = () => useState('x')` [source](./.skilld/docs/1.getting-started/11.state-management.md#best-practices)

- Use `useCookie`, `useState`, or `ClientOnly` component for browser-only logic — avoid direct access to `localStorage`, `window`, or time-based values during server-side rendering to prevent hydration mismatches [source](./.skilld/docs/3.guide/2.best-practices/hydration.md#browser-only-apis-in-server-context)

- Lazy-load components with the `Lazy` prefix to improve bundle size — only load component code when needed, particularly for components that appear conditionally or below the fold [source](./.skilld/docs/3.guide/2.best-practices/performance.md#lazy-loading-components)

- Use lazy hydration with `hydrate-on-visible` to delay component interactivity — combine with prerendering and server components to achieve near-zero JavaScript for content-heavy sites [source](./.skilld/docs/3.guide/2.best-practices/performance.md#lazy-hydration)

- Prefer composables and utilities over plugins for most functionality — plugins run during hydration and can block rendering; reserve plugins only for app-wide setup or Vue plugin registration [source](./.skilld/docs/3.guide/2.best-practices/plugins.md#use-composition-whenever-possible)

- Set `parallel: true` on async plugins to load multiple plugins concurrently — prevents blocking operations from serialising plugin initialisation and improves app startup time [source](./.skilld/docs/3.guide/2.best-practices/plugins.md#if-async-enable-parallel)

- Use hybrid rendering with `routeRules` to optimise per-route caching — mix prerendering, ISR (incremental static regeneration), SWR (stale-while-revalidate), and SSR to balance performance and freshness [source](./.skilld/docs/3.guide/2.best-practices/performance.md#hybrid-rendering)

- Use `defineNuxtConfig` with typed options to enable IDE hints and environment overrides — leverage environment-specific config with `$production`, `$development`, and `$env` keys to manage per-environment settings safely [source](./.skilld/docs/1.getting-started/03.configuration.md#nuxt-configuration)

- Call Nuxt composables only within the correct lifecycle context — composables relying on Nuxt context must be called synchronously within components, plugins, route middleware, or `<script setup>` blocks; calling them in async functions or at module level raises `Nuxt instance is unavailable` [source](./.skilld/docs/3.guide/1.concepts/3.auto-imports.md#vue-and-nuxt-composables)

- Use `useRequestHeaders` to proxy client cookies and auth headers to internal API calls — ensures proper credential forwarding during server-side rendering, but avoid proxying sensitive headers like `host` [source](./.skilld/docs/1.getting-started/10.data-fetching.md#pass-client-headers-to-the-api)
<!-- /skilld:best-practices -->

Related: unhead-vue-skilld, vue-skilld, vue-router-skilld
