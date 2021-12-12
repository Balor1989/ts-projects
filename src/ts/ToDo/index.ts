import '../../sass/ToDo.scss/'
import { tasks } from "./tasks";
import { TaskValues } from "./tasks";
let objOfTasks: {} | null = null;

function onTask(arrOfTasks: TaskValues[]):{}{
   return objOfTasks = arrOfTasks.reduce((acc: {}, task: TaskValues) => {
        acc[task.id] = task;
        return acc;
    }, {})
}


onTask(tasks)
const listContainer = document.querySelector('.list-group');
console.log(listContainer)

renderAllTasks(objOfTasks)


function renderAllTasks(tasksList: {}) {
    if (!tasksList) {
      console.error('Add task list');
      return;
    }

  const fragment = document.createDocumentFragment();
  // убрать any!!!
    Object.values(tasksList).forEach((task:any) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate({title, body }:TaskValues) {
    const li = document.createElement('li');

    const taskTitle = document.createElement('h2');
    taskTitle.textContent = title;
  

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete task';

    const taskText = document.createElement('p');
    taskText.textContent = body;

    li.appendChild(taskTitle);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    return li;
  }