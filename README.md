# *AI Coding Agents: Architecture, Design & The Road Ahead* — Table of Contents

> **Model**: claude-opus-4-6 (anthropic/claude-opus-4-6)
> **Token Usage**: ~45,000 input + ~8,000 output (TOC generation)
> **Tools**: OpenCode + Oh-My-OpenCode
> **Generated**: 2026-04-01
> **Subjects**: OpenCode, Oh-My-OpenCode, Claude Code

---

## Language

[中文版本](README-ZH.md)

## Book Structure Overview

This book provides an in-depth multi-dimensional analysis comparing three AI coding agent systems — **OpenCode** (open-source foundation), **Oh-My-OpenCode** (multi-agent orchestration layer), and **Claude Code** (Anthropic's commercial agent) — from shared architectural patterns to distinctive innovations, culminating in best practices for agent design.

| Part | Chapter Range | Core Topics | Est. Word Count |
|------|--------------|-------------|-----------------|
| Part I: The Landscape | Chapters 1–2 | Evolution, market, three systems overview | ~8,000 words |
| Part II: Shared Architecture | Chapters 3–8 | ReAct loop, tools, sessions, LLM, MCP, config | ~18,000 words |
| Part III: Distinctive Features | Chapters 9–11 | OpenCode innovations, OMO innovations, Claude Code commercial design | ~15,000 words |
| Part IV: Deep Dive — OMO on OpenCode | Chapter 12 | Plugin entry, hook wiring, tool injection, agent system, config layering, compatibility | ~12,000 words |
| Part V: Deep Comparison | Chapters 13–17 | Philosophy, tools, orchestration, extensibility, security | ~20,000 words |
| Part VI: Agent Design Best Practices | Chapters 18–23 | Ideal architecture, tool design, context engineering, multi-agent, extensibility, safety | ~24,000 words |
| Part VII: Future & Practice | Chapters 24–26 | What's next, building your own agent, designing Oh-My-Claude-Code | ~15,000 words |

---

## Part I: The Landscape

### Chapter 1: The Evolution of Coding Agents

> Tracing the three eras of AI coding — from autocomplete to chat copilot to autonomous agent — and why scaffolding matters more than the model.

- **[1.1 From Code Completion to Autonomous Agents](EN/Chapter_01_Evolution_of_Coding_Agents/1.1_From_Code_Completion_to_Autonomous_Agents.md)**
- **[1.2 Market Landscape & Technical Divide](EN/Chapter_01_Evolution_of_Coding_Agents/1.2_Market_Landscape_and_Technical_Divide.md)**
- **[1.3 "Scaffolding Matters More Than the Model"](EN/Chapter_01_Evolution_of_Coding_Agents/1.3_Scaffolding_Matters_More_Than_the_Model.md)**
- **[1.4 The Three Systems Under Study](EN/Chapter_01_Evolution_of_Coding_Agents/1.4_The_Three_Systems_Under_Study.md)**

---

### Chapter 2: The Three Systems at a Glance

> A high-level overview of OpenCode, Oh-My-OpenCode, and Claude Code — tech stacks, core positioning, and a quick comparison matrix.

- **[2.1 OpenCode: The Open-Source Foundation](EN/Chapter_02_Three_Systems_Overview/2.1_OpenCode_The_Open_Source_Foundation.md)**
- **[2.2 Oh-My-OpenCode: The Orchestration Revolution](EN/Chapter_02_Three_Systems_Overview/2.2_Oh_My_OpenCode_The_Orchestration_Revolution.md)**
- **[2.3 Claude Code: The Commercial Benchmark](EN/Chapter_02_Three_Systems_Overview/2.3_Claude_Code_The_Commercial_Benchmark.md)**
- **[2.4 Quick Comparison Matrix](EN/Chapter_02_Three_Systems_Overview/2.4_Quick_Comparison_Matrix.md)**

---

## Part II: Shared Architecture (Commonalities)

### Chapter 3: The Core Loop — The ReAct Paradigm

> The foundational execution model shared by all three systems: think, act, observe, repeat.

- **[3.1 The Think-Act-Observe Cycle](EN/Chapter_03_Core_Loop_ReAct/3.1_Think_Act_Observe_Cycle.md)**
- **[3.2 Streaming Architecture](EN/Chapter_03_Core_Loop_ReAct/3.2_Streaming_Architecture.md)**
- **[3.3 Stop Conditions & Loop Control](EN/Chapter_03_Core_Loop_ReAct/3.3_Stop_Conditions_and_Loop_Control.md)**

---

### Chapter 4: Tool System Design

> Tools are the only way agents interact with the external world — how they're defined, registered, secured, and executed.

- **[4.1 Tool Definition Paradigm](EN/Chapter_04_Tool_System_Design/4.1_Tool_Definition_Paradigm.md)**
- **[4.2 Shared Tool Inventory](EN/Chapter_04_Tool_System_Design/4.2_Shared_Tool_Inventory.md)**
- **[4.3 Tool Permissions & Safety](EN/Chapter_04_Tool_System_Design/4.3_Tool_Permissions_and_Safety.md)**
- **[4.4 Tool Output Handling](EN/Chapter_04_Tool_System_Design/4.4_Tool_Output_Handling.md)**

---

### Chapter 5: Session & Context Management

> How conversations are persisted, messages structured, context compacted, and sessions recovered across interruptions.

- **[5.1 Session Persistence](EN/Chapter_05_Session_and_Context/5.1_Session_Persistence.md)**
- **[5.2 Message Structure](EN/Chapter_05_Session_and_Context/5.2_Message_Structure.md)**
- **[5.3 Context Compaction](EN/Chapter_05_Session_and_Context/5.3_Context_Compaction.md)**
- **[5.4 Session Recovery & Continuation](EN/Chapter_05_Session_and_Context/5.4_Session_Recovery_and_Continuation.md)**

---

### Chapter 6: LLM Provider Abstraction

> From 20+ provider SDKs to a single streaming interface — how each system abstracts model access.

- **[6.1 Multi-Model Support Architecture](EN/Chapter_06_LLM_Provider_Abstraction/6.1_Multi_Model_Support_Architecture.md)**
- **[6.2 Model Capability Detection](EN/Chapter_06_LLM_Provider_Abstraction/6.2_Model_Capability_Detection.md)**
- **[6.3 Authentication & Key Management](EN/Chapter_06_LLM_Provider_Abstraction/6.3_Authentication_and_Key_Management.md)**

---

### Chapter 7: MCP — The USB-C of AI

> Model Context Protocol: why it changes everything, how each system implements it, and MCP vs A2A.

- **[7.1 Why MCP Changes Everything](EN/Chapter_07_MCP/7.1_Why_MCP_Changes_Everything.md)**
- **[7.2 MCP Implementation Across Three Systems](EN/Chapter_07_MCP/7.2_MCP_Implementation_Comparison.md)**
- **[7.3 MCP vs A2A: Complementary, Not Competing](EN/Chapter_07_MCP/7.3_MCP_vs_A2A.md)**

---

### Chapter 8: Configuration & Customization

> Multi-level config precedence, project memory systems, and instruction assembly pipelines.

- **[8.1 Multi-Level Config Precedence](EN/Chapter_08_Configuration/8.1_Multi_Level_Config_Precedence.md)**
- **[8.2 Project Memory System](EN/Chapter_08_Configuration/8.2_Project_Memory_System.md)**
- **[8.3 Instruction System](EN/Chapter_08_Configuration/8.3_Instruction_System.md)**

---

## Part III: Distinctive Features

### Chapter 9: OpenCode's Unique Contributions

> Multi-interface architecture, ACP protocol, namespace organization, SDK programmability, and plan mode.

- **[9.1 Multi-Interface Architecture](EN/Chapter_09_OpenCode_Unique/9.1_Multi_Interface_Architecture.md)**
- **[9.2 ACP: Agent Client Protocol](EN/Chapter_09_OpenCode_Unique/9.2_ACP_Agent_Client_Protocol.md)**
- **[9.3 Namespace Organization Pattern](EN/Chapter_09_OpenCode_Unique/9.3_Namespace_Organization_Pattern.md)**
- **[9.4 SDK & Programmability](EN/Chapter_09_OpenCode_Unique/9.4_SDK_and_Programmability.md)**
- **[9.5 Plan Mode](EN/Chapter_09_OpenCode_Unique/9.5_Plan_Mode.md)**

---

### Chapter 10: Oh-My-OpenCode's Innovations

> Three-layer orchestration, semantic categories, Ultrawork mode, Ralph Loop, wisdom accumulation, 41-hook system, skill-embedded MCPs, and Tmux visual multi-agent.

- **[10.1 Three-Layer Orchestration Architecture](EN/Chapter_10_OMO_Innovations/10.1_Three_Layer_Orchestration.md)**
- **[10.2 Semantic Category System](EN/Chapter_10_OMO_Innovations/10.2_Semantic_Category_System.md)**
- **[10.3 Ultrawork Mode](EN/Chapter_10_OMO_Innovations/10.3_Ultrawork_Mode.md)**
- **[10.4 Ralph Loop & Todo Continuation](EN/Chapter_10_OMO_Innovations/10.4_Ralph_Loop_and_Todo_Continuation.md)**
- **[10.5 Wisdom Accumulation System](EN/Chapter_10_OMO_Innovations/10.5_Wisdom_Accumulation_System.md)**
- **[10.6 The 41-Hook Five-Tier System](EN/Chapter_10_OMO_Innovations/10.6_41_Hook_Five_Tier_System.md)**
- **[10.7 Skill-Embedded MCPs](EN/Chapter_10_OMO_Innovations/10.7_Skill_Embedded_MCPs.md)**
- **[10.8 Tmux Visual Multi-Agent](EN/Chapter_10_OMO_Innovations/10.8_Tmux_Visual_Multi_Agent.md)**

---

### Chapter 11: Claude Code's Commercial Design

> ML permission classifier, cost control, enterprise readiness, custom Ink renderer, multi-strategy compaction, Bridge/Coordinator modes, and 100+ slash commands.

- **[11.1 Security Architecture](EN/Chapter_11_Claude_Code_Commercial/11.1_Security_Architecture.md)**
- **[11.2 Cost Control](EN/Chapter_11_Claude_Code_Commercial/11.2_Cost_Control.md)**
- **[11.3 Enterprise Readiness](EN/Chapter_11_Claude_Code_Commercial/11.3_Enterprise_Readiness.md)**
- **[11.4 Custom Ink Implementation](EN/Chapter_11_Claude_Code_Commercial/11.4_Custom_Ink_Implementation.md)**
- **[11.5 Multi-Strategy Context Compaction](EN/Chapter_11_Claude_Code_Commercial/11.5_Multi_Strategy_Compaction.md)**
- **[11.6 Bridge Mode & Coordinator Mode](EN/Chapter_11_Claude_Code_Commercial/11.6_Bridge_and_Coordinator_Mode.md)**
- **[11.7 The 100+ Slash Command System](EN/Chapter_11_Claude_Code_Commercial/11.7_Slash_Command_System.md)**

---

## Part IV: Deep Dive — How Oh-My-OpenCode is Built on OpenCode

### Chapter 12: Anatomy of a 130K-LOC Plugin

> A source-code-level deep dive into how Oh-My-OpenCode leverages OpenCode's plugin system to build an entire multi-agent orchestration layer — without forking a single line of the host.

- **[12.1 Plugin Entry Point & Bootstrap Sequence](EN/Chapter_12_OMO_Deep_Dive/12.1_Plugin_Entry_Point_and_Bootstrap.md)**
  - `src/index.ts`: The 8-hook handshake with OpenCode's plugin system
  - 6-phase initialization: provider → plugin-components → agents → tools → MCPs → commands
  - Lifecycle: how OMO boots before the first user message arrives

- **[12.2 The 8 OpenCode Hook Handlers](EN/Chapter_12_OMO_Deep_Dive/12.2_Eight_Hook_Handlers.md)**
  - `config`: Injecting agents, tools, MCPs, commands into OpenCode's registry
  - `tool`: Registering 26 custom tools via OpenCode SDK
  - `chat.message`: First-message variant gate, session setup, keyword detection
  - `chat.params`: Anthropic effort level adjustment
  - `event`: Session lifecycle event handling
  - `tool.execute.before` / `tool.execute.after`: Pre/post tool interception
  - `experimental.chat.messages.transform`: Context injection and thinking block validation

- **[12.3 Tool Injection Architecture](EN/Chapter_12_OMO_Deep_Dive/12.3_Tool_Injection_Architecture.md)**
  - How OMO's 26 tools are registered via `plugin/tool-registry.ts`
  - Tool wrapping pattern: OpenCode SDK tool → OMO tool with extra context
  - The delegate-task tool: spawning subagents through OpenCode's session system
  - Background task tools: concurrency management atop OpenCode's infrastructure

- **[12.4 Agent System Implementation](EN/Chapter_12_OMO_Deep_Dive/12.4_Agent_System_Implementation.md)**
  - `builtin-agents.ts`: Factory functions for 11 agents with model resolution and fallback chains
  - Dynamic prompt building: `dynamic-agent-prompt-builder.ts` — tool tables, delegation guides, hard blocks
  - How agents map to OpenCode's native agent concept vs. OMO's orchestration layer
  - System prompt assembly: modular sections (identity, interview, plan generation, behavioral constraints)

- **[12.5 Hook System: 41 Hooks on 5 OpenCode Hook Points](EN/Chapter_12_OMO_Deep_Dive/12.5_Hook_System_Deep_Dive.md)**
  - How 41 OMO hooks are multiplexed onto OpenCode's 5 plugin hook points
  - Hook execution order and priority
  - The `tool.execute.before` pipeline: file guard → label truncator → rules injector
  - The `experimental.chat.messages.transform` pipeline: context injection → thinking validation → todo preservation
  - Hook enable/disable via configuration

- **[12.6 Configuration Layering](EN/Chapter_12_OMO_Deep_Dive/12.6_Configuration_Layering.md)**
  - How OMO's 3-level config (project → user → defaults) coexists with OpenCode's 7-level config
  - 22 Zod v4 schema files: agents, categories, hooks, MCPs, skills, commands, experimental
  - JSONC support: why comments in config files matter for DX
  - Config validation and partial fallback strategy

- **[12.7 Claude Code Compatibility Layer](EN/Chapter_12_OMO_Deep_Dive/12.7_Claude_Code_Compatibility_Layer.md)**
  - Loading Claude Code plugins from `.opencode/plugins/`
  - Loading Claude Code commands from `.opencode/command/`
  - Loading Claude Code agents from `.opencode/agents/`
  - Loading Claude Code MCPs from `.mcp.json` with `${VAR}` env expansion
  - Why OMO maintains Claude Code compatibility: the migration path argument

- **[12.8 Background Agent Spawner & Session Management](EN/Chapter_12_OMO_Deep_Dive/12.8_Background_Agent_Spawner.md)**
  - How OMO creates new OpenCode sessions for background agents
  - Concurrency management: 5 concurrent per model/provider
  - Parent session notification mechanism
  - Session continuation via `session_id` — preserving full context across turns
  - The boulder state: tracking Sisyphus continuation across interruptions

---

## Part V: Deep Comparative Analysis

### Chapter 13: Architectural Philosophy Comparison

> Open vs closed, simple vs complex, control vs autonomy, general vs specialized.

- **[13.1 Open vs Closed](EN/Chapter_13_Philosophy_Comparison/13.1_Open_vs_Closed.md)**
- **[13.2 Simplicity vs Complexity](EN/Chapter_13_Philosophy_Comparison/13.2_Simplicity_vs_Complexity.md)**
- **[13.3 Control vs Autonomy](EN/Chapter_13_Philosophy_Comparison/13.3_Control_vs_Autonomy.md)**
- **[13.4 General vs Specialized](EN/Chapter_13_Philosophy_Comparison/13.4_General_vs_Specialized.md)**

---

### Chapter 14: Tool System Deep Comparison

> Tool count vs coverage, unique tools, LSP integration depth, and tool composition patterns.

- **[14.1 Tool Count & Coverage](EN/Chapter_14_Tool_Comparison/14.1_Tool_Count_and_Coverage.md)**
- **[14.2 Unique Tools](EN/Chapter_14_Tool_Comparison/14.2_Unique_Tools.md)**
- **[14.3 LSP Integration Depth](EN/Chapter_14_Tool_Comparison/14.3_LSP_Integration_Depth.md)**
- **[14.4 Tool Composition Patterns](EN/Chapter_14_Tool_Comparison/14.4_Tool_Composition_Patterns.md)**

---

### Chapter 15: Agent Orchestration Comparison

> Single-agent vs multi-agent, specialization, background tasks, wisdom transfer vs context isolation.

- **[15.1 Orchestration Pattern Taxonomy](EN/Chapter_15_Orchestration_Comparison/15.1_Orchestration_Pattern_Taxonomy.md)**
- **[15.2 Single-Agent vs Multi-Agent](EN/Chapter_15_Orchestration_Comparison/15.2_Single_vs_Multi_Agent.md)**
- **[15.3 Agent Specialization](EN/Chapter_15_Orchestration_Comparison/15.3_Agent_Specialization.md)**
- **[15.4 Background Tasks & Parallel Execution](EN/Chapter_15_Orchestration_Comparison/15.4_Background_Tasks_and_Parallel.md)**
- **[15.5 Wisdom Transfer vs Context Isolation](EN/Chapter_15_Orchestration_Comparison/15.5_Wisdom_Transfer_vs_Context_Isolation.md)**

---

### Chapter 16: Extensibility Comparison

> Plugin systems, skill systems, command systems, hook systems, and manifest-driven discovery.

- **[16.1 Plugin System](EN/Chapter_16_Extensibility_Comparison/16.1_Plugin_System.md)**
- **[16.2 Skill System](EN/Chapter_16_Extensibility_Comparison/16.2_Skill_System.md)**
- **[16.3 Command System](EN/Chapter_16_Extensibility_Comparison/16.3_Command_System.md)**
- **[16.4 Hook System](EN/Chapter_16_Extensibility_Comparison/16.4_Hook_System.md)**
- **[16.5 Manifest-Driven Discovery](EN/Chapter_16_Extensibility_Comparison/16.5_Manifest_Driven_Discovery.md)**

---

### Chapter 17: Security Model Comparison

> Permission paradigms, sandboxing, supply chain security, and credential isolation.

- **[17.1 Permission Paradigms](EN/Chapter_17_Security_Comparison/17.1_Permission_Paradigms.md)**
- **[17.2 Sandboxing](EN/Chapter_17_Security_Comparison/17.2_Sandboxing.md)**
- **[17.3 Supply Chain Security](EN/Chapter_17_Security_Comparison/17.3_Supply_Chain_Security.md)**
- **[17.4 Credential Isolation](EN/Chapter_17_Security_Comparison/17.4_Credential_Isolation.md)**

---

## Part VI: Agent Design Best Practices

### Chapter 18: Architecture of the Ideal Coding Agent

> The consensus architecture for 2026, the five defining tensions, and lessons from the three systems.

- **[18.1 Consensus Architecture: 2026 Best Practices](EN/Chapter_18_Ideal_Architecture/18.1_Consensus_Architecture.md)**
- **[18.2 The Five Defining Tensions](EN/Chapter_18_Ideal_Architecture/18.2_Five_Defining_Tensions.md)**
- **[18.3 Lessons from the Three Systems](EN/Chapter_18_Ideal_Architecture/18.3_Lessons_from_Three_Systems.md)**

---

### Chapter 19: The Art of Tool Design

> ACI design principles, minimal tool sets, cognitive cost of tool output, and tool composition vs bloat.

- **[19.1 ACI (Agent-Computer Interface) Principles](EN/Chapter_19_Tool_Design_Art/19.1_ACI_Principles.md)**
- **[19.2 Minimal Tool Set Principle](EN/Chapter_19_Tool_Design_Art/19.2_Minimal_Tool_Set.md)**
- **[19.3 Cognitive Cost of Tool Output](EN/Chapter_19_Tool_Design_Art/19.3_Cognitive_Cost_of_Tool_Output.md)**
- **[19.4 Tool Composition vs Tool Bloat](EN/Chapter_19_Tool_Design_Art/19.4_Tool_Composition_vs_Bloat.md)**

---

### Chapter 20: Context Engineering

> The shift from prompt engineering to context engineering — four memory strategies and overflow recovery.

- **[20.1 From Prompt Engineering to Context Engineering](EN/Chapter_20_Context_Engineering/20.1_From_Prompt_to_Context_Engineering.md)**
- **[20.2 Four Memory Strategies](EN/Chapter_20_Context_Engineering/20.2_Four_Memory_Strategies.md)**
- **[20.3 Automatic Context Injection](EN/Chapter_20_Context_Engineering/20.3_Automatic_Context_Injection.md)**
- **[20.4 Context Window Overflow Recovery](EN/Chapter_20_Context_Engineering/20.4_Context_Window_Overflow_Recovery.md)**

---

### Chapter 21: The Art of Multi-Agent Orchestration

> Five orchestration patterns, when to use multi-agent, specialization design, wisdom accumulation, and parallel execution challenges.

- **[21.1 Five Orchestration Patterns](EN/Chapter_21_Multi_Agent_Orchestration/21.1_Five_Orchestration_Patterns.md)**
- **[21.2 When to Use Multi-Agent](EN/Chapter_21_Multi_Agent_Orchestration/21.2_When_to_Use_Multi_Agent.md)**
- **[21.3 Designing Agent Specialization](EN/Chapter_21_Multi_Agent_Orchestration/21.3_Designing_Agent_Specialization.md)**
- **[21.4 Wisdom Accumulation vs Context Isolation](EN/Chapter_21_Multi_Agent_Orchestration/21.4_Wisdom_vs_Isolation.md)**
- **[21.5 Challenges of Parallel Execution](EN/Chapter_21_Multi_Agent_Orchestration/21.5_Parallel_Execution_Challenges.md)**

---

### Chapter 22: Designing for Extensibility

> Three content types, MCP as universal substrate, lifecycle hooks, and the simplicity spectrum.

- **[22.1 Three Content Types](EN/Chapter_22_Extensibility_Design/22.1_Three_Content_Types.md)**
- **[22.2 MCP as Universal Extensibility Substrate](EN/Chapter_22_Extensibility_Design/22.2_MCP_Universal_Substrate.md)**
- **[22.3 Lifecycle Hooks](EN/Chapter_22_Extensibility_Design/22.3_Lifecycle_Hooks.md)**
- **[22.4 The Simplicity Spectrum](EN/Chapter_22_Extensibility_Design/22.4_Simplicity_Spectrum.md)**

---

### Chapter 23: Balancing Safety & Autonomy

> Threat models, sandboxing, capability declaration, and lessons from Claude Code's 84% permission reduction.

- **[23.1 Threat Model](EN/Chapter_23_Safety_and_Autonomy/23.1_Threat_Model.md)**
- **[23.2 Sandboxing is Key](EN/Chapter_23_Safety_and_Autonomy/23.2_Sandboxing_is_Key.md)**
- **[23.3 Capability Declaration Pattern](EN/Chapter_23_Safety_and_Autonomy/23.3_Capability_Declaration.md)**
- **[23.4 Lessons from Claude Code](EN/Chapter_23_Safety_and_Autonomy/23.4_Lessons_from_Claude_Code.md)**

---

## Part VII: Future & Practice

### Chapter 24: What's Next for Coding Agents

> From code generation to software engineering, vibe coding, convergence trends, and unsolved challenges.

- **[24.1 From "Code Generation" to "Software Engineering"](EN/Chapter_24_Future/24.1_Code_Gen_to_Software_Engineering.md)**
- **[24.2 "Vibe Coding" & The Evolving Developer Role](EN/Chapter_24_Future/24.2_Vibe_Coding_and_Developer_Role.md)**
- **[24.3 Convergence Trends](EN/Chapter_24_Future/24.3_Convergence_Trends.md)**
- **[24.4 Unsolved Challenges](EN/Chapter_24_Future/24.4_Unsolved_Challenges.md)**

---

### Chapter 25: Building Your Own Coding Agent

> The starting decision tree, minimum viable agent, pitfalls to avoid, and what to measure.

- **[25.1 The Starting Decision Tree](EN/Chapter_25_Build_Your_Own/25.1_Starting_Decision_Tree.md)**
- **[25.2 Minimum Viable Agent](EN/Chapter_25_Build_Your_Own/25.2_Minimum_Viable_Agent.md)**
- **[25.3 Pitfalls to Avoid](EN/Chapter_25_Build_Your_Own/25.3_Pitfalls_to_Avoid.md)**
- **[25.4 What to Measure](EN/Chapter_25_Build_Your_Own/25.4_What_to_Measure.md)**

---

### Chapter 26: Designing "Oh-My-Claude-Code" — A Multi-Agent Plugin for Claude Code

> A thought experiment and architectural blueprint: if we were to build an OMO-equivalent orchestration layer for Claude Code, what would it look like? What's possible, what's missing, and what would need to change?

- **[26.1 Claude Code's Extension Surface: What's Available Today](EN/Chapter_26_Oh_My_Claude_Code/26.1_Claude_Code_Extension_Surface.md)**
  - Hooks (session_start, pre_compact, post_compact, post_sampling, file_changed)
  - Plugins (.claude/plugins/) with commands, tools, skills, hooks
  - Custom agents (.claude/agents/) with markdown definitions
  - MCP servers (.claude/mcp.json) for external tools
  - CLAUDE.md / memory system for persistent context
  - What's exposed vs. what's locked down

- **[26.2 Gap Analysis: OpenCode Plugin API vs Claude Code Extension API](EN/Chapter_26_Oh_My_Claude_Code/26.2_Gap_Analysis.md)**
  - OpenCode's 8 hook points (config, tool, chat.message, chat.params, event, tool.execute.before/after, experimental.chat.messages.transform) — full lifecycle control
  - Claude Code's hook points — more limited, focused on safety
  - What OMO features are possible on Claude Code today vs. what requires API changes
  - The "message transform" gap: why context injection is harder on Claude Code

- **[26.3 Architecture Blueprint: Oh-My-Claude-Code](EN/Chapter_26_Oh_My_Claude_Code/26.3_Architecture_Blueprint.md)**
  - Multi-agent orchestration via custom agents + AgentTool
  - Background task delegation via TaskCreate/TaskGet/TaskOutput
  - Skill system leveraging Claude Code's native skills + MCP
  - Configuration via CLAUDE.md + .claude/settings.json
  - The "Sisyphus prompt" approach: encoding orchestration logic in system prompts
  - Wisdom accumulation via memory system + structured notes

- **[26.4 What's Achievable Today: A Practical Implementation Plan](EN/Chapter_26_Oh_My_Claude_Code/26.4_Practical_Implementation.md)**
  - Phase 1: Custom agents with specialized prompts (Oracle, Explore, Librarian equivalents)
  - Phase 2: Hook-based continuation (post_sampling → todo enforcement)
  - Phase 3: MCP-based tool augmentation (AST-grep, session management, LSP extensions)
  - Phase 4: Plugin-based orchestration layer
  - Estimated effort and token cost implications

- **[26.5 What's Missing: An Open Letter to Claude Code's Extensibility](EN/Chapter_26_Oh_My_Claude_Code/26.5_Whats_Missing.md)**
  - The `chat.message` hook: intercepting and transforming messages before LLM
  - The `tool.execute.before/after` hooks: pre/post tool interception
  - Plugin-level tool registration: adding tools beyond MCP
  - Agent-level model selection: choosing different models for different agents
  - Background agent spawning with session continuity
  - The case for a richer plugin SDK

- **[26.6 Convergence Forecast: Will OpenCode and Claude Code Plugin APIs Merge?](EN/Chapter_26_Oh_My_Claude_Code/26.6_Convergence_Forecast.md)**
  - MCP as the common denominator
  - The trend toward richer hook systems
  - Open-source innovation driving commercial feature adoption
  - A unified agent extensibility standard: is it possible?

---

## Appendices

### Appendix A: Complete Tool Inventory of All Three Systems
- Full tool list with parameters, permissions, and descriptions for OpenCode, OMO, and Claude Code

### Appendix B: Complete Configuration Reference
- Configuration schemas and options for all three systems

### Appendix C: Key Source Code Path Mapping
- Quick reference table mapping concepts to source files across all three codebases

### Appendix D: MCP Server Ecosystem Overview
- Transport types, community servers, official registry

### Appendix E: Recommended Reading & References
- Anthropic: Building Effective Agents (Dec 2024)
- Anthropic: Effective Context Engineering (Sept 2025)
- Anthropic: Claude Code Sandboxing (Oct 2025)
- Anthropic: Multi-Agent Research System (June 2025)
- MCP Official Documentation
- Zylos: AI Coding Agents 2025–2026
- Zylos: Plugin and Extension Architecture
- GuruSup: Agent Orchestration Patterns
- SWE-bench & SWE-bench Pro benchmarks

### Appendix F: Glossary of Terms
- LLM, Token, Context Window, Function Calling, ReAct, Agent, MCP, ACP, A2A, LSP, AST, SSE, Monorepo, TUI, Poka-yoke, ACI, JSONL, Zod, etc.

---

## Source Code File Index

> Quick reference for key source files covered in this book

| Chapter | OpenCode Files | OMO Files | Claude Code Files |
|---------|---------------|-----------|-------------------|
| Ch.3: ReAct Loop | `session/processor.ts`, `session/llm.ts` | (inherits OpenCode) | `QueryEngine.ts`, `query.ts`, `main.tsx` |
| Ch.4: Tools | `tool/tool.ts`, `tool/registry.ts`, `tool/*.ts` | `src/tools/index.ts`, `src/tools/*` | `Tool.ts`, `tools.ts`, `tools/*` |
| Ch.5: Sessions | `session/index.ts`, `session/message-v2.ts`, `session/compaction.ts` | `src/features/claude-code-session-state/` | `utils/sessionStorage.ts`, `services/compact/*` |
| Ch.6: LLM | `provider/provider.ts`, `provider/transform.ts`, `provider/models.ts` | `src/tools/delegate-task/category-resolver.ts` | `utils/model/model.ts`, `utils/model/providers.ts` |
| Ch.7: MCP | `mcp/index.ts`, `mcp/auth.ts` | `src/mcp/*`, `src/features/skill-mcp-manager/` | `services/mcp/client.ts`, `services/mcp/config.ts` |
| Ch.8: Config | `config/config.ts`, `config/paths.ts` | `src/config/schema/*`, `src/plugin-config.ts` | `utils/config.ts`, `utils/settings/*` |
| Ch.9: OpenCode | `cli/cmd/tui/app.tsx`, `acp/*`, `sdk/js/*` | — | — |
| Ch.10: OMO | — | `src/agents/*`, `src/hooks/*`, `src/features/*` | — |
| Ch.11: Claude Code | — | — | `utils/permissions/*`, `cost-tracker.ts`, `ink/*` |
| **Ch.12: OMO Deep Dive** | `plugin/index.ts` (host) | `src/index.ts`, `src/plugin/*`, `src/agents/builtin-agents.ts`, `src/hooks/index.ts`, `src/config/schema/*`, `src/features/background-agent/*`, `src/features/claude-code-*-loader/*` | — |
| Ch.15: Orchestration | `agent/agent.ts` | `src/agents/atlas/*`, `src/agents/prometheus/*` | `tools/AgentTool/*`, `tasks/*` |
| Ch.16: Extensibility | `plugin/index.ts`, `skill/skill.ts` | `src/hooks/index.ts` (41 hooks) | `utils/plugins/*`, `skills/*` |
| Ch.17: Security | `permission/next.ts` | `src/hooks/comment-checker/` | `utils/permissions/permissionSetup.ts`, `utils/permissions/yoloClassifier.ts` |
| **Ch.26: Oh-My-Claude-Code** | — | (reference architecture) | `utils/hooks/*`, `utils/plugins/*`, `tools/AgentTool/*`, `tasks/*`, `skills/*` |
