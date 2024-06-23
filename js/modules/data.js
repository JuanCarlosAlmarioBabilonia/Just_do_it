export const getAllTasks = async () => {
    const url = ("https://66778b0c145714a1bd74fd44.mockapi.io/Todolist");
    const options = {
        method: "GET"
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}


