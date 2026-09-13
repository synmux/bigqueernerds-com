---
name: npm-run-all2-skilld
description: 'A CLI tool to run multiple npm-scripts in parallel or sequential. (Maintenance fork). ALWAYS use when writing code importing "npm-run-all2". Consult for debugging, best practices, or modifying npm-run-all2, npm run all2.'
metadata:
  version: 9.0.3
  generated_by: cached
  generated_at: 2026-09-13
---

# bcomnes/npm-run-all2 `npm-run-all2@9.0.3`

**Tags:** beta: 8.1.0-beta.0, latest: 9.0.3

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p npm-run-all2` instead of grepping `.skilld/` directories. Run `skilld search --guide -p npm-run-all2` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes for npm-run-all2 v9.0.3, focusing on breaking changes, new APIs, and deprecations.

- BREAKING: ESM only — v9.0.0 removed CommonJS support. Code using `require("npm-run-all2")` will fail; use `import` instead [source](./.skilld/releases/v9.0.0.md#breaking-changes)

- BREAKING: Node.js engine requirements — v9.0.0 changed minimum version from Node >=20 to ^22.22.2 || ^24.15.0 || >=26.0.0. Projects using Node 20 or 21 cannot use v9.x [source](./.skilld/releases/v9.0.0.md#breaking-changes)

- BREAKING: Empty glob patterns behavior — v9.0.0 changed empty glob patterns from throwing an error to succeeding silently. Code that relied on error thrown for non-matching patterns will change behavior [source](./.skilld/releases/v9.0.0.md:L13)

- NEW: `nodeRun` option (Node API) and `--node-run` / `-x` CLI flag — v9.0.0 added support for Node.js native `node --run` execution mode, bypassing the package manager. Option is boolean; enables via API `{ nodeRun: true }` or CLI `--node-run` / `-x`. Omits pre/post lifecycle hooks and npm_* environment variables; sets `NODE_RUN_SCRIPT_NAME` and `NODE_RUN_PACKAGE_JSON_PATH` instead. Can also be enabled project-wide in package.json as `"npm-run-all2": { "nodeRun": true }` [source](./.skilld/releases/v9.0.0.md:L19)

- NEW: `colorMode` option — v9.0.0 added explicit color palette override option. Accepts `"auto"` (detects from terminal, default), `"none"` (disables colors), `"16"` (forces 16-color palette), or `"256"` (forces ANSI 256-color palette). CLI equivalent is `--color-mode <mode>` [source](./.skilld/docs/npm-run-all.md:L18-L23)

**Also changed:** Fully type-checked with published types · More colors based on terminal capabilities
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## npm-run-all2 Best Practices

- Combine `--max-parallel` with CI environment variables to prevent resource exhaustion — parallelism defaults to unlimited, which can overwhelm CI systems with restricted CPU/memory budgets [source](./.skilld/docs/npm-run-all.md#L28:29)

- Use `--aggregate-output` when running parallel tasks to prevent output interleaving and improve readability of logs [source](./.skilld/docs/node-api.md#L38:41)

- Combine `--print-label` with `--aggregate-output` for production-grade output — labels clarify which script produced which output, and aggregation prevents interleaving [source](./.skilld/docs/node-api.md#L69:72)

- Set `FORCE_COLOR=1` when using `--print-label` with chalk-based tools (ESLint, etc.) — `--print-label` pipes output which disables TTY-based color detection, but FORCE_COLOR bypasses this check [source](./.skilld/docs/npm-run-all.md#L215:218)

- Use `--continue-on-error` in CI workflows to run all scripts even if one fails, enabling comprehensive error reporting instead of fail-fast behaviour [source](./.skilld/docs/npm-run-all.md#L24:27)

- Organize scripts hierarchically using colons as separators (e.g. `build:css`, `build:js`) and match them with glob patterns like `build:**` for deeper nesting — colon-based patterns are more readable than filesystem paths [source](./.skilld/docs/npm-run-all.md#L133:150)

- Rely on guaranteed execution order when using glob patterns with `run-s` — matched scripts execute in the order they appear in `package.json` per ECMAScript spec [source](./.skilld/docs/run-s.md#L108:115)

- Prefix script names with numbers (e.g. `build:1:html`, `build:2:js`) to ensure correct ordering if formatters alphabetically reorder `package.json` [source](./.skilld/docs/npm-run-all.md#L153:161)

- Pass arguments through scripts using placeholder syntax `{1}`, `{2}`, `{@}` (all args) or `{*}` (combined args) — these are automatically quoted and work consistently across platforms [source](./.skilld/docs/npm-run-all.md#L174:211)

- Enable `--node-run` (`-x` flag) or set `"npm-run-all2": { "nodeRun": true }` in `package.json` for faster script execution when pre/post lifecycle hooks are not needed — uses Node's faster `node --run` instead of npm [source](./.skilld/docs/npm-run-all.md#L51:59)

- Configure `maxListenersExceeded` warnings when using custom streams (`stdin`, `stdout`, `stderr`) in parallel mode — npm-run-all uses piping internally, which can exceed Node's default listener limits [source](./.skilld/docs/node-api.md#L117:122)

- Use `--silent` flag to suppress npm's verbose logging output — particularly useful in CI to reduce noise while maintaining script output [source](./.skilld/docs/npm-run-all.md#L50)

- Be aware that glob patterns matching zero tasks now silently succeed (breaking change in v9.0.0) — this prevents CI failures from typos in task names, so validate patterns carefully [source](./.skilld/releases/v9.0.0.md#L13)

- Use `--color-mode` to explicitly control color output in different environments — set to `none` in non-TTY CI, `16` for legacy terminals, or `256` for modern terminals to override auto-detection [source](./.skilld/docs/npm-run-all.md#L18:23)

<!-- /skilld:best-practices -->
