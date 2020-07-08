class Task {
  constructor(title, description, dueDate, priority, notes = "", done = false) {
    this.title = title;
    this.description = description;
    this.done = done;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

function taskRender(task) {
  const tasker = document.createElement("li");

  tasker.textContent = task.title;
  return tasker;
}

export { Task, taskRender };
