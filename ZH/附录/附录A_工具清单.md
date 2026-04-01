> Model: openai/gpt-5.4
> Token Usage（estimated）: ~8,100 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# 附录A：OpenCode、OMO 与 Claude Code 工具清单

本附录将三套系统的主要工具面统一放进一张对照表中。OpenCode 提供开源基线；Oh-My-OpenCode（OMO）继承这套基线并重点增强多智能体编排、后台任务、Session 检索、Skill-MCP 与 AST 级代码操作；Claude Code 则在商业产品层面扩展出更完整的任务、团队、工作流、浏览器、MCP 认证与 UI 联动能力。

表中的 “Yes” 表示一等公民能力；“Conditional” 表示依赖功能开关、运行模式或环境；“Inherited” 表示 OMO 通过 OpenCode 继承该能力后再增强。

| Tool Name | OpenCode | OMO | Claude Code | Description |
|---|---|---|---|---|
| bash | Yes | Inherited | Yes | 在工作区内执行 shell 命令。 |
| powershell | No | No | Conditional | Windows 原生命令执行。 |
| read / file read | Yes | Inherited | Yes | 安全读取文件或目录。 |
| write / file write | Yes | Inherited | Yes | 直接创建或覆盖文件。 |
| edit / file edit | Yes | Inherited 或被覆盖 | Yes | 对已有文件做结构化修改。 |
| multiedit | Yes | Inherited | 无单独公开工具 | 一次提交多个同文件编辑。 |
| apply_patch | Yes | Inherited | 无单独公开工具 | 统一 diff/patch 风格修改。 |
| notebook edit | No | No | Yes | 面向 Notebook 的单元级编辑。 |
| ls / list directory | Yes | Inherited | 被 read/glob 吸收 | 轻量目录列举。 |
| external-directory | Yes | Inherited | 无直接对应 | 扩展默认项目根之外的访问范围。 |
| glob | Yes | Enhanced | Yes | 基于路径模式查找文件。 |
| grep | Yes | Enhanced | Yes | 基于正则或文本查找内容。 |
| codesearch | Yes | Inherited | ToolSearch 部分类似 | 偏代码语义的搜索。 |
| ast-grep search | No | Yes | 无一等公民工具 | 基于 AST 的结构化代码搜索。 |
| ast-grep replace | No | Yes | 无一等公民工具 | 基于 AST 的结构化代码替换。 |
| lsp | Conditional | 被拆成多个工具 | Conditional | 语言服务器查询与重构。 |
| lsp_goto_definition | No | Yes | 被 LSPTool 吸收 | 跳转符号定义。 |
| lsp_find_references | No | Yes | 被 LSPTool 吸收 | 查找符号全部引用。 |
| lsp_symbols | No | Yes | 被 LSPTool 吸收 | 文档或工作区符号查询。 |
| lsp_diagnostics | No | Yes | 被 LSPTool 吸收 | 收集错误、警告、提示。 |
| lsp_prepare_rename | No | Yes | 被 LSPTool 吸收 | 检查 rename 是否可执行。 |
| lsp_rename | No | Yes | 被 LSPTool 吸收 | 跨工作区重命名符号。 |
| webfetch | Yes | Inherited | Yes | 抓取网页并提炼内容。 |
| websearch | Yes | Inherited + provider 可配 | Yes | 执行网页搜索并返回结果。 |
| web browser | No | No | Conditional | 交互式浏览器导航与提取。 |
| look_at | No | Yes | 部分由 file/browser 工具替代 | 快速查看图片、PDF、媒体文件。 |
| question / ask user | Conditional | Inherited | Yes | 向用户发起补充提问或确认。 |
| skill | Yes | Upgraded | Yes | 加载 Skill 或命令包。 |
| skill_mcp | No | Yes | 无直接对应 | 调用 Skill 内嵌的 MCP 资源/工具。 |
| slashcommand | No | Yes | 原生命令系统但表面不同 | 以工具形态执行 slash command。 |
| task | Yes | 被 delegate-task 语义替代 | 无完全等价物 | 生成一个子任务/子 Agent。 |
| call_omo_agent | No | Yes | AgentTool 类似 | 调用 OMO 专业化子智能体。 |
| background_output | No | Yes | 与 TaskOutputTool 类似 | 读取后台任务输出。 |
| background_cancel | No | Yes | 与 TaskStopTool 类似 | 取消一个或多个后台任务。 |
| task_create | No | OMO 条件开启 | Yes | 创建结构化后台任务。 |
| task_get | No | OMO 条件开启 | Yes | 获取单个任务状态与元数据。 |
| task_list | No | OMO 条件开启 | Yes | 列出任务。 |
| task_update | No | OMO 条件开启 | Yes | 更新任务信息。 |
| task_output | No | 由 background_output 对应 | Yes | 获取任务输出或记录。 |
| task_stop | No | 由 background_cancel 对应 | Yes | 停止运行中的任务。 |
| todo write | Yes | Inherited | Yes | 维护结构化 todo 列表。 |
| todo read | 内部/有限 | Inherited | 更偏 UI/Task List | 读取已保存的 todo 状态。 |
| plan enter | Conditional | Inherited | Yes | 进入计划模式。 |
| plan exit | Conditional | Inherited | Yes | 退出计划模式并恢复执行。 |
| verify plan execution | No | No | Conditional | 校验执行是否符合计划。 |
| agent tool | 无独立公开工具 | call_omo_agent | Yes | 启动另一个 agent/teammate。 |
| team create | No | No | Conditional | 创建多智能体团队/Swarm。 |
| team delete | No | No | Conditional | 删除团队/Swarm。 |
| send message | No | No | Conditional | 向其他 peer/agent 发送消息。 |
| list peers | No | No | Conditional | 列出可通信 peer。 |
| workflow | No | No | Conditional | 触发复用型 workflow 脚本。 |
| config tool | No | No | Conditional | 在运行中读取/修改配置。 |
| MCP tool invocation | 通过 MCP 注册 | 通过 MCP + Skill MCP | Yes | 调用 MCP server 暴露的工具。 |
| list MCP resources | No | No | Yes | 列出 MCP 资源。 |
| read MCP resource | No | No | Yes | 读取指定 MCP 资源 URI。 |
| MCP auth | No | No | Yes | 处理 MCP 认证与连接批准。 |
| REPL | No | No | Conditional | 进程内交互式编程壳。 |
| interactive_bash / terminal capture | No | Yes | Conditional | 持久终端、tmux 或终端快照。 |
| snip / brief | No | No | Yes | 裁剪上下文、压缩历史。 |
| sleep / cron / monitor | No | No | Conditional | 时间驱动自动化与监控。 |
| push notification | No | No | Conditional | 主动通知用户。 |
| subscribe PR | No | No | Conditional | 订阅 PR 更新。 |
| tungsten / review artifact | No | No | Conditional | 专用内部工具或工件审查流。 |

## 分类说明

### 1. 文件操作层
OpenCode 的文件操作层最干净：`read`、`write`、`edit`、`multiedit`、`apply_patch`。它几乎就是一个最小可用的 Agent-Computer Interface。OMO 继承这套能力，但在实验模式下可以用 hashline editor 替换默认 `edit`。Claude Code 的文件工具则更产品化，不仅有读写编辑，还集成了 notebook 编辑、差异展示、拒绝消息反馈等 UI 配套。

### 2. 搜索层
三者都承认搜索是编码智能体的核心能力。OpenCode 提供 `glob`、`grep`、`codesearch`、`webfetch`、`websearch`。OMO 在此基础上增加 AST 搜索/替换、Session 检索和拆分式 LSP 工具。Claude Code 则提供 `GlobTool`、`GrepTool`、`WebFetchTool`、`WebSearchTool`、MCP 资源浏览，以及部分版本中的浏览器工具。趋势很明确：仅靠 grep 已经不够，智能体需要文件级、语法级、网络级三层检索。

### 3. 编排层
OpenCode 的 `task` 和 `skill` 说明了开源基线的组合能力。OMO 把“组合”升级成“编排”：`call_omo_agent`、后台任务、slashcommand、skill_mcp、tmux 可视化、多 Session 管理。Claude Code 则把同类需求产品化为 Task 系列工具、Team 工具、Workflow 工具和 agent 间消息能力。换句话说，OMO 加的是多智能体深度，Claude Code 加的是平台级广度。

### 4. 交互与长任务
OpenCode 整体仍偏 request/response。OMO 明确拥抱长时任务与可视化运行：`interactive_bash`、`background_output`、`background_cancel`、session manager 都是为了让 Agent 处理持续性工作。Claude Code 通过 Task、REPL、TerminalCapture、Cron、通知系统达到类似效果。这说明“真正的软件工程”往往不是一次性回答，而是可监控、可恢复、可中断的过程。

### 5. LSP 与结构化代码理解
OpenCode 提供实验性的单体 LSP 工具。OMO 将其拆成更原子化的 `goto_definition`、`find_references`、`rename`、`diagnostics` 等工具，更适合让模型按需组合。Claude Code 也有强 LSP 支持，但通过统一的 `LSPTool` 和大型 service 层来承载。这里体现的是一个经典工程权衡：面向产品时大工具更利于体验，面向 Agent 稳定性时小工具往往更利于组合和纠错。

### 6. 特征性工具
OMO 的标志性工具是那些把“编排本身”暴露为一等能力的工具：多 Agent 调用、后台输出读取、Skill-MCP 路由、tmux 控制、Session 检索、AST 搜索。Claude Code 的标志性工具则是商业运行时的外显：Teams、Workflow、Browser、MCP Auth、Push、订阅、复杂任务管理。OpenCode 则仍然是最适合作为“本体”来理解什么是编码智能体最小核心的系统。
