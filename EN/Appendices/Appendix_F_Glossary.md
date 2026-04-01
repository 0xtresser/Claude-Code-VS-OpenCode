> Model: openai/gpt-5.4
> Token Usage (estimated): ~5,300 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# Appendix F: Glossary

| Term | Definition |
|---|---|
| LLM | Large Language Model. A neural model trained on large text corpora and used here as the reasoning core of an agent. |
| Token | A model’s basic unit of text processing. Tokens are not exactly words; they are subword chunks used for billing, limits, and context accounting. |
| Context Window | The maximum amount of tokenized input a model can consider in one inference pass. It is analogous to a bounded working memory. |
| Function Calling | A structured mechanism that lets a model emit a machine-readable tool invocation instead of plain text. |
| ReAct | “Reason + Act.” A prompting and control-loop pattern where the model alternates between thinking, tool use, and observation. |
| Agent | A runtime that combines an LLM, tools, memory/context, and loop control so it can pursue a goal rather than emit one isolated answer. |
| MCP | Model Context Protocol. A protocol for exposing tools, prompts, resources, and auth to models through a common interface. |
| ACP | Agent Client Protocol. OpenCode’s protocol for client/runtime interaction across interfaces. |
| A2A | Agent-to-Agent communication. A broader category for protocols where agents coordinate with other agents rather than only with tools. |
| LSP | Language Server Protocol. A standardized protocol for editor-language tooling such as diagnostics, references, rename, and definitions. |
| AST | Abstract Syntax Tree. A tree representation of parsed code structure used for syntax-aware analysis and rewriting. |
| SSE | Server-Sent Events. A unidirectional streaming transport over HTTP, often used for incremental updates. |
| Monorepo | A repository containing multiple packages or applications under one versioned root. |
| TUI | Text User Interface. A terminal-native interface richer than plain command-line output. |
| Poka-yoke | A Japanese manufacturing term meaning “mistake-proofing.” In agents, it refers to interface or workflow design that prevents easy failures. |
| ACI | Agent-Computer Interface. By analogy to HCI, it means designing tools and outputs for machine users rather than human users. |
| JSONL | JSON Lines. A format where each line is a separate JSON object, useful for logs and append-only event streams. |
| Zod | A TypeScript-first schema validation library widely used to define tool arguments and config schemas. |
| JSON-RPC | A remote procedure call protocol using JSON messages, common in MCP and related tooling ecosystems. |
| Extended Thinking | A mode where the model is allowed more internal reasoning budget before responding or calling tools. |
| Scaffolding | The non-model runtime structure around an LLM: prompt assembly, tools, memory, retries, policies, compaction, and orchestration. |
| Context Rot | Informal term for quality degradation when an agent accumulates too much stale, noisy, or weakly relevant context. Classical CS textbooks do not name this phenomenon, so the term needs explicit explanation. |
| Compaction | The process of shrinking conversation/context state while trying to preserve task-relevant information. |
| Hook | A lifecycle interception point where custom code can run before or after a system event. |
| Plugin | An externally loaded extension package that adds capabilities without modifying host source code directly. |
| Skill | A packaged unit of instructions, workflows, and sometimes tooling for a specialized task domain. |
| YOLO Classifier | In Claude Code terminology, a classifier that predicts whether a tool action can be auto-approved under a more autonomous mode. The name is informal and not a standard CS term. |
| bubblewrap / Seatbelt | Sandbox technologies. Bubblewrap is common on Linux; Seatbelt is Apple’s sandbox mechanism on macOS. |
| Ink | A React-based framework for building TUIs in the terminal. Claude Code uses a custom Ink-heavy UI architecture. |
| Drizzle ORM | A TypeScript ORM and SQL toolkit often used for typed persistence layers. |
| Vercel AI SDK | A TypeScript SDK for model/provider abstraction and streaming AI application development. |
| Hono | A lightweight web framework for JavaScript/TypeScript runtimes such as Bun and Cloudflare. |
| Solid.js | A reactive JavaScript UI framework emphasizing fine-grained reactivity. |
| Tauri | A desktop-app framework that pairs a Rust shell with web frontend technologies. |

## Supplemental explanations for non-classical terms

### Context Rot
“Context rot” is not a textbook term like cache invalidation or deadlock, but it names a real systems problem: as context grows, retrieval precision falls, irrelevant observations stay resident, and the model’s effective attention budget is diluted. In practice, it behaves like a memory pollution problem.

### Scaffolding
Recent agent engineering repeatedly shows that scaffolding matters as much as, and sometimes more than, the base model. In traditional systems language, scaffolding is the control architecture around the compute engine.

### Poka-yoke for agents
In manufacturing, poka-yoke means designing the process so common human mistakes become difficult or impossible. For agents, the same idea applies to tools: constrained parameters, safe defaults, staged approvals, and atomic operations reduce catastrophic behavior.

### ACI versus HCI
Human-Computer Interaction optimizes interfaces for people. Agent-Computer Interface optimizes interfaces for models. A good ACI tool usually has explicit schemas, low ambiguity, bounded outputs, and failure modes the model can recover from.

### Extended Thinking
This term usually refers not to true transparency into internal cognition, but to a product/runtime setting that allocates more reasoning budget, more intermediate steps, or a more deliberate execution strategy before answer generation.
