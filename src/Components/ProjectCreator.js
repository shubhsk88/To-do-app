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
  projectCard.textContent = project.name;
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
