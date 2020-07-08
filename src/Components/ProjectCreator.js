import { renderTask } from "./TaskcCreator";

class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
  addTaskToList(task) {
    this.taskList.push(task);
  }
}

const renderProject = (project) => {
  const listContainer = document.createElement("ul");
  for (let i = 0; i < project.taskList.length; i++) {
    listContainer.appendChild(renderTask(project.taskList[i]));
  }
  return listContainer;
};

export { renderProject, Project };
