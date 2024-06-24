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
