import STORAGE from "../storage.js"
import { dateFormat } from "./utils.js";
import { input } from "./input.js";

function renderTasks(task) {
  return `
    <div class="flex justify-between task" >
      <label for="${task.id}" >
          <input type="checkbox" id="${task.id}" name="${task.id}" >
          ${task.title}
          ${task.due_date? 
            `<p class="task__date" for="${task.id}">${dateFormat(task.due_date)}</p>` : "" }
          
      </label>
      <div class="js-important-logo">
        ${task.important? 
          `<img class="logo-task" src="../imgs/important.png">`:`<img class="logo-task" src="../imgs/notImportant.png">`
        }
      </div>
    </div>
`
}

function render() {

  const tasks = STORAGE.tasks
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
    listenContact.call(this)
  },
}
export default tasks