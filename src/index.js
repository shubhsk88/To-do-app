import "./styles/style.css";
import { Task, renderTask } from "./Components/TaskcCreator";
import { Project, renderProject } from "./Components/ProjectCreator";

const projectsList = []

const newProjectBtn = document.querySelector('.new-project-btn');
const newTaskBtn = document.querySelector('.new-task-btn');
const projectsListDiv = document.querySelector('.projects-list');

newProjectBtn.addEventListener('click', ()=>{
  const projectName = document.getElementById('project-name').value;
  const newProject = new Project(projectName);
  projectsList.push(newProject);
  projectsListDiv.appendChild(renderProject(newProject));
})

newTaskBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const taskTitle = document.getElementById('task-title').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDueDate = document.getElementById('task-due-date').value;
  const taskPriority = document.getElementById('task-priority').value;
  const taskProjectName = document.getElementById('task-project').value;

  const newTask = new Task(taskTitle, taskDescription, taskDueDate, taskPriority);
  const taskProject = projectsList.filter(item => item.name == taskProjectName)[0];
  taskProject.addTaskToList(newTask);
})

for(let i=0; i < projectsList.length; i++) {
  projectsListDiv.appendChild(renderProject(projectsList[i]));
}

