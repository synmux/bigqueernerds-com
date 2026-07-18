---
name: drizzle-kit-skilld
description: 'ALWAYS use when writing code importing "drizzle-kit". Consult for debugging, best practices, or modifying drizzle-kit, drizzle kit, drizzle-orm, drizzle orm.'
metadata:
  version: 0.31.10
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# drizzle-team/drizzle-orm `drizzle-kit@0.31.10`

**Tags:** numeric-modes: 1.0.0-beta.1-867d080, rqb-v1-schema-fix: 1.0.0-beta.1-b96a4f8, rqb-typeperf: 1.0.0-beta.1-69a2ca0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p drizzle-kit` instead of grepping `.skilld/` directories. Run `skilld search --guide -p drizzle-kit` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes — prioritize recent major/minor releases.

- BREAKING: `sql-js` prepared query `.free()` method removed in v0.41.0 — queries are now pre-built instead of db-side prepared, requiring manual query lifecycle management [source](./.skilld/releases/v0.41.0.md:L10)

- BREAKING: `.fullJoin()` removed from MySQL select API in v0.43.0 — MySQL does not support full outer joins [source](./.skilld/releases/v0.43.0.md#fixes)

- NEW: `DrizzleQueryError` in v0.44.0 — wraps all database driver errors and provides stack trace, SQL string, parameters, and original driver error for better debugging [source](./.skilld/releases/v0.44.0.md#error-handling)

- NEW: `cache` module in v0.44.0 — native caching support with `upstashCache()` for Upstash Redis integration and custom cache implementations via `Cache` class with `get()`, `put()`, and `onMutate()` methods [source](./.skilld/releases/v0.44.0.md#drizzle-cache-module)

- NEW: `Gel` dialect support in v0.40.0 — new database dialect for Gel-compatible databases with `gelTable()` function and `dialect: 'gel'` config option; limited to `drizzle-kit pull` only (no generate/migrate/push) [source](./.skilld/releases/v0.40.0.md#added-gel-dialect-support-and-gel-js-client-support)

- NEW: `cross join` and lateral joins in v0.43.0 — added `.crossJoin()`, `.leftJoin(lateral: true)`, `.innerJoin(lateral: true)`, and `.crossJoin(lateral: true)` methods for PostgreSQL, MySQL, Gel, and SingleStore [source](./.skilld/releases/v0.43.0.md#features)

- NEW: Enum type inference in v0.42.0 — `pgEnum()` and `mysqlEnum()` now accept TypeScript native enums in addition to string unions, with types inferred as the enum when using TS enums [source](./.skilld/releases/v0.42.0.md#pgenum-and-mysqlenum-now-can-accept-both-strings-and-ts-enums)

- NEW: Decimal column modes in v0.41.0 — `decimal` and `numeric` column types now support `'bigint'` and `'number'` modes for SQLite, MySQL, PostgreSQL, and SingleStore [source](./.skilld/releases/v0.41.0.md:L9)

- DEPRECATED: `inArray` parameter narrowed in v0.42.0 — now accepts `ReadonlyArray` in addition to mutable arrays for better type safety [source](./.skilld/releases/v0.42.0.md#improvements)

**Also changed:** Duplicate exports removed from drizzle-orm v0.42.0 · SingleStore connection attributes in v0.43.0 · Unsupported Gel column prefix handling v0.43.0 · pg-native Pool detection fix v0.45.0
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Use `defineConfig()` for type-safe configuration with IDE support and plugin composition — all configuration options get inferred types [source](./.skilld/docs/docs/drizzle-config-file.md#drizzle-kit-configuration-file)

- Prefer `drizzle-kit push` for rapid prototyping and development, especially with serverless databases (PlanetScale, Neon, Turso) — applies schema changes directly without generating migration files, pairs well with blue/green deployments [source](./.skilld/docs/docs/drizzle-kit-push.md#drizzle-kit-push)

- Use glob patterns for schema discovery instead of hardcoded file paths — supports single files, folders, or distributed module schemas via `schema: "./src/**/*.sql.ts"` or similar patterns [source](./.skilld/docs/docs/drizzle-config-file.md#schema)

- Enable `verbose: true` when debugging schema push operations in development — prints all generated SQL statements before execution so you can verify them [source](./.skilld/docs/docs/drizzle-config-file.md#verbose)

- Use multiple configuration files (`drizzle-dev.config.ts` and `drizzle-prod.config.ts`) when managing separate databases or deployment stages — pass via `--config` CLI flag to isolate environments [source](./.skilld/docs/docs/kit-overview.md#multiple-configuration-files)

- Use `drizzle-kit check` before merging schema changes in team environments — detects migration conflicts when multiple branches alter the same schema, preventing silent failures [source](./.skilld/docs/docs/drizzle-kit-check.md#drizzle-kit-check)

- Configure `introspect.casing: "camel"` when running `pull` on existing databases — ensures generated schema uses camelCase field names matching TypeScript conventions [source](./.skilld/docs/docs/drizzle-config-file.md#introspect)

- Exclude provider-managed roles via `entities.roles` configuration when using Neon or Supabase — prevents drizzle-kit from trying to manage roles that the provider controls [source](./.skilld/docs/docs/drizzle-config-file.md#roles)

- Set `extensionsFilters` (e.g., `["postgis"]`) to exclude extension-created tables from schema management — prevents conflicts with third-party extension-managed tables [source](./.skilld/docs/docs/drizzle-config-file.md#extensionsfilters)

- Use custom migrations via `drizzle-kit generate --custom --name=seed-users` for seeding data and DDL operations not yet supported by Drizzle Kit — allows SQL-only migrations in the same workflow [source](./.skilld/docs/docs/kit-custom-migrations.md#migrations-with-drizzle-kit)

- Enable `breakpoints: true` for MySQL and SQLite projects — Drizzle Kit automatically adds statement breakpoints (`--> statement-breakpoint`) to handle multiple DDL statements in single transactions [source](./.skilld/docs/docs/drizzle-config-file.md#breakpoints)

- Use `migrations.table` and `migrations.schema` to customize the migrations log table location — allows multiple Drizzle projects to share one database via isolated migration tracking [source](./.skilld/docs/docs/drizzle-config-file.md#migrations)

- Use `schemaFilter` and `tablesFilter` with glob patterns when managing multiple projects in one database — prevents accidental schema collisions and manages scope precisely [source](./.skilld/docs/docs/drizzle-config-file.md#schemafilter)

- Pair `drizzle-kit generate` with explicit `drizzle-kit migrate` for production workflows — preserves full migration history and audit trail, allowing rollback capability [source](./.skilld/docs/docs/drizzle-kit-generate.md#drizzle-kit-generate)

- Use `driver: "pglite"` for in-memory or file-based PostgreSQL development — allows local schema testing without a running database server via embedded PGLite [source](./.skilld/docs/docs/drizzle-config-file.md#driver)

- Specify `dialect` as the first required configuration option — ensures Drizzle Kit knows your database type before processing schema or applying migrations [source](./.skilld/docs/docs/kit-overview.md#migrations-with-drizzle-kit)

- Use the `out` parameter to separate migration folders for different schemas or databases — enables monorepo patterns where multiple drizzle.config files target different `out` directories [source](./.skilld/docs/docs/drizzle-config-file.md#out)

<!-- /skilld:best-practices -->
