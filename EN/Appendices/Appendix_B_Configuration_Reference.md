> Model: openai/gpt-5.4
> Token Usage (estimated): ~4,100 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# Appendix B: Configuration Reference

This appendix summarizes the most decision-relevant configuration surfaces. It is not a line-by-line dump of every schema field; instead, it highlights the settings that materially change model behavior, tool availability, orchestration, security, or developer experience.

## OpenCode

OpenCode merges configuration from remote well-known config, global config, custom config, project config, `.opencode/` directories, inline content, and enterprise-managed overrides. That precedence model is one of its most important architectural traits.

| Setting | Default | Meaning |
|---|---|---|
| `model` | none | Primary model in `provider/model` form. |
| `small_model` | none | Cheaper helper model for lightweight work. |
| `default_agent` | none | Default agent/mode selection. |
| `username` | current OS username | Injected user identity for prompts/UI. |
| `plugin` | `[]` | Plugin specifiers; later entries override earlier duplicates. |
| `instructions` | none | Extra instruction files or glob patterns. |
| `permission` | none | Tool permission rules such as allow/ask/deny. |
| `provider` | none | Provider auth, endpoints, and model overrides. |
| `mcp` | none | MCP server configuration and enable/disable state. |
| `formatter` | none | Formatter command, env, and file-extension mapping. |
| `lsp` | none | LSP server definitions; can be `false` or per-server objects. |
| `compaction.auto` | `true` | Auto-compact when context is near full. |
| `compaction.prune` | `true` | Prune older tool output during compaction. |
| `compaction.reserved` | none | Token reserve buffer before compaction. |
| `share` | none / migrated from `autoshare` | Session sharing policy. |
| `experimental.batch_tool` | `false` unless enabled | Expose the batch tool. |
| `experimental.primary_tools` | none | Restrict some tools to primary agents only. |
| `experimental.continue_loop_on_deny` | `false` | Continue loop after a denied tool call. |
| `experimental.mcp_timeout` | none | MCP request timeout in milliseconds. |

## Oh-My-OpenCode

OMO adds a second configuration layer on top of OpenCode. The key idea is selective augmentation: disable built-ins, override agents, wire skills, and tune background orchestration without forking the host runtime.

| Setting | Default | Meaning |
|---|---|---|
| `new_task_system_enabled` | `false` | Opt into OMO’s newer task system. |
| `default_run_agent` | none | Default agent for `oh-my-opencode run`. |
| `disabled_mcps` | none | Remove selected MCP servers from exposure. |
| `disabled_agents` | none | Disable built-in OMO agents. |
| `disabled_skills` | none | Disable bundled skills. |
| `disabled_hooks` | none | Disable specific hook modules. |
| `disabled_commands` | none | Remove built-in commands. |
| `disabled_tools` | none | Hide tool names from the model. |
| `agents` | none | Per-agent overrides, including model selection and permissions. |
| `categories` | none | Category definitions for delegation and specialization. |
| `claude_code` | none | Compatibility-layer settings for Claude Code artifacts. |
| `experimental.task_system` | `false` | Expose task_create/task_get/task_list/task_update. |
| `experimental.hashline_edit` | `false` | Replace normal edit behavior with hashline edit. |
| `auto_update` | optional | Plugin self-update behavior. |
| `skills` | none | Skill registry, sources, and enablement. |
| `ralph_loop.enabled` | `false` | Enable iterative Ralph Loop execution. |
| `ralph_loop.default_max_iterations` | `100` | Default cap for loop iterations. |
| `background_task.staleTimeoutMs` | `180000` | Interrupt tasks with no activity for 3 minutes. |
| `background_task.messageStalenessTimeoutMs` | `600000` | Timeout if a task never reports progress. |
| `notification.force_enable` | `false` | Force notification hook even if external notifier exists. |
| `git_master.commit_footer` | `true` | Add commit footer metadata. |
| `git_master.include_co_authored_by` | `true` | Include co-author footer lines. |
| `browser_automation_engine.provider` | `playwright` | Choose browser automation backend. |
| `websearch.provider` | exa-like default behavior | Choose Exa or Tavily web search provider. |
| `tmux.enabled` | `false` | Enable tmux visual multi-agent mode. |
| `tmux.layout` | `main-vertical` | Main pane left, agents stacked right. |
| `sisyphus.claude_code_compat` | `false` | Enable Claude Code compatible behavior. |
| `babysitting.timeout_ms` | `120000` | Default babysitting timeout. |

## Claude Code

Claude Code distinguishes between global user settings, project settings, managed settings, and project-local `.mcp.json`. Its configuration system is broader than OpenCode’s because it covers not only model/runtime behavior but also onboarding, notifications, IDE integration, browser features, tasks, and marketplace/plugin flows.

| Setting | Default | Meaning |
|---|---|---|
| `theme` | `dark` | UI theme. |
| `preferredNotifChannel` | `auto` | Choose notification channel automatically. |
| `verbose` | `false` | Enable more verbose output/logging behavior. |
| `editorMode` | `normal` | Input/editor keybinding mode. |
| `autoCompactEnabled` | `true` | Auto-compaction of long contexts. |
| `showTurnDuration` | `true` | Show elapsed time after a turn. |
| `diffTool` | `auto` | Diff rendering strategy. |
| `todoFeatureEnabled` | `true` | Enable todo/task UX. |
| `showExpandedTodos` | `false` | Expand todo lists by default. |
| `messageIdleNotifThresholdMs` | `60000` | Idle threshold before notifying. |
| `autoConnectIde` | `false` | Auto-connect to IDE when possible. |
| `autoInstallIdeExtension` | `true` | Auto-install IDE extensions. |
| `fileCheckpointingEnabled` | `true` | Enable file checkpoints/snapshots. |
| `terminalProgressBarEnabled` | `true` | Show terminal progress UI. |
| `respectGitignore` | `true` | Hide/avoid ignored files in relevant operations. |
| `copyFullResponse` | `false` | Copy full responses instead of shortened variants. |
| `projects[*].allowedTools` | `[]` | Per-project allowlist of tools. |
| `projects[*].mcpServers` | `{}` | Per-project MCP server map. |
| `projects[*].hasTrustDialogAccepted` | `false` | Project trust state. |
| `projects[*].activeWorktreeSession` | none | Active worktree-mode session metadata. |

## Practical reading guide

OpenCode’s config is the cleanest if your goal is architectural clarity. OMO’s config is the most expressive if your goal is orchestration and policy tuning. Claude Code’s config is the most product-complete because it must coordinate CLI UX, UI state, tasks, MCP auth, notifications, IDEs, and managed enterprise policy.

For system designers, the lesson is simple: the more “agent platform” features you add, the more your configuration surface stops being mere preferences and becomes an operational control plane.
