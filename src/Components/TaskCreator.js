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
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  editButton.classList.add('edit-button');

  tasker.textContent = task.title;

  tasker.appendChild(editButton);

  tasker.appendChild(deleteButton);
  return tasker;
}

export { Task, renderTask };
