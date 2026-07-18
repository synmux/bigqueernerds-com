---
name: nuxt-eslint-skilld
description: 'ALWAYS use when writing code importing "@nuxt/eslint". Consult for debugging, best practices, or modifying @nuxt/eslint, nuxt/eslint, nuxt eslint, eslint.'
metadata:
  version: 1.16.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# nuxt/eslint `@nuxt/eslint@1.16.0`

**Tags:** next: 0.3.0-beta.10, latest: 1.16.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/eslint` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/eslint` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## @nuxt/eslint v1.16.0 — API Changes

This section documents APIs in v1.16.0 — the current stable release of the ESLint module for Nuxt.

## API Changes

- NEW: `eslint:config:addons` Nuxt hook — allows custom ESLint config integrations via `ESLintConfigGenAddon` interface [source](./module.d.mts:L8:L14)

- NEW: `ESLintConfigGenAddon` type — for third-party modules to extend ESLint config with custom imports and flat config items [source](./module.d.mts:L144:L147)

- NEW: `CheckerOptions.vite` — Vite-specific options passed to `vite-plugin-eslint2` when running checker [source](./module.d.mts:L112:L113)

- NEW: `CheckerOptions.webpack` — Webpack-specific options passed to `eslint-webpack-plugin` when running checker [source](./module.d.mts:L118)

- NEW: `ConfigGenOptions.devtools` — object to configure ESLint Config Inspector integration in Nuxt DevTools with `enabled` and `port` options [source](./module.d.mts:L38:L49)

- NEW: `ImportPluginOptions` — allows selection between `eslint-plugin-import-x` (default) and `eslint-plugin-import-lite` [source](./PROMPT_api-changes.md) (v1.x adds support for import plugin selection)

- NEW: `NuxtESLintFeaturesOptions.formatters` — support for ESLint formatters plugin with CSS, HTML, XML, SVG, Markdown, and GraphQL formatting via Prettier or dprint [source](./module.d.mts:L70)

- NEW: `defineFlatConfigs()` — type definition utility for constructing ESLint flat config items from `@nuxt/eslint-config` [source](./eslint-config-skilld package) (new in v1.x)

**Also changed:** `ModuleOptions` structure with explicit `config` and `checker` options · `ConfigGenOptions.rootDir` for override · `CheckerOptions.configType` for flat/eslintrc mode · `CheckerOptions.lintOnStart` · ESLint 9 and 10 support · flat config as default format · Nuxt module hook system integration
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Migrate to flat config format exclusively — the module requires ESLint v8.45.0+ and is designed only for flat config, not legacy `.eslintrc` files. This is future-proof and recommended over legacy configs [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L1:11)

- Use the ESLint Module for new projects — it provides project-aware ESLint flat config generation, Nuxt DevTools integration, and optional dev server checking; simpler and more maintainable than manual `@nuxt/eslint-config` setup [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/2.guide/0.faq.md:L8:14)

- Install TypeScript as a dev dependency when using the module — the module requires TypeScript to function correctly; it generates typed configuration helpers and enables type-aware linting [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L40:58)

- Compose config with `FlatConfigComposer` methods for chainable customisation — use `.prepend()`, `.override()`, and `.append()` to manipulate ESLint flat config programmatically rather than manual merging; this returns a composable instance with full chaining support [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L183:208)

- Enable type-aware linting by providing `tsconfigPath` — when using type-checking rules like `@typescript-eslint/no-floating-promises`, configure `features.typescript` with the path to your `tsconfig.json` to avoid "rule requires type information" errors [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/1.config.md:L137:150)

- Set `languageOptions.parserOptions.project` when enabling typed ESLint rules — this forwards the type information to `@typescript-eslint/parser` and is required for type-aware rules to work correctly in the ESLint config [source](/Users/syn/.skilld/repos/nuxt/eslint/discussions/discussion-544.md:L58:76)

- Opt-in to ESLint Stylistic for formatting rules — by default the module does not enable formatting rules; set `config.stylistic: true` if you prefer ESLint for formatting instead of Prettier [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L145:180)

- Avoid `standalone: false` unless merging custom presets — setting `standalone: false` disables default JS, TS, and Vue rule setup; only use this when combining with external config presets like `@antfu/eslint-config` [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L260:292)

- Enable dev server checker only for multi-IDE team environments — the optional `checker: true` setting provides inline ESLint feedback in the dev server, but has a performance cost; rely on IDE ESLint integrations or pre-commit hooks instead for single-developer workflows [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L216:243)

- Update VS Code ESLint extension to v3.0.10+ for native flat config support — older versions require `"eslint.useFlatConfig": true` in settings; upgrading eliminates this manual configuration step [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L112:122)

- Use `createConfigForNuxt()` at monorepo root for non-Nuxt packages — monorepos can export both a Nuxt-aware config via `withNuxt()` inside Nuxt apps and a generic config via `createConfigForNuxt()` at the root for utility packages, enabling consistent rule inheritance across the workspace [source](/Users/syn/.skilld/repos/nuxt/eslint/discussions/discussion-420.md:L49:60)

- Configure the ESLint Config Inspector via Nuxt DevTools — the module ships an interactive inspector integrated into Nuxt DevTools; use it to debug and validate your resolved ESLint flat config instead of manually running `@eslint/config-inspector` [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L210:214)

- Disable `autoInit: false` only when managing `eslint.config.*` manually — the module automatically generates an `eslint.config.mjs` on server startup; disable only if you need explicit control over when the file is created [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/0.module.md:L294:309)

- Enforce `import.meta.client/server` over `process.client/server` via `nuxt/prefer-import-meta` rule — this rule is included in the module and marks `process.*` checks as errors, ensuring Nuxt 3+ compatibility and proper tree-shaking behavior [source](../../../.skilld/references/@nuxt/eslint@1.16.0/docs/content/1.packages/2.plugin.md:L22:32)

<!-- /skilld:best-practices -->
