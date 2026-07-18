---
name: nuxt-a11y-skilld
description: 'ALWAYS use when writing code importing "@nuxt/a11y". Consult for debugging, best practices, or modifying @nuxt/a11y, nuxt/a11y, nuxt a11y, a11y.'
metadata:
  version: 1.0.0-alpha.1
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# nuxt/a11y `@nuxt/a11y@1.0.0-alpha.1`

**Tags:** latest: 1.0.0-alpha.1, alpha: 1.0.0-alpha.1

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Issues](./.skilld/issues/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/a11y` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/a11y` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This section documents the public APIs available in @nuxt/a11y v1.0.0-alpha.1. As this is an alpha release, all APIs are experimental and subject to change before the stable v1.0.0 release.

- NEW: `ModuleOptions` interface (experimental) — configures module behaviour via `a11y` config object with properties: `enabled` (boolean), `defaultHighlight` (boolean), `logIssues` (boolean), `axe` ({ options, runOptions }) [source](./.skilld/pkg/dist/module.d.mts:L4:11)

- NEW: `A11yViolation` type (experimental) — represents a single accessibility violation with id, impact, help, helpUrl, description, nodes, tags, timestamp, and optional route [source](./.skilld/pkg/dist/runtime/types.d.ts:L7:17)

- NEW: `A11yViolationNode` type (experimental) — represents a DOM node affected by a violation, containing target selector, html content, and failureSummary [source](./.skilld/pkg/dist/runtime/types.d.ts:L2:6)

- NEW: `createViolationManager()` utility (experimental) — factory function creating a violation manager with methods: processViolations(), getAll(), reset(), resetAll() for tracking violations per browser tab [source](./.skilld/pkg/dist/runtime/utils/violation-manager.d.ts:L7:12)

- NEW: `createHighlighter()` utility (experimental) — factory function for managing element highlighting with methods: highlightElement(), unhighlightElement(), unhighlightAll(), isHighlighted(), updateElementId(), removeElementIdBadge(), scrollToElement() [source](./.skilld/pkg/dist/runtime/utils/highlighter.d.ts:L43:52)

- NEW: `highlightElement()` function (experimental) — highlights elements by CSS selector with optional ID badge, custom color, and scroll-into-view behavior [source](./.skilld/pkg/dist/runtime/utils/highlighter.d.ts:L14)

- NEW: `createHmrBridge()` utility (experimental) — establishes DevTools communication channel via HMR events for scan control, highlighting, and state synchronisation [source](./.skilld/pkg/dist/runtime/utils/hmr-bridge.d.ts:L25:63)

- NEW: `HMR_EVENTS` object (experimental) — event type constants for DevTools communication: CONNECTED, SCAN_RUNNING, SHOW_VIOLATIONS, CONSTANT_SCANNING_ENABLED, TRIGGER_SCAN, RESET, HIGHLIGHT_ELEMENT, UNHIGHLIGHT_ALL, and others [source](./.skilld/pkg/dist/runtime/utils/hmr-bridge.d.ts:L4:21)

- NEW: `createScanner()` utility (experimental) — factory function for managing constant accessibility scanning with enable/disable/isEnabled methods; listens to DOM events [source](./.skilld/pkg/dist/runtime/utils/scanner.d.ts:L4:8)

- NEW: `createActiveTabTracker()` utility (experimental) — tracks which browser tab is active and maintains per-tab violation isolation with initialize, cleanup, getStatus, and getTabId methods [source](./.skilld/pkg/dist/runtime/utils/active-tab-tracker.d.ts:L13:19)

- NEW: `createLogger()` utility (experimental) — factory function for styled console output of accessibility violations [source](./.skilld/pkg/dist/runtime/utils/logger.d.ts:L5:7)

- NEW: `IMPACT_LEVELS` constant (experimental) — array of impact severity values from axe-core: critical, serious, moderate, minor [source](./.skilld/pkg/dist/runtime/constants.d.ts:L3)

- NEW: `IMPACT_COLORS` constant (experimental) — maps each impact level to a hex color for UI display [source](./.skilld/pkg/dist/runtime/constants.d.ts:L4)

- NEW: `SCAN_EVENTS` constant (experimental) — DOM events that trigger automatic scanning: click, input, change, submit, keydown, resize, scroll [source](./.skilld/pkg/dist/runtime/constants.d.ts:L9)

- NEW: Runtime config exports (experimental) — `axe` (Spec + RunOptions), `a11yDefaultHighlight` (boolean), `a11yLogIssues` (boolean) accessible via useRuntimeConfig() [source](./.skilld/pkg/dist/module.d.mts:L15:20)

**Also changed:** `ViolationsByImpact` type · `ImpactColor` type · `ImpactStat` interface · `A11yWindow` interface with testing functions · `DEBOUNCE_DELAY` constant (500ms) · `HMR_EVENT_PREFIX` constant · `unhighlightElement()` function · `unhighlightAll()` function · `isHighlighted()` function · `updateElementId()` function · `removeElementIdBadge()` function · `scrollToElement()` function · `parseSelector()` utility
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Target specific WCAG compliance levels using the `runOnly` option to focus on your jurisdiction's requirements—many projects have contractual obligations (RGAA requires AA, ADA/Section 508 requires AA, EN 301 549 requires AA) rather than scanning all levels [source](./pkg-a11y/README.md#L178-L180)

- List `@nuxt/a11y` after `@nuxt/devtools` in your modules array—the RPC registration fails silently if a11y loads first [source](./.skilld/issues/issue-216.md#L23)

- Disable console logging with `logIssues: false` in production monitoring or CI environments to prevent noise from violation logs [source](./pkg-a11y/README.md#L154-L160)

- Enable `defaultHighlight: true` during accessibility remediation sprints to surface all violations immediately without manual inspection [source](./pkg-a11y/README.md#L140-L147)

- Configure axe-core rules individually to toggle specific checks (e.g., `'color-contrast': { enabled: true }`) based on your project's accessibility priorities and false-positive patterns [source](./pkg-a11y/README.md#L172-L176)

- Pass `Upgrade` and `Connection` headers through reverse proxies (nginx) to avoid infinite WebSocket reconnection loops in reverse-proxied environments [source](./.skilld/issues/issue-243.md#L32-L41)

- Understand that "no violations detected" does not guarantee accessibility—use the empty state as a checkpoint, not a sign-off; continue manual testing and audits [source](./.skilld/issues/issue-173.md#L14)

- Use the DevTools filter dropdown to isolate violations by WCAG conformance level (A, AA, AAA) rather than relying on impact badges alone for compliance decisions [source](./.skilld/issues/issue-218.md#L22-L35)

- Leverage route-aware violation tracking to identify page-specific accessibility issues as you navigate—violations are automatically grouped by route [source](./pkg-a11y/README.md#L30)

- Click individual element badges in the DevTools to toggle highlighting for specific nodes—useful for collaborative code review and pinpointing fixes without selecting all affected elements [source](./pkg-a11y/README.md#L84-L85)

- Copy CSS selectors directly from violation details and use the scroll-to-element button for fast navigation between your code editor and the browser [source](./pkg-a11y/README.md#L58-L69)

- Use auto-scan mode for interactive testing—debounced scanning monitors mouse, keyboard, and touch events without degrading performance [source](./pkg-a11y/README.md#L91-L95)

- Ensure axe-core compatibility by testing with WCAG 2.0, 2.1, and 2.2 standards; the module supports all three, and your configuration choice determines which rules run [source](./pkg-a11y/README.md#L75-L79)

<!-- /skilld:best-practices -->
