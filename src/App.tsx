import { useEffect, useMemo, useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import type { Priority, PriorityFilter, Task } from "./types/task";
import { filterTasks } from "./utils/filterTasks";
import { loadTasks, saveTasks } from "./utils/taskStorage";
import "./styles.css";

const starterTasks: Task[] = [
  { id: "task-1", title: "🩸 Finish DSA assignment before dawn", priority: "high", completed: false },
  { id: "task-2", title: "👻 Review lecture notes", priority: "medium", completed: false },
  { id: "task-3", title: "🕸️ Organise project README", priority: "low", completed: true }
];

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = loadTasks();
    return saved.length ? saved : starterTasks;
  });
  const [filter, setFilter] = useState<PriorityFilter>("all");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const visibleTasks = useMemo(() => filterTasks(tasks, filter), [tasks, filter]);
  const completedCount = tasks.filter((task) => task.completed).length;

  function addTask(title: string, priority: Priority) {
    setTasks((current) => [
      ...current,
      { id: crypto.randomUUID(), title, priority, completed: false }
    ]);
  }

  function toggleTask(id: string) {
    setTasks((current) =>
      current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  }

  function deleteTask(id: string) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">🎃 HAUNTED STUDENT WORKSPACE</p>
        <h1>Task Tracker<span>.</span></h1>
        <p className="hero-copy">
          👻 Don't let your tasks haunt you. Conquer them one by one — before the witching hour.
        </p>
      </header>

      <section className="summary-grid" aria-label="Task summary">
        <article className="summary-card"><span>🕷️ Total tasks</span><strong>{tasks.length}</strong></article>
        <article className="summary-card"><span>✅ Completed</span><strong>{completedCount}</strong></article>
        <article className="summary-card"><span>💀 Still to do</span><strong>{tasks.length - completedCount}</strong></article>
      </section>

      <section className="panel">
        <h2>🦇 Add a task</h2>
        <TaskForm onAdd={addTask} />
      </section>

      <section className="panel">
        <TaskList tasks={visibleTasks} filter={filter} onFilterChange={setFilter} onToggle={toggleTask} onDelete={deleteTask} />
      </section>

      <footer>🕸️ Built for learning. Review changes. Run tests. Ship before sunrise. 🌕</footer>
    </main>
  );
}
