import './styles/style.css';
import { Task } from './Components/TaskCreator';
import { Project, renderProject } from './Components/ProjectCreator';

const projectsList = [];


function initializeProjects() {
  const projectsListObj = JSON.parse(localStorage.getItem('projectsList')) || []; //
  projectsListObj.forEach(project => {
    const newProject = new Project(project.name);
    project.taskList.forEach(task => {
      const newTask = new Task(task.title, task.description, task.dueDate, task.priority, task.notes, task.done);
      newProject.taskList.push(newTask);
    })
    projectsList.push(newProject);
  })
}

initializeProjects();


const newProjectBtn = document.querySelector('.new-project-btn');
const formProject = document.querySelector('.form-project');
const newTaskBtn = document.querySelector('.new-task-btn');
const addTaskBtn = document.querySelector('.add-task-btn');
const closeFormButton = document.querySelector('.close-form-btn');
const projectsListDiv = document.querySelector('.projects-list');
const hiddenFormDiv = document.querySelector('.hidden-form');
const projectDetailsDiv = document.querySelector('.project-details');

addTaskBtn.addEventListener('click', () => {
  renderForm();
});

newProjectBtn.addEventListener('click', (event) => {
  const projectName = document.getElementById('project-name');
  if (projectName.value !== '') {
    event.preventDefault();
    const newProject = new Project(projectName.value);
    projectsList.push(newProject);
    addToStorage();
    clearInput(projectName);
    renderAllProjects();
  }
});

function clearInput(input) {
  input.value = '';
}

function addNewTaskBtnListener(task = {}) {
  const editTask = task;

  newTaskBtn.addEventListener('click', submitButton);

  function submitButton(event) {
    const submitButtonElement = event.currentTarget;

    const isEdit = submitButtonElement.getAttribute('edit');

    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const taskPriority = document.querySelector(
      'input[name="task-priority"]:checked'
    ).value;
    const taskProjectSelect = document.getElementById('project-selector');
    const taskProjectId =
      taskProjectSelect.options[taskProjectSelect.selectedIndex].value;

    const taskProject = projectsList[taskProjectId];

    if (taskTitle !== '' && taskDescription !== '') {
      event.preventDefault();

      formProject.classList.add('hide');
      if (isEdit === 'true') {
        editTask.updateTask(
          taskTitle,
          taskDescription,
          taskDueDate,
          taskPriority
        );
      } else {
        const newTask = new Task(
          taskTitle,
          taskDescription,
          taskDueDate,
          taskPriority
        );
        taskProject.addTaskToList(newTask);
      }
      addToStorage();
      renderProjectDetails(taskProject);
      hiddenFormDiv.classList.remove('show-form');
      projectsListDiv.classList.add('hide');
      newTaskBtn.removeEventListener('click', submitButton);
      addTaskBtn.classList.remove('hide');
    }
  }
}

renderAllProjects();

function renderProjectDetails(project) {
  projectDetailsDiv.textContent = '';
  const projectDetailsElement = renderProject(project);
  projectDetailsDiv.appendChild(projectDetailsElement);
  deleteTasks();
  editTasks();
}
function renderAllProjects() {
  projectsListDiv.textContent = '';
  for (let i = 0; i < projectsList.length; i++) {
    const projectDiv = document.createElement('div');

    projectDiv.classList.add('project-card');

    projectDiv.textContent = projectsList[i].name;

    projectDiv.addEventListener('click', function () {
      formProject.classList.add('hide');
      projectsListDiv.classList.add('hide');
      renderProjectDetails(projectsList[i]);
    });
    projectsListDiv.appendChild(projectDiv);
    // projectsListDiv.appendChild(renderProject(projectsList[i]));
  }
}

function deleteTasks() {
  const deleteButtons = document.querySelectorAll('.delete-button');

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', (event) => {
      const taskElement = event.target.parentElement;
      const projectName = taskElement.getAttribute('project');
      const taskProject = projectsList.filter(
        (item) => item.name == projectName
      )[0];
      addToStorage();
      taskProject.removeTaskFromList(i);
      taskElement.remove();
      addToStorage();
    });
  }
}
function editTasks() {
  const editButtons = document.querySelectorAll('.edit-button');

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', (event) => {
      const taskElement = event.target.parentElement;
      const projectName = taskElement.getAttribute('project');
      const taskProject = projectsList.filter(
        (item) => item.name == projectName
      )[0];
      addToStorage();
      renderForm(taskProject.taskList[i]);
    });
  }
}

closeFormButton.addEventListener('click', (event) => {
  event.preventDefault();
  hiddenFormDiv.classList.remove('show-form');
  addTaskBtn.classList.remove('hide');
  newTaskBtn.removeEventListener('click', submitButton);
});

function renderForm(task = null) {
  const projectsSelector = document.getElementById('project-selector');
  const taskTitle = document.getElementById('task-title');
  const taskDescription = document.getElementById('task-description');
  const taskDueDate = document.getElementById('task-due-date');

  projectsSelector.textContent = '';

  hiddenFormDiv.classList.add('show-form');
  addTaskBtn.classList.add('hide');

  for (let i = 0; i < projectsList.length; i += 1) {
    const projectOption = document.createElement('option');

    projectOption.textContent = projectsList[i].name;
    projectOption.value = i;
    projectsSelector.appendChild(projectOption);
  }

  taskTitle.value = task ? task.title : '';
  taskDescription.value = task ? task.description : '';
  taskDueDate.value = task ? task.dueDate : '';

  if (task) {
    const taskPriority = document.querySelector(
      'input[name="task-priority"]:checked'
    );
    const taskProjectSelect = document.getElementById('project-selector');
    const taskProjectId =
      taskProjectSelect.options[taskProjectSelect.selectedIndex];
    taskPriority.value = task.priority;
    newTaskBtn.setAttribute('edit', true);
    addNewTaskBtnListener(task);
  } else {
    newTaskBtn.setAttribute('edit', false);
    addNewTaskBtnListener();
  }
}

function addToStorage() {
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
}
