export const tasksSection = (res) => {
    let readyTasks = '';
    let onHoldTasks = '';
  
    res.forEach((task) => {
      if (task.status === 'ready') {
        readyTasks += /*html*/`
          <section class="tareas">
            <p>${task.task}</p>
            <img data-id="${task.id}" class="check" src="storage/imgs/check.png">
            <img data-id="${task.id}"  class="trash" src="storage/imgs/trash.png">
          </section>
        `;
        
      } else if (task.status === 'On hold') {
        onHoldTasks += /*html*/`
          <section class="tareas2">
            <p><del>${task.task}</del></p>
            <img data-id="${task.id}"  class="check" src="storage/imgs/check.png">
            <img data-id="${task.id}"  class="trash" src="storage/imgs/trash.png">
          </section>
        `;
      }
    });
  

    return /*html*/`
      <div class="ready_tasks">
        ${readyTasks}
      </div>
      <div class="on_hold_tasks">
        ${onHoldTasks}
      </div>
    `;
  }