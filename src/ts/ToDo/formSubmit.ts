import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { inputText, inputTitle, listContainer, taskForm } from "./variables";
import { TaskValues } from './interfaces';
import { objOfTasks } from './getTasks';
import { listItemTemplate } from './createTask';


export function onSubmitForm(event: Event): void{
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

export function createNewTask(title: string, text: string): TaskValues {
  const newTask: TaskValues = {
    title,
    text,
    completed: false,
    id: `task-${Math.random()}`
  }
  objOfTasks[newTask.id] = newTask;
  return newTask
}

