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
      <form class="flex flex-column gap-1 mb-4 js-login-form">

        ${input({
          id: "email",
          name: "email",
          placeholder: "do the dishes...",
          required: true,
        })}

        ${input({
          id: "password",
          name: "password",
          placeholder: "mm / dd / yy",
        })}        
       
        <button class="button button--primary">Add Task</button>
      </form>
    </section>
  </main>`
}

export { renderHeader, renderNewTask }