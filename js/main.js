import { tasksSection } from "./components/tasks.js";
import { getAllTasks } from "./modules/data.js";

let tareas = document.querySelector(".tareas_main");

addEventListener("DOMContentLoaded", async () => {
    let data = await getAllTasks();
    tareas.innerHTML = await tasksSection(data);
})

