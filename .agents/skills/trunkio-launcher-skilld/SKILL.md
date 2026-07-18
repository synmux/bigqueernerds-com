---
name: trunkio-launcher-skilld
description: 'ALWAYS use when writing code importing "@trunkio/launcher". Consult for debugging, best practices, or modifying @trunkio/launcher, trunkio/launcher, trunkio launcher.'
metadata:
  version: 1.3.4
  generated_by: Anthropic · Haiku 4.5
  generated_at: 2026-07-18
---

# @trunkio/launcher@1.3.4

**Tags:** latest: 1.3.4

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md) • [Docs](./.skilld/docs/_INDEX.md)

## Search

Use `skilld search "query" -p @trunkio/launcher` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @trunkio/launcher` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

@trunkio/launcher v1.3.4 is a CLI launcher/wrapper tool that downloads and executes the Trunk CLI binary. As a launcher package, it does not export programmatic APIs for developers to import or use in code. Instead, it functions as a command-line tool installer.

**Nature of package:** CLI launcher (binary downloader and wrapper)
**Primary exports:** Binary executable (`trunk` command)
**Target users:** CLI consumers via `npm install @trunkio/launcher` and `npx trunk`

### Known Launcher Capabilities (v1.3.4)

- Platform detection and validation (Windows, macOS, Linux)
- Trunk CLI binary download and caching to `~/.cache/trunk`
- Argument pass-through to the Trunk binary
- Environment variable propagation: `TRUNK_LAUNCHER_VERSION`
- Version pinning via `.trunk/trunk.yaml` (configuration-as-code)

### No Documented API Changes Between Versions

The .skilld package directory contains compiled launcher source code but no release notes, changelog, or migration documentation that details version-to-version changes. Without explicit documentation of breaking changes, new features, or deprecated functionality in releases or changelogs, specific API change items cannot be identified.

### Recommendation

To generate meaningful API changes documentation:

1. Consult the official Trunk documentation for launcher-specific release notes
2. Review the Trunk GitHub repository (trunk-io/trunk) for changelog entries related to the launcher
3. Check for `.trunk/trunk.yaml` configuration schema changes that may affect launcher behaviour

The @trunkio/launcher package itself is likely auto-updated alongside the main Trunk CLI — version-specific changes would typically be reflected in the pinned version within project `.trunk/trunk.yaml` files rather than in the launcher package itself.
<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Use multiple merge queues per repository for different target branches — Trunk now supports creating and managing multiple independent queues in one repo, simplifying branching strategies for releases or hotfixes without manual switching [source](./.skilld/docs/changelog/merge-queue-multiple-queues-per-repo-with-grouped-selector.md)

- Programmatically manage merge queues via REST API (`/createQueue`, `/updateQueue`, `/getQueue`, `/deleteQueue`) for infrastructure-as-code workflows — enables spinning up queues for release branches automatically or dynamically adjusting concurrency based on CI capacity [source](./.skilld/docs/changelog/merge-queue-public-api-for-queue-management.md)

- Enable Infrastructure Failure Protection in flaky test settings to filter out mass failures caused by infrastructure outages (database, network, CI runner issues) — prevents false positive flaky test detections when >80% of tests fail simultaneously [source](./.skilld/docs/changelog/flaky-tests-infrastructure-failure-protection.md)

- Route Slack notifications to multiple channels with independent enable/disable per topic — teams can now split notifications across #ci-alerts, #releases, and team-specific channels without reconfiguration [source](./.skilld/docs/changelog/merge-queue-route-slack-notifications-to-multiple-channels.md)

- Use the `noBatch` flag (CLI: `/trunk merge --no-batch` or API: `"noBatch": true`) for high-risk PRs to test in isolation — protects other PRs in queue from delayed restarts when a high-risk change fails [source](./.skilld/docs/changelog/merge-queue-isolate-prs-from-batching-with-nobatch.md)

- Query merge queue PR state programmatically via `POST /v1/listPullRequests` with filtering by state (not ready, pending, testing, merged, failed, cancelled) and time range — gives CI integrations complete queue visibility without scraping the web UI [source](./.skilld/docs/changelog/merge-queue-list-pull-requests-public-api-endpoint.md)

- Expose queue health metrics via Prometheus-compatible endpoint (`GET /v1/getMergeQueueMetrics`) for integration with Prometheus, Grafana, Datadog, or existing monitoring stacks — replaces web-app-only visibility with real-time scraped metrics [source](./.skilld/docs/changelog/merge-queue-prometheus-compatible-metrics-endpoint.md)

- Configure Jira webhook connectors to automatically create issues when tests become flaky and exceed a configurable PR impact threshold — mirrors Linear integration and ensures flaky tests have tracked ownership and resolution plans [source](./.skilld/docs/changelog/flaky-tests-automatically-create-jira-issues-from-webhooks.md)

- Use impacted target filtering in merge queue metrics to isolate test coverage by module or service — helps diagnose which parts of the codebase are causing queue slowdowns [source](./.skilld/docs/changelog/merge-queue-filter-metrics-by-impacted-targets.md)

- Customize merge commit titles via configuration to enforce release branch conventions or semantic versioning patterns — improves release notes and changelog automation [source](./.skilld/docs/changelog/merge-queue-custom-merge-commit-titles.md)

- Leverage AI-powered failure grouping in flaky test dashboard to cluster related failures across environments — identifies systematic test issues rather than one-off timeouts [source](./.skilld/docs/flaky-tests.md#group-related-failures-with-ai)

- Monitor flaky test analytics over time to spot trends and prioritize the worst offenders — dashboard automatically tracks stability per test and surfaces high-impact flakes [source](./.skilld/docs/flaky-tests.md#flaky-test-analytics)

- Use Slack app Home tab for personal queue summaries and notifications in addition to channel-wide alerts — gives individual developers direct access to their PR status without hunting through channels [source](./.skilld/docs/changelog/merge-queue-slack-app-home-tab.md)

<!-- /skilld:best-practices -->
