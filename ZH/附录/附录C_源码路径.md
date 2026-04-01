> Model: openai/gpt-5.4
> Token Usage（estimated）: ~3,900 tokens
> Generated: 2026-04-01
> Book: AI Coding Agents: Architecture, Design & The Road Ahead

# 附录C：源码路径对照表

下面这张表把同一个架构概念映射到三个代码库中的主要实现入口。这里的路径不是“穷举所有依赖”，而是“给读者最快建立源码心智地图的第一跳”。

| Concept | OpenCode | OMO | Claude Code |
|---|---|---|---|
| Entry point | `packages/opencode/src/index.ts` | `src/index.ts` | `src/main.tsx`, `src/entrypoints/cli.tsx` |
| Core loop | `packages/opencode/src/session/processor.ts`, `session/llm.ts` | 宿主循环沿用 OpenCode；插件拦截在 `src/plugin/chat-message.ts`, `src/plugin/messages-transform.ts` | `src/QueryEngine.ts`, `src/query.ts` |
| Tool registry | `packages/opencode/src/tool/registry.ts` | `src/plugin/tool-registry.ts`, `src/create-tools.ts` | `src/tools.ts`, `src/Tool.ts` |
| Tool implementations | `packages/opencode/src/tool/*` | `src/tools/*` | `src/tools/*` |
| Agents | `packages/opencode/src/agent/*` | `src/agents/*`，重点看 `builtin-agents.ts`, `dynamic-agent-prompt-builder.ts` | `src/tools/AgentTool/*`, `src/coordinator/*`, `src/buddy/*` |
| Sessions | `packages/opencode/src/session/*` | `src/features/claude-code-session-state/*`, `src/features/background-agent/*`, `src/features/boulder-state/*` | `src/utils/sessionStorage.ts`, `src/utils/sessionState.ts`, `src/tasks/*` |
| Providers / model layer | `packages/opencode/src/provider/*` | 主要继承 OpenCode；Agent 级模型选择在 `src/agents/*` 与 config schema 中 | `src/utils/model/*`, `src/services/tokenEstimation.ts` |
| MCP | `packages/opencode/src/mcp/*` | `src/mcp/*`, `src/features/skill-mcp-manager/*`, `src/features/claude-code-mcp-loader/*` | `src/services/mcp/*` |
| Permissions | `packages/opencode/src/permission/*` | 继承宿主权限模型，并在 `src/config/schema/internal/permission.ts` 做扩展 | `src/utils/permissions/*`, `yoloClassifier.ts`, `bashClassifier.ts` |
| Plugins / extension surface | `packages/opencode/src/plugin/*` | 插件入口 `src/index.ts`；兼容加载器位于 `src/features/claude-code-plugin-loader/*` | `src/services/plugins/*`, `src/plugins/*` |
| Hooks | OpenCode 的 hook 点由 `packages/opencode/src/plugin/index.ts` 接入 | 具体管线在 `src/plugin/tool-execute-before.ts`, `tool-execute-after.ts`, `messages-transform.ts`, `event.ts` 以及 `src/hooks/*` | UI/runtime hooks 在 `src/hooks/*`；hook schema 在 `src/entrypoints/sdk/coreSchemas.ts` |
| UI / TUI | `packages/opencode/src/cli/*` 与 `cli/cmd/tui/*` | 大部分 UI 借宿主；tmux 多 Agent 可视化位于 `src/features/tmux-subagent/*` | `src/components/*`, `src/ink/*`, `src/screens/*` |
| Config | `packages/opencode/src/config/config.ts`, `paths.ts`, `tui-schema.ts` | `src/plugin-config.ts`, `src/config/schema/*` | `src/utils/config.ts`, `src/utils/settings/*`, `src/services/settingsSync/*` |
| Commands | `packages/opencode/src/command/*` | `src/features/builtin-commands/*`, `src/tools/slashcommand/*` | `src/commands/*`, `src/commands.ts` |
| Skills | `packages/opencode/src/skill/*` | `src/features/builtin-skills/*`, `src/features/opencode-skill-loader/*`, `src/tools/skill/*` | `src/skills/*`, `src/tools/SkillTool/*` |

## 建议阅读顺序

如果你的目标不是立刻提交代码，而是先理解架构，我建议按下面顺序读：

1. **OpenCode**：`session/processor.ts` → `tool/registry.ts` → `config/config.ts`
2. **OMO**：`src/index.ts` → `src/plugin/tool-registry.ts` → `src/agents/builtin-agents.ts` → `src/config/schema/oh-my-opencode-config.ts`
3. **Claude Code**：`src/tools.ts` → `src/QueryEngine.ts` → `src/utils/config.ts` → `src/services/mcp/*`

这个顺序本质上是在沿着控制流往外走：先看执行引擎，再看能力表，再看策略与配置。即便某些术语如“context compaction”“agent orchestration”不直接出现在传统 CS 教科书中，这种分层方式仍然完全符合经典系统设计逻辑：执行层、接口层、控制层。
