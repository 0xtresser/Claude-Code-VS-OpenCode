> Model: openai/gpt-5.4
> Token Usage（estimated）: ~3,300 tokens
> Generated: 2026-04-01
> Book: AI Coding Agents: Architecture, Design & The Road Ahead

# 附录D：MCP 生态概览

Model Context Protocol（MCP）已经成为当代 Agent 系统最重要的可扩展性底座之一。它统一了模型如何发现外部工具、资源、Prompt 与认证流程，从而把“接一个新系统”的成本从大量胶水代码降低为协议接入。

## 传输类型

| Transport | 工作方式 | 优点 | 常见场景 |
|---|---|---|---|
| `stdio` | Agent 启动本地进程，通过 stdin/stdout 通信 | 简单、本地、安全边界清晰 | 本地数据库、文件系统、开发辅助工具 |
| `SSE` | 通过 HTTP 的 Server-Sent Events 做长连接流式输出 | 易于流式事件传输 | 托管型 MCP 服务、状态推送 |
| `HTTP` | 常规请求/响应式 HTTP 通信 | 运维熟悉、易过代理 | SaaS 化 MCP 接口、网关服务 |
| `WebSocket` | 双向持久连接 | 低延迟、双向实时交互 | 浏览器控制、协同会话、远程代理 |

这里要特别说明一个容易混淆的点：MCP 是“协议层”，而 stdio/SSE/HTTP/WebSocket 是“承载层”。在经典网络课程里，这可以理解为“应用协议”和“传输通道”的区分。

## 常见社区 Server

| Server 家族 | 暴露能力 | 为什么重要 |
|---|---|---|
| Postgres / SQL | 查询、Schema 检查、迁移、行级读取 | 让 Agent 直接连接真实业务数据而不是只猜。 |
| GitHub | PR、Issue、Checks、评论、仓库元数据 | 对编码智能体来说几乎是最关键的外部协作接口之一。 |
| Slack | 频道、消息、通知、检索 | 把工程动作与团队沟通闭环连接起来。 |
| Browser / Playwright | 导航、DOM 检查、截图、表单交互 | 让 Agent 具备 UI 测试与网页操作能力。 |
| Filesystem / Shell wrappers | 受控文件访问和命令执行 | 仍然是很多私有自动化接入的第一入口。 |
| Cloud APIs | 存储、部署、观测、工单 | 使 Agent 从“写代码助手”走向“工程流程参与者”。 |

## 官方 Registry

MCP 生态正在围绕官方 Registry 逐步形成统一分发与发现机制：

- Registry UI：`https://registry.modelcontextprotocol.io/`
- Registry 文档：`https://modelcontextprotocol.io/registry`
- Registry API 文档：`https://registry.modelcontextprotocol.io/docs`

Registry 在 MCP 世界里的角色，很像软件包生态中的 package index。它的价值并不只是“能下载”，更重要的是提供 discoverability、版本身份、元数据以及未来的信任信号。

## 与三套系统的关系

- **OpenCode**：把 MCP 作为一等扩展层纳入 config 与 runtime。
- **OMO**：进一步把 MCP 与 Skill 系统、Agent 编排、Claude Code 兼容层耦合起来。
- **Claude Code**：在 MCP 认证、连接审批、scope 管理、registry 集成和项目/用户隔离上投入最深。

## 一个更宏观的判断

如果把 Agent 系统比作操作系统，那么 MCP 正在逐步扮演“设备驱动层”的角色。这个比喻并不完全严格，但很有解释力：模型不需要原生理解每个外部系统，只要运行时能把这些外部能力通过统一协议暴露出来，Agent 就能在一个更稳定、更可移植的接口上工作。这也正是 MCP 在 2025–2026 年迅速扩散的根本原因。
