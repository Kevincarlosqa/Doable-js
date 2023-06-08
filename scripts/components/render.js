import { input } from "./input.js"

function renderHeader(logout) {
  return `
    <header class="header">
      <nav class="navbar">
        <img class="logo" src="./imgs/doable-logo.png">
        ${logout? `<a class="js-logout-link"><img src="./imgs/logout.png"></a>` : ""}
      </nav>
    </header>
  `
}

function renderNewTask() {
  return `
  <main class="section">
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

function renderShow() {
  return `
    <div class="flex justify-between task_show">
      <p>Show</p>
      <div>
        <label for="pending" >
          <input type="radio" id="pending" name="importantShow" >
          Only Pending
        </label>
        <label for="important" >
          <input type="radio" id="important" name="importantShow" >
          Only important
        </label>
      </div>
    </div>
  `
}

{/* <label for="pet-select">Choose a pet:</label>

<select id="pet-select">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select> */}


function renderSort() {
  return `
    <div class="flex justify-between task_show">
      <label for="js-sort">Sort</label>

      <select id="js-sort" class="select-sort__input">
          <option value="Alphabetical (a-z)">Alphabetical (a-z)</option>
          <option value="Due date">Due date</option>
          <option value="Importance">Importance</option>
      </select>
    </div>
  `
}

export { renderHeader, renderNewTask, renderShow, renderSort }