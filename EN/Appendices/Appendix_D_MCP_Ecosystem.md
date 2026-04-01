> Model: openai/gpt-5.4
> Token Usage (estimated): ~3,100 tokens
> Generated: 2026-04-01
> Book: Claude Code VS OpenCode: Architecture, Design & The Road Ahead

# Appendix D: MCP Ecosystem Overview

Model Context Protocol (MCP) has become the common extensibility substrate for agent systems. It standardizes how an agent discovers tools, resources, prompts, and authentication flows exposed by external servers.

## Transport types

| Transport | How it works | Strengths | Typical use |
|---|---|---|---|
| `stdio` | Agent spawns a local process and talks over stdin/stdout | Simple, local, secure-by-default, easy packaging | Local developer tools, databases, filesystem helpers |
| `SSE` | Server-Sent Events stream from a long-lived HTTP connection | Good for streaming events over web infra | Hosted MCP services with event streams |
| `HTTP` | Request/response over ordinary HTTP | Familiar ops model, proxy-friendly | SaaS-hosted MCP endpoints and gateways |
| `WebSocket` | Full-duplex persistent socket | Bidirectional low-latency interaction | Realtime collaboration, browser/remote control |

In systems terms, transport is not the protocol itself; it is the carrier. A CS textbook may discuss this under the distinction between an application protocol and a transport channel.

## Popular community servers

| Server family | What it exposes | Why it matters |
|---|---|---|
| Postgres / SQL | Query execution, schema introspection, migrations, row reads | Lets agents inspect and operate on real application data safely and explicitly. |
| GitHub | PRs, issues, checks, comments, repo metadata | Essential for coding agents that operate in pull-request workflows. |
| Slack | Channels, messages, notifications, retrieval | Connects coding work to team communication loops. |
| Browser / Playwright | Navigation, DOM inspection, screenshots, form interaction | Turns agents into web testers and UI operators. |
| Filesystem / shell wrappers | Controlled local execution and file access | Still the most common MCP entry point for bespoke automation. |
| Cloud APIs | Storage, deployment, observability, tickets | Moves agents from “code helper” toward “ops participant.” |

## Why MCP spread so quickly

MCP succeeded because it solves a boring but foundational problem: capability interoperability. Before MCP, every framework invented its own tool schema, auth model, and lifecycle semantics. That created what operating-systems courses would call a fragmentation problem: many interfaces, little portability. MCP reduces that integration tax.

## Official registry

The ecosystem is increasingly organized around the official registry:

- Registry UI: `https://registry.modelcontextprotocol.io/`
- Registry docs: `https://modelcontextprotocol.io/registry`
- Registry API docs: `https://registry.modelcontextprotocol.io/docs`

The registry plays the role that a package index plays in older software ecosystems: it provides discoverability, metadata, version identity, and eventually trust signals. This is why it matters even when you can still install servers directly from GitHub.

## Relationship to the three systems

- **OpenCode** treats MCP as a first-class extension mechanism in its config and runtime.
- **OMO** goes further by embedding MCP into skills and combining it with orchestration logic.
- **Claude Code** invests heavily in MCP operations, auth, validation, registry integration, and project/user scope management.

The broad design lesson is that MCP is becoming the “device driver layer” of agent systems. That analogy is not exact, but it is useful: the model does not need to know every external system natively if the runtime can normalize external capabilities into a common protocol.
