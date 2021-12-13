import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { objOfTasks } from './getTasks';

export function onDeleteTask(event): void {
  if (event.target.classList.contains('delete-button')) {
    const deleteElement = event.target.closest('[data-task-id]'); 
    const id = deleteElement.dataset.taskId
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