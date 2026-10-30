import type { PriorityFilter, Task } from "../types/task";
import { TaskCard } from "./TaskCard";

interface TaskListProps {
  tasks: Task[];
  filter: PriorityFilter;
  onFilterChange: (filter: PriorityFilter) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, filter, onFilterChange, onToggle, onDelete }: TaskListProps) {
  return (
    <section aria-labelledby="tasks-heading">
      <div className="section-heading">
        <h2 id="tasks-heading">🕯️ Your tasks</h2>
        <label className="filter-control">
          <span>Filter priority</span>
          <select value={filter} onChange={(event) => onFilterChange(event.target.value as PriorityFilter)}>
            <option value="all">All priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      {tasks.length === 0 ? (
        <p className="empty-state">🕸️ No tasks lurking here. Try another filter or summon a new task above.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </section>
  );
}
