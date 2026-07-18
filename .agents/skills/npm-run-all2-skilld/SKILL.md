---
name: npm-run-all2-skilld
description: 'ALWAYS use when writing code importing "npm-run-all2". Consult for debugging, best practices, or modifying npm-run-all2, npm run all2.'
metadata:
  version: 9.0.2
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# bcomnes/npm-run-all2 `npm-run-all2@9.0.2`

**Tags:** beta: 8.1.0-beta.0, latest: 9.0.2

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p npm-run-all2` instead of grepping `.skilld/` directories. Run `skilld search --guide -p npm-run-all2` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

### Breaking Changes

- BREAKING: ESM only — v9.0.0 requires ESM modules; CommonJS support removed [source](./.skilld/releases/v9.0.0.md#breaking-changes)
- BREAKING: Node.js version requirement — v9.0.0 requires `^22.22.2 || ^24.15.0 || >=26.0.0`; v8.0.0 required `>= Node 20` [source](./.skilld/releases/v9.0.0.md#breaking-changes)
- BREAKING: Empty glob patterns — Glob patterns matching no tasks now succeed silently instead of throwing errors [source](./.skilld/releases/v9.0.0.md#breaking-changes)
- BREAKING: Node.js 20 floor — v8.0.0 raised engine floor from Node 18 to `>= Node 20` [source](./.skilld/releases/v8.0.0.md)

### New Features

- NEW: `nodeRun` option / `--node-run` flag — v9.0.0 adds `-x / --node-run` flag to bypass package manager and use `node --run` instead [source](./.skilld/releases/v9.0.0.md#new-features)
- NEW: Enhanced colour support — v9.0.0 adds more colours based on terminal capabilities via improved `ColorMode` handling [source](./.skilld/releases/v9.0.0.md#new-features)
- NEW: Published TypeScript types — v9.0.0 ships with fully type-checked JSDoc types and published `.d.ts` files [source](./.skilld/releases/v9.0.0.md#breaking-changes)

### Type System Changes

- `NpmRunAllOptions.nodeRun?: boolean` — new in v9.0.0, controls whether to bypass package manager with `node --run` [source](./.skilld/pkg/./lib/index.d.ts:L26)
- `ColorMode` type — new in v9.0.0, exported from `run-task.js` for colour terminal capability control [source](./.skilld/pkg/./lib/index.d.ts:L39)

### Migration Guide

When upgrading from v8 to v9:

1. Ensure your project uses Node.js 22.22.2 or later, OR 24.15.0 or later, OR 26.0.0 or later
2. Convert any CommonJS files to ESM (`.cjs` → `.mjs` or update `package.json` `"type": "module"`)
3. Remove any error handling for empty glob patterns — they now succeed silently instead of throwing
4. Optionally use `--node-run` flag if running on Node.js 22.9.0+ to bypass npm/yarn/pnpm entirely

**Also changed:** rimraf removed v7.0.0 · minimatch → picomatch (experimental, reverted to minimatch) v8.0.2 · p-queue upgraded v6.2.1 · read-package-json-fast adopted v6.1.2
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## npm-run-all2 Best Practices

- Prefer `--node-run` flag (or `nodeRun` in package.json config) for sequential-only workflows to bypass npm and improve performance — Node's native execution is significantly faster, though it intentionally omits npm lifecycle hooks and npm_* environment variables [source](./.skilld/docs/npm-run-all.md#L51:L59)

- When using `--print-label` with tools like ESLint that detect TTY status, set `FORCE_COLOR=1` to preserve colored output — `npm-run-all` pipes stdout to add task prefixes, which breaks TTY detection in chalk-based colourers [source](./.skilld/docs/npm-run-all.md#L213:L222)

- Limit parallelism on CI systems using `--max-parallel <number>` to match available resources — CI environments have constrained CPU and memory, so unbounded parallelism can cause timeouts or failures [source](./.skilld/docs/npm-run-all.md#L28:L29)

- Use `--aggregate-output` in parallel mode to prevent interleaved output when debugging task failures — this delays printing of each task's output until completion, making logs readable [source](./.skilld/docs/npm-run-all.md#L16:L17)

- Apply `--continue-on-error` in CI pipelines to gather all failures before exiting — the process still returns non-zero, but all tasks complete, revealing multiple issues at once instead of stopping at the first error [source](./.skilld/docs/npm-run-all.md#L24:L27)

- Enclose glob patterns or script names in quotes when passing arguments to preserve the `--` separator — without quotes, the shell parses flags incorrectly [source](./.skilld/docs/npm-run-all.md#L162:L173)

- Use globstar `**` patterns to match nested script hierarchies, not single-level `*` — `watch:*` matches `watch:html` but not `watch:js:index`, whereas `watch:**` matches both [source](./.skilld/docs/npm-run-all.md#L133:L151)

- Prefix script names with numbers (e.g. `build:1:html`, `build:2:js`) to guarantee execution order if formatters may reorder `package.json` alphabetically — script ordering in sequential runs is guaranteed by ECMAScript property iteration order, but tools that rewrite the file can break this [source](./.skilld/docs/run-s.md#L108:L116)

- Apply `--race` flag in parallel mode to terminate all tasks as soon as one completes successfully — useful for "first to finish" patterns like running multiple build variants to find the fastest [source](./.skilld/docs/npm-run-all.md#L43:L45)

- Use argument placeholders `{1}`, `{2}`, `{@}`, `{*}` to forward CLI arguments to scripts — for example, `run-p "build:* -- --watch"` passes `--watch` to every matched script, or `npm-run-all build "start -- --port {1}" --` forwards the port argument [source](./.skilld/docs/npm-run-all.md#L174:L211)

- Configure per-project `nodeRun` setting in `package.json` for scripts that only need sequential execution — add `"npm-run-all2": { "nodeRun": true }` to enable Node's `--run` mode globally, avoiding the need to specify `-x` on every invocation [source](./.skilld/docs/npm-run-all.md#L57:L59)

- Empty glob patterns now succeed silently in v9.0.0+ instead of throwing an error — this allows safer script composition where some patterns may not match any tasks; remove workarounds like creating placeholder scripts [source](./.skilld/releases/v9.0.0.md#L26)

- Override colour mode explicitly in environments with limited terminal capabilities using `--color-mode <mode>` — use `none` to disable labels entirely, `16` to force the named 16-colour palette on systems that might report higher depth, or `256` for ANSI 256-colour palettes [source](./.skilld/docs/npm-run-all.md#L18:L23)

- Pass custom task lists to the Node API via `options.taskList` to override automatic `package.json` discovery — this allows programmatic control over which scripts run, useful for dynamic task generation or testing [source](./.skilld/docs/node-api.md#L95:L98)

<!-- /skilld:best-practices -->
