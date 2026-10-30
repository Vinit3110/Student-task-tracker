import { describe, expect, it } from "vitest";
import { filterTasks } from "./filterTasks";
import type { Task } from "../types/task";

const tasks: Task[] = [
  { id: "1", title: "Read chapter", priority: "low", completed: false },
  { id: "2", title: "Finish assignment", priority: "high", completed: false },
  { id: "3", title: "Review notes", priority: "medium", completed: true }
];

describe("filterTasks", () => {
  it("returns all tasks for the all filter", () => {
    expect(filterTasks(tasks, "all")).toHaveLength(3);
  });

  it("returns only tasks matching the selected priority", () => {
    expect(filterTasks(tasks, "high").map((task) => task.id)).toEqual(["2"]);
    expect(filterTasks(tasks, "medium").map((task) => task.id)).toEqual(["3"]);
    expect(filterTasks(tasks, "low").map((task) => task.id)).toEqual(["1"]);
  });
});
