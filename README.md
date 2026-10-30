# Student Task Tracker

A small React + TypeScript app for the workshop **AI Coding: Context Is Everything**, ready for development in Antigravity.

## Quick start in Antigravity
1. Open this project folder as the workspace: `D:\Codes\Project\student-task-tracker-starter` on this machine. On another machine, open the folder containing this README and `package.json`.
2. Use Node.js 24.x with npm. In the workspace terminal, run:

```bash
npm ci
npm run dev
```

3. Open the local URL printed by Vite. There is no backend, API key, or `.env` file to configure.
4. Start a new agent chat and use the starter prompt below. Review its changes and actual check results.

```text
Read AGENTS.md, README.md, and docs/architecture.md. Inspect the relevant source and tests before changing code. Follow the repository instructions and keep changes focused. My task is: [describe the change]. After implementation, run npm run check and report the changed files, actual results, and remaining limitations.
```

Replace the bracketed task with your request. For a first read-only check, use: `Summarize the current app and confirm which project instructions you loaded; do not change files.`

## Agent instructions
`AGENTS.md` is the single source of repository rules. Current Antigravity versions discover root `AGENTS.md` directly; a duplicate `GEMINI.md` or rules file is unnecessary. Verify discovery in your installed version with the read-only prompt above. If it is not loaded, explicitly attach the file in chat or configure a workspace rule through Customizations > Rules that asks the agent to read it.

See the [official Antigravity rules documentation](https://antigravity.google/docs/rules/) for discovery and configuration details. Keep project rules local to this workspace.

## Implemented features
- Add tasks with trimmed, non-empty titles and Low, Medium, or High priority.
- Mark tasks complete or active and delete tasks.
- Filter by All, Low, Medium, or High priority.
- Show total, completed, and remaining counts across all tasks.
- Persist tasks in browser local storage.

## Commands
| Command | Purpose |
| --- | --- |
| `npm ci` | Install the versions in `package-lock.json` |
| `npm run dev` | Start the Vite development server |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run tests once (`npm test -- --run` also works) |
| `npm run lint` | Run ESLint |
| `npm run build` | Check TypeScript and build into `dist/` |
| `npm run preview` | Serve the production build locally after building |
| `npm run check` | Run tests, lint, and build in sequence |

Direct dependencies are pinned and the lockfile is included. Use `npm ci` for repeatable installation; use `npm install` when intentionally changing dependencies and keep both package files together. Tooling is in devDependencies; React and React DOM are runtime dependencies. `@eslint/js` supplies the recommended rules imported by the ESLint configuration.

On Windows, stop this project's running development server with Ctrl+C before `npm ci`. A running Vite process can lock its native dependency and cause an `EPERM` error. Restart the server after installation.

## Project context
- [AGENTS.md](AGENTS.md): instructions for coding agents.
- [Architecture](docs/architecture.md): actual file responsibilities, state flow, and known limitations.
- [Experiment protocol](docs/experiment-protocol.md): controlled workshop comparison and evaluation.

## Workshop exercise
Priority filtering is already implemented and tested. The next exercise is:

> Add a completion-status filter with All, Active, and Completed options. Combine it with the existing priority filter so both selections apply together. Default to All. Keep summary counts based on all tasks, preserve existing add/delete/toggle behavior and local storage, and add tests for the combined filtering behavior.

This feature is deliberately left unimplemented for the exercise. Follow the protocol to prepare separate copies of the same baseline with different context availability. Do not assume the context-rich run will automatically be better.

## Known limitations
The current app restores example tasks whenever the saved list is empty, including after deleting all tasks and reloading. Stored task fields are not validated, and storage write errors are not handled. Automated coverage currently consists of two filtering utility tests; component interactions and browser behavior have no automated coverage.

This folder may not include Git metadata. Initialize version control or save a clean copy before workshop experiments if you need reliable diffs and rollback. Antigravity instruction discovery must be verified in your own installed client.
