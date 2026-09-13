---
name: daisyui-skilld
description: "ALWAYS use when writing code importing \"daisyui\". Consult for debugging, best practices, or modifying daisyui."
metadata:
  version: 5.7.28
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-09-13
---

# saadeghi/daisyui `daisyui@5.7.28`
**Tags:** alpha: 5.6.0-alpha.4, beta: 5.6.0-beta.0, latest: 5.7.37

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md) • [Issues](./.skilld/issues/_INDEX.md) • [Discussions](./.skilld/discussions/_INDEX.md) • [Releases](./.skilld/releases/_INDEX.md)

## Search

Use `skilld search "query" -p daisyui` instead of grepping `.skilld/` directories. Run `skilld search --guide -p daisyui` for full syntax, filters, and operators.

<!-- skilld:api-changes -->
## API Changes

This section documents version-specific API changes — prioritise recent major/minor releases.

## Breaking Changes (v5.0.0 and later)

- BREAKING: `avatar online` class — renamed to `avatar avatar-online` in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1386:L1403)

- BREAKING: `avatar offline` class — renamed to `avatar avatar-offline` in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1386:L1403)

- BREAKING: `avatar placeholder` class — renamed to `avatar avatar-placeholder` in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1386:L1403)

- BREAKING: `card-bordered` class — renamed to `card-border` in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1464:L1471)

- BREAKING: `tabs-lifted` class — renamed to `tabs-lift` in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1824:L1829)

- BREAKING: Menu state classes — `disabled`, `active`, `focus` renamed to `menu-disabled`, `menu-active`, `menu-focus` in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1658:L1675)

- BREAKING: Input width and border — input now has default 20rem width and border by default; removed `input-bordered` class, use `input-ghost` to remove border in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1584:L1618)

- BREAKING: Select width and border — select now has default 20rem width and border by default; removed `select-bordered` class, use `select-ghost` to remove border in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1748:L1777)

- BREAKING: File input border — file input now has border by default; removed `file-input-bordered` class, use `file-input-ghost` to remove border in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1555:L1563)

- BREAKING: Textarea border — textarea no longer has `textarea-border` class; has border by default, use `textarea-ghost` to remove in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1850:L1851)

- BREAKING: Footer layout — footer is now vertical by default; use `footer-horizontal` for horizontal layout in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1571:L1576)

- BREAKING: Table hover — removed `hover` class; use `hover:bg-base-300` (or any colour) instead in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1837:L1842)

- BREAKING: Removed `bottom-nav` component — use `dock` component instead; removed `btm-nav-*` classes, use `dock-*` instead in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1423:L1437)

- BREAKING: Removed `artboard` and `phone-*` classes — use Tailwind CSS `w-*` and `h-*` classes instead in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1355:L1382)

- BREAKING: Removed form accessibility classes — `form-control`, `label-text`, `label-text-alt` removed; use `fieldset` and `legend` elements instead in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1885:L1942)

- BREAKING: Removed `btn-group` and `input-group` — use `join` component instead in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1944:L1965)

- BREAKING: Removed `card-compact` class — use `card-sm` instead in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1474:L1475)

## New Components

- NEW: `aura` component — new component added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L308:L309)

- NEW: `otp` component — new component added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L309:L310)

- NEW: `megamenu` component — new component added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L310:L311)

- NEW: `hover-3d` component — create 3D cards with this new component added in v5.5.0 [source](./.skilld/releases/CHANGELOG.md:L526:L527)

- NEW: `text-rotate` component — rotate between multiple words with this new component added in v5.5.0 [source](./.skilld/releases/CHANGELOG.md:L527:L528)

## New Features & Modifiers

- NEW: `range-vertical` modifier — vertical range slider added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L311:L312)

- NEW: `tooltip-start`, `tooltip-center`, `tooltip-end` modifiers — tooltip alignment utilities added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L313:L314)

- NEW: `menu-paged` modifier — new modifier for navigating inside and outside nested menus added in v5.7.0 [source](./.skilld/releases/CHANGELOG.md:L153:L154)

- NEW: `dropdown-close` modifier — force close dropdown modifier added in v5.5.0 [source](./.skilld/releases/CHANGELOG.md:L531:L532)

- NEW: `is-drawer-open` and `is-drawer-close` variants — style elements based on drawer state; added in v5.2.0 [source](./.skilld/releases/CHANGELOG.md:L721:L726)

- NEW: `skeleton-text` variant — animated gradient text skeleton added in v5.5.0 [source](./.skilld/releases/CHANGELOG.md:L528:L529)

- NEW: `btn-active` utility class — exposed as utility class in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L301:L302)

- NEW: HTML popover support for modal — added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L312:L313)

- NEW: Vanilla Calendar Pro integration — new calendar style integration added in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L314:L315)

## Behaviour Changes

- CHANGED: Button click animation — now more subtle and fits better with any size in v5.0 [source](./.skilld/releases/CHANGELOG.md:L1447:L1448)

- CHANGED: Checkbox aria-checked="mixed" support — added style for `aria-checked="mixed"` like `:indeterminate` in v5.7.25 [source](./.skilld/releases/CHANGELOG.md:L24:L24)

- CHANGED: Rating size modifiers — now responsive in v5.6.0 [source](./.skilld/releases/CHANGELOG.md:L315:L316)

- CHANGED: Countdown dynamics — now supports 0 to 999 with dynamic width in v5.2.0 [source](./.skilld/releases/CHANGELOG.md:L722:L723)

**Also changed:** `btn-ghost` hover style v5.0 · `swap-active` rotate/flip support v5.6.0 · Diff keyboard/tap navigation v5.0 · Dropdown popover and anchor positioning v5.0 · Modal `@starting-style` v5.0 · Collapse animation and transitions v5.6.0 · FAB styling and accessibility v5.6.0 · Chat bubble default colour change v5.0 · Label refactoring v5.0 · Loading SVG animation v5.0 · Button size scale and focus states v5.0 · Select `selectedcontent` styling v5.6.0
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->
## Best Practices

- Never dynamically construct daisyUI class names like `bg-{{ color }}-500` — the Tailwind CSS scanner won't find partial class names. Either hardcode the complete class string or safelist all possibilities in your tailwind.config.js using `safelist` or `content` arrays [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/most-common-mistake-when-using-tailwind-css/+page.md#solutions)

- Use semantic colour names (primary, secondary, accent, success, warning, error, info) throughout your design instead of arbitrary Tailwind colour shades — enables theme-switching and consistent visual language without changing individual elements [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/daisyui-colors-and-themes/+page.md#the-colour-system)

- Structure menu components with `<ul>` and `<li>` semantics for screen readers and keyboard navigation — reserve `<ol>` only when visual numbering is required, as daisyUI menu styles apply equally to both [source](/Users/syn/.skilld/repos/saadeghi/daisyui/discussions/discussion-4473.md#accepted-answer)

- Use proper semantic HTML elements (`<a href="...">`, `<button>`, etc.) in navigation components to ensure keyboard navigation works without JavaScript — fake links without href attributes block tab focus [source](/Users/syn/.skilld/repos/saadeghi/daisyui/discussions/discussion-4585.md#top-comments)

- Configure your `.browserslistrc` to target modern browsers — otherwise Tailwind generates unnecessary browser-specific CSS selectors that can interfere with daisyUI floating labels and other features [source](/Users/syn/.skilld/repos/saadeghi/daisyui/discussions/discussion-4462.md#accepted-answer)

- Access all available daisyUI themes programmatically from `daisyui/theme/object` export rather than hardcoding theme names — keeps your theme switcher in sync with daisyUI's theme list [source](/Users/syn/.skilld/repos/saadeghi/daisyui/discussions/discussion-4509.md#top-comments)

- Use `<fieldset>` with nested `<label>` elements for form control grouping instead of form-control — aligns with semantic HTML and provides clearer accessibility structure in v5 [source](/Users/syn/.skilld/repos/saadeghi/daisyui/issues/issue-3573.md#describe-the-issue)

- Leverage the Popover API (`[popover]`, `:popover-open`, `::backdrop`) for modal and overlay patterns as an alternative to `<dialog>` — offers another semantic approach depending on your use case [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/v5.6/+page.md#better-sliders-tooltips-modals-and-cards)

- Apply `aura` component wrapper for animated border glow effects instead of building custom animations — comes with predefined styles (aura-dual, aura-rainbow, aura-holo, etc.) and size variants [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/v5.6/+page.md#aura)

- Use `megamenu` for navigation structures with deeply nested links instead of chained dropdowns — supports width variants, Popover API, and responsive fallback to vertical layout [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/v5.6/+page.md#megamenu)

- Use `otp` component for one-time password inputs with `autocomplete="one-time-code"` and `inputmode="numeric"` for better mobile support — handles visual slot design whilst keeping form semantics simple [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/v5.6/+page.md#otp)

- Apply tooltip alignment modifiers (tooltip-start, tooltip-center, tooltip-end) for precise positioning control — works with all directions (top, bottom, left, right) to prevent overflow and scrollbar artifacts [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/v5.6/+page.md#better-sliders-tooltips-modals-and-cards)

- Use `aria-disabled="true"` for buttons that cannot use the native disabled attribute (e.g., when the element is a div or custom component) — allows state styling without JavaScript [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/v5.6/+page.md#improvements-across-existing-components)

- Use OKLCH color functions when directly accessing daisyUI CSS variables in custom CSS: `color: oklch(var(--p))` instead of `hsl()` — v5 uses OKLCH colour space for improved perceptual accuracy [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/how-to-update-daisyui-4/+page.md#2-daisyui-color-variables)

- Set `dir="rtl"` on the `<html>` element for RTL support without needing daisyUI RTL config or tailwindcss-flip plugin — v5 uses logical CSS properties that automatically adapt to document direction [source](/Users/syn/.skilld/references/daisyui@5.7.28/docs/src/routes/\(routes\)/blog/\(posts\)/how-to-update-daisyui-4/+page.md#5-rtl)
<!-- /skilld:best-practices -->
