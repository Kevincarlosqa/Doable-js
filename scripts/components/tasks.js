import STORAGE from "../storage.js"
import { dateFormat } from "./utils.js";
import { input } from "./input.js";

function renderTasks(task) {
  return `
    <div class="flex justify-between js-checkTask task" >
      <label for="${task.id}" >
          <input type="checkbox" id="${task.id}" data-id=${task.id} name="${task.id}" ${task.completed? `checked`:""} >
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


// const checkboxes = document.querySelectorAll('.task__date input[type="checkbox"]');
//   checkboxes.forEach(checkbox => {
//     checkbox.addEventListener("click", (event) => {
//       const taskId = event.target.dataset.id;
//       console.log("click");
//       // Realizar acciones según el estado del checkbox y el ID de la tarea
//     })})



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
  },
}
export default tasks