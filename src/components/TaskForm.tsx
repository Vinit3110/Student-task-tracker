import { useState, type FormEvent } from "react";
import type { Priority } from "../types/task";

interface TaskFormProps {
  onAdd: (title: string, priority: Priority) => void;
}

export function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    onAdd(cleanTitle, priority);
    setTitle("");
    setPriority("medium");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task-title">Task title</label>
      <input
        id="task-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="e.g. 🎃 Finish DSA assignment before dawn…"
      />
      <label className="sr-only" htmlFor="task-priority">Priority</label>
      <select id="task-priority" value={priority} onChange={(event) => setPriority(event.target.value as Priority)}>
        <option value="low">Low priority</option>
        <option value="medium">Medium priority</option>
        <option value="high">High priority</option>
      </select>
      <button type="submit">🕷️ Add task</button>
    </form>
  );
}
