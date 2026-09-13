---
name: wrangler-skilld
description: "ALWAYS use when writing code importing \"wrangler\". Consult for debugging, best practices, or modifying wrangler, workers-sdk, workers sdk."
metadata:
  version: 4.129.0
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# cloudflare/workers-sdk `wrangler@4.129.0`
**Tags:** wrangler@2.2.4: 2.2.4, legacy: 3.114.17, latest: 4.131.1

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p wrangler` instead of grepping `.skilld/` directories. Run `skilld search --guide -p wrangler` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases in v4.x.

- BREAKING: `unstable_printBindings()` — v4.128 changed signature from five positional parameters to accepting bindings and an options object; old code compiles but fails at runtime with incorrect parameter handling [source](./.skilld/releases/wrangler@4.128.0.md#minor-changes)

- BREAKING: Workflow bindings `remote` configuration removed — v4.125 no longer accepts `remote` in Workflow binding configuration; remote Workflow bindings were never supported and are now explicitly rejected [source](./.skilld/releases/wrangler@4.125.0.md:L90:L92)

- BREAKING: `nodejs_compat` automatic detection from compatibility date — v4.122 onwards detects `nodejs_compat` from the compatibility date itself (enabled by default as of 2026-08-04); old code setting the flag explicitly on newer dates fails with "The compatibility flag nodejs_compat became the default" error [source](./.skilld/releases/wrangler@4.122.0.md#minor-changes)

- NEW: `--json` flag for `wrangler workflows` commands — v4.129 adds `--json` to all `wrangler workflows` commands (e.g. `wrangler workflows instances list my-workflow --json`) for machine-readable output with raw API payloads [source](./.skilld/releases/wrangler@4.129.0.md#minor-changes)

- NEW: `connect` trigger for raw socket connections — v4.125 adds socket trigger support via `connect` config field (requires `experimental` compatibility flag); accepts TCP protocol with `address` and `port` parameters; also available via `@cloudflare/config` triggers API [source](./.skilld/releases/wrangler@4.125.0.md#minor-changes)

- NEW: Container support for worker previews — v4.125 adds `previews.containers` configuration block for declaring containers in preview deployments; container build and deploy outputs to stdout [source](./.skilld/releases/wrangler@4.125.0.md#minor-changes)

- NEW: `workflows[].concurrency.limit` configuration — v4.127 adds per-workflow concurrency limit configuration; accepts a positive integer and is validated and enforced server-side [source](./.skilld/releases/wrangler@4.127.0.md#minor-changes)

- NEW: `default_retention` for Workflow bindings — v4.126 adds per-Workflow default retention configuration with `success_retention` and `error_retention` fields, accepting duration strings or milliseconds [source](./.skilld/releases/wrangler@4.126.0.md:L11:L31)

- NEW: Email test harness `.events` array — v4.126 includes a chronological `events` array in email test results with `type`, `timestamp`, and message IDs for received, forwarded, and replied messages [source](./.skilld/releases/wrangler@4.126.0.md:L33:L62)

- NEW: `WorkflowInstance.delete()` and `env.MY_WORKFLOW.deleteBatch(instanceIds)` — v4.125 adds instance deletion APIs; `delete()` works within instances for self-deletion; `deleteBatch()` accepts up to 100 IDs and returns `{ deleted, errors }` [source](./.skilld/releases/wrangler@4.125.0.md:L47:L51)

- NEW: Preview base config secret commands — v4.121 adds `wrangler preview base-config secret put`, `delete`, `list`, and `bulk` for managing Preview base config secrets; matches `wrangler secret` semantics [source](./.skilld/releases/wrangler@4.121.0.md#minor-changes)

- NEW: `access.dev` configuration for Access identity simulation — v4.123 adds `access.dev` config block in `wrangler.json` to configure mock Cloudflare Access identity for `ctx.access.getIdentity()` during local development [source](./.skilld/releases/wrangler@4.123.0.md:L11:L28)

- MOVED: Binding utilities to `@cloudflare/workers-utils` — v4.128 relocates binding conversion, printing, and validation from `@cloudflare/deploy-helpers` to `@cloudflare/workers-utils`; old imports fail with "not exported" errors [source](./.skilld/releases/wrangler@4.128.0.md:L11:L17)

- NEW: Gzip compression for JSON Pipelines sinks — v4.129 adds `compression` parameter support for JSON sinks in `wrangler pipelines sinks create`; accepts `uncompressed` or `gzip` [source](./.skilld/releases/wrangler@4.129.0.md#minor-changes)

**Also changed:** Containers attached to Durable Object from exports entry (v4.124, optional `class_name` when using `container` field in exports) · `wrangler hyperdrive planetscale signature` (v4.126, experimental command for Cloudflare-billed PlanetScale) · `--parse-type` flag for `wrangler ai-search create` (v4.119) · `--device` flag for `wrangler login` (v4.119, OAuth 2.0 Device Authorization Grant) · Container instances search (v4.120, `wrangler containers instances --search --per-page --page-token`) · Pull request metadata to preview deployments (v4.126, auto-detected `pull_request_number`, `pull_request_url`, `pull_request_title`, `repository_url` annotations) · Email.sending queue subscription source (v4.121, `--source email.sending` with `--zone-id` and `--domain` flags) · D1 US jurisdiction support (v4.121, `wrangler d1 create --jurisdiction us`) · Preview PATCH APIs for secret commands (v4.121, scoped to individual Preview deployments) · `createTestHarness({ prebuiltWorkerDir })` (v4.121, reuse pre-built Worker from `wrangler deploy --dry-run --outdir`)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Run `wrangler types` after adding or renaming bindings to generate accurate TypeScript definitions for your Env interface — this catches type mismatches between your config and code at compile time instead of at deploy time, eliminating a common source of runtime errors [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#generate-binding-types-with-wrangler-types)

- Use `wrangler secret put` to store API keys, tokens, and credentials securely instead of hardcoding them in configuration or `.env` files — secrets are encrypted at rest and accessed at runtime through the `env` parameter, with support for piping from other CLI tools or environment variables [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#store-secrets-with-wrangler-secret-not-in-source)

- Configure environments deliberately in your Wrangler file, specifying bindings and vars per environment — environments are non-inheritable, creating separate deployments (e.g., `my-api-production` and `my-api-staging`), and the root Worker without an environment suffix is a distinct deployment that must be explicitly targeted [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#configure-environments-deliberately)

- Set your `compatibility_date` to today's date on new projects to access the latest runtime features and bug fixes — periodically updating it on existing projects gives access to new APIs without code changes, and you can use `compatibility_flags` like `nodejs_compat` to enable additional runtime capabilities [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#keep-your-compatibility-date-current)

- Access Cloudflare services (R2, KV, D1, Queues, Durable Objects) through bindings rather than REST APIs — bindings eliminate network overhead, authentication complexity, and latency by providing direct in-process references to services [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#use-bindings-for-cloudflare-services-not-rest-apis)

- Distinguish between Queues (single-step async jobs: send a message for processing) and Workflows (multi-step durable processes: steps with persistent state and conditional logic) — use both together when a high-throughput entry point feeds into complex processing, with Workflows supporting long pauses via `step.waitForEvent()` and retries at the step level [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#use-queues-and-workflows-for-async-and-background-work)

- Use Hyperdrive when connecting to remote PostgreSQL or MySQL databases — Hyperdrive maintains regional connection pools that eliminate per-request TCP handshake and TLS negotiation costs (typically 300–500ms), caches query results, and requires creating a new `Client` on each request since Hyperdrive manages the underlying pool [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#use-hyperdrive-for-external-database-connections)

- For reliable, long-lived WebSocket connections, use Durable Objects with the Hibernation API and call `this.ctx.acceptWebSocket()` instead of `ws.accept()` — hibernation keeps connections open even when the object is evicted from memory, and `setWebSocketAutoResponse()` enables ping/pong heartbeats that do not wake the object [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#use-durable-objects-for-websockets)

- Enable Workers Logs and Traces in your Wrangler configuration with `head_sampling_rate` to control volume — use structured JSON logging with `console.log`, `console.error`, and `console.warn` so logs are searchable and filterable in the Workers Observability dashboard, with error and warning levels appearing at the correct severity [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#enable-workers-logs-and-traces)

- Stream request and response bodies using `response.body` instead of buffering with `.text()` or `.arrayBuffer()` — this reduces peak memory usage (critical with the 128 MB limit) and improves time-to-first-byte; concatenate multiple responses by piping each body sequentially into a `TransformStream` with `preventClose: true` to avoid buffering intermediate responses [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#stream-request-and-response-bodies)

- Use `ctx.waitUntil()` for work after the response is sent — such as analytics, cache writes, or webhook notifications — but never destructure `ctx` (which loses the `this` binding and throws "Illegal invocation"), and respect the 30-second time limit after the response is sent or the client disconnects [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#use-waituntil-for-work-after-the-response)

- Always `await`, `return`, or pass Promises to `ctx.waitUntil()` — floating promises cause silent bugs, dropped results, swallowed errors, and unfinished work since the runtime may terminate your isolate before completion; enable the `@typescript-eslint/no-floating-promises` lint rule to catch these at development time [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#always-await-or-waituntil-your-promises)

- Test with `@cloudflare/vitest-plugin` to run tests inside the Workers runtime with access to real bindings (KV, R2, D1, Durable Objects) — note that the plugin automatically injects `nodejs_compat`, so always confirm your `wrangler.jsonc` includes the flag if your code depends on Node.js built-in modules [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#test-with-cloudflarevitest-plugin)

- For new projects, use Workers Static Assets with the `assets.directory` configuration instead of Cloudflare Pages — it is the recommended deployment method, provides optimised static serving, and integrates seamlessly with a Worker script via the `ASSETS` binding for full-stack applications [source](./.skilld/docs/workers/best-practices/workers-best-practices.md#use-workers-static-assets-for-new-projects)
<!-- /skilld:best-practices -->
