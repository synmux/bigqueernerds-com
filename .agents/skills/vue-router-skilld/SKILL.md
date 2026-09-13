---
name: vue-router-skilld
description: "ALWAYS use when writing code importing \"vue-router\". Consult for debugging, best practices, or modifying vue-router, vue router, router."
metadata:
  version: 5.3.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# vuejs/router `vue-router@5.3.1`
**Tags:** next: 4.0.13, legacy: 3.6.5, edge: 4.4.0-alpha.3

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p vue-router` instead of grepping `.skilld/` directories. Run `skilld search --guide -p vue-router` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

- BREAKING: IIFE build no longer includes `@vue/devtools-api` — changed in v5.0.2, users relying on IIFE must obtain devtools separately [source](./.skilld/releases/v5.0.2.md)

- BREAKING: `miss()` now throws internally and returns `never` (experimental) — changed in v5.0.3, previously returned a value, affects param parsers using data loader patterns [source](./.skilld/releases/v5.0.3.md:L9:14)

- BREAKING: `selectNavigationResult` removed (experimental) — removed in v5.0.3, affects data loaders and experimental resolver patterns [source](./.skilld/releases/v5.0.3.md:L9:14)

- DEPRECATED: `NavigationResult` constructor (experimental) — deprecated in v5.0.3 in favour of `reroute(to)`, affects data loader implementations [source](./.skilld/releases/v5.0.3.md:L9:14)

- NEW: `reroute(to)` function (experimental) — new in v5.0.3, replaces `new NavigationResult(to)` pattern for data loaders [source](./.skilld/releases/v5.0.3.md:L9:14)

- DEPRECATED: `next()` callback pattern in navigation guards — deprecated in v5.0.3 with runtime warning, use guard return value instead [source](./.skilld/releases/v5.0.3.md:L23)

- NEW: `DataLoaderPlugin` and data loader APIs (experimental) — introduced in v5.0.0 with `defineBasicLoader()`, `defineColadaLoader()`, and `DataLoaderPlugin` from `vue-router/experimental` [source](./.skilld/releases/v5.0.0.md:L12:21)

- NEW: Query parameters optional by default (experimental) — introduced in v5.0.0 via experimental resolver, query params are no longer required [source](./.skilld/releases/v5.0.0.md:L14)

- BREAKING: Import paths for file-based routing — v5.0.0 merged unplugin-vue-router into core; change `vue-router/vite` and `vue-router/unplugin` entry points, plus data loader imports from `vue-router/experimental` [source](./.skilld/docs/guide/migration/v4-to-v5.md:L39:86)

- NEW: `experimental_createRouter()` — introduced in v5.0.0 for experimental resolver-based matching with stronger typing and custom param parsers [source](./.skilld/docs/experimental/router-resolver.md:L16)

- NEW: Experimental param parser system — introduced in v5.0.0, enables custom `defineParamParser()` in v5.1.0 for typed route parameters with automatic string  JS value transforms [source](./.skilld/docs/experimental/param-parsers.md:L1:20)

- NEW: `defineParamParser()` and `defineParamParserRaw()` — added in v5.1.0, allow defining custom param transformations for path and query parameters with end-to-end TypeScript types [source](./.skilld/releases/v5.1.0.md:L9:18)

- NEW: Raw param parser support — added in v5.1.0, enables handling multiple input shapes or rejecting nullish/array values in parameter parsing [source](./.skilld/releases/v5.1.0.md:L9:18)

- NEW: String as param parser shorthand — added in v5.1.0 for convenience, allows passing parser name directly instead of full parser object [source](./.skilld/releases/v5.1.0.md:L9:18)

- NEW: Volar plugins for IDE support — added in v5.0.0 with `vue-router/volar/sfc-typed-router` and `vue-router/volar/sfc-route-blocks` for enhanced TypeScript support in single-file components [source](./.skilld/releases/v5.0.0.md:L12:21)

- NEW: `history.scrollRestoration` respects browser setting — added in v5.3.0, scroll computation now skips if browser sets `history.scrollRestoration` to manual or other non-automatic values [source](./.skilld/releases/v5.3.0.md:L12)

**Also changed:** Route json schema generation v5.0.0 · Diagnostics improvements v5.2.0 · Param parser include/exclude options v5.0.7 · RouterMatcher types wired via generated routes v5.0.7
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- **Always use `router.beforeResolve` for pre-navigation operations** — It runs after all in-component guards and lazy-loaded route components, making it the ideal spot for async data fetching or permission checks before confirming navigation [source](./.skilld/docs/guide/advanced/navigation-guards.md#Global-Resolve-Guards)

- **Avoid watching the entire `route` object; watch specific properties instead** — The route is reactive but monitoring all changes is inefficient; instead watch only the properties you expect to change, like `route.params.id` [source](./.skilld/docs/guide/advanced/composition-api.md#Accessing-the-Router-and-current-Route-inside-setup)

- **Always use dynamic imports for route components** — Vue Router supports dynamic imports out-of-the-box, and it's a good practice to use them for all routes to enable code splitting and lazy loading, reducing initial bundle size [source](./.skilld/docs/guide/advanced/lazy-loading.md#Lazy-Loading-Routes)

- **Use `route.meta` directly instead of looping through `route.matched`** — Vue Router merges all meta fields from parent to child routes non-recursively, so `route.meta` provides a unified view without needing to iterate through matched records [source](./.skilld/docs/guide/advanced/meta.md#Route-Meta-Fields)

- **Extend `RouteMeta` interface at the module level for type safety** — Declare module augmentation on `vue-router` to define custom meta properties, enabling TypeScript autocompletion and compile-time checks across navigation guards and route definitions [source](./.skilld/docs/guide/advanced/meta.md#TypeScript)

- **Use `beforeRouteUpdate` in Composition API for handling param changes** — In setup, use `onBeforeRouteUpdate` to detect when route params change and refetch data accordingly, avoiding the need to manually watch params [source](./.skilld/docs/guide/advanced/composition-api.md#Navigation-Guards)

- **Structure data loaders in separate files when shared across pages** — Export data loaders from separate loader files (e.g., `loaders/issues.ts`) and re-export them in page components to ensure optimal chunk splitting and avoid duplicating loader definitions [source](./.skilld/docs/data-loaders/organization.md#Loaders-Organization)

- **Use `DataLoaderPlugin` for structured asynchronous state management** — The plugin (experimental) extracts loading logic outside component setup, enabling automatic data fetching, deduplication, and parallel data fetching across route navigation [source](./.skilld/docs/data-loaders/index.md#Data-Loaders)

- **Detect navigation failures with `isNavigationFailure()` and `NavigationFailureType`** — Use these utilities to differentiate between aborted, cancelled, and duplicated navigations, allowing proper handling of failed navigation attempts [source](./.skilld/docs/guide/advanced/navigation-failures.md#Detecting-Navigation-Failures)

- **Use named views (`components` with multiple outlets) for multi-panel layouts** — Instead of deeply nested routes, use the `components` option (plural) to render multiple route components in separate `<router-view>` outlets, simplifying layout composition [source](./.skilld/docs/guide/essentials/named-views.md#Named-Views)

- **Apply transitions dynamically via `route.meta` and `<RouterView>` slot** — Use the slot-based approach with a dynamic transition name from meta fields, optionally calculating the transition based on route depth, for smooth navigation animations [source](./.skilld/docs/guide/advanced/transitions.md#Per-Route-Transition)

- **Always implement `scrollBehavior` for consistent scroll management** — Define this function in router options to control scroll position on navigation; return `{ top: 0 }` for top scrolling, use `savedPosition` for back/forward button support, or target elements with CSS selectors [source](./.skilld/docs/guide/advanced/scroll-behavior.md#Scroll-Behavior)

- **Add dynamic routes outside navigation guards and manually trigger redirect** — When using `router.addRoute()`, call it outside guards (e.g., in component mount), then manually use `router.replace()` to display the new route; within guards, return `to.fullPath` to redirect [source](./.skilld/docs/guide/advanced/dynamic-routing.md#Adding-routes-inside-navigation-guards)

- **Use file-based routing conventions to eliminate manual route maintenance** — Place `.vue` files in `src/pages/`, with `index.vue` for empty paths and `[paramName].vue` for dynamic segments; the plugin auto-generates the routing structure, reducing boilerplate [source](./.skilld/docs/file-based-routing/file-based-routing.md#File-Conventions)
<!-- /skilld:best-practices -->
