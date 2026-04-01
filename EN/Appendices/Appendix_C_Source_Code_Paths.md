> Model: openai/gpt-5.4
> Token Usage (estimated): ~3,600 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# Appendix C: Source Code Path Mapping

The table below maps the same architectural concept to its primary implementation locations in each codebase. Paths are intentionally selective: they point readers to the best starting file, not every related dependency.

| Concept | OpenCode | OMO | Claude Code |
|---|---|---|---|
| Entry point | `packages/opencode/src/index.ts` | `src/index.ts` | `src/main.tsx`, `src/entrypoints/cli.tsx` |
| Core loop | `packages/opencode/src/session/processor.ts`, `session/llm.ts` | Inherits OpenCode host loop; plugin interception in `src/plugin/chat-message.ts`, `src/plugin/messages-transform.ts` | `src/QueryEngine.ts`, `src/query.ts` |
| Tool registry | `packages/opencode/src/tool/registry.ts` | `src/plugin/tool-registry.ts`, `src/create-tools.ts` | `src/tools.ts`, `src/Tool.ts` |
| Tool implementations | `packages/opencode/src/tool/*` | `src/tools/*` | `src/tools/*` |
| Agents | `packages/opencode/src/agent/*` | `src/agents/*`, especially `builtin-agents.ts`, `dynamic-agent-prompt-builder.ts` | `src/tools/AgentTool/*`, `src/coordinator/*`, `src/buddy/*` |
| Sessions | `packages/opencode/src/session/*` | `src/features/claude-code-session-state/*`, `src/features/background-agent/*`, `src/features/boulder-state/*` | `src/utils/sessionStorage.ts`, `src/utils/sessionState.ts`, `src/tasks/*` |
| Providers / model layer | `packages/opencode/src/provider/*` | Mostly inherited from OpenCode; agent-level selection in `src/agents/*` and config schemas | `src/utils/model/*`, `src/services/tokenEstimation.ts` |
| MCP | `packages/opencode/src/mcp/*` | `src/mcp/*`, `src/features/skill-mcp-manager/*`, Claude-compatible loaders in `src/features/claude-code-mcp-loader/*` | `src/services/mcp/*` |
| Permissions | `packages/opencode/src/permission/*` | Inherits host permissions plus OMO policy/config gates in `src/config/schema/internal/permission.ts` | `src/utils/permissions/*`, classifier logic in `yoloClassifier.ts`, `bashClassifier.ts` |
| Plugins / extension surface | `packages/opencode/src/plugin/*` | Plugin package root `src/index.ts`; compatibility loaders in `src/features/claude-code-plugin-loader/*` | `src/services/plugins/*`, bundled plugins in `src/plugins/*` |
| Hooks | OpenCode plugin hook points wired through `packages/opencode/src/plugin/index.ts` | Concrete hook pipelines in `src/plugin/tool-execute-before.ts`, `tool-execute-after.ts`, `messages-transform.ts`, `event.ts` and `src/hooks/*` | Runtime/UI hooks in `src/hooks/*`; settings hook schemas in `src/entrypoints/sdk/coreSchemas.ts` |
| UI / TUI | `packages/opencode/src/cli/*` and TUI under `cli/cmd/tui/*` | Mostly host UI; tmux visualization in `src/features/tmux-subagent/*` | `src/components/*`, `src/ink/*`, `src/screens/*` |
| Config | `packages/opencode/src/config/config.ts`, `paths.ts`, `tui-schema.ts` | `src/plugin-config.ts`, `src/config/schema/*` | `src/utils/config.ts`, `src/utils/settings/*`, `src/services/settingsSync/*` |
| Commands | `packages/opencode/src/command/*` | `src/features/builtin-commands/*`, `src/tools/slashcommand/*` | `src/commands/*`, `src/commands.ts` |
| Skills | `packages/opencode/src/skill/*` | `src/features/builtin-skills/*`, `src/features/opencode-skill-loader/*`, `src/tools/skill/*` | `src/skills/*`, `src/tools/SkillTool/*` |

## Reading strategy

If you are studying architecture rather than contributing code immediately, start with the following sequence:

1. OpenCode: `session/processor.ts` → `tool/registry.ts` → `config/config.ts`.
2. OMO: `src/index.ts` → `src/plugin/tool-registry.ts` → `src/agents/builtin-agents.ts` → `src/config/schema/oh-my-opencode-config.ts`.
3. Claude Code: `src/tools.ts` → `src/QueryEngine.ts` → `src/utils/config.ts` → `src/services/mcp/*`.

This order works because it follows the control plane outward: first the loop, then the capabilities, then the policy/config layer. In CS textbooks this is close to moving from “execution engine” to “I/O interfaces” to “system administration surface.” The names are newer, but the layering logic is classical.
