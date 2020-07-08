import "./styles/style.css";

import { Task, renderTask } from "./Components/TaskcCreator";
import { Project, renderProject } from "./Components/ProjectCreator";

let c = new Task("dsjk", "asdkl", "asdkl", "dajkl");

let defa = new Project("WORK");
defa.addTaskToList(c);
let render = renderProject(defa);
const content = document.getElementById("content");
content.appendChild(render);
