import "@fontsource/roboto"
import "@fontsource/open-sans"
import '../../sass/to-do.scss/'
import { tasks } from "./tasks";
import { onTask, objOfTasks } from './getTasks';
import { setTheme } from './changeTheme';
import { onDeleteTask } from './taskDelete';
import { onSelectTheme } from './changeTheme';
import { onSubmitForm } from './formSubmit';
import { selectTheme, taskForm, listContainer } from './variables'
import{renderAllTasks} from './taskRender'
import { notiflixSettings } from '../utils/notiflix-init'
import { backToTop } from '../utils/backToTop'

backToTop()
setTheme(localStorage.getItem('theme'));
notiflixSettings()



selectTheme.addEventListener('change', onSelectTheme)
taskForm.addEventListener('submit', onSubmitForm)
listContainer.addEventListener('click', onDeleteTask)

onTask(tasks)
renderAllTasks(objOfTasks)

console.log(objOfTasks)
