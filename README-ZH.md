# 《AI编码智能体：架构、设计与未来》— 全书目录

> **模型**: claude-opus-4-6 (anthropic/claude-opus-4-6)
> **Token消耗**: ~45,000 输入 + ~8,000 输出（目录生成）
> **工具**: OpenCode + Oh-My-OpenCode
> **生成日期**: 2026-04-01
> **研究对象**: OpenCode、Oh-My-OpenCode、Claude Code

---

## 语言

[English Version](README.md)

## 全书结构概览

本书从多维度深度分析和对比三个AI编码智能体系统——**OpenCode**（开源基座）、**Oh-My-OpenCode**（多智能体编排层）和 **Claude Code**（Anthropic商业级智能体）——从共性架构到独特创新，最终提炼出智能体设计的最佳实践。

| 部分 | 章节范围 | 核心主题 | 预估字数 |
|------|---------|---------|---------|
| 第一部分：全景 | 第1-2章 | 进化史、市场格局、三大系统概览 | ~8,000字 |
| 第二部分：共性架构 | 第3-8章 | ReAct循环、工具、会话、LLM、MCP、配置 | ~18,000字 |
| 第三部分：特性分析 | 第9-11章 | OpenCode创新、OMO创新、Claude Code商业设计 | ~15,000字 |
| 第四部分：深度剖析——OMO如何构建于OpenCode之上 | 第12章 | 插件入口、钩子接线、工具注入、智能体系统、配置分层、兼容层 | ~12,000字 |
| 第五部分：深度对比 | 第13-17章 | 哲学、工具、编排、可扩展性、安全 | ~20,000字 |
| 第六部分：设计最佳实践 | 第18-23章 | 理想架构、工具设计、上下文工程、多智能体、可扩展性、安全 | ~24,000字 |
| 第七部分：未来与实践 | 第24-26章 | 下一步、构建你自己的智能体、设计Oh-My-Claude-Code | ~15,000字 |

---

## 第一部分：全景

### 第1章 编码智能体的进化史

> 追溯AI编码的三个时代——从自动补全到对话副驾驶再到自主智能体——以及为什么脚手架比模型更重要。

- **[1.1 从代码补全到自主智能体](ZH/第01章_编码智能体的进化史/1.1_从代码补全到自主智能体.md)**
- **[1.2 市场格局与技术分野](ZH/第01章_编码智能体的进化史/1.2_市场格局与技术分野.md)**
- **[1.3 "脚手架比模型更重要"](ZH/第01章_编码智能体的进化史/1.3_脚手架比模型更重要.md)**
- **[1.4 本书研究对象](ZH/第01章_编码智能体的进化史/1.4_本书研究对象.md)**

---

### 第2章 三大系统概览

> OpenCode、Oh-My-OpenCode和Claude Code的高层概览——技术栈、核心定位与速览对比。

- **[2.1 OpenCode：开源基座](ZH/第02章_三大系统概览/2.1_OpenCode开源基座.md)**
- **[2.2 Oh-My-OpenCode：编排层革命](ZH/第02章_三大系统概览/2.2_Oh_My_OpenCode编排层革命.md)**
- **[2.3 Claude Code：商业标杆](ZH/第02章_三大系统概览/2.3_Claude_Code商业标杆.md)**
- **[2.4 速览对比表](ZH/第02章_三大系统概览/2.4_速览对比表.md)**

---

## 第二部分：共性架构

### 第3章 核心循环：ReAct范式

> 三个系统共享的基础执行模型：思考、行动、观察、重复。

- **[3.1 思考-行动-观察循环](ZH/第03章_核心循环ReAct/3.1_思考行动观察循环.md)**
- **[3.2 流式处理架构](ZH/第03章_核心循环ReAct/3.2_流式处理架构.md)**
- **[3.3 停止条件与循环控制](ZH/第03章_核心循环ReAct/3.3_停止条件与循环控制.md)**

---

### 第4章 工具系统设计

> 工具是智能体与外部世界交互的唯一方式——定义、注册、安全检查与执行。

- **[4.1 工具定义范式](ZH/第04章_工具系统设计/4.1_工具定义范式.md)**
- **[4.2 共有工具清单](ZH/第04章_工具系统设计/4.2_共有工具清单.md)**
- **[4.3 工具权限与安全](ZH/第04章_工具系统设计/4.3_工具权限与安全.md)**
- **[4.4 工具输出处理](ZH/第04章_工具系统设计/4.4_工具输出处理.md)**

---

### 第5章 会话与上下文管理

> 会话持久化、消息结构、上下文压缩与会话恢复。

- **[5.1 会话持久化](ZH/第05章_会话与上下文管理/5.1_会话持久化.md)**
- **[5.2 消息结构](ZH/第05章_会话与上下文管理/5.2_消息结构.md)**
- **[5.3 上下文压缩](ZH/第05章_会话与上下文管理/5.3_上下文压缩.md)**
- **[5.4 会话恢复与续接](ZH/第05章_会话与上下文管理/5.4_会话恢复与续接.md)**

---

### 第6章 LLM提供者抽象

> 从20+提供者SDK到统一流式接口——每个系统如何抽象模型访问。

- **[6.1 多模型支持架构](ZH/第06章_LLM提供者抽象/6.1_多模型支持架构.md)**
- **[6.2 模型能力检测](ZH/第06章_LLM提供者抽象/6.2_模型能力检测.md)**
- **[6.3 认证与密钥管理](ZH/第06章_LLM提供者抽象/6.3_认证与密钥管理.md)**

---

### 第7章 MCP：AI的USB-C

> 模型上下文协议：为什么它改变了一切，三个系统如何实现它，MCP与A2A的关系。

- **[7.1 为什么MCP改变了一切](ZH/第07章_MCP/7.1_为什么MCP改变了一切.md)**
- **[7.2 MCP在三个系统中的实现](ZH/第07章_MCP/7.2_MCP实现对比.md)**
- **[7.3 MCP vs A2A：互补而非竞争](ZH/第07章_MCP/7.3_MCP与A2A.md)**

---

### 第8章 配置与可定制性

> 多层配置优先级、项目记忆系统与指令组装流程。

- **[8.1 多层配置优先级](ZH/第08章_配置与可定制性/8.1_多层配置优先级.md)**
- **[8.2 项目记忆系统](ZH/第08章_配置与可定制性/8.2_项目记忆系统.md)**
- **[8.3 指令系统](ZH/第08章_配置与可定制性/8.3_指令系统.md)**

---

## 第三部分：特性分析

### 第9章 OpenCode的独特贡献

> 多界面架构、ACP协议、命名空间组织、SDK可编程性与计划模式。

- **[9.1 多界面架构](ZH/第09章_OpenCode独特贡献/9.1_多界面架构.md)**
- **[9.2 ACP：智能体客户端协议](ZH/第09章_OpenCode独特贡献/9.2_ACP智能体客户端协议.md)**
- **[9.3 命名空间组织模式](ZH/第09章_OpenCode独特贡献/9.3_命名空间组织模式.md)**
- **[9.4 SDK与可编程性](ZH/第09章_OpenCode独特贡献/9.4_SDK与可编程性.md)**
- **[9.5 计划模式](ZH/第09章_OpenCode独特贡献/9.5_计划模式.md)**

---

### 第10章 Oh-My-OpenCode的创新

> 三层编排架构、语义类别、Ultrawork模式、Ralph Loop、智慧积累、41钩子体系、技能嵌入式MCP与Tmux可视化多智能体。

- **[10.1 三层编排架构](ZH/第10章_OMO创新/10.1_三层编排架构.md)**
- **[10.2 语义类别系统](ZH/第10章_OMO创新/10.2_语义类别系统.md)**
- **[10.3 Ultrawork模式](ZH/第10章_OMO创新/10.3_Ultrawork模式.md)**
- **[10.4 Ralph Loop与Todo Continuation](ZH/第10章_OMO创新/10.4_Ralph_Loop与Todo_Continuation.md)**
- **[10.5 智慧积累系统](ZH/第10章_OMO创新/10.5_智慧积累系统.md)**
- **[10.6 41个钩子的5层体系](ZH/第10章_OMO创新/10.6_41钩子5层体系.md)**
- **[10.7 技能嵌入式MCP](ZH/第10章_OMO创新/10.7_技能嵌入式MCP.md)**
- **[10.8 Tmux可视化多智能体](ZH/第10章_OMO创新/10.8_Tmux可视化多智能体.md)**

---

### 第11章 Claude Code的商业设计

> ML权限分类器、成本控制、企业就绪、自定义Ink渲染器、多策略压缩、Bridge/Coordinator模式与100+斜杠命令。

- **[11.1 安全架构](ZH/第11章_Claude_Code商业设计/11.1_安全架构.md)**
- **[11.2 成本控制](ZH/第11章_Claude_Code商业设计/11.2_成本控制.md)**
- **[11.3 企业就绪特性](ZH/第11章_Claude_Code商业设计/11.3_企业就绪特性.md)**
- **[11.4 自定义Ink实现](ZH/第11章_Claude_Code商业设计/11.4_自定义Ink实现.md)**
- **[11.5 多策略上下文压缩](ZH/第11章_Claude_Code商业设计/11.5_多策略上下文压缩.md)**
- **[11.6 Bridge模式与Coordinator模式](ZH/第11章_Claude_Code商业设计/11.6_Bridge与Coordinator模式.md)**
- **[11.7 100+斜杠命令体系](ZH/第11章_Claude_Code商业设计/11.7_斜杠命令体系.md)**

---

## 第四部分：深度剖析——OMO如何构建于OpenCode之上

### 第12章 解剖一个13万行代码的插件

> 源码级深度剖析：Oh-My-OpenCode如何利用OpenCode的插件系统，在不fork宿主任何一行代码的前提下，构建出一整套多智能体编排层。

- **[12.1 插件入口与启动序列](ZH/第12章_OMO深度剖析/12.1_插件入口与启动序列.md)**
  - `src/index.ts`：与OpenCode插件系统的8钩子握手
  - 6阶段初始化：provider → plugin-components → agents → tools → MCPs → commands
  - 生命周期：OMO如何在第一条用户消息到达前完成启动

- **[12.2 8个OpenCode钩子处理器](ZH/第12章_OMO深度剖析/12.2_八个钩子处理器.md)**
  - `config`：向OpenCode注册表注入agents、tools、MCPs、commands
  - `tool`：通过OpenCode SDK注册26个自定义工具
  - `chat.message`：首消息变体门、会话初始化、关键词检测
  - `chat.params`：Anthropic effort level调整
  - `event`：会话生命周期事件处理
  - `tool.execute.before` / `tool.execute.after`：工具前置/后置拦截
  - `experimental.chat.messages.transform`：上下文注入与思维块验证

- **[12.3 工具注入架构](ZH/第12章_OMO深度剖析/12.3_工具注入架构.md)**
  - OMO的26个工具如何通过`plugin/tool-registry.ts`注册
  - 工具包装模式：OpenCode SDK工具 → OMO工具（附加上下文）
  - delegate-task工具：通过OpenCode的会话系统生成子智能体
  - 背景任务工具：基于OpenCode基础设施的并发管理

- **[12.4 智能体系统实现](ZH/第12章_OMO深度剖析/12.4_智能体系统实现.md)**
  - `builtin-agents.ts`：11个智能体的工厂函数，含模型解析与回退链
  - 动态提示构建：`dynamic-agent-prompt-builder.ts`——工具表、委派指南、硬性约束
  - OMO智能体与OpenCode原生智能体概念的映射关系
  - 系统提示组装：模块化段落（身份、访谈、计划生成、行为约束）

- **[12.5 钩子系统：5个OpenCode钩子点上的41个钩子](ZH/第12章_OMO深度剖析/12.5_钩子系统深度剖析.md)**
  - 41个OMO钩子如何复用OpenCode的5个插件钩子点
  - 钩子执行顺序与优先级
  - `tool.execute.before`管线：文件守卫 → 标签截断器 → 规则注入器
  - `experimental.chat.messages.transform`管线：上下文注入 → 思维验证 → todo保护
  - 通过配置启用/禁用钩子

- **[12.6 配置分层](ZH/第12章_OMO深度剖析/12.6_配置分层.md)**
  - OMO的3层配置（project → user → defaults）如何与OpenCode的7层配置共存
  - 22个Zod v4 schema文件：agents、categories、hooks、MCPs、skills、commands、experimental
  - JSONC支持：为什么配置文件中的注释对DX很重要
  - 配置验证与部分回退策略

- **[12.7 Claude Code兼容层](ZH/第12章_OMO深度剖析/12.7_Claude_Code兼容层.md)**
  - 从`.opencode/plugins/`加载Claude Code插件
  - 从`.opencode/command/`加载Claude Code命令
  - 从`.opencode/agents/`加载Claude Code智能体
  - 从`.mcp.json`加载Claude Code MCPs，含`${VAR}`环境变量展开
  - OMO为什么要维护Claude Code兼容性：迁移路径论证

- **[12.8 背景智能体生成器与会话管理](ZH/第12章_OMO深度剖析/12.8_背景智能体生成器.md)**
  - OMO如何为背景智能体创建新的OpenCode会话
  - 并发管理：每个model/provider 5并发
  - 父会话通知机制
  - 通过`session_id`实现会话续接——跨轮次保持完整上下文
  - boulder state：跨中断追踪Sisyphus续接状态

---

## 第五部分：深度对比

### 第13章 架构哲学对比

> 开放vs封闭、简单vs复杂、控制vs自主、通用vs专用。

- **[13.1 开放 vs 封闭](ZH/第13章_架构哲学对比/13.1_开放vs封闭.md)**
- **[13.2 简单 vs 复杂](ZH/第13章_架构哲学对比/13.2_简单vs复杂.md)**
- **[13.3 控制 vs 自主](ZH/第13章_架构哲学对比/13.3_控制vs自主.md)**
- **[13.4 通用 vs 专用](ZH/第13章_架构哲学对比/13.4_通用vs专用.md)**

---

### 第14章 工具系统深度对比

> 工具数量与覆盖度、独特工具、LSP集成深度与工具组合模式。

- **[14.1 工具数量与覆盖度](ZH/第14章_工具系统深度对比/14.1_工具数量与覆盖度.md)**
- **[14.2 独特工具](ZH/第14章_工具系统深度对比/14.2_独特工具.md)**
- **[14.3 LSP集成深度](ZH/第14章_工具系统深度对比/14.3_LSP集成深度.md)**
- **[14.4 工具组合模式](ZH/第14章_工具系统深度对比/14.4_工具组合模式.md)**

---

### 第15章 智能体编排对比

> 单智能体vs多智能体、专业化、背景任务与智慧传递vs上下文隔离。

- **[15.1 编排模式分类](ZH/第15章_智能体编排对比/15.1_编排模式分类.md)**
- **[15.2 单智能体 vs 多智能体](ZH/第15章_智能体编排对比/15.2_单智能体vs多智能体.md)**
- **[15.3 智能体专业化](ZH/第15章_智能体编排对比/15.3_智能体专业化.md)**
- **[15.4 背景任务与并行执行](ZH/第15章_智能体编排对比/15.4_背景任务与并行执行.md)**
- **[15.5 智慧传递 vs 上下文隔离](ZH/第15章_智能体编排对比/15.5_智慧传递vs上下文隔离.md)**

---

### 第16章 可扩展性对比

> 插件系统、技能系统、命令系统、钩子系统与Manifest驱动发现。

- **[16.1 插件系统](ZH/第16章_可扩展性对比/16.1_插件系统.md)**
- **[16.2 技能系统](ZH/第16章_可扩展性对比/16.2_技能系统.md)**
- **[16.3 命令系统](ZH/第16章_可扩展性对比/16.3_命令系统.md)**
- **[16.4 钩子系统](ZH/第16章_可扩展性对比/16.4_钩子系统.md)**
- **[16.5 Manifest驱动发现](ZH/第16章_可扩展性对比/16.5_Manifest驱动发现.md)**

---

### 第17章 安全模型对比

> 权限范式、沙箱化、供应链安全与凭证隔离。

- **[17.1 权限范式](ZH/第17章_安全模型对比/17.1_权限范式.md)**
- **[17.2 沙箱化](ZH/第17章_安全模型对比/17.2_沙箱化.md)**
- **[17.3 供应链安全](ZH/第17章_安全模型对比/17.3_供应链安全.md)**
- **[17.4 凭证隔离](ZH/第17章_安全模型对比/17.4_凭证隔离.md)**

---

## 第六部分：设计最佳实践

### 第18章 理想编码智能体的架构

> 2026年的共识架构、五大定义性张力与三个系统的启示。

- **[18.1 共识架构：2026最佳实践](ZH/第18章_理想架构/18.1_共识架构.md)**
- **[18.2 五大定义性张力](ZH/第18章_理想架构/18.2_五大定义性张力.md)**
- **[18.3 三个系统的启示](ZH/第18章_理想架构/18.3_三个系统的启示.md)**

---

### 第19章 工具设计的艺术

> ACI设计原则、最小工具集、工具输出的认知成本与工具组合vs膨胀。

- **[19.1 ACI（智能体-计算机接口）原则](ZH/第19章_工具设计的艺术/19.1_ACI原则.md)**
- **[19.2 最小工具集原则](ZH/第19章_工具设计的艺术/19.2_最小工具集原则.md)**
- **[19.3 工具输出的认知成本](ZH/第19章_工具设计的艺术/19.3_工具输出的认知成本.md)**
- **[19.4 工具组合 vs 工具膨胀](ZH/第19章_工具设计的艺术/19.4_工具组合vs工具膨胀.md)**

---

### 第20章 上下文工程

> 从提示工程到上下文工程的范式转变——四种记忆策略与溢出恢复。

- **[20.1 从提示工程到上下文工程](ZH/第20章_上下文工程/20.1_从提示工程到上下文工程.md)**
- **[20.2 四种记忆策略](ZH/第20章_上下文工程/20.2_四种记忆策略.md)**
- **[20.3 自动上下文注入](ZH/第20章_上下文工程/20.3_自动上下文注入.md)**
- **[20.4 上下文窗口溢出恢复](ZH/第20章_上下文工程/20.4_上下文窗口溢出恢复.md)**

---

### 第21章 多智能体编排的艺术

> 五种编排模式、何时使用多智能体、专业化设计、智慧积累与并行执行挑战。

- **[21.1 五种编排模式](ZH/第21章_多智能体编排的艺术/21.1_五种编排模式.md)**
- **[21.2 何时使用多智能体](ZH/第21章_多智能体编排的艺术/21.2_何时使用多智能体.md)**
- **[21.3 智能体专业化设计](ZH/第21章_多智能体编排的艺术/21.3_智能体专业化设计.md)**
- **[21.4 智慧积累 vs 上下文隔离](ZH/第21章_多智能体编排的艺术/21.4_智慧积累vs上下文隔离.md)**
- **[21.5 并行执行的挑战](ZH/第21章_多智能体编排的艺术/21.5_并行执行的挑战.md)**

---

### 第22章 可扩展性设计

> 三层内容类型、MCP作为通用基底、生命周期钩子与简单性光谱。

- **[22.1 三层内容类型](ZH/第22章_可扩展性设计/22.1_三层内容类型.md)**
- **[22.2 MCP作为通用扩展基底](ZH/第22章_可扩展性设计/22.2_MCP通用扩展基底.md)**
- **[22.3 生命周期钩子](ZH/第22章_可扩展性设计/22.3_生命周期钩子.md)**
- **[22.4 简单性光谱](ZH/第22章_可扩展性设计/22.4_简单性光谱.md)**

---

### 第23章 安全与自主的平衡

> 威胁模型、沙箱化、能力声明与Claude Code的84%权限减少启示。

- **[23.1 威胁模型](ZH/第23章_安全与自主的平衡/23.1_威胁模型.md)**
- **[23.2 沙箱化是关键](ZH/第23章_安全与自主的平衡/23.2_沙箱化是关键.md)**
- **[23.3 能力声明模式](ZH/第23章_安全与自主的平衡/23.3_能力声明模式.md)**
- **[23.4 从Claude Code学到的](ZH/第23章_安全与自主的平衡/23.4_从Claude_Code学到的.md)**

---

## 第七部分：未来与实践

### 第24章 智能体的下一步

> 从代码生成到软件工程、Vibe Coding、融合趋势与未解决的挑战。

- **[24.1 从"代码生成"到"软件工程"](ZH/第24章_未来展望/24.1_从代码生成到软件工程.md)**
- **[24.2 "Vibe Coding"与开发者角色的演变](ZH/第24章_未来展望/24.2_Vibe_Coding与开发者角色.md)**
- **[24.3 融合趋势](ZH/第24章_未来展望/24.3_融合趋势.md)**
- **[24.4 未解决的挑战](ZH/第24章_未来展望/24.4_未解决的挑战.md)**

---

### 第25章 构建你自己的编码智能体

> 起步决策树、最小可行智能体、避免的陷阱与度量什么。

- **[25.1 起步决策树](ZH/第25章_构建你自己的智能体/25.1_起步决策树.md)**
- **[25.2 最小可行智能体](ZH/第25章_构建你自己的智能体/25.2_最小可行智能体.md)**
- **[25.3 避免的陷阱](ZH/第25章_构建你自己的智能体/25.3_避免的陷阱.md)**
- **[25.4 度量什么](ZH/第25章_构建你自己的智能体/25.4_度量什么.md)**

---

### 第26章 设计"Oh-My-Claude-Code"——为Claude Code构建多智能体插件

> 一个思想实验与架构蓝图：如果我们要为Claude Code构建一个等价于OMO的编排层，它会是什么样？什么是可能的，什么是缺失的，什么需要改变？

- **[26.1 Claude Code的扩展面：今天有什么](ZH/第26章_Oh_My_Claude_Code/26.1_Claude_Code扩展面.md)**
  - 钩子（session_start、pre_compact、post_compact、post_sampling、file_changed）
  - 插件（.claude/plugins/）含commands、tools、skills、hooks
  - 自定义智能体（.claude/agents/）含markdown定义
  - MCP服务器（.claude/mcp.json）用于外部工具
  - CLAUDE.md / 记忆系统用于持久化上下文
  - 暴露了什么 vs 锁定了什么

- **[26.2 差距分析：OpenCode插件API vs Claude Code扩展API](ZH/第26章_Oh_My_Claude_Code/26.2_差距分析.md)**
  - OpenCode的8个钩子点（config、tool、chat.message、chat.params、event、tool.execute.before/after、experimental.chat.messages.transform）——完整生命周期控制
  - Claude Code的钩子点——更有限，聚焦安全
  - OMO的哪些功能今天就能在Claude Code上实现 vs 哪些需要API变更
  - "消息变换"差距：为什么上下文注入在Claude Code上更难

- **[26.3 架构蓝图：Oh-My-Claude-Code](ZH/第26章_Oh_My_Claude_Code/26.3_架构蓝图.md)**
  - 通过自定义智能体 + AgentTool实现多智能体编排
  - 通过TaskCreate/TaskGet/TaskOutput实现背景任务委派
  - 利用Claude Code原生skills + MCP的技能系统
  - 通过CLAUDE.md + .claude/settings.json实现配置
  - "Sisyphus提示"方法：在系统提示中编码编排逻辑
  - 通过记忆系统 + 结构化笔记实现智慧积累

- **[26.4 今天能实现什么：实用实施计划](ZH/第26章_Oh_My_Claude_Code/26.4_实用实施计划.md)**
  - 阶段1：带专业化提示的自定义智能体（Oracle、Explore、Librarian等价物）
  - 阶段2：基于钩子的续接（post_sampling → todo强制）
  - 阶段3：基于MCP的工具增强（AST-grep、会话管理、LSP扩展）
  - 阶段4：基于插件的编排层
  - 预估工作量与token成本影响

- **[26.5 缺失的部分：致Claude Code可扩展性的公开信](ZH/第26章_Oh_My_Claude_Code/26.5_缺失的部分.md)**
  - `chat.message`钩子：在LLM之前拦截和变换消息
  - `tool.execute.before/after`钩子：工具前置/后置拦截
  - 插件级工具注册：在MCP之外添加工具
  - 智能体级模型选择：为不同智能体选择不同模型
  - 带会话续接的背景智能体生成
  - 呼吁更丰富的插件SDK

- **[26.6 融合预测：OpenCode和Claude Code的插件API会合并吗？](ZH/第26章_Oh_My_Claude_Code/26.6_融合预测.md)**
  - MCP作为最大公约数
  - 更丰富钩子系统的趋势
  - 开源创新推动商业特性采纳
  - 统一的智能体可扩展性标准：可能吗？

---

## 附录

### 附录A 三系统完整工具清单
- OpenCode、OMO和Claude Code的完整工具列表，含参数、权限与描述

### 附录B 三系统完整配置参考
- 三个系统的配置schema与选项

### 附录C 关键源代码路径映射
- 概念到源代码文件的快速查引表

### 附录D MCP服务器生态概览
- 传输类型、社区服务器、官方注册中心

### 附录E 推荐阅读与参考文献
- Anthropic: Building Effective Agents (2024.12)
- Anthropic: Effective Context Engineering (2025.09)
- Anthropic: Claude Code Sandboxing (2025.10)
- Anthropic: Multi-Agent Research System (2025.06)
- MCP官方文档
- Zylos: AI Coding Agents 2025–2026
- Zylos: Plugin and Extension Architecture
- GuruSup: Agent Orchestration Patterns
- SWE-bench & SWE-bench Pro基准测试

### 附录F 术语表
- LLM、Token、上下文窗口（Context Window）、函数调用（Function Calling）、ReAct、智能体（Agent）、MCP、ACP、A2A、LSP、AST、SSE、Monorepo、TUI、防呆设计（Poka-yoke）、ACI（智能体-计算机接口）、JSONL、Zod 等

---

## 源代码文件索引

> 本书涉及的关键源代码文件快速查引

| 章节 | OpenCode文件 | OMO文件 | Claude Code文件 |
|------|-------------|---------|----------------|
| 第3章：ReAct循环 | `session/processor.ts`, `session/llm.ts` | （继承OpenCode） | `QueryEngine.ts`, `query.ts`, `main.tsx` |
| 第4章：工具 | `tool/tool.ts`, `tool/registry.ts`, `tool/*.ts` | `src/tools/index.ts`, `src/tools/*` | `Tool.ts`, `tools.ts`, `tools/*` |
| 第5章：会话 | `session/index.ts`, `session/message-v2.ts`, `session/compaction.ts` | `src/features/claude-code-session-state/` | `utils/sessionStorage.ts`, `services/compact/*` |
| 第6章：LLM | `provider/provider.ts`, `provider/transform.ts`, `provider/models.ts` | `src/tools/delegate-task/category-resolver.ts` | `utils/model/model.ts`, `utils/model/providers.ts` |
| 第7章：MCP | `mcp/index.ts`, `mcp/auth.ts` | `src/mcp/*`, `src/features/skill-mcp-manager/` | `services/mcp/client.ts`, `services/mcp/config.ts` |
| 第8章：配置 | `config/config.ts`, `config/paths.ts` | `src/config/schema/*`, `src/plugin-config.ts` | `utils/config.ts`, `utils/settings/*` |
| 第9章：OpenCode | `cli/cmd/tui/app.tsx`, `acp/*`, `sdk/js/*` | — | — |
| 第10章：OMO | — | `src/agents/*`, `src/hooks/*`, `src/features/*` | — |
| 第11章：Claude Code | — | — | `utils/permissions/*`, `cost-tracker.ts`, `ink/*` |
| **第12章：OMO深度剖析** | `plugin/index.ts`（宿主） | `src/index.ts`, `src/plugin/*`, `src/agents/builtin-agents.ts`, `src/hooks/index.ts`, `src/config/schema/*`, `src/features/background-agent/*`, `src/features/claude-code-*-loader/*` | — |
| 第15章：编排 | `agent/agent.ts` | `src/agents/atlas/*`, `src/agents/prometheus/*` | `tools/AgentTool/*`, `tasks/*` |
| 第16章：可扩展性 | `plugin/index.ts`, `skill/skill.ts` | `src/hooks/index.ts`（41个钩子） | `utils/plugins/*`, `skills/*` |
| 第17章：安全 | `permission/next.ts` | `src/hooks/comment-checker/` | `utils/permissions/permissionSetup.ts`, `utils/permissions/yoloClassifier.ts` |
| **第26章：Oh-My-Claude-Code** | — | （参考架构） | `utils/hooks/*`, `utils/plugins/*`, `tools/AgentTool/*`, `tasks/*`, `skills/*` |
