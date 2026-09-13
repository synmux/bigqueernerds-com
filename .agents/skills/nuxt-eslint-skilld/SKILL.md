---
name: nuxt-eslint-skilld
description: "ALWAYS use when writing code importing \"@nuxt/eslint\". Consult for debugging, best practices, or modifying @nuxt/eslint, nuxt/eslint, nuxt eslint, eslint."
metadata:
  version: 1.17.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# nuxt/eslint `@nuxt/eslint@1.17.0`
**Tags:** next: 0.3.0-beta.10, latest: 1.17.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/eslint` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/eslint` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes — @nuxt/eslint v1.17.0

## Note

This reference documents v1.17.0 in isolation. Without access to release notes, changelogs, or documentation for previous versions (v1.16, v1.15, etc.), version-specific changes cannot be reliably identified. The items below reflect the public API of v1.17.0 as documented.

To identify which APIs are new in v1.17.0 versus which existed in earlier versions, consult the GitHub releases page.

## API Changes

### Module API (`@nuxt/eslint`)

The primary export is a Nuxt module that generates ESLint flat configuration:

- `export default` — Nuxt module for all-in-one ESLint integration [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md#quick-setup)
- `ModuleOptions` — Configuration interface with `config` and `checker` options [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L83)
- `ESLintConfigGenAddon` — Hook type for `eslint:config:addons` [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L8)

### ESLint Config API (`@nuxt/eslint-config`)

- `createConfigForNuxt(options)` — Factory function returning `FlatConfigComposer` instance, used to generate project-aware ESLint flat configuration [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/1.config.md:L42)
- `features.stylistic` — Enable ESLint Stylistic formatting rules, accepts boolean or options object [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/1.config.md:L121)
- `features.typescript` — Enable type-aware TypeScript rules with `tsconfigPath` option [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/1.config.md:L138)
- `features.tooling` — Module author rules (`unicorn`, `regexp`, `jsdoc`) (experimental) [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/1.config.md:L89)

### ESLint Plugin API (`@nuxt/eslint-plugin`)

- `nuxt/prefer-import-meta` — Rule enforcing `import.meta.client` / `import.meta.server` instead of `process.client` / `process.server` [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/2.plugin.md:L22)

### Dev Server Checker API

- `checker` option — Boolean or `CheckerOptions` object to enable ESLint checking alongside dev server [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L216)
- `checker.configType` — Supports `flat` (default) or `eslintrc` for legacy mode [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L245)
- `checker.cache` — ESLint cache flag (default: true) [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md#dev-server-checker)
- `checker.lintOnStart` — Run lint on dev server start (default: true) [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md#dev-server-checker)
- `checker.fix` — Auto-fix issues (default: false) [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md#dev-server-checker)

### Configuration Features

- `config.standalone` — Disable default JS, TS, Vue plugin setup for custom presets (default: true) [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L260)
- `config.autoInit` — Auto-generate `eslint.config.*` on server start (default: true) [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L294)
- `devtools.enabled` — ESLint Config Inspector integration in Nuxt DevTools (default: 'lazy') [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md#config-inspector)

### Config Composition

- `FlatConfigComposer` — Chainable instance returned by `createConfigForNuxt()` and `withNuxt()` with methods `.prepend()`, `.override()`, and `.append()` [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/1.config.md:L64)
- `withNuxt(...)` — Module function called in `eslint.config.mjs` to compose custom flat configs after Nuxt's defaults [source](./.skilld/references/@nuxt/eslint@1.17.0/docs/content/1.packages/0.module.md:L91)

**Also changed:** `eslint:config:addons` hook · `features.tooling` (experimental) · Nuxt DevTools ESLint Config Inspector

## Known Issues or Gaps

- **`import/order` support** — Discussion [#593](../../repos/nuxt/eslint/discussions/discussion-593.md) indicates that `import/order` rule no longer works without explicitly installing the `eslint-plugin-import` package, suggesting a change in how import rules are handled
- **Version history unavailable** — No changelog or release notes data is available locally to document changes from v1.16, v1.15, or earlier versions
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Use the ESLint Module for new Nuxt projects rather than manual setup via `@nuxt/eslint-config` — it auto-generates project-aware flat config, integrates with Nuxt DevTools, and includes Config Inspector for debugging [source](./.skilld/docs/content/1.packages/0.module.md#features)

- Enable `stylistic` rules explicitly via module options to use ESLint for formatting — the module intentionally leaves this opt-in by default to avoid conflicts with Prettier [source](./.skilld/docs/content/1.packages/0.module.md#eslint-stylistic)

  ```ts
  eslint: {
    config: { stylistic: true }
  }
  ```

- Use `FlatConfigComposer` chainable methods (`.prepend()`, `.append()`, `.override()`, `.remove()`) when modifying Nuxt's auto-generated config — they provide type-safe name-based targeting rather than manual array manipulation [source](./.skilld/docs/content/1.packages/0.module.md#config-customizations)

- Wrap third-party ESLint configs in an array when passing to `withNuxt()` if they export a single config object — `withNuxt()` expects iterable flat config arrays, so non-iterable objects cause Symbol.iterator errors [source](./.skilld/discussions/discussion-409.md)

- Disable `standalone: false` when combining Nuxt ESLint with other preset configs like `@antfu/eslint-config` — standalone mode includes JS, TS and Vue plugins by default which may conflict with your presets [source](./.skilld/docs/content/1.packages/0.module.md#custom-config-presets)

- Use `.remove('gitignore')` to override Nuxt's default gitignore handling for edge cases like git submodules — this is cleaner than trying to override the internal config name [source](./.skilld/discussions/discussion-600.md)

- Separate ESLint configs for monorepo Nuxt apps vs utility packages — create one config with `withNuxt()` for Nuxt-specific projects and another with `createConfigForNuxt()` for packages, allowing both to inherit base rules even if some don't apply [source](./.skilld/discussions/discussion-420.md)

- Enable type-aware TypeScript rules by setting `features.typescript.tsconfigPath` in `createConfigForNuxt()` — this unlocks stricter type-checking rules like `@typescript-eslint/await-thenable` [source](./.skilld/docs/content/1.packages/1.config.md#type-aware-rules)

- Set `autoInit: false` if you manage `eslint.config.mjs` in version control — the module auto-generates the file on server start by default, which can cause unwanted re-creation after manual edits [source](./.skilld/docs/content/1.packages/0.module.md#auto-init)

- Use the `checker` option to run ESLint alongside dev server in teams with mixed IDE setups — most IDEs handle ESLint natively, but this ensures consistency when some developers don't configure it [source](./.skilld/docs/content/1.packages/0.module.md#dev-server-checker)

- Prepend ignore configs rather than append them when using flat config arrays — ESLint processes ignores in order, so prepending ensures they apply to all following rules [source](./.skilld/discussions/discussion-413.md)

- Enable `features.tooling` (experimental) for library/module authors to enforce code quality rules via `unicorn`, `regexp` and `jsdoc` plugins — this catches common pitfalls in public APIs [source](./.skilld/docs/content/1.packages/1.config.md#module-authors)

- Use type casting with `@ts-ignore` when mixing `@nuxt/eslint` types with `typescript-eslint` configs due to upstream type incompatibilities — the error messages are misleading as both are valid configs at runtime [source](./.skilld/issues/issue-497.md)

- Prefer `import.meta.client` and `import.meta.server` over legacy `process.client`/`process.server` — the `nuxt/prefer-import-meta` ESLint rule enforces this pattern which is the modern Nuxt standard [source](./.skilld/docs/content/1.packages/2.plugin.md#nuxtprefer-import-meta)
<!-- /skilld:best-practices -->
