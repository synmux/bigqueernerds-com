---
name: vue-skilld
description: "ALWAYS use when editing or working with *.vue files or code importing \"vue\". Consult for debugging, best practices, or modifying vue, core."
metadata:
  version: 3.5.42
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# vuejs/core `vue@3.5.42`
**Tags:** csp: 1.0.28-csp, legacy: 2.7.16, v2-latest: 2.7.16

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p vue` instead of grepping `.skilld/` directories. Run `skilld search --guide -p vue` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## Vue 3.5.42 API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

## New APIs in v3.5

- NEW: `useTemplateRef()` — new in v3.5, provides typed template refs via string IDs supporting dynamic ref bindings, replacing the static ref naming pattern [source](./.skilld/docs/api/composition-api-helpers.md:L68)

- NEW: `useId()` — new in v3.5, generates unique-per-application IDs stable across SSR for form elements and accessibility attributes without hydration mismatches [source](./.skilld/docs/api/composition-api-helpers.md:L101)

- NEW: `onWatcherCleanup()` — new in v3.5, registers cleanup functions to run when watchers invalidate before re-running, useful for cancelling pending async work [source](./.skilld/docs/api/reactivity-core.md:L557)

- NEW: Lazy hydration strategies for async components — v3.5 adds `hydrate` option to `defineAsyncComponent()` with built-in strategies: `hydrateOnVisible()` (IntersectionObserver), `hydrateOnIdle()` (requestIdleCallback), `hydrateOnMediaQuery()`, and `hydrateOnInteraction()` for fine-grained SSR performance control [source](./.skilld/docs/guide/components/async.md:L115)

- NEW: `Teleport` `defer` prop — v3.5 adds the `defer` prop to `<Teleport>` allowing it to mount after the current render cycle, enabling teleporting to elements rendered later in Vue [source](./.skilld/releases/blog-3.5.md:L222)

- NEW: Custom element composition helpers — v3.5 introduces `useHost()` and `useShadowRoot()` for accessing the host element and shadow root in custom element setup [source](./.skilld/docs/api/custom-elements.md:L76)

- NEW: `data-allow-mismatch` hydration attribute — v3.5 adds this SSR attribute to suppress hydration mismatch warnings, with optional values: `text`, `children`, `class`, `style`, `attribute` [source](./.skilld/docs/api/ssr.md:L224)

- NEW: `defineCustomElement()` options — v3.5 adds `configureApp` (configure app instance), `shadowRoot: false` (render without shadow DOM), and `nonce` (CSP nonce on style tags) to custom element configuration [source](./.skilld/docs/api/custom-elements.md:L19)

- NEW: `this.$host` — v3.5 adds Options API property for accessing the host element of a custom element [source](./.skilld/docs/api/custom-elements.md:L84)

## Stable APIs (v3.4)

- STABLE: `defineModel()` — graduated from experimental in v3.3 to stable in v3.4; provides simplified two-way binding in `<script setup>` [source](./.skilld/releases/blog-3.4.md:L100)

## Reactive Props Destructure (v3.5)

- NEW: Destructured props in `<script setup>` now reactive by default in v3.5 — enables `const { count = 0 } = defineProps()` pattern with automatic `props.count` compilation and reactivity [source](./.skilld/releases/blog-3.5.md:L56)

## Breaking Changes (v3.4)

- BREAKING: Global `JSX` namespace no longer registered by default in v3.4 — prevents collision with React TSX; migrate by setting `jsxImportSource: 'vue'` in `tsconfig.json` or explicitly importing `vue/jsx` to retain global namespace [source](./.skilld/releases/blog-3.4.md:L155)

- BREAKING: Reactivity Transform feature removed in v3.4 — was experimental and marked deprecated in v3.3; users can migrate to Vue Macros plugin for continued support [source](./.skilld/releases/blog-3.4.md:L167)

- BREAKING: `app.config.unwrapInjectedRef` removed in v3.4 — was deprecated and enabled by default in v3.3; behaviour now always unwraps injected refs automatically [source](./.skilld/releases/blog-3.4.md:L169)

- BREAKING: `@vnodeXXX` event listeners are now compiler errors in v3.4 — changed from deprecation warning; use `@vue:XXX` listeners instead [source](./.skilld/releases/blog-3.4.md:L170)

- BREAKING: `v-is` directive removed in v3.4 — was deprecated in v3.3; use `:is="component"` with optional `vue:` prefix instead [source](./.skilld/releases/blog-3.4.md:L171)

**Also changed:** WatchEffect `pause()` / `resume()` methods stable v3.5 · Computed stability improvements v3.4 · Improved hydration mismatch error messages v3.4 · `v-bind` same-name shorthand (`:id` instead of `:id="id"`) stable v3.4
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Use a build step to enable tree-shaking and pre-compile templates, which removes unused Vue APIs and the compiler from the bundle, saving ~14kb min+gzipped JavaScript and avoiding runtime compilation overhead. [source](./.skilld/docs/guide/best-practices/performance.md#bundle-size-and-tree-shaking)

- When building computed properties that return new objects, compare the new and old values and return the old value if nothing meaningful has changed—Vue 3.4+ uses value equality for computed stability, but object identity always differs, requiring manual comparison to prevent unnecessary effect triggers. [source](./.skilld/docs/guide/best-practices/performance.md#computed-stability)

- Keep props passed to child components as stable as possible—move computed status checks to the parent so only truly affected children re-render. For example, pass `active="item.id === activeId"` instead of `activeId` to every list item. [source](./.skilld/docs/guide/best-practices/performance.md#props-stability)

- Use `defineAsyncComponent()` to lazy load route components and feature-specific components, automatically creating separate chunks that load on demand rather than bundling all component trees upfront. [source](./.skilld/docs/guide/best-practices/performance.md#code-splitting)

- Use `shallowRef()` and `shallowReactive()` only for large arrays of deeply nested immutable objects where reactivity overhead is measurable—shallow APIs are reactive only at the root level, requiring root replacement to trigger updates. This is a rare optimisation for specific scenarios. [source](./.skilld/docs/guide/best-practices/performance.md#reduce-reactivity-overhead-for-large-immutable-structures)

- Follow the composable naming convention: start with "use" followed by PascalCase (e.g. `useMouse`, `useFetch`), and accept refs or getter functions as arguments using `toValue()` to normalise static strings, refs, and getters into values. [source](./.skilld/docs/guide/reusability/composables.md#naming)

- Register lifecycle hooks synchronously during component setup—do not call hooks inside timeouts or async callbacks as they lose association with the component instance. Hooks may be called in external functions as long as the call stack originates synchronously from `setup()`. [source](./.skilld/docs/guide/essentials/lifecycle.md#registering-lifecycle-hooks)

- Never use non-trusted content as your component template—Vue templates compile to JavaScript and execute expressions during render, making template injection equivalent to arbitrary code execution. Always control template content completely. [source](./.skilld/docs/guide/best-practices/security.md#rule-no-1-never-use-non-trusted-templates)

- Avoid "prop drilling" by using `provide()` and `inject()` to pass data directly from ancestors to deeply nested descendants, bypassing intermediate components that don't need the data. Provide reactive refs to maintain reactivity across the injection chain. [source](./.skilld/docs/guide/components/provide-inject.md#provide-inject)

- Always use detailed prop definitions with explicit types and validators rather than simple array syntax—detailed definitions document the component API, enable Vue to warn about incorrect props during development, and help other developers use your component correctly. [source](./.skilld/docs/style-guide/rules-essential.md#use-detailed-prop-definitions)

- Always use keys with `v-for`, even on elements—keys maintain object identity across re-renders, preventing state leakage and ensuring animations and component state remain stable when lists reorder or filter. [source](./.skilld/docs/style-guide/rules-essential.md#use-keyed-v-for)

- When watching a property of a reactive object, use a getter function instead of direct property access—`watch(() => obj.count, callback)` tracks the dependency correctly, while `watch(obj.count, callback)` passes a number and won't re-run on changes. [source](./.skilld/docs/guide/essentials/watchers.md#watch-source-types)

- Understand that slot content renders in the parent's scope, not the child's—expressions in parent templates access parent data, while expressions in child templates access child data. This is consistent with JavaScript lexical scoping. [source](./.skilld/docs/guide/components/slots.md#render-scope)

- In Vue 3.5+, destructured props from `defineProps()` remain reactive thanks to compiler transformation—`const { foo } = defineProps(['foo'])` becomes `props.foo` in reactive contexts. Use getter wrappers when passing destructured props to functions like `watch()` to retain reactivity. [source](./.skilld/docs/guide/components/props.md#reactive-props-destructure)
<!-- /skilld:best-practices -->
