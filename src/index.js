import './styles/style.css';
import { Task, renderTask } from './Components/TaskCreator';
import { Project, renderProject } from './Components/ProjectCreator';

const projectWork = new Project('work');
const projectStudy = new Project('study');
projectWork.addTaskToList(new Task('create ui', 'now', 'iwa', 1));
projectWork.addTaskToList(new Task('create bd', 'as', 'iwa', 1));
projectWork.addTaskToList(new Task('create socket', 'now', 'iwa', 2));
// projectStudy.addTaskToList(new Task('study socket', 'now', 'iwa', 2));
const projectsList = [projectWork];

const newProjectBtn = document.querySelector('.new-project-btn');
const newTaskBtn = document.querySelector('.new-task-btn');
const addTaskBtn = document.querySelector('.add-task-btn');
const projectsListDiv = document.querySelector('.projects-list');
const hiddenFormDiv = document.querySelector('.hidden-form');
const projectDetailsDiv = document.querySelector('.project-details');

addTaskBtn.addEventListener('click', () => {
  const projectsSelector = document.getElementById('project-selector');
  projectsSelector.textContent = '';

  hiddenFormDiv.classList.add('show-form');

  for (let i = 0; i < projectsList.length; i += 1) {
    const projectOption = document.createElement('option');
    projectOption.textContent = projectsList[i].name;
    projectOption.value = i;
    projectsSelector.appendChild(projectOption);
  }
});
addNewTaskBtnListener();
newProjectBtn.addEventListener('click', () => {
  const projectName = document.getElementById('project-name').value;
  const newProject = new Project(projectName);
  projectsList.push(newProject);
  renderAllProjects();
});

function addNewTaskBtnListener() {
  newTaskBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDueDate = document.getElementById('task-due-date').value;
    const taskPriority = document.querySelector(
      'input[name="task-priority"]:checked'
    ).value;
    const taskProjectSelect = document.getElementById('project-selector');
    const taskProjectId =
      taskProjectSelect.options[taskProjectSelect.selectedIndex].value;

    const newTask = new Task(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority
    );

    const taskProject = projectsList[taskProjectId];
    taskProject.addTaskToList(newTask);
    console.log(taskProject);
    renderProjectDetails(taskProject);
    hiddenFormDiv.classList.remove('show-form');
    projectsListDiv.classList.add('hide');
  });
}

renderAllProjects();

function renderProjectDetails(project) {
  projectDetailsDiv.textContent = '';
  const projectDetailsElement = renderProject(project);
  projectDetailsDiv.appendChild(projectDetailsElement);
  deleteTasks();
}
function renderAllProjects() {
  projectsListDiv.textContent = '';
  for (let i = 0; i < projectsList.length; i++) {
    const projectDiv = document.createElement('div');

    projectDiv.classList.add('project-card');
    projectDiv.textContent = projectsList[i].name;
    projectDiv.addEventListener('click', function () {
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

      taskProject.removeTaskFromList(i);
      taskElement.remove();
    });
  }
}
