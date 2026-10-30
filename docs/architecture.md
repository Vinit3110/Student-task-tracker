# Architecture

## Overview
Student Task Tracker is a client-side React + TypeScript application built with Vite. It uses browser local storage and has no backend, authentication, or environment-variable requirements.

## Current responsibilities
- `src/main.tsx`: mounts the React application in StrictMode.
- `src/App.tsx`: owns tasks and the selected priority filter, handles add/toggle/delete actions, derives visible tasks and summary counts, and saves tasks after changes.
- `src/components/TaskForm.tsx`: captures title and priority; trims titles and rejects blank input.
- `src/components/TaskList.tsx`: renders the priority selector, task collection, and empty state.
- `src/components/TaskCard.tsx`: renders one task, its completion checkbox, priority, and delete action.
- `src/types/task.ts`: defines `Task`, `Priority`, and `PriorityFilter`.
- `src/utils/filterTasks.ts`: derives the visible collection without mutating tasks.
- `src/utils/taskStorage.ts`: reads and writes the `student-task-tracker.tasks` local-storage key.
- `src/utils/filterTasks.test.ts`: colocated Vitest tests for All, Low, Medium, and High filtering.
- `src/styles.css`: application styles.
- `vite.config.ts`: React plugin and Vitest jsdom environment.

## State and filtering
Tasks have an id, title, priority (`low`, `medium`, or `high`), and completed boolean. New tasks use `crypto.randomUUID()`. The priority filter defaults to `all` and is not persisted. Filtering must not delete or mutate tasks. Summary counts describe all tasks, independent of the filter. Completion-status filtering is not implemented yet.

## Existing persistence limitations
Loading missing, unreadable, or non-array storage returns an empty array. Individual stored task fields are not validated. The app replaces an empty loaded array with example tasks, so deleting all tasks and reloading restores those examples. Storage writes do not currently catch errors. Treat these as explicit future fixes, rather than silently changing them during unrelated work.

## Verification and constraints
Run `npm test -- --run`, `npm run lint`, and `npm run build` for application changes. Unit tests live beside source files; no component or browser tests currently exist. Keep the implementation understandable for beginners, reuse existing components/types/utilities, and preserve unrelated behavior. See `AGENTS.md` for repository instructions.
