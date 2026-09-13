---
name: prettier-skilld
description: 'Prettier is an opinionated code formatter. ALWAYS use when writing code importing "prettier". Consult for debugging, best practices, or modifying prettier.'
metadata:
  version: 3.9.6
  generated_by: cached
  generated_at: 2026-09-13
---

# prettier/prettier `prettier@3.9.6`

**Tags:** next: 4.0.0-alpha.13, latest: 3.9.6

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p prettier` instead of grepping `.skilld/` directories. Run `skilld search --guide -p prettier` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes in Prettier v3.9.6 and recent releases — prioritizing new capabilities, signature changes, and deprecated/removed features that LLMs trained on older data may not know about.

- NEW: Async support for `preprocess` function in parsers — v3.7.0 added `Promise<string>` return type support alongside sync implementations [source](./.skilld/releases/CHANGELOG.md:L175)

- NEW: `@prettier/plugin-yuku` official plugin — v3.9.6 introduced new high-performance parser plugin with two AST formats: `yuku` (JavaScript) and `yuku-ts` (TypeScript), powered by Yuku compiler toolchain. Must be installed separately and added to `plugins` config [source](./.skilld/releases/v3.9.6.md#added-a-new-official-plugin)

- FIXED: `prettier.printers` property now included in plugin type declarations — v3.8.1 resolved missing type information for accessing printer objects from plugins (e.g. `prettierPluginEstree.printers.estree`), previously typed as `any` [source](./.skilld/releases/CHANGELOG.md:L581:595)

- NEW: `checkIgnorePragma` option — v3.6.0 added boolean option to respect file-level pragma comments (`@noprettier` or `@noformat`) during formatting checks, disabled by default [source](./.skilld/references/prettier@3.9.6/docs/options.md:L399:423)

- NEW: `mjml` parser — v3.6.0 added support for MJML (Mailjet Markup Language), available as `parser: "mjml"` in configuration [source](./.skilld/references/prettier@3.9.6/docs/options.md:L328)

- TypeScript parser enhancement — v3.9.6 added support for `import defer` syntax in TypeScript ([source](./.skilld/releases/v3.9.6.md:L25:L37)); preserved quote handling for methods named `new` to match JavaScript semantics ([source](./.skilld/releases/v3.9.6.md:L5:L23))

**Also changed:** Angular v21 syntax support in v3.8.2 · Flow `readonly` variance annotation support in v3.8.5 · Performance improvements in doc printer (v3.7.1 regression fix)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Resolve Prettier configuration with `resolveConfig()` before formatting programmatically, then merge it with any API-level options — avoids duplicating config logic and ensures project configuration is respected [source](./.skilld/docs/api.md#resolveconfigfileurlorpath-options)

- Use `prettier.check()` instead of comparing formatted output in CI pipelines — returns a boolean to easily integrate with exit codes and avoids generating unnecessary diffs [source](./.skilld/docs/api.md#prettiercheck-source-options)

- Always pass TypeScript configuration files with `import { type Config } from "prettier"` for type safety and IDE autocomplete — reveals available options and catches misconfigurations before runtime [source](./.skilld/docs/configuration.md#typescript-configuration-files)

- Use configuration overrides for per-file-type options instead of environment-specific configurations — keeps all formatting rules co-located and predictable across different tools and workflows [source](./.skilld/docs/configuration.md#configuration-overrides)

- Use `lint-staged` with Prettier for pre-commit hooks when integrating with other code-quality tools (ESLint, Stylelint) — allows fine-grained control over which files are checked and supports partially staged files [source](./.skilld/docs/precommit.md#option-1-lint-staged)

- Avoid `eslint-plugin-prettier` in favour of running Prettier directly — the plugin is slower, creates visual noise in editors, and adds an unnecessary layer of indirection [source](./.skilld/docs/integrating-with-linters.md)

- Use `eslint-config-prettier` to disable conflicting ESLint style rules — ensures Prettier and ESLint never fight over formatting decisions [source](./.skilld/docs/integrating-with-linters.md)

- Pin the exact Prettier version in `package.json` (no `^` caret) for CI consistency — ensures all contributors and CI runners format identically and prevents unexpected changes from minor version updates [source](./.skilld/docs/ci.md#github-actions)

- Use `--cache` flag in CI and large-format operations to skip re-formatting unchanged files — caches are invalidated on version, options, or file content changes and stored in `./node_modules/.cache/prettier/.prettier-cache` [source](./.skilld/docs/cli.md#--cache)

- Create a `.prettierignore` file and run `prettier --write .` safely — respects ignore patterns across all tools and prevents accidental formatting of build artifacts or generated files [source](./.skilld/docs/ignore.md)

- Use `prettier-ignore` comments (language-specific: `// prettier-ignore`, `{/* prettier-ignore */}`, `<!-- prettier-ignore -->`) to selectively exclude nodes from formatting — preserves intentional formatting for specific code patterns [source](./.skilld/docs/ignore.md#javascript)

- Use `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->` blocks in Markdown for auto-generated content (requires blank lines before/after) — prevents formatting tools from destroying tables or content generated by other tools [source](./.skilld/docs/ignore.md#range-ignore)

- Load plugins via configuration file instead of CLI flags for consistency across all contexts (CLI, editors, programmatic) — ensures plugins are discovered by all tools and IDEs in the project [source](./.skilld/docs/plugins.md#using-plugins)

- Understand that `printWidth` is a soft target, not a hard limit — Prettier tries to honour it but makes independent decisions about breaking lines based on AST structure, unlike ESLint's `max-len` [source](./.skilld/docs/options.md#print-width)

- Object literal formatting is preserved when there's a linebreak after the opening brace — use `objectWrap: "collapse"` to override this heuristic if you prefer single-line formatting whenever possible [source](./.skilld/docs/rationale.md#multi-line-objects)

<!-- /skilld:best-practices -->
