> Model: openai/gpt-5.4
> Token Usage（estimated）: ~4,600 tokens
> Generated: 2026-04-01
> Book: AI Coding Agents: Architecture, Design & The Road Ahead

# 附录B：配置参考

本附录不追求把全部 schema 字段逐字抄录，而是提炼三套系统中最影响运行行为、模型选择、工具暴露、编排方式与安全策略的关键配置项。

## OpenCode

OpenCode 的配置系统很值得单独学习，因为它体现了典型的分层配置思想：远程 well-known 配置、全局配置、自定义配置、项目配置、`.opencode/` 目录配置、内联配置、企业托管配置依次覆盖。这在传统 CS 里可以类比“多层优先级的系统配置合并”。

| Setting | Default | Meaning |
|---|---|---|
| `model` | none | 主模型，格式为 `provider/model`。 |
| `small_model` | none | 更便宜的小模型，用于轻量工作。 |
| `default_agent` | none | 默认 agent/mode。 |
| `username` | 当前系统用户名 | 用于 Prompt/UI 的用户名注入。 |
| `plugin` | `[]` | 插件列表，后加载者覆盖前者。 |
| `instructions` | none | 额外指令文件或 glob。 |
| `permission` | none | 工具权限规则，如 allow/ask/deny。 |
| `provider` | none | Provider 鉴权、端点和模型重写。 |
| `mcp` | none | MCP Server 配置与启停状态。 |
| `formatter` | none | 格式化器命令、环境变量与扩展名映射。 |
| `lsp` | none | LSP server 配置；可关闭或按 server 定义。 |
| `compaction.auto` | `true` | 上下文逼近上限时自动 compact。 |
| `compaction.prune` | `true` | compact 时裁剪旧工具输出。 |
| `compaction.reserved` | none | 为 compact 保留的 token 缓冲区。 |
| `share` | none / 由 `autoshare` 迁移 | Session 分享策略。 |
| `experimental.batch_tool` | 默认关闭 | 是否暴露 batch tool。 |
| `experimental.primary_tools` | none | 仅主 Agent 可见的工具列表。 |
| `experimental.continue_loop_on_deny` | `false` | 工具被拒绝后是否继续循环。 |
| `experimental.mcp_timeout` | none | MCP 请求超时，单位毫秒。 |

## Oh-My-OpenCode

OMO 的配置不是替代 OpenCode，而是叠加在 OpenCode 之上的第二层控制平面。它最重要的价值在于：无需 fork 宿主，也能禁用、替换、增强、分发 Agent/Skill/Hook/Task 行为。

| Setting | Default | Meaning |
|---|---|---|
| `new_task_system_enabled` | `false` | 是否启用新的任务系统。 |
| `default_run_agent` | none | `oh-my-opencode run` 的默认 Agent。 |
| `disabled_mcps` | none | 禁用指定 MCP。 |
| `disabled_agents` | none | 禁用指定内置 Agent。 |
| `disabled_skills` | none | 禁用指定 Skill。 |
| `disabled_hooks` | none | 禁用指定 Hook。 |
| `disabled_commands` | none | 禁用指定命令。 |
| `disabled_tools` | none | 从模型可见列表中隐藏工具。 |
| `agents` | none | Agent 级别重写，如模型、权限、提示词。 |
| `categories` | none | 任务分类、委派分类配置。 |
| `claude_code` | none | Claude Code 兼容层配置。 |
| `experimental.task_system` | `false` | 暴露 `task_create/get/list/update`。 |
| `experimental.hashline_edit` | `false` | 启用 hashline edit 替代普通编辑。 |
| `auto_update` | optional | 插件自更新策略。 |
| `skills` | none | Skill 来源、定义、开关。 |
| `ralph_loop.enabled` | `false` | 开启 Ralph Loop。 |
| `ralph_loop.default_max_iterations` | `100` | 默认循环迭代上限。 |
| `background_task.staleTimeoutMs` | `180000` | 后台任务静默超时。 |
| `background_task.messageStalenessTimeoutMs` | `600000` | 从未上报进展的任务超时。 |
| `notification.force_enable` | `false` | 即便已有外部通知器也强制启用通知 Hook。 |
| `git_master.commit_footer` | `true` | 提交信息尾注开关。 |
| `git_master.include_co_authored_by` | `true` | 是否附带 co-authored-by。 |
| `browser_automation_engine.provider` | `playwright` | 浏览器自动化后端。 |
| `websearch.provider` | 默认 Exa 风格 | 选择 Exa 或 Tavily。 |
| `tmux.enabled` | `false` | 启用 tmux 可视化多 Agent。 |
| `tmux.layout` | `main-vertical` | 主窗格在左，Agent 窗格在右。 |
| `sisyphus.claude_code_compat` | `false` | 启用 Claude Code 兼容行为。 |
| `babysitting.timeout_ms` | `120000` | babysitting 默认超时。 |

## Claude Code

Claude Code 的配置面最宽。它不仅控制模型与工具，还覆盖通知、IDE、任务、MCP、工作树、浏览器、UI、托管策略等。也正因此，它越来越像一个“运行时产品平台”的配置系统，而不仅是一个 CLI 的偏好设置文件。

| Setting | Default | Meaning |
|---|---|---|
| `theme` | `dark` | 界面主题。 |
| `preferredNotifChannel` | `auto` | 通知渠道自动选择。 |
| `verbose` | `false` | 是否输出更详细的运行信息。 |
| `editorMode` | `normal` | 输入/编辑器键位模式。 |
| `autoCompactEnabled` | `true` | 是否自动压缩上下文。 |
| `showTurnDuration` | `true` | 是否显示单轮耗时。 |
| `diffTool` | `auto` | diff 呈现方式。 |
| `todoFeatureEnabled` | `true` | 是否启用 todo/task 体验。 |
| `showExpandedTodos` | `false` | 默认展开 todo。 |
| `messageIdleNotifThresholdMs` | `60000` | 空闲通知阈值。 |
| `autoConnectIde` | `false` | 启动时自动连接 IDE。 |
| `autoInstallIdeExtension` | `true` | 自动安装 IDE 扩展。 |
| `fileCheckpointingEnabled` | `true` | 启用文件 checkpoint。 |
| `terminalProgressBarEnabled` | `true` | 显示终端进度条。 |
| `respectGitignore` | `true` | 在相关操作中尊重 `.gitignore`。 |
| `copyFullResponse` | `false` | 复制完整回答而非简化版本。 |
| `projects[*].allowedTools` | `[]` | 项目级允许工具列表。 |
| `projects[*].mcpServers` | `{}` | 项目级 MCP server 配置。 |
| `projects[*].hasTrustDialogAccepted` | `false` | 项目信任状态。 |
| `projects[*].activeWorktreeSession` | none | 活跃 worktree session 元数据。 |

## 一个设计层面的观察

OpenCode 的配置体现“系统清晰性”；OMO 的配置体现“编排表达力”；Claude Code 的配置体现“产品控制面完整性”。

当一个编码智能体平台不断叠加任务系统、通知系统、MCP 认证、IDE 连接、插件生态与企业托管策略后，配置就不再只是 preference，而是运营控制面。这个变化很重要，因为它意味着 Agent 工程最终会越来越接近操作系统、IDE 和 DevOps 平台的交叉体。
