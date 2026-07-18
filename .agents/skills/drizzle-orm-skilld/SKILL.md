---
name: drizzle-orm-skilld
description: 'ALWAYS use when writing code importing "drizzle-orm". Consult for debugging, best practices, or modifying drizzle-orm, drizzle orm.'
metadata:
  version: 0.45.2
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# drizzle-team/drizzle-orm `drizzle-orm@0.45.2`

**Tags:** numeric-modes: 1.0.0-beta.1-867d080, rqb-v1-schema-fix: 1.0.0-beta.1-b96a4f8, rqb-typeperf: 1.0.0-beta.1-69a2ca0

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p drizzle-orm` instead of grepping `.skilld/` directories. Run `skilld search --guide -p drizzle-orm` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes in drizzle-orm v0.45.2 and recent releases. Focus on recent major/minor releases (v0.40.0 onwards).

### Breaking Changes

- BREAKING: `db.fullJoin()` removed from MySQL API — the `fullJoin()` method is no longer available for MySQL dialect queries since v0.43.0 [source](./.skilld/releases/v0.43.0.md:L24)

- BREAKING: `sql-js` query preparation changed from db-side prepare to query prebuild; `.free()` method removed — code calling `.free()` on prepared queries will break in v0.41.0+ [source](./.skilld/releases/v0.41.0.md:L10)

- BREAKING: `sql.identifier()` and `sql.as()` escaping fixed, resolving SQL Injection (CWE-89) — previously unescaped values in these functions may cause queries to fail or behave differently if raw SQL was embedded in v0.45.2+ [source](./.skilld/releases/v0.45.2.md:L9-10)

- BREAKING: `nowait` flag spelling corrected from misspelled form — code using the old misspelled variant will break in v0.43.0+ [source](./.skilld/releases/v0.43.0.md:L22)

- BREAKING: Postgres array type mappings removed from in-driver layer for `numeric[]`, `timestamp[]`, `timestamp with time zone[]`, `interval[]`, `date[]` — prevents precision loss in v0.41.0+ [source](./.skilld/releases/v0.41.0.md:L18)

### New APIs

- NEW: `DrizzleQueryError` wraps all database driver errors and provides stack traces, generated SQL strings, and original driver stack traces — available in v0.44.0+ [source](./.skilld/releases/v0.44.0.md:L9-15)

- NEW: Drizzle `cache` module with configurable caching strategies — introduced in v0.44.0; supports explicit (opt-in per query) and global (all queries cached by default) modes [source](./.skilld/releases/v0.44.0.md:L17-21)

- NEW: `upstashCache()` integration for Redis-backed query caching — native Upstash integration available in v0.44.0+; import from `drizzle-orm/cache/upstash` [source](./.skilld/releases/v0.44.0.md:L26)

- NEW: `Cache` base class for implementing custom cache backends — exposed in v0.44.0+; extend to implement `get()`, `put()`, and `onMutate()` methods [source](./.skilld/releases/v0.44.0.md:L47)

- NEW: `cross join` — standard SQL cross join support added in v0.43.0 [source](./.skilld/releases/v0.43.0.md:L11)

- NEW: Lateral joins (`left`, `inner`, `cross`) — PostgreSQL, MySQL, Gel, and SingleStore now support lateral joins in v0.43.0+ [source](./.skilld/releases/v0.43.0.md:L12)

- NEW: Subqueries in select fields — previously restricted, now allowed in v0.45.0+ [source](./.skilld/releases/v0.45.0.md:L10)

- NEW: `Gel` dialect with full schema support — new first-class dialect for Gel databases in v0.40.0+; import from `drizzle-orm/gel` [source](./.skilld/releases/v0.40.0.md:L10-24)

- NEW: `gelTable()` and Gel schema functions — Gel-specific table and column type definitions available in v0.40.0+; import from `drizzle-orm/gel-core` [source](./.skilld/releases/v0.40.0.md:L39)

- NEW: `decimal()` and `numeric()` with `bigint` and `number` modes — columns now support mode selection for all dialects (SQLite, MySQL, PostgreSQL, SingleStore) in v0.41.0+ [source](./.skilld/releases/v0.41.0.md:L9)

- NEW: `PgTextBuilderInitial` type export — previously unavailable type now exported in v0.43.0+ [source](./.skilld/releases/v0.43.0.md:L19)

- NEW: `InferEnum` type utility — helper type for inferring enum values in v0.42.0+ [source](./.skilld/releases/v0.42.0.md:L54)

### Enhanced/Improved APIs

- ENHANCED: `pgEnum()` and `mysqlEnum()` now accept TypeScript enums in addition to string unions — when passed a TS enum, types are inferred as that enum type, enabling direct enum value insertion/retrieval in v0.42.0+ [source](./.skilld/releases/v0.42.0.md:L19-49)

- FIXED: `$onUpdate` now properly handles `SQL` values — previously `SQL` expressions in `$onUpdate` were not evaluated; fixed in v0.45.0 [source](./.skilld/releases/v0.45.0.md:L12)

- ENHANCED: `inArray()` now accepts `ReadonlyArray` in addition to mutable arrays — improves type flexibility in v0.42.0+ [source](./.skilld/releases/v0.42.0.md:L52)

**Also changed:** pg-native Pool detection fixed v0.45.1 · pg date/timestamp type mappings fixed v0.45.0 · MySQL/SingleStore `varchar` length config relaxed v0.41.0 · MySQL/SingleStore `binary`/`varbinary` type fixes v0.41.0 · Gel column schema prefix requirement v0.43.0 · Duplicate exports cleanup v0.42.0 · SQLite blob spread operator crash fixed v0.44.5
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Opt into caching explicitly rather than relying on defaults — by default Drizzle sends every query straight to the database with no automatic caching, preventing hidden performance traps and surprises [source](./.skilld/docs/docs/cache.md#cache)

- Enable JIT mappers with `jit: true` for large result sets to eliminate row-by-row metadata interpretation overhead — JIT compilation runs once instead of looping through metadata for every row [source](./.skilld/docs/docs/jit-mappers.md#what-are-jit-mappers)

```ts
const db = drizzle({ client, jit: true });
```

- Use prepared statements via `.prepare()` and `.execute()` for frequently-run queries to benefit from database-side query caching and avoid repeated SQL parsing [source](./.skilld/docs/docs/cockroach/perf-queries.md#prepared-statement)

```ts
const prepared = db.select().from(users).prepare("get_user");
await prepared.execute();
await prepared.execute();
```

- Place database connections and prepared statements outside of serverless function handlers to reuse them across invocations and maximise connection pooling benefits [source](./.skilld/docs/docs/cockroach/perf-serverless.md#drizzle-serverless-performance)

- Use the `.batch()` API (Neon HTTP driver) to run multiple non-dependent statements atomically in a single network round trip, reducing latency [source](./.skilld/docs/docs/batch-api.md#batch-api)

- Enable dynamic query mode with `.$dynamic()` when composing queries conditionally or passing query builders as parameters to helper functions [source](./.skilld/docs/docs/cockroach/dynamic-query-building.md#dynamic-query-building)

- Combine filters with `and()` and `or()` operators, passing `undefined` for optional conditions instead of conditionally invoking `.where()` multiple times [source](./.skilld/docs/docs/cockroach/guides/conditional-filters-in-query.md#conditional-filters-in-query)

- Use `.generate` for version-controlled migrations in CI/CD, and reserve `.push` for local development only — push does not generate migration files and can mask schema drift [source](./.skilld/docs/docs/faq.md#should-i-use-generate-or-push)

- Manually name indexes when they include expressions (e.g. `index('idx_name').on(sql\`lower(${table.email})\`)`) to ensure they work correctly with push and generate workflows [source](./.skilld/docs/docs/faq.md#how-push-and-generate-works-for-postgresql-indexes)

- Use nested transactions with `tx.transaction()` inside an outer transaction callback for savepoint support, enabling selective rollback of inner operations [source](./.skilld/docs/docs/cockroach/transactions.md#transactions)

- Return values from transactions to access computed results without relying on closure mutation — transactions support explicit return statements [source](./.skilld/docs/docs/cockroach/transactions.md#transactions)

- Leverage `.onConflictDoUpdate()` for PostgreSQL/SQLite upserts and `.onDuplicateKeyUpdate()` for MySQL to handle insert-or-update patterns cleanly [source](./.skilld/docs/docs/cockroach/guides/upsert.md#upsert-query)

- Always list columns explicitly in select queries instead of using `SELECT *` to guarantee consistent column ordering and avoid silent breakage when schema changes [source](./.skilld/docs/docs/cockroach/select.md#basic-select)

- Use relational queries (`db._query.users.findMany({ with: { posts: true } })`) for intuitive nested data fetching instead of manual left joins to improve readability [source](./.skilld/docs/docs/cockroach/relations.md#one-to-many)

- Use `sql.placeholder()` when preparing parameterised queries with dynamic values to enable proper parameter binding and prevent SQL injection [source](./.skilld/docs/docs/cockroach/perf-queries.md#placeholder)

- Use `InferSelectModel<typeof table>` or `typeof table.$inferSelect` to derive TypeScript types from schema definitions instead of hand-writing them [source](./.skilld/docs/docs/cockroach/goodies.md#type-api)

- Pass custom loggers implementing the `Logger` interface for integrated application logging instead of relying on console output, enabling structured logging and monitoring [source](./.skilld/docs/docs/cockroach/goodies.md#logging)

<!-- /skilld:best-practices -->
