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
  const backButton = document.createElement('button');
  const projectsListDiv = document.querySelector('.projects-list');
  const formProject = document.querySelector('.form-project');

  backButton.classList.add(
    'close-details-btn',
    'bg-green-800',
    'py-4',
    'px-6',
    'text-2xl',
    'text-white',
    'rounded-lg'
  );
  backButton.innerHTML = '<i class="fas fa-arrow-left"></i> Back';
  header.textContent = project.name;
  header.classList.add(
    'text-center',
    'text-4xl',
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
  backButton.addEventListener('click', () => {
    projectCard.classList.add('hide');
    projectsListDiv.classList.remove('hide');
    formProject.classList.remove('hide');
  });
  projectCard.appendChild(listContainer);
  projectCard.appendChild(backButton);

  return projectCard;
};

export { renderProject, Project };
