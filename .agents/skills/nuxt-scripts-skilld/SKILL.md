---
name: nuxt-scripts-skilld
description: "ALWAYS use when writing code importing \"@nuxt/scripts\". Consult for debugging, best practices, or modifying @nuxt/scripts, nuxt/scripts, nuxt scripts, scripts."
metadata:
  version: 1.3.8
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# nuxt/scripts `@nuxt/scripts@1.3.8`
**Tags:** rc: 1.0.0-rc.11, beta: 2.0.0-beta.6, latest: 1.3.9

**References:** [package.json](./.skilld/pkg/package.json) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p @nuxt/scripts` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @nuxt/scripts` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

### Breaking Changes

- BREAKING: Google Maps marker components consolidated — `ScriptGoogleMapsAdvancedMarkerElement` merged into `ScriptGoogleMapsMarker` wrapping `google.maps.marker.AdvancedMarkerElement` instead of `google.maps.Marker`. Old references will fail at runtime. [source](./.skilld/releases/v1.0.0.md:L225)

- BREAKING: `ScriptGoogleMapsPinElement` removed in v1.0.0 — use the `#content` slot on `ScriptGoogleMapsMarker` to customise marker appearance. Code importing the removed component will not compile. [source](./.skilld/releases/v1.0.0.md:L201)

- BREAKING: Google Maps `center` and `zoom` as top-level props on `ScriptGoogleMaps` — deprecated in v1.0.0, silent failure if still used. Pass to `ScriptGoogleMapsMap` instead or use composable control. [source](./.skilld/releases/v1.0.0.md:L226)

- BREAKING: `ScriptGoogleMaps` expose renamed — `googleMaps` renamed to `mapsApi` in v1.0.0. Template refs still return the wrapper, but TypeScript and composition API references will break. [source](./.skilld/releases/v1.0.0.md:L227)

- BREAKING: PayPal SDK upgraded to v6 in v1.0.0 — breaking changes in PayPal API shape and method signatures. Consult PayPal v6 migration docs before upgrading @nuxt/scripts. [source](./.skilld/releases/v1.0.0.md:L230)

- BREAKING: First-party proxy mode configuration changed in v1.0.0 — config structure and endpoint registration overhauled. Old config keys will be ignored silently, proxy mode not auto-enabled. [source](./.skilld/releases/v1.0.0.md:L221)

- BREAKING: Google Maps `OverlayView` class extraction and reactive position rendering in v1.0.0 — component now requires different prop structure and lifecycle. Position updates now fully reactive instead of requiring manual updates. [source](./.skilld/releases/v1.0.0.md:L228)

- BREAKING: Config consolidation for v1 in v1.0.0 — `scripts` config structure significantly reorganised. See v0→v1 migration guide for all breaking config changes. [source](./.skilld/releases/v1.0.0.md:L222)

### New APIs

- NEW: `script.reload()` — added in v1.0.0, re-execute DOM-scanning scripts after SPA navigation. Useful for third-party embeds that scan DOM on load (Twitter widgets, Instagram embeds). [source](./.skilld/releases/v1.0.0.md:L118:L125)

- NEW: `@nuxt/scripts/stats` export — added in v1.0.0, audit script privacy, performance, and security characteristics via `getScriptStats()`. Returns privacy ratings, performance data, CWV estimates, cookie analysis, network behaviour, tracked data types. [source](./.skilld/releases/v1.0.0.md:L143:L151)

- NEW: SSR social embeds — `ScriptXEmbed`, `ScriptInstagramEmbed`, `ScriptBlueskyEmbed` components added in v1.0.0. Fetch embed data server-side, proxy assets through your domain. Scoped slots expose structured data (text, photos, html) for custom rendering. [source](./.skilld/releases/v1.0.0.md:L60:L80)

- NEW: First-party proxy mode — added in v1.0.0, acts as reverse proxy for third-party scripts. Bundled at build-time, runtime requests forwarded securely. Auto-anonymises data: IPs (`180.233.124.74` → `180.233.124.0`), browser versions. Enable per-script or globally. [source](./.skilld/releases/v1.0.0.md:L16:L26)

- NEW: Partytown web worker support — added in v1.0.0, set `partytown: true` per-script to load off main thread. Auto-forwarding configured for 14+ registry scripts (GA, Plausible, Segment, TikTok Pixel, etc.). GA4 has known issues with Partytown. [source](./.skilld/releases/v1.0.0.md:L38:L56)

- NEW: Consent controls — added in v1.0.0, all consent-aware registry scripts expose vendor-native `consent` object. Use `defaultConsent` option to set initial state, then call `consent.update()`, `consent.grant()`, `consent.revoke()`, `consent.hold()` at runtime. [source](./.skilld/releases/v1.0.0.md:L86:L101)

- NEW: `useScriptPostHog()` — registry script added in v1.0.0 for PostHog product analytics with feature flags. Supports first-party proxy mode. [source](./.skilld/releases/v1.0.0.md:L105)

- NEW: `useScriptGoogleRecaptchaV3()` — registry script added in v1.0.0 for Google reCAPTCHA v3 invisible bot protection. [source](./.skilld/releases/v1.0.0.md:L106)

- NEW: `useScriptTikTokPixel()` — registry script added in v1.0.0 for TikTok conversion tracking. Accepts `defaultConsent` option. Production hardening: region support, CAPI dedup, advanced matching. [source](./.skilld/releases/v1.0.0.md:L107)

- NEW: `useScriptGoogleSignIn()` — registry script added in v1.0.0 for Google one-tap authentication. [source](./.skilld/releases/v1.0.0.md:L108)

- NEW: `useScriptRybbit()` — registry script added in v1.0.0 for privacy-focused open-source analytics. [source](./.skilld/releases/v1.0.0.md:L109)

- NEW: `useScriptBingUet()` — registry script added in v1.0.0 for Microsoft Advertising conversion tracking. Accepts `defaultConsent` option. [source](./.skilld/releases/v1.0.0.md:L111)

- NEW: `useScriptMixpanel()` — registry script added in v1.0.0 for product analytics and user tracking. Accepts `defaultConsent` option. [source](./.skilld/releases/v1.0.0.md:L112)

- NEW: `useScriptVercelAnalytics()` — registry script added in v1.0.0 for Vercel Web Analytics integration. [source](./.skilld/releases/v1.0.0.md:L113)

- NEW: `useScriptGravatar()` — registry script added in v1.0.0 for avatar service with privacy-preserving proxy. [source](./.skilld/releases/v1.0.0.md:L114)

- NEW: `useScriptLinkedinInsightTag()` — registry script added in v1.1.0 for LinkedIn conversion tracking. [source](./.skilld/releases/v1.1.0.md:L11)

- NEW: `useScriptAhrefs()` — registry script added in v1.1.0 for Ahrefs Web Analytics. [source](./.skilld/releases/v1.1.0.md:L12)

- NEW: `useScriptUsercentrics()` — registry script added in v1.1.0 for Usercentrics CMP (Consent Management Platform). [source](./.skilld/releases/v1.1.0.md:L13)

- NEW: `useScriptCalendly()` — registry script added in v1.1.0 for calendar/scheduling integration. [source](./.skilld/releases/v1.1.0.md:L14)

- NEW: Google Maps components overhaul in v1.0.0 — 11 new declarative SFC components replace options-bag API. `ScriptGoogleMapsMarker`, `ScriptGoogleMapsShape`, `ScriptGoogleMapsInfoWindow`, `ScriptGoogleMapsOverlayView`, `ScriptGoogleMapsMarkerClusterer`, `ScriptGoogleMapsPolyline`, `ScriptGoogleMapsPolygon`, `ScriptGoogleMapsCircle`, `ScriptGoogleMapsRectangle`, `ScriptGoogleMapsStaticMap`, `ScriptGoogleMapsGeoJson`. All use Vue injection for parent/child communication, auto-cleanup on unmount. [source](./.skilld/releases/v1.0.0.md:L167:L194)

- NEW: YouTube Player isolated instances in v1.0.0 — multiple `ScriptYouTubePlayer` components work correctly. Added `ratio` prop for aspect ratio control. Players destroyed on unmount, preventing memory leaks. [source](./.skilld/releases/v1.0.0.md:L154:L158)

- NEW: Vimeo Player `ratio` prop in v1.0.0 — control aspect ratio on `ScriptVimeoPlayer`, matching YouTube Player API. [source](./.skilld/releases/v1.0.0.md:L161)

Also changed: `Consent.default()` new in v1.1.0 · `NUXT_PUBLIC_SCRIPTS_*` environment variable overrides for scripts.globals in v1.1.0 · `scripts:globals` runtime hook added in v1.2.0 · Unhead v3 support added in v1.2.0 · `useScriptSpeedCurveLux()` registry script added in v1.2.0 · Proxy path aliases added in v1.3.0

### Deprecated APIs

- DEPRECATED: `ScriptGoogleMapsHeatmap` component — deprecated in v1.2.0, will be removed in v2. Use alternative visualisation libraries instead. [source](./.skilld/releases/v1.2.0.md:L17)
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Call `reload()` after SPA navigation instead of manually removing and re-inserting scripts when a vendor's script scans the DOM once and needs to rescan. Alternatively, prefer the vendor's native SPA API when available (e.g. iubenda's `_iub.cs.api.activateSnippets()`). [source](./.skilld/docs/content/docs/3.api/1.use-script.md#L126:L139)

- Defer non-critical scripts with `useScriptTriggerIdleTimeout()` to reduce Cumulative Layout Shift and give critical resources time to load first. Measure Core Web Vitals to confirm the delay helps performance. [source](./.skilld/docs/content/docs/3.api/3.use-script-trigger-idle-timeout.md#L128:L134)

- Use element event triggers like `click` over `mouseover` for facade components to avoid losing subsequent interactions whilst the component loads. [source](./.skilld/docs/content/docs/1.guides/5.facade-components.md#L54)

- Extract the consent trigger into a shared utility function and export it across your app to ensure all scripts use the same consent state. [source](./.skilld/docs/content/docs/1.guides/3.consent.md#L25:L49)

- Call each vendor's `consent.*` API explicitly when one banner controls multiple scripts, as vendors do not share a normalized consent model. [source](./.skilld/docs/content/docs/1.guides/3.consent.md#L131:L160)

- Set `registry: { scriptName: 'mock' }` in development config to register a typed mock context that skips both the vendor script and option validation. [source](./.skilld/docs/content/docs/1.guides/1.registry-scripts.md#L78:L97)

- When loading multiple instances of the same registry script with different config, assign a unique `key` to each call to prevent deduplication. [source](./.skilld/docs/content/docs/1.guides/1.registry-scripts.md#L99:L113)

- Configure scripts once in `nuxt.config` or `app.vue` and reuse the composable instance across pages without repeating options. [source](./.skilld/docs/content/docs/1.guides/1.registry-scripts.md#L156:L189)

- Set `warmupStrategy` to `'preload'` (default for `onNuxtReady` and `client` triggers) to improve performance; fall back to `'preconnect'` or `'dns-prefetch'` for lower-priority scripts, or disable it entirely for bundled scripts. [source](./.skilld/docs/content/docs/3.api/5.nuxt-config.md#L185:L199)

- Always provide an `#error` slot on facade components with a fallback link or button when script loading fails. [source](./.skilld/docs/content/docs/1.guides/5.facade-components.md#L26:L36)

- Enable `assets: { integrity: 'sha384' }` to add Subresource Integrity hashes to bundled scripts, letting browsers verify script authenticity before execution. [source](./.skilld/docs/content/docs/3.api/5.nuxt-config.md#L245:L252)

- Configure environment-backed fields via `.env` and `NUXT_PUBLIC_SCRIPTS_<SCRIPT>_<FIELD>` instead of hardcoding IDs and tokens, allowing the module to auto-populate runtime config. [source](./.skilld/docs/content/docs/1.guides/1.registry-scripts.md#L54:L74)

- When using full privacy anonymization (all six flags), understand that analytics identifiers like `uid`, `cid`, and `email` are deliberately preserved; the proxy reduces network and fingerprinting data, not user identification. [source](./.skilld/docs/content/docs/1.guides/2.first-party.md#L45:L48)

- Use `proxy: { alias: { 'internal.domain': 'a' } }` to hide internal hostnames in proxy paths from network observers and ad blockers. [source](./.skilld/docs/content/docs/1.guides/2.first-party.md#L160:L192)
<!-- /skilld:best-practices -->
