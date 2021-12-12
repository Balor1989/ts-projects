import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import '../../sass/ToDo.scss/'
import { tasks } from "./tasks";
import { TaskValues } from './interfaces';
import { onTask, objOfTasks } from './getTasks'





const listContainer: HTMLElement = document.querySelector('.list-group');
const taskForm: HTMLFormElement = document.querySelector('.task-form');
const inputTitle: HTMLInputElement = document.querySelector('.input-title');
const inputText: HTMLInputElement = document.querySelector('.input-text');
const selectTheme: HTMLInputElement = document.querySelector('.select')
selectTheme.addEventListener('change', onSelectTheme)


function onSelectTheme(event: Event): void {
  const selectedTheme = selectTheme.value
  setTheme(selectedTheme)
}

function setTheme(name: string): void {
  switch (name) {
    case 'light':
      document.body.style.backgroundColor = "#ffffff"
      document.body.style.color = "#000000"
      break;
    case 'dark':
      document.body.style.backgroundColor = "#787878"
      document.body.style.color = "#d3d3d3"
      break;
    case 'default':
      document.body.style.backgroundColor = "#d3d3d3"
      document.body.style.color = "#000000"
  }
}

taskForm.addEventListener('submit', onSubmitForm)
listContainer.addEventListener('click', onDeleteTask)

onTask(tasks)
renderAllTasks(objOfTasks)

function onDeleteTask(event): void {
  if (event.target.classList.contains('delete-button')) {
    const deleteElement = event.target.closest('[data-task-id]'); 
    const id = deleteElement.dataset.taskId
    console.log(deleteElement)
    console.log(event.target)
    Confirm.show(
    'Attention!',
    'Do you really want to delete this task',
    'Yes',
    'No',
      function okCb(): void {
        delete objOfTasks[id]
        deleteElement.remove()
        Notify.success('deleted');
    },
      function cancelCb(): void {
      Notify.info('operation canceled');
      return
    },
    {
      width: '320px',
      borderRadius: '8px',
    },
);
    
  }
} 

function onSubmitForm(event: Event): void{
  event.preventDefault()
  const titleValue: string = inputTitle.value;
  const textValue: string = inputText.value;
  if (textValue === '' || titleValue === '') {
    Notify.failure('Please input task title and task text');
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
    Notify.failure('Add task list');
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
  function listItemTemplate({title, text, id }:TaskValues) {
    const li = document.createElement('li');
    li.setAttribute('data-task-id', id);

    const taskTitle = document.createElement('h2');
    taskTitle.textContent = title;
  

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-button')
    deleteBtn.textContent = 'Delete task';

    const taskText = document.createElement('p');
    taskText.textContent = text;

    li.appendChild(taskTitle);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    return li;
}
  