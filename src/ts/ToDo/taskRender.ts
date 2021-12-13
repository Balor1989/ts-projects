import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { listItemTemplate } from "./createTask";
import { listContainer } from "./variables";

export function renderAllTasks(tasksList: {}): HTMLElement {
  if (!tasksList) {
    Notify.failure('Add task list');
    return;
  }
  const fragment = document.createDocumentFragment();
  Object.values(tasksList).forEach((task:any):void => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
   listContainer.appendChild(fragment);
  }