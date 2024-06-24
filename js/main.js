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

export const deleteTask = async ({id}) => {
    const url = `https://66778b0c145714a1bd74fd44.mockapi.io/Todolist/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let res = await fetch(url, options);
    if(res.status == 404) return {status: 204, message: `La tarea ${id} NO fue encontrada en la base de datos`}
    let data = await res.json();
    data.status = 202
    data.message = `La tarea ${id} fue eliminada correctamente de la base de datos`
    return data;
}

// console.log(await deleteTask({id: "52"}))


export const updateTask = async (task) => {
    const url = `https://66778b0c145714a1bd74fd44.mockapi.io/Todolist/${task.id}`;
    const options = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    };
    let res = await fetch(url, options);
    console.log(res)
    if (res.status === 404) {
        return {
            status: 404,
            message: `La tarea ${task.id} no fue encontrada en la base de datos`
        };
    }
    let data = await res.json();
    data.status = 202;
    data.message = `La tarea ${task.id} fue actualizada correctamente en la base de datos`;
    return data;
};

console.log(await updateTask({id: "56", task: "hi"}))


