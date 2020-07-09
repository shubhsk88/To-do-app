import './styles/style.css';
import { Task, renderTask } from './Components/TaskCreator';
import { Project, renderProject } from './Components/ProjectCreator';

const projectWork = new Project('work')
const projectStudy = new Project('study')
projectWork.addTaskToList(new Task('create ui', 'now', 'iwa', 1));
projectWork.addTaskToList(new Task('create bd', 'as', 'iwa', 1));
projectWork.addTaskToList(new Task('create socket', 'now', 'iwa', 2));
// projectStudy.addTaskToList(new Task('study socket', 'now', 'iwa', 2));
const projectsList = [projectWork];

const newProjectBtn = document.querySelector('.new-project-btn');
const newTaskBtn = document.querySelector('.new-task-btn');
const projectsListDiv = document.querySelector('.projects-list');

newProjectBtn.addEventListener('click', () => {
  const projectName = document.getElementById('project-name').value;
  const newProject = new Project(projectName);
  projectsList.push(newProject);
  projectsListDiv.appendChild(renderProject(newProject));
});

newTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const taskTitle = document.getElementById('task-title').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDueDate = document.getElementById('task-due-date').value;
  const taskPriority = document.getElementById('task-priority').value;
  const taskProjectName = document.getElementById('task-project').value;

  const newTask = new Task(
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority
  );

  const taskProject = projectsList.filter(
    (item) => item.name == taskProjectName
  )[0];
  taskProject.addTaskToList(newTask);

  projectsListDiv.removeChild(projectsListDiv.lastChild);
  projectsListDiv.appendChild(renderProject(taskProject));

  // let list = renderProject(projectsList[0]);

  // projectsListDiv.removeChild(projectsListDiv.lastChild);
  // projectsListDiv.appendChild(list);
  // const buttonDelete = document.querySelectorAll('.delete-button');
  // console.log(buttonDelete);
  // for (let i = 0; i < buttonDelete.length; i++) {
  //   buttonDelete[i].addEventListener('click', () => {
  //     taskProject.removeTaskFromList(i);
  //     console.log(taskProject);
  //     projectsListDiv.removeChild(projectsListDiv.lastChild);
  //     projectsListDiv.appendChild(renderProject(taskProject));
  //   });
  // }
});

for (let i = 0; i < projectsList.length; i++) {
  projectsListDiv.appendChild(renderProject(projectsList[i]));
}

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