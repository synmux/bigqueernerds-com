---
name: anthropic-ai-claude-code-skilld
description: 'Use Claude, Anthropic''s AI assistant, right from your terminal. Claude can understand your codebase, edit files, run terminal commands, and handle entire workflows for you. ALWAYS use when writing code importing "@anthropic-ai/claude-code". Consult for debugging, best practices, or modifying @anthropic-ai/claude-code, anthropic-ai/claude-code, anthropic-ai claude-code, anthropic ai claude code, claude-code-2.1.88, claude code 2.1.88.'
metadata:
  version: 2.1.215
  generated_by: cached
  generated_at: 2026-07-19
---

# Exhen/claude-code-2.1.88 `@anthropic-ai/claude-code@2.1.215`

**Tags:** stable: 2.1.205, latest: 2.1.215, next: 2.1.215

**References:** [package.json](./.skilld/pkg/package.json) • [README](./.skilld/pkg/README.md)

## Search

Use `skilld search "query" -p @anthropic-ai/claude-code` instead of grepping `.skilld/` directories. Run `skilld search --guide -p @anthropic-ai/claude-code` for full syntax, filters, and operators.

<!-- skilld:api-changes -->

## API Changes

This patch release (v2.1.215) does not introduce API-level changes. The @anthropic-ai/claude-code package maintains stable APIs from the v2.1 series.

For API changes from v2.0 → v2.1, see the prior version documentation. Recent stable APIs include:

- `AgentInput.isolation` — "worktree" (temporary git worktree for isolated repo copy) or "remote" (cloud environment execution)
- `AgentInput.model` — supports "sonnet", "opus", "haiku", "fable" variants
- `TaskStopInput.task_id` — stop background tasks (replaces deprecated `shell_id`)
- `TaskCreateInput` — create and track named tasks
- `WorkflowInput` — orchestrate multi-step workflows
- `CronCreateInput` — schedule recurring cloud agents
- `MonitorInput` — stream events from background processes
- `EnterWorktreeInput` / `ExitWorktreeInput` — manage isolated git worktrees

Deprecated (still functional, but superseded):

- `AgentInput.team_name` — session has single implicit team
- `AgentInput.mode` — subagents inherit parent session's permission mode
- `ExitPlanModeInput.allowedPrompts` — no longer used
- `TaskStopInput.shell_id` — use `task_id` instead

<!-- /skilld:api-changes -->

<!-- skilld:best-practices -->

## Best Practices

- Limit `AskUserQuestion` to 1–4 questions maximum per call to avoid overwhelming users with too many options at once [source](./.skilld/pkg/sdk-tools.d.ts:L847:L878)

- Order findings by severity (most-severe first) when using `ReportFindings`, and cap at 32 findings per report — larger reports are truncated and lose context [source](./.skilld/pkg/sdk-tools.d.ts:L768:L812)

- Use `ProposeSkills` with 1–3 proposals only; exceeding this limit wastes effort on low-confidence recommendations [source](./.skilld/pkg/sdk-tools.d.ts:L2677:L2812)

- Keep `PushNotification` messages under 200 characters — mobile operating systems truncate beyond this length [source](./.skilld/pkg/sdk-tools.d.ts:L2870:L2876)

- Set `Grep` `head_limit` explicitly to avoid the default 250-line cap causing silent truncation; pass 0 only when you need unlimited results and are certain context can absorb them [source](./.skilld/pkg/sdk-tools.d.ts:L689:L695)

- Clamp `ScheduleWakeup` delays to [60, 3600] seconds — the runtime enforces this range, so delays outside it will be adjusted [source](./.skilld/pkg/sdk-tools.d.ts:L2620:L2637)

- Use `Monitor` with `persistent: true` for session-length watches (PR monitoring, log tails); set `timeout_ms` explicitly for bounded windows, capped at 3.6 million ms (1 hour) [source](./.skilld/pkg/sdk-tools.d.ts:L2652:L2676)

- Omit the `path` parameter entirely in `Glob` to use the current working directory; never pass `undefined` or `null` explicitly [source](./.skilld/pkg/sdk-tools.d.ts:L629:L638)

- Use `FileRead` with explicit `limit` for large files — reads exceeding the token cap are auto-paginated and marked with `truncatedByTokenCap: true` [source](./.skilld/pkg/sdk-tools.d.ts:L601:L618)

- Confirm `ExitWorktree` with `discard_changes: true` only when you have verified there are no uncommitted files or unmerged commits; the tool lists them and refuses without this flag [source](./.skilld/pkg/sdk-tools.d.ts:L2887:L2896)

- Name new worktrees carefully — each "/" segment is capped at 64 characters and limited to alphanumerics, dots, dashes, and underscores; a random name is generated if omitted [source](./.skilld/pkg/sdk-tools.d.ts:L2877:L2886)

- Provide `Artifact` with a short, stable `favicon` (1–2 emoji) that remains constant across redeploys; use a distinctive `file_path` basename as a fallback title when HTML lacks `<title>` [source](./.skilld/pkg/sdk-tools.d.ts:L2828:L2869)

- Pass `Workflow` `args` as actual JSON values, not JSON-encoded strings — stringified lists break `args.filter()`/`args.map()` in the script body [source](./.skilld/pkg/sdk-tools.d.ts:L2563:L2594)

<!-- /skilld:best-practices -->
