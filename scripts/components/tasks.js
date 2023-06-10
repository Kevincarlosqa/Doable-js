import STORAGE from "../storage.js"
import { dateFormat } from "./utils.js";
import { selectedLib, states } from "./selected-state.js";
import { input } from "./input.js";
import { tasksAlphabetical, tasksDueDate, tasksImportance } from "./utils.js";

function renderTasks(task) {
  return `
    <div class="flex justify-between js-checkTask task container  " >
      <div>
        <label for="${task.id}" class="task_label ${task.completed? `task_completed`:``}">
            <input type="checkbox" class="checkbox__input" id="${task.name}" data-id=${task.id} name="${task.id}" ${task.completed? `checked`:""} >
            ${task.title}
            
            </label>
            ${task.due_date? 
              `<p class="task__date ${task.completed? `task__date_completed`:``}" for="${task.name}">${dateFormat(task.due_date)}</p>` : "" }
              </div>
        <div class="js-important-logo" data-logo=${task.id}>
          ${task.important? 
            (task.completed? `<img class="logo-task" src="../imgs/importantCompleted.png">` : `<img class="logo-task" src="../imgs/important.png">`) :`<img class="logo-task" src="../imgs/notImportant.png">`
          }
      </div>
    </div>
`
}

function render() {
  // STORAGE.actualSort = localStorage.getItem("Actual Sort")
  // STORAGE.actualShow = localStorage.getItem("Actual Show")
  const sort = STORAGE.actualSort
  const show = STORAGE.actualShow
  console.log(sort);
  console.log(show);
  let actualState = states(sort, show)
  console.log(actualState);
  // selectedLib(actualState)
  const tasks = STORAGE.tasks
  // localStorage.setItem("Tasks", JSON.stringify(tasks))
  console.log(tasks);
  return `
    <div class="js-tasks-list" id="sortable-list">
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