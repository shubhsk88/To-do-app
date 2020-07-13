class Task {
  constructor(title, description, dueDate, priority, notes = '', done = false) {
    this.title = title;
    this.description = description;
    this.done = done;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }
  updateTask(title, description, dueDate, priority, notes = '', done = false) {
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
  const checked = document.createElement('button');
  checked.classList.add(
    'border-2',
    'mx-2',
    'h-16',
    'w-16',
    'p-2',
    'rounded-lg',
    'border-gray-200',
    'bg-white'
  );
  // checked.classList.add(...arr);
  tasker.classList.add(
    'flex',
    'border',
    'w-full',
    'px-2',
    'py-4',
    'my-4',
    'rounded',
    'bg-gray-100',
    'items-center',
    'justify-between'
  );
  const deleteButton = document.createElement('button');
  let arr = ['rounded', 'p-4', 'text-2xl', 'bg-white', 'mx-2'];

  const editButton = document.createElement('button');
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.classList.add('delete-button', ...arr);
  editButton.classList.add('edit-button', ...arr);
  const textElement = document.createElement('p');
  textElement.classList.add('text-2xl', 'font-semibold');
  textElement.classList.add('flex-1', 'overflow-x-auto');
  textElement.textContent = task.title;

  if(task.done) {
    textElement.classList.add('line-through');
    checked.innerHTML = '<i class="fas fa-check"></i>';
  } else {
    textElement.classList.remove('line-through');
    checked.innerHTML = '';
  }
  tasker.appendChild(checked);
  tasker.appendChild(textElement);
  tasker.appendChild(editButton);

  tasker.appendChild(deleteButton);
  checked.addEventListener('click', () => {
    task.done = !task.done;
    if(task.done) {
      textElement.classList.add('line-through');
      checked.innerHTML = '<i class="fas fa-check"></i>';
    } else {
      textElement.classList.remove('line-through');
      checked.innerHTML = '';
    }
  })
  return tasker;
}

export { Task, renderTask };
