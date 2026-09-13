---
name: node-gyp-skilld
description: "ALWAYS use when writing code importing \"node-gyp\". Consult for debugging, best practices, or modifying node-gyp, node gyp."
metadata:
  version: 13.0.2
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# nodejs/node-gyp `node-gyp@13.0.2`
**Tags:** latest: 13.0.2

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p node-gyp` instead of grepping `.skilld/` directories. Run `skilld search --guide -p node-gyp` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases and breaking changes.

### Environment & Configuration Changes

- BREAKING: Node.js engine requirement — v13.0.0 requires `^22.22.2 || ^24.15.0 || >=26.0.0`, up from v12's `^18.19.0 || >=20.0.0` [source](./.skilld/releases/v13.0.0.md#breaking-changes)

- BREAKING: Node.js engine requirement — v12.0.0 changed to align with npm 11 `^18.19.0 || >=20.0.0`, dropping v16 support in v11 [source](./.skilld/releases/v12.0.0.md#breaking-changes)

- BREAKING: `python` npm config setting removed — v12.2.0 no longer accepts `--python` flag as npm config option [source](./.skilld/releases/v12.2.0.md#bug-fixes)

### Fetch & URL API Changes

- NEW: Built-in `fetch` API — v12.3.0 replaced `make-fetch-happen` dependency with native Node.js `fetch()` [source](./.skilld/releases/v12.3.0.md#features)

- BREAKING: `URL` constructor required — v12.2.0 switched from `url.parse()` to `URL` constructor for URL parsing [source](./.skilld/releases/v12.2.0.md#bug-fixes)

- BREAKING: `URL` constructor required — v12.3.0 switched from `url.resolve()` to `URL` constructor for URL resolution [source](./.skilld/releases/v12.3.0.md#bug-fixes)

### Build System Changes

- NEW: Visual Studio 2026 (18.x) support — v12.1.0 added detection and support for VS 2026 toolchain [source](./.skilld/releases/v12.1.0.md#features)

- BREAKING: LTO disabled on Windows — v13.0.0 disabled Link Time Optimisation for addon builds on Windows due to compatibility issues [source](./.skilld/releases/v13.0.0.md#bug-fixes)

### Dependency Changes (Internal API)

- BREAKING: `proc-log@7.0.0` — v13.0.0 updated logging interface, migration from v6.0.0 [source](./.skilld/releases/v13.0.0.md#core)

- BREAKING: `nopt@10.0.0` — v13.0.0 updated argument parser, migration from v9.0.0 [source](./.skilld/releases/v13.0.0.md#core)

- BREAKING: `which@7.0.0` — v13.0.0 updated executable finder, migration from v6.0.0 [source](./.skilld/releases/v13.0.0.md#core)

### Error Handling & Logging

- NEW: Built package version in error logs — v12.2.0 includes the compiled package version in build error messages for better debugging [source](./.skilld/releases/v12.2.0.md#features)

- IMPROVED: Graceful symlink failure fallback — v13.0.2 gracefully falls back when build symlink creation fails instead of erroring [source](./.skilld/releases/v13.0.2.md#bug-fixes)

**Also changed:** Retry downloads on retryable errors · UndiciV8.7.0 compatibility fixed · gyp-next updated to v0.22.2 · Add-Type PowerShell command improved with -IgnoreWarnings flag
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Keep node-gyp updated to latest stable release — older versions lack critical build fixes and Python 3.12+ support requires v10 or later [source](./.skilld/docs/README.md:L1:25)

- Specify Python path via package.json `config.node_gyp_python` or environment variable `npm_package_config_node_gyp_python` — this takes precedence over global npm configuration and persists across reinstalls [source](./.skilld/pkg/lib/node-gyp.js:L124:156)

- Use `--ensure` flag when downloading headers to avoid redundant downloads during repeated builds or CI environments [source](./.skilld/docs/README.md:L223)

- Parallel builds with `--jobs max` or `-j n` significantly reduce build time on multi-core systems — no overhead when using native Makefile or MSBuild parallelism [source](./.skilld/docs/README.md:L210)

- Run `rebuild` instead of separate `clean`, `configure`, and `build` commands — simpler and guarantees consistent state [source](./.skilld/docs/README.md:L197:198)

- Handle both bundled and system OpenSSL in binding.gyp using `node_shared_openssl` condition — defaults to system on Unix (pre-v0.8) but detect actual Node.js build configuration [source](./.skilld/docs/Linking-to-OpenSSL.md:L1:45)

- Use `--nodedir` flag when building with pre-release Node.js versions (v0.11.x-pre, etc.) — node-gyp cannot auto-detect headers without explicit path [source](./.skilld/docs/Error-pre-versions-of-node-cannot-be-installed.md:L72:85)

- Pass `--dist-url` or `--nodedir` when building for third-party runtimes like Electron — ensures correct headers and `config.gypi` matching the target runtime [source](./.skilld/docs/README.md:L103:117)

- Prefer `npm_package_config_node_gyp_*` prefix over deprecated `npm_config_*` for environment variables — npm v11+ no longer supports arbitrary `npm_config_` settings [source](./.skilld/pkg/lib/node-gyp.js:L126:135)

- Use `NODE_GYP_FORCE_PYTHON` environment variable to override all Python detection and force a specific version — useful when multiple Python installations exist [source](./.skilld/docs/README.md:L98:101)

- Disable LTO (Link Time Optimisation) on Windows for addon builds if encountering linker issues — v13.0.0 fixed LTO handling on Windows [source](./.skilld/repos/nodejs/node-gyp/releases/v13.0.0.md:L24)

- Create copies instead of hardlinks for build artefacts in containerized or cloud environments — some platforms (Google Cloud, Docker) may lose hardlinked files during layer merging [source](./.skilld/repos/nodejs/node-gyp/issues/issue-2455.md:L14:20)

- Respect `node_with_ltcg` variable in addon.gypi when building on Windows — controls whole-program and incremental link-time code generation settings [source](./.skilld/pkg/addon.gypi:L2:6)

- Set `'win_delay_load_hook': 'true'` in binding.gyp targets on Windows to ensure the addon works regardless of Node.js binary name (node.exe, iojs.exe, etc.) [source](./.skilld/pkg/addon.gypi:L68:89)

- Use `--target=v<version>` to compile addons for a specific Node.js version without requiring that version to be running locally — essential for cross-platform CI and prebuilt distributions [source](./.skilld/docs/README.md:L211)
<!-- /skilld:best-practices -->
