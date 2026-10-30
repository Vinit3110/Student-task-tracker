import type { PriorityFilter, Task } from "../types/task";

export function filterTasks(tasks: Task[], filter: PriorityFilter): Task[] {
  if (filter === "all") return tasks;
  return tasks.filter((task) => task.priority === filter);
}
