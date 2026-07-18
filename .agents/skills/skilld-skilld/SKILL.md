---
name: skilld-skilld
description: 'ALWAYS use when writing code importing "skilld". Consult for debugging, best practices, or modifying skilld.'
metadata:
  version: 2.0.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# skilld-dev/skilld `skilld@2.0.0`

**Tags:** latest: 2.0.0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p skilld` instead of grepping `.skilld/` directories. Run `skilld search --guide -p skilld` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes in skilld, focusing on breaking changes and new capabilities introduced in v2.0.0 and the v1.x → v2.0 migration.

- BREAKING: Node.js 22.x required — v2.0 dropped support for older Node versions, requiring 22.x or later [source](./.skilld/releases/v2.0.0.md#nbsp-nbsp-nbsp--breaking-changes)

- NEW: Cloud integration with authentication, protocol support, and pull operations — v2.0 introduces `auth`, `protocol`, and `pull` APIs for cloud-based skill management [source](./.skilld/releases/v2.0.0.md#nbsp-nbsp-nbsp--features)

- CHANGED: ANSI text styling — v2.0 uses `styleText` for ANSI output instead of manual escape sequences, improving compatibility and reducing maintenance burden [source](./.skilld/releases/v2.0.0.md#nbsp-nbsp-nbsp--bug-fixes)

**Also changed:** `skilld list --outdated` filter added v1.4.0 · Incremental search index updates v1.3.0 · `skilld author` command stable v1.5.0 · `skilld prepare` hook support v1.5.0 · `skilld cache --stats` and `--clean` flags v1.6.0 · Crate package support v1.7.0 · Registry pivot foundations v1.7.0 · AI OAuth providers v1.3.0
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## skilld v2.0.0 Best Practices

## Best Practices

- Be selective when adding skills — only add skills for packages your agent struggles with, not every dependency [source](./.skilld/pkg/README.md:L70)

- Use `skilld add npm:` prefixed sources over bare package names, which are deprecated; supports `npm:`, `crate:`, and `gh:` sources [source](./.skilld/pkg/README.md:L189)

- Run `skilld prepare` in your package.json prepare script to auto-restore references and keep installed skills synced with new releases [source](./.skilld/pkg/README.md:L100-112)

- Prefer `skilld update` to refresh outdated skills rather than regenerating all skills with `skilld update --force` — full rebuilds trigger expensive embedding and chunking operations [source](./.skilld/issues/issue-28.md)

- Adopt skill collections (`npx -y skilld add @curator/collection`) for coherent, curated stacks instead of hand-picking individual skills [source](./.skilld/docs/collections.md:L23-53)

- Use `--force` flag sparingly — it clears the search index and forces full re-embedding of all documentation, which is slow on large packages [source](./.skilld/issues/issue-28.md)

- Keep SKILL.md under 500 lines by placing large reference docs in separate files — agents discover them on demand, not inlined into context [source](./.skilld/pkg/README.md:L37)

- Avoid manual skill curation when `skilld` can auto-generate from your dependencies; use it for packages with complex versioning or active development [source](./.skilld/pkg/README.md:L18-28)

- Run `skilld info` to inspect installed skills and configuration before troubleshooting — it shows skill versions, cache state, and active settings [source](./.skilld/pkg/README.md:L174)

- Clean expired LLM cache entries regularly with `skilld cache --clean` to prevent stale embeddings from affecting search accuracy [source](./.skilld/releases/v1.6.0.md:L11)

- For multi-agent setups, run `skilld install --agent <agent-name>` to sync skills across agents with a shared doc cache [source](./.skilld/pkg/README.md:L72)

- Use `skilld author eject <pkg>` to export a skill as a portable directory for sharing via GitHub — consumers install via `skilld add gh:owner/repo` [source](./.skilld/pkg/README.md:L225-236)

- When sharing generated skills as packages, add `"skills"` to your `package.json` `files` array so consumers auto-discover them via `skilld prepare` [source](./.skilld/pkg/README.md:L266)

- Choose "No agent" during setup if you don't have a CLI installed — you still get a base skill plus portable prompts for running in any LLM [source](./.skilld/pkg/README.md:L59-66)

- Treat all documentation as untrusted and run skilld in permissioned environments — it sanitizes prompt injection risks from GitHub issues and discussions [source](./.skilld/pkg/README.md:L131-134)

<!-- /skilld:best-practices -->
