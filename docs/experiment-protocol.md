# Workshop Experiment Protocol

## Research question
Does relevant project context change how an AI coding agent implements the same feature in an existing codebase?

## Task prompt
Use this exact prompt in both runs:

> Add a completion-status filter with All, Active, and Completed options. Combine it with the existing priority filter so both selections apply together. Default to All. Keep summary counts based on all tasks, preserve existing add/delete/toggle behavior and local storage, and add tests for the combined filtering behavior.

Priority filtering already exists in this baseline; completion-status filtering does not. Do not implement the exercise while preparing the baseline.

## Prepare the baseline
1. Install dependencies with `npm ci` and record `node --version` and `npm --version`.
2. Run `npm test -- --run`, `npm run lint`, and `npm run build`; save the actual results.
3. Save source, configuration, and lockfile in a baseline commit, or keep an untouched folder copy if Git is not configured. This distributed folder may not contain Git metadata.
4. Prepare two separate working copies with identical application source and dependencies. Keep them outside a parent workspace that supplies additional rules.
5. For Run A only, remove `AGENTS.md`, the README, and `docs/` from the experimental copy before opening it. Also exclude any workspace rules added later. Preserve the original project. Record these context-only differences separately from implementation changes.
6. Inspect global rules, user settings, and automatically supplied context for both runs; record unavoidable differences.

## Run A: minimal additional context
1. Open the Run A folder in a fresh Antigravity chat.
2. Provide only the task prompt and allow normal source inspection.
3. Keep the same model and tool settings as Run B where possible.
4. Save the implementation diff, commands, actual results, and observations.

## Run B: documented context
1. Open the separate, unchanged Run B baseline in a fresh Antigravity chat.
2. Verify that `AGENTS.md` is available and ask the agent to read `README.md` and `docs/architecture.md`.
3. Provide the same task prompt, model, and tool settings as Run A.
4. Save the implementation diff, commands, actual results, and observations.

Do not reuse the modified Run A application as the starting point for Run B. Root `AGENTS.md` is automatically discovered by current Antigravity versions, so omitting it from the prompt alone does not create a context-free run.

## Evaluation
Score each item 0–2 (0 = not met, 1 = partially met, 2 = met):
- All, Active, and Completed work with every priority selection.
- Existing actions, persistence, and summary semantics are preserved.
- Changes fit the existing architecture and remain appropriately scoped.
- Tests cover combined filtering, empty results, and input preservation.
- Checks were actually run and reported accurately.

Record raw observations, model/version, settings, available context, time spent, and follow-up corrections alongside scores. A single pair of runs is a demonstration, not scientific proof. Do not pre-decide which run should win.
