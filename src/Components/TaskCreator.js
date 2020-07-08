class Task {
  constructor(title, description, dueDate, priority, notes = '', done = false) {
    this.title = title;
    this.description = description;
    this.done = done;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
}

function renderTask(task) {
  const tasker = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  tasker.textContent = task.title;
  tasker.appendChild(deleteButton);
  return tasker;
}

export { Task, renderTask };
