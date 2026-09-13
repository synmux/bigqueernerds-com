---
name: skilld-skilld
description: 'Generate AI agent skills from npm package documentation. ALWAYS use when writing code importing "skilld". Consult for debugging, best practices, or modifying skilld.'
metadata:
  version: 2.3.0
  generated_by: cached
  generated_at: 2026-09-13
---

# skilld-dev/skilld `skilld@2.3.0`

**Tags:** latest: 2.3.0, beta: 3.0.0-beta.5

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p skilld` instead of grepping `.skilld/` directories. Run `skilld search --guide -p skilld` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- BREAKING: Node version requirement — v2.0.0+ requires Node 22.6.0 or higher, was previously Node 18+ [source](./.skilld/releases/v2.0.0.md#breaking-changes)

- NEW: Embedding model configuration — v2.2.0 added configurable embedding models via `skilld config` and `SKILLD_EMBED_MODEL` environment variable, supports `bge-small-en-v1.5`, `bge-base-en-v1.5`, `Xenova/bge-large-en-v1.5`, `bge-m3`, or Ollama models [source](./.skilld/pkg/README.md:L245:275)

- NEW: Ollama embedding support — v2.2.0 added support for locally-pulled Ollama embedding models via `ollama:<name>` syntax in `skilld config` [source](./.skilld/pkg/README.md:L276:289)

- NEW: Ollama executor — v2.1.0 added local Ollama execution for skill generation using `-m ollama:<name>` flag, runs offline without API keys [source](./.skilld/pkg/README.md:L228:236)

- BEHAVIOR CHANGE: Source prefix support in wizard — v2.3.0 now accepts source prefixes (`npm:`, `gh:`, `crate:`) in the interactive wizard's package prompt [source](./.skilld/releases/v2.3.0.md:L18)

- BEHAVIOR CHANGE: Agent target "none" now accepted — v2.3.0 allows `none` as a valid agent target value in the CLI [source](./.skilld/releases/v2.3.0.md:L20)

- BEHAVIOR CHANGE: Cloud integration — v2.0.0 introduced cloud features (auth, protocol, pull) for connecting installs and change watches to skilld.dev [source](./.skilld/releases/v2.0.0.md:L15)

- NEW: ANSI styling preference — v2.0.0 changed to prefer `styleText` for ANSI color output over alternative methods [source](./.skilld/releases/v2.0.0.md:L19)

- BEHAVIOR CHANGE: Agent config precedence — v2.3.0 fixed saved agent config to properly take precedence in auto-detection [source](./.skilld/releases/v2.3.0.md:L19)

- BEHAVIOR CHANGE: Multi-agent search — v2.3.0 changed `skilld search` to search installed skills across all agents by default, can filter with `--agents` flag [source](./.skilld/pkg/README.md:L247:252)

**Also changed:** Cloud auth session reuse v2.3.0 · Embedding device GPU acceleration (auto/cpu/webgpu/coreml) v2.2.0+ · `prepare` command for auto-discovery on install · `author validate` CLI for skill validation
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Install skills selectively for packages your agent struggles with — avoid adding skills for every dependency. This keeps the skill context lean and focused on packages that actually need best-practice guidance [source](./.skilld/pkg/README.md:L69:70)

- Add `skilld prepare` to your `package.json` prepare script to automatically restore skill references and sync shipped skills on `npm install` — this ensures skills stay current when dependencies update [source](./.skilld/pkg/README.md:L102:112)

- Use source prefixes in CLI commands for clarity — `npm:` for registry packages, `gh:` for GitHub repos, `crate:` for Rust crates — to disambiguate between package sources and avoid confusion [source](./.skilld/pkg/README.md:L149:156)

- Set embedding device to `webgpu` on Apple Silicon for 2.6–2.9x faster indexing compared to CPU — WebGPU consistently outperforms other backends in benchmarks and enables use of larger, more accurate embedding models [source](./.skilld/pkg/README.md:L299:320)

- Upgrade from `bge-small-en-v1.5` to `bge-base-en-v1.5` or `Xenova/bge-large-en-v1.5` for production retrieval — larger models retrieve more accurately for semantic search across skill docs, trading indexing time for better recall [source](./.skilld/pkg/README.md:L254:274)

- Use `skilld search --agents <agent-list>` to restrict retrieval across multiple installed skills — search indexes all skills regardless of agent by default, so filtering prevents cross-agent noise [source](./.skilld/pkg/README.md:L247:252)

- Sync skills across multiple agents using `skilld install --agent <target>` and a shared doc cache — the embedding database is shared across agents in the project, allowing one embedding index to serve semantic search for all agents [source](./.skilld/pkg/README.md:L72)

- Respect saved agent configuration precedence — explicit `--agent` flag takes priority over environment detection, then saved config, then project markers — fixing precedence ensures your workflow predictably resolves to the intended agent [source](./.skilld/releases/v2.3.0.md:L19)

- Use `skilld author eject <pkg>` to create portable, shareable skills from your installed packages — ejected skills are self-contained with symlinks resolved and ready to commit to repositories for sharing via `skilld add gh:owner/repo` [source](./.skilld/pkg/README.md:L321:332)

- Leverage `skilld author assemble` to merge LLM-generated sections when no agent CLI is available — run portable `PROMPT_*.md` files through any LLM (ChatGPT, Claude web), save outputs as `_BEST_PRACTICES.md` or `_API_CHANGES.md`, then assemble back into the skill [source](./.skilld/pkg/README.md:L208:226)

- Treat all GitHub issue content as untrusted — skilld sanitizes prompt injection and validates data in permissioned environments, but issues can be abused for injection attempts, so exercise caution when using skills from untrusted sources [source](./.skilld/pkg/README.md:L128:135)

- Keep `SKILL.md` under 500 lines by splitting references into separate files that agents discover on-demand — this follows Claude Code skill best practices and prevents bloating the agent context with all documentation at once [source](./.skilld/pkg/README.md:L37)

- Use locally-pulled Ollama embedding models via `SKILLD_EMBED_MODEL=ollama:<name>` for offline, free retrieval — Ollama models run without API keys or network traffic after initial setup and can outperform built-in models on your specific hardware [source](./.skilld/pkg/README.md:L276:289)

- Install skilld globally once and use it across all projects without `npx` — global installation lets you quickly run `skilld add npm:<pkg>` or `skilld search` across multiple projects without per-project setup overhead [source](./.skilld/pkg/README.md:L74:86)

<!-- /skilld:best-practices -->
