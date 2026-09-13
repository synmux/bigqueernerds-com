---
name: eslint-skilld
description: 'An AST-based pattern checker for JavaScript. ALWAYS use when writing code importing "eslint". Consult for debugging, best practices, or modifying eslint.'
metadata:
  version: 10.10.0
  generated_by: cached
  generated_at: 2026-09-13
---

# eslint/eslint `eslint@10.10.0`

**Tags:** es6jsx: 0.11.0-alpha.0, next: 10.0.0-rc.2, maintenance: 9.39.5

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p eslint` instead of grepping `.skilld/` directories. Run `skilld search --guide -p eslint` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes for ESLint v10.x — focus on the v10.0.0 major release which contains all breaking changes from v9 → v10.

### Breaking Changes

- BREAKING: `context.getCwd()` — removed in v10.0.0, use `context.cwd` property instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- BREAKING: `context.getFilename()` — removed in v10.0.0, use `context.filename` property instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- BREAKING: `context.getPhysicalFilename()` — removed in v10.0.0, use `context.physicalFilename` property instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- BREAKING: `context.getSourceCode()` — removed in v10.0.0, use `context.sourceCode` property instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- BREAKING: `context.parserOptions` — removed in v10.0.0, use `context.languageOptions` or `context.languageOptions.parserOptions` instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- BREAKING: `context.parserPath` — removed in v10.0.0, no direct replacement available [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- BREAKING: `SourceCode#getTokenOrCommentBefore()` — removed in v10.0.0, use `getTokenBefore(nodeOrToken, { includeComments: true, skip })` instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#sourcecode-methods-removed)

- BREAKING: `SourceCode#getTokenOrCommentAfter()` — removed in v10.0.0, use `getTokenAfter(nodeOrToken, { includeComments: true, skip })` instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#sourcecode-methods-removed)

- BREAKING: `SourceCode#isSpaceBetweenTokens()` — removed in v10.0.0, use `isSpaceBetween()` instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#sourcecode-methods-removed)

- BREAKING: `SourceCode#getJSDocComment()` — removed in v10.0.0, no direct replacement available [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#sourcecode-methods-removed)

- BREAKING: `.eslintrc` configuration format — no longer supported in v10.0.0, must use flat config (`eslint.config.js`) format [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#remove-eslintrc)

- BREAKING: `FlatESLint` and `LegacyESLint` exports — removed in v10.0.0, use `ESLint` class instead [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#remove-eslintrc)

- BREAKING: `Linter` class `configType: "eslintrc"` option — removed in v10.0.0, must use flat config format [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#remove-eslintrc)

- BREAKING: `LintMessage#nodeType` property — removed in v10.0.0, no longer present on message objects [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#lintmessage-nodetype-removed)

- BREAKING: `RuleTester` error `type` property — removed in v10.0.0, must be removed from invalid test case error objects [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#ruletester-type-removed)

- BREAKING: `Program` AST node `range` property — now spans entire source text including leading/trailing comments/whitespace in v10.0.0 [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#program-node-range)

- BREAKING: `RuleFixer` methods `text` argument — must now be string type in v10.0.0, methods: `insertTextBefore()`, `insertTextBeforeRange()`, `insertTextAfter()`, `insertTextAfterRange()`, `replaceText()`, `replaceTextRange()` [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#fixer-text-must-be-string)

- BREAKING: `RuleTester` valid test cases — no longer allow `errors` or `output` properties in v10.0.0, will throw error if present [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#stricter-rule-tester)

- BREAKING: `eslint-env` comments — now reported as errors in v10.0.0, must be removed from code [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#eslint-env-comments)

- BREAKING: `v10_config_lookup_from_file` flag — removed in v10.0.0, this behavior is now default [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#config-lookup-from-file)

### New APIs

- NEW: `context.cwd` property — new in v10.0.0, replaces deprecated `context.getCwd()` method [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- NEW: `context.filename` property — new in v10.0.0, replaces deprecated `context.getFilename()` method [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- NEW: `context.physicalFilename` property — new in v10.0.0, replaces deprecated `context.getPhysicalFilename()` method [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- NEW: `context.sourceCode` property — new in v10.0.0, replaces deprecated `context.getSourceCode()` method [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- NEW: `context.languageOptions` property — new in v10.0.0, provides access to language options and parser options [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#rule-context)

- NEW: `ScopeManager#addGlobals()` method — required in v10.0.0 for custom ScopeManager implementations to resolve global variable references [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#scope-manager)

### Deprecated APIs

- DEPRECATED: `radix` rule options `"always"` and `"as-needed"` — deprecated in v10.0.0 (still work but should be removed), rule now always enforces providing a radix [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#radix)

### Behavioral Changes

- JSX references are now tracked in v10.0.0 — enables correct scope analysis of JSX elements, may produce new linting reports in JSX files [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#jsx-reference-tracking)

- `no-shadow-restricted-names` reports `globalThis` by default — v10.0.0 changed `reportGlobalThis` option default from `false` to `true` [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#no-shadow-restricted-names)

- `eslint:recommended` configuration updated in v10.0.0 — three new rules enabled: `no-unassigned-vars`, `no-useless-assignment`, `preserve-caught-error` [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#eslint-recommended)

- `styleText` replaces `chalk` in formatters — v10.0.0 stylish formatter now uses Node.js native `styleText()` API, respects `NO_COLOR` and `NODE_DISABLE_COLORS` environment variables [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#stylish-formatter)

- Node.js version requirement — v10.0.0 requires Node.js ^20.19.0 || ^22.13.0 || >=24, dropped support for v20.<19, v21, and v23 [source](./.skilld/docs/src/use/migrate-to-10.0.0.md#drop-old-node)

**Also changed:** `jiti` minimum version 2.2.0 · `minimatch` v10 with POSIX character classes · `func-names` schema stricter · `no-invalid-regexp` `allowConstructorFlags` requires unique items · `name` property restored to ESLint core configs · `RuleTester` `requireData` assertion option new · `RuleTester` error assertion options added · `Array.fromAsync` support in `array-callback-return` · `SourceCode#traverse()` behavior changes · configuration file lookup algorithm changes
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## ESLint v10.10.0 — Best Practices

## Best Practices

- Use `defineConfig()` when exporting flat config arrays — enables type inference, plugin validation, and automatic merging of configuration objects without manual verification [source](./.skilld/docs/src/use/configure/configuration-files.md#configuration-file)

- Prefer `messageId` over literal `message` strings in `context.report()` — centralises violation messages in `meta.messages`, eliminates duplication between rule and test files, and reduces barrier to contributing message improvements [source](./.skilld/docs/src/extend/custom-rules.md#messageids)

- Declare `meta.languages` when writing rules to target specific languages — ESLint throws an error if the rule is enabled for a non-matching language, preventing silent failures in multi-language projects [source](./.skilld/docs/src/extend/custom-rules.md#rule-structure)

- Always set `meta.fixable` ("`code`" or "`whitespace`") or `meta.hasSuggestions` (boolean) when implementing those features — ESLint throws an error at runtime if you omit these mandatory declarations [source](./.skilld/docs/src/extend/custom-rules.md#rule-structure)

- Never build on top of core rules by extending them — core rule implementation is not public API and changes will break your rule; copy the rule file into your project instead [source](./.skilld/docs/src/extend/custom-rules.md)

- Use AST selectors in rule listeners for precise node matching instead of manual traversal — selectors reduce boilerplate, handle specificity ordering automatically, and make pattern intent explicit [source](./.skilld/docs/src/extend/selectors.md#listening-for-selectors-in-rules)

- Use `fixer` object methods (`fixer.replaceText()`, `fixer.insertTextAfter()`, etc.) instead of manually building replacement text — the fixer system detects and prevents conflicting fixes across rules, and allows up to 10 iterations of autofix [source](./.skilld/docs/src/extend/custom-rules.md#applying-fixes)

- Add `meta.schema` when your rule accepts options — ESLint validates user-provided options against the schema and rejects invalid configurations before rule execution [source](./.skilld/docs/src/extend/custom-rules.md#rule-structure)

- Set `meta.namespace` and read `meta.version` from `package.json` in plugins — enables effective plugin caching, allows `defineConfig()` to locate plugins by namespace even when users register them under different names, and improves debugging [source](./.skilld/docs/src/extend/plugins.md#meta-data-in-plugins)

- Use flat config's `files` and `ignores` patterns to scope rules to specific file sets instead of applying rules globally — enables per-language configuration, reduces false positives on incompatible file types, and makes rule activation explicit [source](./.skilld/docs/src/use/configure/configuration-files.md#specify-files-and-ignores)

- Use custom processors to lint non-JavaScript file formats — processors allow ESLint to preprocess (e.g. extract code blocks) and postprocess (e.g. map locations back) results, extending ESLint to Markdown, HTML, YAML and other formats [source](./.skilld/docs/src/extend/custom-processors.md)

- Use ESLint's built-in `RuleTester` for testing rules — no external test library required, integrates seamlessly with Mocha and Jest, and tests both valid and invalid code paths with expected messages [source](./.skilld/docs/src/extend/custom-rule-tutorial.md#step-5-set-up-testing)

- Name shareable configs with `eslint-config-` prefix (or `@scope/eslint-config` for scoped) and declare `eslint` as `peerDependencies` — npm users can easily identify and discover your config, and version compatibility is explicit [source](./.skilld/docs/src/extend/shareable-configs.md#create-a-shareable-config)

- Use `defineConfig()` with `plugins` in flat config to register plugins and enable config validation — allows ESLint to validate plugin availability and correct namespace usage before linting begins, catching misconfigurations early [source](./.skilld/docs/src/use/configure/configuration-files.md#configuration-file)

<!-- /skilld:best-practices -->
