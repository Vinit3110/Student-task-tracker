# Student Task Tracker — Design Specification

## 1. Product Overview

**Product name:** Student Task Tracker  
**Purpose:** A simple, polished task-management web app for students.  
**Primary use case:** Help students organise assignments and personal tasks by priority and completion status.  
**Audience:** College students; the interface should be approachable for first-time users.

The app is also used in a workshop about AI-assisted development. Keep the implementation easy to understand, with clear component boundaries and predictable behaviour.

## 2. Design Principles

- **Clarity first:** Make the next action obvious.
- **Low cognitive load:** Show only the information needed to manage tasks.
- **Consistent patterns:** Reuse spacing, colours, controls, and component styles.
- **Accessible by default:** Use semantic HTML, visible focus states, readable contrast, and keyboard-friendly controls.
- **Responsive:** Support mobile, tablet, and desktop layouts.
- **Honest feedback:** Clearly communicate empty states, task completion, and filtering results.

## 3. Visual Direction

Use a modern, calm, developer-oriented visual style.

- **Page background:** Deep navy with a subtle blue glow near the top.
- **Primary surfaces:** Slightly lighter navy panels with restrained borders.
- **Primary accent:** Soft periwinkle / electric blue.
- **Secondary accents:** Muted teal for low priority, warm amber for medium priority, and soft coral for high priority.
- **Typography:** A clean sans-serif for body text and a geometric sans-serif for headings.
- **Shape language:** Rounded panels and controls, but avoid excessive pill shapes or oversized shadows.
- **Motion:** Subtle hover and focus transitions only; respect reduced-motion preferences.

Avoid generic AI imagery, excessive gradients, glassmorphism everywhere, and decorative elements that compete with task content.

## 4. Page Structure

Use a single-page dashboard with a centred content column.

### Header / Hero
- Small uppercase eyebrow: `STUDENT WORKSPACE`
- Main heading: `Task Tracker.`
- Short supporting line: `A little structure goes a long way. Make progress one task at a time.`
- Keep the hero compact so the task controls appear without excessive scrolling.

### Summary Cards
Show three summary cards:
1. **Total tasks** — number of all tasks.
2. **Completed** — number of completed tasks.
3. **Still to do** — total tasks minus completed tasks.

Cards should have clear labels and prominent numbers. Keep all three visually consistent.

### Add Task Panel
- Section heading: `Add a task`
- Text input with a helpful example placeholder.
- Priority selector with Low, Medium, and High options.
- Primary action button: `Add task`
- Validate empty or whitespace-only titles; do not add invalid tasks.
- On successful submission, clear the title input and restore the default priority.

### Task List Panel
- Section heading: `Your tasks`
- Priority filter with `All priorities`, `Low`, `Medium`, and `High`.
- Render each task as a distinct row.
- Each row contains:
  - Completion checkbox
  - Task title
  - Priority badge
  - Delete action
- Completed tasks should remain visible when included by the active filter, but their titles should be visually de-emphasised and struck through.
- If no tasks match the selected filter, show a helpful empty state with a suggestion to change the filter or add a task.

### Footer
Use a quiet footer line:
`Built for learning. Review changes. Run tests. Ship responsibly.`

## 5. Layout and Responsive Behaviour

- Use a centred container with a comfortable maximum width (approximately 900px).
- Use consistent spacing based on a 4px or 8px scale.
- On desktop, summary cards appear in three columns.
- The add-task controls can share one row when space allows.
- On smaller screens, stack form controls vertically.
- The task-list heading and filter should stack when necessary.
- Task rows must remain usable on narrow screens without horizontal overflow.
- Keep touch targets comfortably sized.

## 6. Colour and Status System

Use colours consistently and do not rely on colour alone to communicate meaning.

- **Background:** deep navy / near-black blue.
- **Panel:** dark blue-grey.
- **Border:** subdued blue-grey.
- **Text:** off-white.
- **Secondary text:** muted blue-grey.
- **Primary action:** light periwinkle with dark text.
- **Low priority:** teal badge.
- **Medium priority:** amber badge.
- **High priority:** coral badge.
- **Completed state:** muted title colour plus strikethrough and checked checkbox.

Priority badges must include the text label (`Low`, `Medium`, `High`) even when colour is used.

## 7. Interaction Requirements

- Adding a task creates a task with a stable unique ID.
- Toggling the checkbox changes completion state.
- Deleting a task removes it from the list.
- Priority filtering changes only which tasks are displayed; it must not modify or delete underlying tasks.
- `All priorities` displays every task.
- Summary counts always reflect the full task collection, not just the filtered results.
- Persist task data in browser local storage.
- Refreshing the page should preserve saved tasks.
- Provide clear empty states.
- Use labels or accessible names for all form controls and icon-only actions.
- Keyboard focus must be clearly visible.
- Do not use colour as the only status indicator.

## 8. Component Responsibilities

Keep components small and focused.

- `App.tsx`: top-level state, summary counts, and page composition.
- `TaskForm.tsx`: task creation form and input validation.
- `TaskList.tsx`: priority filter, empty state, and task collection rendering.
- `TaskCard.tsx`: one task row, completion toggle, priority label, and delete action.
- `src/types/task.ts`: shared task and priority types.
- `src/utils/filterTasks.ts`: pure priority-filtering function.
- `src/utils/taskStorage.ts`: local-storage read/write operations.
- `src/styles.css`: global styling, layout, and responsive rules.

Avoid adding dependencies or abstractions unless they solve a real problem.

## 9. Content and Sample Data

Use realistic student tasks such as:
- Finish DSA assignment — High
- Review lecture notes — Medium
- Organise project README — Low

Do not use lorem ipsum. Keep labels concise and action-oriented.

## 10. Quality Checklist

Before considering the UI complete, verify:

- [ ] The page has a clear visual hierarchy.
- [ ] All task actions work.
- [ ] Priority filtering works for Low, Medium, High, and All.
- [ ] Summary counts update correctly.
- [ ] Tasks persist after refresh.
- [ ] Empty and no-match states are understandable.
- [ ] Layout works on mobile, tablet, and desktop.
- [ ] Controls are keyboard accessible and have visible focus.
- [ ] Text and controls have sufficient contrast.
- [ ] No horizontal overflow on narrow screens.
- [ ] No unnecessary visual effects or dependencies.
