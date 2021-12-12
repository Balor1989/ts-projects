import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../../sass/ToDo.scss/'
import { tasks } from "./tasks";
import { TaskValues } from './interfaces';
import { onTask, objOfTasks } from './getTasks'





const listContainer: HTMLElement = document.querySelector('.list-group');
const taskForm: HTMLFormElement = document.querySelector('.task-form');
const inputTitle: HTMLInputElement = document.querySelector('.input-title');
const inputText: HTMLInputElement = document.querySelector('.input-text');

taskForm.addEventListener('submit', onSubmitForm)

onTask(tasks)
renderAllTasks(objOfTasks)

function onSubmitForm(event: Event): void{
  event.preventDefault()
  const titleValue: string = inputTitle.value;
  const textValue: string = inputText.value;
  if (textValue === '' || titleValue === '') {
    Notify.failure('Plese input task title and task text');
    return
  }
  const task = createNewTask(titleValue, textValue);
  const listItem = listItemTemplate(task)
  listContainer.insertAdjacentElement('afterbegin', listItem)
  taskForm.reset()
}



function createNewTask(title: string, text: string): TaskValues {
  const newTask: TaskValues = {
    title,
    text,
    completed: false,
    id: `task-${Math.random()}`
  }
  objOfTasks[newTask.id] = newTask;
  return newTask
}


// ////////переписать в модуль
function renderAllTasks(tasksList: {}): HTMLElement {
  if (!tasksList) {
    console.error('Add task list');
    return;
  }
  const fragment = document.createDocumentFragment();
  // УБРАТЬ any!!!
  Object.values(tasksList).forEach((task:any):void => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
   listContainer.appendChild(fragment);
  }


// ///////////переписать в модуль
  function listItemTemplate({title, text }:TaskValues) {
    const li = document.createElement('li');

    const taskTitle = document.createElement('h2');
    taskTitle.textContent = title;
  

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete task';

    const taskText = document.createElement('p');
    taskText.textContent = text;

    li.appendChild(taskTitle);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    return li;
}
  
