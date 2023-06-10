import { input } from "./input.js"
import STORAGE from "../storage.js"

function renderHeader(logout) {
  return `
    <header class="header">
      <nav class="navbar">
        <img class="logo ${logout? `nav-icon`: ""}" src="./imgs/doable-logo.png">
        ${logout? `<a class="js-logout-link"><img src="./imgs/logout.png"></a>` : ""}
      </nav>
    </header>
  `
}

function renderNewTask() {
  return `
  <main class="new_task__section">
    <section class="container">
      <form class="flex flex-column gap-1 mb-4 js-newTask-form">

        ${input({
          id: "newTasks",
          name: "newTasks",
          placeholder: "do the dishes...",
          required: true,
        })}

        ${input({
          id: "newDate",
          name: "newDate",
          placeholder: "mm / dd / yy",
        })}        
       
        <button class="button button--primary">Add Task</button>
      </form>
    </section>
  </main>`
}
// ${actualSelectedShow == "pending"? `checked` : ""}
function renderShow() {
  const actualSelectedShow = STORAGE.actualShow
  console.log(actualSelectedShow);
  switch (actualSelectedShow) {
    case 0:
      return `
        <div class="flex justify-between task_show container">
          <p class="sort-show">Show</p>
          <div class="show-div">
            <label for="pending" class="show_label" >
              <input type="checkbox" class="checkbox__input" id="pending" name="pendingShow">
              Only Pending
            </label>
            <label for="important" class="show_label">
              <input type="checkbox" class="checkbox__input" id="important" name="importantShow"  >
              Only important
            </label>
          </div>
        </div>
      `
    case 1:
      return `
        <div class="flex justify-between task_show container">
          <p class="sort-show">Show</p>
          <div class="show-div">
            <label for="pending" class="show_label" >
              <input type="checkbox" class="checkbox__input" id="pending" name="pendingShow" checked>
              Only Pending
            </label>
            <label for="important" class="show_label">
              <input type="checkbox" class="checkbox__input" id="important" name="importantShow"  >
              Only important
            </label>
          </div>
        </div>
      `
    case 2:
      return `
        <div class="flex justify-between task_show container">
          <p class="sort-show">Show</p>
          <div class="show-div">
            <label for="pending" class="show_label">
              <input type="checkbox" class="checkbox__input" id="pending" name="pendingShow">
              Only Pending
            </label>
            <label for="important" class="show_label">
              <input type="checkbox" class="checkbox__input" id="important" name="importantShow" checked>
              Only important
            </label>
          </div>
        </div>
      `
    case 3:
      return `
        <div class="flex justify-between task_show container">
          <p class="sort-show">Show</p>
          <div class="show-div">
            <label for="pending" class="show_label">
              <input type="checkbox" class="checkbox__input" id="pending" name="pendingShow" checked>
              Only Pending
            </label>
            <label for="important" class="show_label">
              <input type="checkbox" class="checkbox__input" id="important" name="importantShow" checked>
              Only important
            </label>
          </div>
        </div>
      `
    default:
      break;
  }
  // return `
  //   <div class="flex justify-between task_show">
  //     <p>Show</p>
  //     <div>
  //       <label for="pending" >
  //         <input type="checkbox" id="pending" name="pendingShow">
  //         Only Pending
  //       </label>
  //       <label for="important" >
  //         <input type="checkbox" id="important" name="importantShow"  >
  //         Only important
  //       </label>
  //     </div>
  //   </div>
  // `
}

function renderSort() {
  const actualSelectedSort = STORAGE.actualSort
  return `
    <div class="flex justify-between task_show container">
      <label for="js-sort" class="sort-show">Sort</label>

      <select id="js-sort" class="select-sort__input">
          <option ${actualSelectedSort == "Alphabetical (a-z)"? `selected`: ""} value="Alphabetical (a-z)">Alphabetical (a-z)</option>
          <option ${actualSelectedSort == "Due date"? `selected`: ""} value="Due date">Due date</option>
          <option ${actualSelectedSort == "Importance"? `selected`: ""} value="Importance">Importance</option>
      </select>
    </div>
  `
}

export { renderHeader, renderNewTask, renderShow, renderSort }