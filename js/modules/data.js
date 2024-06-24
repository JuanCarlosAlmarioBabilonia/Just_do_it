export const getAllTasks = async () => {
    const url = ("https://66778b0c145714a1bd74fd44.mockapi.io/Todolist");
    const options = {
        method: "GET"
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

export const addTask = async (tasks) => {
    const url = ("https://66778b0c145714a1bd74fd44.mockapi.io/Todolist");
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tasks)
    };
    let res = await fetch(url, options);
    let data = await res.json();
    return data
}

const addTaskButton = document.querySelector("#addTaskButton");
addTaskButton.addEventListener("click", async () => {
    const task = document.querySelector('#input__search').value;
    const status = "ready";  
    
    const taskData = {
        task: task,
        status: status
    };

    try {
        const data = await addTask(taskData);
        console.log('Success:', data);
        alert('Tarea subida exitosamente');
        document.querySelector('#input__search').value = '';
    } catch (error) {
        console.error('Error:', error);
        alert('Error al subir la tarea');
    }
})

export const deleteTask = async (id) => {
    const url = `https://66778b0c145714a1bd74fd44.mockapi.io/Todolist/${id}`;
    const options = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let res = await fetch(url, options);
    console.log('Respuesta del servidor:', res);
    let data = await res.json();
    console.log('Datos de la respuesta:', data);
    return data;
}

const tareasContainer = document.querySelector('.tareas2_main');

tareasContainer.addEventListener('click', async (event) => {
    if (event.target.classList.contains('trash')) {
        const tarea = event.target.closest('.tareas2');
        console.log(tarea)
        if (tarea) {
            const taskId = tarea.dataset.taskId;
            try {
                await deleteTask(taskId);
                console.log('Tarea eliminada exitosamente');
                tarea.remove();
            } catch (error) {
                console.error('Error al eliminar la tarea:', error);
                alert('Error al eliminar la tarea');
            }
        }
    }
});
