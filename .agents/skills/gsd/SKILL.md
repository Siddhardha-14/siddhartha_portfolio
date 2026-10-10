---
name: gsd
description: Get Shit Done (GSD) spec-driven development workflow. Enforces structured context management, .planning directory maintenance, and phase-based development (Discuss, Plan, Execute, Verify, Ship).
---

# Get Shit Done (GSD) Skill

This skill operationalizes the Get Shit Done (GSD) framework for autonomous AI software engineering.

## When to Use
Activate this skill whenever:
- Starting a new feature, refactoring, or bugfix in the workspace.
- Reviewing overall progress against roadmap milestones.
- Managing project context to avoid context degradation and hallucinations.

## Workflow Phases

### 1. Discuss & Ingest
- Read `.planning/STATE.md` to establish current project baseline.
- Align on goals, scope, and acceptance criteria with the user.

### 2. Plan
- Map requested changes to specific requirement IDs in `.planning/REQUIREMENTS.md`.
- Determine file modifications and dependencies.

### 3. Execute
- Perform atomic code modifications.
- Keep changes concise, modular, and well-typed.

### 4. Verify
- Run lint checks (`npm run lint`).
- Run production build (`npm run build`).
- Verify in browser via visual/functional inspection.

### 5. Ship & Record State
- Update `.planning/STATE.md` with:
  - Completed items.
  - New decisions or architectural notes.
  - Active next steps.
- Mark completed milestones in `.planning/ROADMAP.md`.
