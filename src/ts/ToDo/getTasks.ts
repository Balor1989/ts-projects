import { TaskValues } from "./interfaces";
export let objOfTasks: {} | null = null;


export function onTask(arrOfTasks: TaskValues[]): {}{
   return objOfTasks = arrOfTasks.reduce((acc: {}, task: TaskValues) => {
        acc[task.id] = task;
        return acc;
    }, {})
}