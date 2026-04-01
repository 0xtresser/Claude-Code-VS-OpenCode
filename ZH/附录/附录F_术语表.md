> Model: openai/gpt-5.4
> Token Usage（estimated）: ~6,100 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# 附录F：术语表

说明：按要求，本术语表采用“英文术语 + 中文解释”的形式。对于一些在传统计算机教材中尚未标准化的概念，我会补充衍生解释，避免只给出圈内黑话式定义。

| Term | 中文解释 |
|---|---|
| LLM | Large Language Model，大语言模型。它是当前 Agent 系统中的推理核心，负责理解目标、生成计划、选择工具与整合观察结果。 |
| Token | Token 是模型处理文本的基本单位，不等同于“一个单词”。计费、上下文上限、压缩策略几乎都围绕 token 展开。 |
| Context Window | 上下文窗口。指模型在单次推理中能看到的最大 token 数量，可类比一种受限的工作记忆容量。 |
| Function Calling | 函数调用。模型不直接输出自然语言，而是按结构化 schema 输出“要调用哪个工具、带什么参数”。 |
| ReAct | Reason + Act，一种“思考—行动—观察—再思考”的智能体循环范式。 |
| Agent | 智能体。它不是单独一个模型，而是模型、工具、上下文、控制循环、策略约束组合成的运行体。 |
| MCP | Model Context Protocol，模型上下文协议。用于统一描述外部工具、资源、Prompt 与认证交互。 |
| ACP | Agent Client Protocol。OpenCode 体系中的 Agent 客户端协议，用于不同界面/客户端与运行时协作。 |
| A2A | Agent-to-Agent，智能体到智能体的通信或协作协议范畴。它强调的是“智能体之间互相协调”，而不仅是“模型调用工具”。 |
| LSP | Language Server Protocol，语言服务器协议。编辑器中的定义跳转、引用查找、重命名、诊断等能力通常都建立在它之上。 |
| AST | Abstract Syntax Tree，抽象语法树。它把代码解析成语法结构树，因此可以做结构化搜索和修改，而不是粗暴文本替换。 |
| SSE | Server-Sent Events，服务端推送事件。它是一种基于 HTTP 的单向流式传输方式。 |
| Monorepo | 单仓库多包结构。多个包、模块或应用放在同一个版本控制根目录下统一管理。 |
| TUI | Text User Interface，文本用户界面。它比普通 CLI 更丰富，但仍运行在终端中。 |
| Poka-yoke | 日语词，原意是“防呆”“防错”。放在 Agent 工程里，指通过接口设计、参数限制、默认值和流程约束减少智能体犯错。 |
| ACI | Agent-Computer Interface，智能体—计算机接口。可类比 HCI（人机交互），但它优化的对象不是人，而是模型。 |
| JSONL | JSON Lines，一行一个 JSON 对象的数据格式，特别适合日志、事件流和可追加存储。 |
| Zod | 一个 TypeScript 常用的 schema 验证库，常被用于工具参数校验与配置文件 schema 定义。 |
| JSON-RPC | 一种基于 JSON 的远程过程调用协议，常见于 MCP 及相关生态。 |
| Extended Thinking | 扩展思考。通常不是指真正公开模型“内心想法”，而是指运行时给模型更多推理预算或更审慎的执行模式。 |
| Scaffolding | 脚手架。指模型之外包裹的一整套运行时结构，例如 Prompt 组装、工具调用、记忆、重试、压缩、权限与编排。 |
| Context Rot | 上下文腐化。不是经典教科书术语，但它描述了一个真实现象：上下文太长、太旧、太杂后，模型注意力被稀释，表现开始退化。 |
| Compaction | 压缩整理上下文。目的是在保留任务关键信息的同时减少 token 占用。 |
| Hook | 生命周期钩子。系统在某个事件前后留出的拦截点，外部代码可以借此注入逻辑。 |
| Plugin | 插件。无需修改宿主核心源码即可加载的扩展模块。 |
| Skill | 技能包。通常是一组专门任务说明、工作流模板、脚本和工具组合。 |
| YOLO Classifier | Claude Code 语境里的一个非正式名字，表示用分类器判断某个动作能否在更自主模式下自动放行。这里的 YOLO 不是教材术语，而是产品内命名。 |
| bubblewrap / Seatbelt | 两种沙箱机制。bubblewrap 常见于 Linux；Seatbelt 是 macOS 侧的沙箱机制。 |
| Ink | 一个基于 React 的终端 UI 框架，用来构建复杂 TUI。Claude Code 的界面层与它关系很深。 |
| Drizzle ORM | 一个 TypeScript 生态中的 ORM/SQL 工具，强调类型安全和较轻量的数据库访问模式。 |
| Vercel AI SDK | 一个用于模型抽象、流式输出和多 Provider 兼容的 TypeScript SDK。 |
| Hono | 一个轻量级 Web 框架，常用于 Bun、Cloudflare 等运行时。 |
| Solid.js | 一个强调细粒度响应式的前端框架。 |
| Tauri | 一个桌面应用框架，通常以 Rust 做壳层、Web 技术做界面层。 |

## 补充解释：为什么这些术语需要“衍生说明”

### Context Rot
“Context Rot” 还不是像 cache coherence、deadlock 这样被传统教材正式收录的标准术语，但它描述的问题非常典型：上下文越堆越多，噪声越多，旧观察越多，真正有价值的信息比例就越低，模型的有效注意力就会被污染。它有点像“内存被脏数据挤占”或“检索精度下降”的混合问题。

### Scaffolding
很多人把 Agent 的能力归因于底层模型本身，但 2025–2026 年的工程实践不断证明，真正拉开差距的往往是 scaffolding。用系统设计语言说，模型像 CPU，scaffolding 更像操作系统、调度器、驱动、I/O 接口和安全策略的组合。

### Poka-yoke
这是制造业概念，被借到 Agent 领域后非常有用。因为智能体最怕的不是“不会做”，而是“差一点做对，但代价极大”。例如路径校验、参数 schema、危险操作二次确认、只读默认值，本质上都是 Agent 世界里的 poka-yoke。

### ACI
HCI 研究如何让人更好地使用计算机；ACI 研究如何让模型更可靠地使用计算机。好的 ACI 往往具备几个特征：参数明确、输出边界清晰、失败可恢复、结果可组合。很多“给人看很友好”的工具，并不一定适合给模型用。

### Extended Thinking
这个词经常被误解。它通常不意味着系统真的把模型完整内部思维公开给用户看，而更多意味着：允许更长的 deliberation、更高的 reasoning budget、更慢但更稳的推理路径，或额外的链路控制。
