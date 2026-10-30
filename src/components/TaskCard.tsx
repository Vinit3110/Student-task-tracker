import type { Task } from "../types/task";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <li className={`task-card ${task.completed ? "is-complete" : ""}`}>
      <label className="task-title">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <span className={`priority priority-${task.priority}`}>{task.priority}</span>
      <button className="delete-button" onClick={() => onDelete(task.id)} aria-label={`Delete ${task.title}`}>
        💀 Delete
      </button>
    </li>
  );
}
