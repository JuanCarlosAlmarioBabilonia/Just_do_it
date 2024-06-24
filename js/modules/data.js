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



export const deleteTask = async (id) => {
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


export const updateTask = async (id, task) => {
    const url = `https://66778b0c145714a1bd74fd44.mockapi.io/Todolist/${id}`;
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