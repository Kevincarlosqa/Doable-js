import STORAGE from "../storage.js"
import { dateFormat } from "./utils.js";
import { input } from "./input.js";
import { tasksAlphabetical, tasksDueDate } from "./utils.js";

function renderTasks(task) {
  return `
    <div class="flex justify-between js-checkTask task" >
      <label for="${task.id}" >
          <input type="checkbox" id="${task.name}" data-id=${task.id} name="${task.id}" ${task.completed? `checked`:""} >
          ${task.title}
          ${task.due_date? 
            `<p class="task__date" for="${task.name}">${dateFormat(task.due_date)}</p>` : "" }
          
      </label>
      <div class="js-important-logo" data-logo=${task.id}>
        ${task.important? 
          `<img class="logo-task" src="../imgs/important.png">`:`<img class="logo-task" src="../imgs/notImportant.png">`
        }
      </div>
    </div>
`
}

function render() {

  const tasks = tasksDueDate(STORAGE.tasks) 
  return `
    <div class="js-tasks-list">
      ${tasks.map(task => renderTasks(task)).join("")}
    </div>
  `
}

const tasks = {
  toString() {
    return render.call(this)
  },
  addListeners() {
  },
}
export default tasks