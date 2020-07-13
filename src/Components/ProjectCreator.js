import { renderTask } from './TaskCreator';

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
  addTaskToList(task) {
    this.taskList.push(task);
  }
  removeTaskFromList(taskIdx) {
    this.taskList.splice(taskIdx, 1);
  }
}

const renderProject = (project) => {
  const projectCard = document.createElement('div');
  projectCard.classList.add('project-details-card');
  const header = document.createElement('div');
  header.textContent = project.name;
  header.classList.add(
    'text-center',
    'text-6xl',
    'py-2',
    'capitalize',
    'font-bold'
  );
  projectCard.append(header);
  const listContainer = document.createElement('ul');
  for (let i = 0; i < project.taskList.length; i++) {
    const task = renderTask(project.taskList[i]);
    task.setAttribute('project', project.name);
    listContainer.appendChild(task);
  }
  projectCard.appendChild(listContainer);
  return projectCard;
};

export { renderProject, Project };
