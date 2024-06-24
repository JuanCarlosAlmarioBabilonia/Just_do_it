import { tasksSection } from "./components/tasks.js";
import { getAllTasks } from "./modules/data.js";

let tareas = document.querySelector(".tareas_main");

addEventListener("DOMContentLoaded", async () => {
    let data = await getAllTasks();
    tareas.innerHTML = await tasksSection(data);
})


document.addEventListener('DOMContentLoaded', () => {
    const tareas = document.querySelector('.tareas_main');
    tareas.addEventListener('click', (e) => {
        if (e.target.classList.contains('check')) {
            const tarea = e.target.closest('.tareas');
            if (tarea) {
                const nuevaTarea = document.createElement('section');
                nuevaTarea.className = 'tareas2';
                nuevaTarea.innerHTML = `
                    <p><del>${tarea.querySelector('p').textContent}</del></p>
                    <img class="check" src="/storage/imgs/check.png">
                    <img class="trash" src="/storage/imgs/trash.png">
                `; 
                tarea.replaceWith(nuevaTarea); 
            }
        } else if (e.target.classList.contains('trash')) {
            const tarea = e.target.closest('.tareas2');
            if (tarea) {
                tarea.remove();
            }
        }
    });
});


