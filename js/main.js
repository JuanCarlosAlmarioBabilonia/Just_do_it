import { tasksSection } from "./components/tasks.js";
import { getAllTasks, addTask, deleteTask, updateTask } from "./modules/data.js";

document.addEventListener('DOMContentLoaded', async() => {
    let info = await getAllTasks();  
    let loadTasks = async() => {
        info = await getAllTasks();
        let taskOnHold = info.filter(tasksSection=> tasksSection.status === 'On hold');   
        let taskready = info.filter(tasksSection=> tasksSection.status === 'ready');
    
        tareas_main.innerHTML = await tasksSection(taskOnHold, 'On hold');
        tareas2_main.innerHTML = await tasksSection(taskready, 'ready');
       
        document.querySelectorAll('.trash').forEach(button => {
            button.addEventListener("click", async (e) => {
                let id = e.target.dataset.id;
                e.target.closest('.tareas, .tareas2').remove(); 
                await deleteTask(id);

                info.forEach(async task => {
                    if(task.id == id){
                        info.pop(task);
                    }
                });
            });
        });

        document.querySelectorAll('.check').forEach(button => {
            button.addEventListener("click", async (e) => {
                let id = e.target.dataset.id;
                let task = info.find(task => task.id == id);
                let nStatus = task.status === "ready" ? "On hold" : "On hold";
                let update = {...task, status: nStatus}
    
                await updateTask(id, update);
                await loadTasks();
                });
        });
    };

    await loadTasks();

    let createTask = document.querySelector('#addTaskButton');
    createTask.addEventListener("click", async()=>{
        let taskName = document.querySelector('#input__search');
        let newTask = {
            task: taskName.value,
            status: 'ready'
        };
        await addTask(newTask);
        taskName.value = '';
        info.push(newTask);
        await loadTasks();
    });

    let createTask2 = document.querySelector('#input__search');
    createTask2.addEventListener("change", async()=>{
        let taskName = document.querySelector('#input__search');
        let newTask = {
            task: taskName.value,
            status: 'ready'
        };
        await addTask(newTask);
        taskName.value = '';
        info.push(newTask);
        await loadTasks();
    });
});
