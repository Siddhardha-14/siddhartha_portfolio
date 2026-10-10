# AGENTS.md — Get Shit Done (GSD) Workflow Guidelines

This repository follows the **Get Shit Done (GSD)** spec-driven development framework. All AI agents, contributors, and pairing sessions must adhere to these conventions.

---

## 1. Source of Truth
The `.planning/` directory contains the persistent project truth:
- **`.planning/PROJECT.md`**: Project vision, constraints, and architecture.
- **`.planning/REQUIREMENTS.md`**: Explicit requirement IDs and deliverables.
- **`.planning/ROADMAP.md`**: Phased milestones and progress.
- **`.planning/STATE.md`**: Living memory of current progress, blockers, and next steps.
- **`.planning/config.json`**: GSD system configuration.

**MANDATORY:** Before proposing changes or executing code, agents must read `.planning/STATE.md` and `.planning/PROJECT.md`.

---

## 2. The GSD Execution Loop
All development proceeds through five deliberate phases:
1. **Discuss / Clarify:** Understand user intent without premature assumption.
2. **Plan:** Identify specific files and create a discrete, atomic execution plan.
3. **Execute:** Implement changes cleanly without breaking existing functionality.
4. **Verify:** Run linters, test builds, and inspect runtime behavior (browser verification).
5. **Ship & Update State:** Record progress in `.planning/STATE.md` and check off completed items in `.planning/ROADMAP.md`.

---

## 3. Engineering Guardrails
- **Zero Breakage:** Maintain backwards compatibility for existing assets and routes.
- **Zero Linter Warnings:** Code must pass `npm run lint` with 0 errors and 0 warnings.
- **Performance Budget:** Keep assets optimized; maintain sub-second page rendering.
