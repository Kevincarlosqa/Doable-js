import STORAGE from "../storage.js"
import { dateFormat } from "./utils.js";
import { input } from "./input.js";

// <fieldset>
//     <legend>Choose your monster's features:</legend>

    // <div>
    //   <input type="checkbox" id="scales" name="scales" checked>
    //   <label for="scales">Scales</label>
    // </div>

//     <div>
//       <input type="checkbox" id="horns" name="horns">
//       <label for="horns">Horns</label>
//     </div>
// </fieldset>

function renderTasks(task) {
  console.log(task.id);
  return `
    <div class="flex justify-between task" >
      <label for="${task.id}" >
          <input type="checkbox" id="${task.id}" name="${task.id}" >
          ${task.title}
          <p class="task__date" for="${task.id}">${dateFormat(task.due_date)}</p> 
      </label>
        ${task.important? `<img class="logo-task" src="../imgs/important.png">`:`<img class="logo-task" src="../imgs/notImportant.png">`}
        
    </div>
`
}

function render() {
  const tasks = STORAGE.tasks
  console.log(tasks);
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