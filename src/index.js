import "./styles/style.css";

import { Task, taskRender } from "./Components/Taskcreator";

let c = new Task("dsjk", "asdkl", "asdkl", "dajkl");
let task = taskRender(c);

const content = document.getElementById("content");
content.appendChild(task);
