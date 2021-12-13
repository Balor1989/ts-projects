import { TaskValues } from "./interfaces";
 
export function listItemTemplate({ title, text, id }: TaskValues) {
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