---
name: types-node-skilld
description: 'TypeScript definitions for node. ALWAYS use when writing code importing "@types/node". Consult for debugging, best practices, or modifying @types/node, types/node, types node, DefinitelyTyped.'
metadata:
  version: 26.4.1
  generated_by: cached
  generated_at: 2026-09-13
---

# DefinitelyTyped/DefinitelyTyped `@types/node@26.4.1`

**Tags:** ts2.4: 12.12.6, ts2.6: 12.12.6, ts2.0: 12.12.6

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @types/node` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @types/node` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents version-specific API changes in @types/node v26.4.1 — prioritizing recent major/minor releases (v25→v26 migration and v26 additions).

- NEW: `randomUUIDv7()` in crypto module — generates RFC 4122 UUID v7 with embedded timestamp for database sorting, added v26.1.0 [source](./../node_modules/@types/node/crypto.d.ts:L)

- NEW: FFI module (Foreign Function Interface) — complete module for calling native functions with `dlopen()`, `dlsym()`, `dlclose()` and native memory manipulation (`toBuffer()`, `toString()`, `toArrayBuffer()`), marked experimental, added v26.1.0 [source](./../node_modules/@types/node/ffi.d.ts:L)

- NEW: `http.request.signal` property — allows requests obtained from `http.Server` to be aborted via AbortSignal, added v26.1.0 [source](./../node_modules/@types/node/http.d.ts:L)

- NEW: `diagnostics_channel.boundedChannel()` — creates bounded diagnostic channels with scoped store contexts and `withStoreScope()` method for lifecycle management, experimental, added v26.1.0 [source](./../node_modules/@types/node/diagnostics_channel.d.ts:L)

- NEW: `http.response.writeInformation()` method — sends HTTP/1xx informational responses (excluding 101 Switching Protocols), added v26.2.0 [source](./../node_modules/@types/node/http.d.ts:L)

- NEW: QUIC module enhancements — `OnNewTokenCallback`, `OnOriginCallback`, `OnKeylogCallback`, `OnQlogCallback` types; `enableEarlyData` and `datagramDropPolicy` options; `maxHeaderPairs` in ApplicationOptions, added v26.2.0–v26.3.0 [source](./../node_modules/@types/node/quic.d.ts:L)

- NEW: `http.ServerResponse.httpValidation` option — controls HTTP header validation mode (`'strict'` | `'relaxed'` | `'insecure'`), allows relaxed parsing of non-compliant headers, added v26.3.0 [source](./../node_modules/@types/node/http.d.ts:L)

- NEW: `process.permission.drop()` — revoke POSIX capabilities and deny access to specific resources at runtime, experimental, added v26.3.0 [source](./../node_modules/@types/node/process.d.ts:L)

- NEW: `net.Socket.setKeepAlive(options)` — new overload accepting object with `enable`, `initialDelay`, `interval`, `count` properties instead of positional arguments, added v26.4.0 [source](./../node_modules/@types/node/net.d.ts:L)

- NEW: `net.BoundSocket` class — holds a bound socket before adoption by `net.Server` or `net.Socket`; methods `address()`, `fd()`, `close()` and `[Symbol.dispose]()` for automatic cleanup, added v26.4.0 [source](./../node_modules/@types/node/net.d.ts:L)

- NEW: `dgram.Socket.bindSync()` — synchronously binds UDP socket (no cluster handle sharing), added v26.4.0 [source](./../node_modules/@types/node/dgram.d.ts:L)

- NEW: `dgram.Socket.connectSync()` — synchronously connects UDP socket to a remote address with no DNS resolution, added v26.4.0 [source](./../node_modules/@types/node/dgram.d.ts:L)

**Also changed:** sqlite `defensive` flag and `enableDefensive()` method v25.1 · async_hooks enhancements v25.9 · module compile cache v25.0 · http CONNECT method updates v25.4 · inspector protocol additions v25.5 · perf_hooks additions v25.2 · test framework upgrades v25.5–v25.8
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices for @types/node

## Type Safety and Module Imports

- Always use the `node:` prefix when importing Node.js built-in modules (`import { EventEmitter } from 'node:events'`) — this is the modern convention that improves clarity and ensures compatibility with bundlers and runtimes that support this syntax [source](./.skilld/pkg/index.d.ts:L28)

- Use `import type` syntax for type-only imports to reduce bundle size and avoid circular dependencies — TypeScript will strip these at compilation time without affecting runtime [source](./.skilld/pkg/events.d.ts:L1)

- Use promise-based APIs from `node:timers/promises`, `node:fs/promises`, and `node:readline/promises` for modern async/await patterns rather than callback-based alternatives — promises are more composable and integrate better with async generators [source](./.skilld/pkg/timers/promises.d.ts:L18:32)

## EventEmitter and Event Handling

- Define event maps as interfaces to enable full type inference on event names and listener arguments — this provides compile-time safety for event-driven code [source](./.skilld/pkg/events.d.ts:L5:27)

- Pass `{ captureRejections: true }` to EventEmitter subclasses when handling promise-based operations to automatically catch unhandled promise rejections within event listeners — implement the `[Symbol.for('nodejs.rejection')]` method to handle captured errors [source](./.skilld/pkg/events.d.ts:L31:35)

- Use `Symbol.for('nodejs.rejection')` (available as `EventEmitter.captureRejectionSymbol`) to intercept and handle promise rejections emitted by listeners — this prevents unhandled rejection crashes [source](./.skilld/pkg/events.d.ts:L59:76)

## Async Operations and Cancellation

- Pass an `AbortSignal` to any operation that accepts `{ signal }` (file operations, HTTP requests, child processes) to enable proper cancellation and cleanup — this is the standard Node.js pattern for timeout and cancellation [source](./.skilld/pkg/timers/promises.d.ts:L77)

- Use async iterators from `node:timers/promises` (`setInterval`, `setImmediate`) with `for await...of` loops for event-driven iteration — the `ref` option in `setInterval` controls whether the process should stay alive while waiting [source](./.skilld/pkg/timers/promises.d.ts:L57)

- Understand that ES iterator helpers (`.filter()`, `.map()` on async iterables) are provided by TypeScript's lib options, not by @types/node — add `es2025.iterator` (TS 6.0+) or `esnext.iterator` (TS 5.6–5.9) to your `tsconfig.json` `lib` array if using these methods [source](./.skilld/discussions/discussion-74956.md:L34)

## Stream Handling

- Streams accept both callbacks and event-based patterns; prefer event maps with typed listeners for better IDE support and type safety [source](./.skilld/pkg/stream.d.ts:L1)

- When using `fs.promises.open()` with `FileHandle`, the `.writeFile()` method accepts `Buffer`, `Uint8Array`, `string`, `Iterable<Buffer>`, `AsyncIterable<Buffer>`, and `ReadableStream` — leverage this to pipe streams directly without intermediate buffering [source](./.skilld/discussions/discussion-75147.md:L20:23)

## Type System Patterns

- Use typed generics with `setTimeout` and `setImmediate` from `node:timers/promises` to infer the return type automatically — for example, `await setTimeout(1000, 'result')` returns `Promise<string>` without explicit type annotation [source](./.skilld/pkg/timers/promises.d.ts:L18)

- Leverage `EventEmitter<T extends EventMap<T> = any>` as a generic base class when creating event-emitting classes — define the event map interface to unlock full type inference on emit and listener signatures [source](./.skilld/pkg/events.d.ts:L52:54)

## Buffer and Encoding

- Use overloaded function signatures in crypto and fs modules to handle encoding options — the types will automatically narrow return types to `string` when encoding is specified, or `Buffer` when absent [source](./.skilld/pkg/crypto.d.ts:L641:665)

- Import `BufferView` and `NonSharedBuffer` type helpers from `node:buffer` when writing type-safe buffer operations that accept multiple buffer-like types — these enable type inference without listing all buffer variants [source](./.skilld/pkg/fs/promises.d.ts:L2)

## Module Pattern

- Recognize that @types/node does not provide definitions for ES built-in methods (like `Array.prototype.at()` or `String.prototype.replaceAll()`) — these come from TypeScript's `lib` options in `tsconfig.json`, not from @types/node [source](./.skilld/discussions/discussion-74956.md:L34)

- Use `import type { ... }` for Node.js built-in interfaces that appear only in type annotations (e.g., `import type { EventMap } from 'node:events'`) to keep imports explicit and prevent accidental runtime dependencies [source](./.skilld/pkg/events.d.ts:L5)

<!-- /skilld:best-practices -->
