import { TaskValues } from "./TaskValues";

export function listItemTemplate({ title, text, id }: TaskValues) {
    const li = document.createElement('li');
    li.classList.add('main__card-item')
    li.setAttribute('data-task-id', id);

    const taskTitle = document.createElement('h2');
    taskTitle.classList.add('main__task-title');
    taskTitle.textContent = title;
  

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('main__delete-button')
    deleteBtn.textContent = 'Delete task';

    const taskText = document.createElement('p');
    taskText.classList.add('main__task-text')
    taskText.textContent = text;

    li.appendChild(taskTitle);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    return li;
}