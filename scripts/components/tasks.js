import STORAGE from "../storage.js"
import { dateFormat } from "./utils.js";

function renderTasks(task) {
  return `
  <li>
    <a data-id=${task.id}>${task.title}</a>
    <p>${dateFormat(task.due_date)}</p>
  </li>
`
}

function render() {
  const tasks = STORAGE.tasks
  console.log(tasks);
  return `
    <ul class="js-tasks-list">
      ${tasks.map(task => renderTasks(task)).join("")}
    </ul>
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