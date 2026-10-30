# Repository Instructions

## Project context
- Read `README.md` and `docs/architecture.md` before implementation work.
- This is an existing client-side React + TypeScript app using Vite; do not scaffold it again.
- Task state and persistence are coordinated in `src/App.tsx`; shared types and utilities live in `src/types/` and `src/utils/`.
- Priority filtering already exists. Completion-status filtering is a future workshop exercise, not an instruction to implement it automatically.
- Keep this file as the shared source of repository instructions for Antigravity and other coding agents.

## Before editing
- Inspect the existing implementation and relevant tests before making changes.
- Prefer small, targeted changes over broad refactors.
- Reuse existing components, types, and utilities where practical.

## Code conventions
- Use React function components and TypeScript.
- Keep component responsibilities clear.
- Avoid `any` unless there is a clear reason.
- Do not add dependencies without explaining why they are needed.
- Preserve existing behavior unless the task explicitly changes it.

## Testing and verification
- Use Node.js 24.x and `npm ci` to install the pinned dependencies from `package-lock.json`.
- Run `npm run check` for the complete test, lint, and build sequence after application or tooling changes.
- Existing unit tests are colocated with source files (for example, `src/utils/filterTasks.test.ts`).
- Use `npm test -- --run` for a single Vitest run; `npm test` starts watch mode.
- Use `npm run lint` for ESLint and `npm run build` for TypeScript checking and the Vite production build when relevant.
- Add or update tests for changed behavior when a test setup exists.
- Run the relevant tests and report the command and actual result.
- Never claim tests passed unless they were actually run.
- If a check cannot be run, state that clearly.

## Final response
Summarize:
1. What changed.
2. Which files changed.
3. What checks were run and their actual results.
4. Any limitations or follow-up work.
