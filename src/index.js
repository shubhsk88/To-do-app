import "./styles/style.css";
import { Task, renderTask } from "./Components/TaskcCreator";
import { Project, renderProject } from "./Components/ProjectCreator";

const projectsList = []

const newProjectBtn = document.querySelector('.new-project-btn');
const projectsListDiv = document.querySelector('.projects-list');

newProjectBtn.addEventListener('click', ()=>{
  const projectName = document.getElementById('project-name').value;
  const newProject = new Project(projectName);
  projectsList.push(newProject);
  projectsListDiv.appendChild(renderProject(newProject));
})

for(let i=0; i < projectsList.length; i++) {
  projectsListDiv.appendChild(renderProject(projectsList[i]));
}

