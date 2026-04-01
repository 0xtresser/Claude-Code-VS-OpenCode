> Model: openai/gpt-5.4
> Token Usage (estimated): ~7,200 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# Appendix A: Tool Inventory Across OpenCode, OMO, and Claude Code

This appendix consolidates the practical tool surface of the three systems. OpenCode provides the open-source baseline tool set; Oh-My-OpenCode (OMO) inherits that baseline and adds orchestration, session, background-task, skill, and richer search capabilities; Claude Code exposes the broadest commercial tool surface, especially around tasks, teams, workflows, browser interaction, MCP management, and UI-integrated operations. “Yes” means first-class availability; “Conditional” means feature-flag, mode, or environment gated; “Inherited” means OMO gets the capability through OpenCode and then extends it.

| Tool Name | OpenCode | OMO | Claude Code | Description |
|---|---|---|---|---|
| bash | Yes | Inherited | Yes | Run shell commands in the workspace. |
| powershell | No | No | Conditional | Windows-native shell execution. |
| read / file read | Yes | Inherited | Yes | Read files or directory listings safely. |
| write / file write | Yes | Inherited | Yes | Create or overwrite files directly. |
| edit / file edit | Yes | Inherited or overridden | Yes | Patch existing files with structured edits. |
| multiedit | Yes | Inherited | No separate public tool | Apply several edits to one file in one call. |
| apply_patch | Yes | Inherited | No separate public tool | Unified patch-style file modification. |
| notebook edit | No | No | Yes | Jupyter/notebook-aware cell editing. |
| ls / list directory | Yes | Inherited | Folded into read/glob | Lightweight directory listing. |
| external-directory | Yes | Inherited | No direct equivalent | Extend access outside the default project root. |
| glob | Yes | Enhanced | Yes | Filename/path pattern search. |
| grep | Yes | Enhanced | Yes | Regex or textual content search. |
| codesearch | Yes | Inherited | ToolSearch partly analogous | Search code with stronger code-oriented semantics. |
| ast-grep search | No | Yes | No first-class tool | AST-aware structural code search. |
| ast-grep replace | No | Yes | No first-class tool | AST-aware structural rewrite. |
| lsp | Conditional | Split into multiple tools | Conditional | Language-server queries and edits. |
| lsp_goto_definition | No | Yes | Folded into LSPTool | Jump to symbol definition. |
| lsp_find_references | No | Yes | Folded into LSPTool | Find all references of a symbol. |
| lsp_symbols | No | Yes | Folded into LSPTool | Outline/document/workspace symbol lookup. |
| lsp_diagnostics | No | Yes | Folded into LSPTool | Collect errors, warnings, hints. |
| lsp_prepare_rename | No | Yes | Folded into LSPTool | Validate whether rename is legal. |
| lsp_rename | No | Yes | Folded into LSPTool | Cross-workspace symbol rename. |
| webfetch | Yes | Inherited | Yes | Fetch and summarize a URL. |
| websearch | Yes | Inherited + provider-aware | Yes | Search the web and return ranked results. |
| web browser | No | No | Conditional | Interactive browser navigation and extraction. |
| look_at | No | Yes | Partial via file/browser tooling | Quick image/PDF/media inspection. |
| question / ask user | Conditional | Inherited | Yes | Ask the human for clarification or approval. |
| skill | Yes | Upgraded | Yes | Load a skill/slash-command style capability pack. |
| skill_mcp | No | Yes | No direct equivalent | Invoke MCP resources bundled inside a skill. |
| slashcommand | No | Yes | Native command system, different surface | Execute discovered slash commands from tool space. |
| task | Yes | Replaced by delegate-task semantics | No exact equivalent | Spawn a subagent/task in OpenCode-style flow. |
| call_omo_agent | No | Yes | AgentTool analogous | Spawn specialized OMO agents. |
| background_output | No | Yes | TaskOutputTool analogous | Fetch output from a background agent/task. |
| background_cancel | No | Yes | TaskStopTool analogous | Cancel one or more background jobs. |
| task_create | No | Conditional in OMO | Yes | Create a structured background task. |
| task_get | No | Conditional in OMO | Yes | Inspect one task’s metadata/status. |
| task_list | No | Conditional in OMO | Yes | List active or historical tasks. |
| task_update | No | Conditional in OMO | Yes | Update task state or metadata. |
| task_output | No | Via background_output | Yes | Retrieve task transcript/output. |
| task_stop | No | Via background_cancel | Yes | Stop a running task. |
| todo write | Yes | Inherited | Yes | Maintain structured todo lists for long tasks. |
| todo read | Internal/limited | Inherited | Task list UI instead | Read stored todo state. |
| plan enter | Conditional | Inherited | Yes | Switch into planning mode before edits. |
| plan exit | Conditional | Inherited | Yes | Exit planning mode and resume execution. |
| verify plan execution | No | No | Conditional | Check whether execution matched an approved plan. |
| agent tool | No separate public tool | call_omo_agent | Yes | Launch another agent or teammate. |
| team create | No | No | Conditional | Create a team/swarm of collaborating agents. |
| team delete | No | No | Conditional | Remove a running team/swarm. |
| send message | No | No | Conditional | Send messages between peers/teammates. |
| list peers | No | No | Conditional | Discover peer agents in swarm mode. |
| workflow | No | No | Conditional | Trigger reusable workflow scripts. |
| config tool | No | No | Conditional | Inspect or mutate settings from inside the agent. |
| MCP tool invocation | Via MCP registry | Via MCP + skill MCP | Yes | Call MCP server tools using model-facing schemas. |
| list MCP resources | No | No | Yes | Enumerate resources exposed by MCP servers. |
| read MCP resource | No | No | Yes | Read a specific MCP resource URI. |
| MCP auth | No | No | Yes | Handle MCP auth and connector approval flows. |
| REPL | No | No | Conditional | Interactive in-process programming shell. |
| interactive_bash / terminal capture | No | Yes | Conditional | Persistent terminal/tmux or terminal snapshot tooling. |
| snip / brief | No | No | Yes | Condense prior context or trim transcript slices. |
| sleep / cron / monitor | No | No | Conditional | Time-based automation and monitoring hooks. |
| push notification | No | No | Conditional | Trigger push/user-facing notifications. |
| subscribe PR | No | No | Conditional | Watch pull-request updates. |
| tungsten / review artifact | No | No | Conditional | Specialized internal or artifact-review flows. |

## Category Notes

### 1. File operations
OpenCode centers on a minimal but strong file core: `read`, `write`, `edit`, `multiedit`, and `apply_patch`. OMO inherits that layer and optionally overrides `edit` with a hashline-based editor in experimental mode. Claude Code exposes a comparable but more productized set: `FileReadTool`, `FileWriteTool`, `FileEditTool`, and `NotebookEditTool`, plus UI affordances such as diff views and rejection messages.

### 2. Search and retrieval
All three systems treat search as essential. OpenCode provides `glob`, `grep`, `codesearch`, `webfetch`, and `websearch`. OMO goes further by splitting LSP into granular operations and adding AST-based structural search/replace plus session search. Claude Code offers `GlobTool`, `GrepTool`, `WebFetchTool`, `WebSearchTool`, MCP resource browsing, and in some builds a browser tool. The design trend is clear: raw grep is no longer enough; agents need syntactic, semantic, and remote search layers.

### 3. Execution and composition
OpenCode’s `task` and `skill` show the open-source baseline for compositional execution. OMO turns composition into orchestration: `call_omo_agent`, delegated background tasks, slash commands, skill-embedded MCPs, and persistent tmux-backed sessions. Claude Code generalizes the same idea into task lifecycle tools, team tools, workflow tools, and agent-to-agent messaging. In other words, OMO adds multi-agent depth; Claude Code adds product depth.

### 4. Interactive and long-running work
OpenCode is mostly request/response oriented. OMO explicitly embraces long-running, visual, and persistent flows through `interactive_bash`, `background_output`, `background_cancel`, and session-manager tools. Claude Code reaches a similar destination through tasks, REPL, terminal capture, cron-like automation, and UI hooks. This matters because real software engineering is often not a single command but a monitored process.

### 5. LSP and structure-aware development
OpenCode has an experimental monolithic LSP tool. OMO decomposes LSP into atomic operations that are easier for an agent to combine safely. Claude Code also supports LSP, but through a consolidated tool class backed by a large service layer. This reflects an important design choice: broad tools are simpler for product UX; narrower tools are often easier for agent reliability.

### 6. Special tools and platform identity
OMO’s distinctive tools are the ones that expose orchestration as a first-class primitive: agent spawning, background-output retrieval, skill MCP routing, tmux control, session history, and AST search. Claude Code’s distinctive tools are those that expose a commercial runtime: teams, workflows, browser automation, MCP auth, notifications, and extensive task APIs. OpenCode remains the cleanest baseline and therefore the best reference point for understanding what is fundamental versus what is platform scaffolding.
