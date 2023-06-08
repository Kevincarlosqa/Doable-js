import { root, tokenKey } from "../config.js"
import DOMHandler from "../dom-handler.js"
import loginPage from "./login-page.js"
import { renderHeader, renderNewTask, renderShow, renderSort } from "../components/render.js"
import { logout } from "../services/session-service.js"
import tasks from "../components/tasks.js"
import { dateStructure } from "../components/utils.js"
import { input } from "../components/input.js"
import { createTask } from "../services/task-service.js"
import STORAGE from "../storage.js"

function render() {
  const logout = "logout"
  return `
  ${renderHeader(logout)}
    ${renderSort()}
    ${renderShow()}
    ${tasks}
    ${renderNewTask()}
  `
}

function listenLogout() {
  const logoutLink = document.querySelector(".js-logout-link")
  logoutLink.addEventListener("click", async (event) => {
    try {
      const user = await logout()
      DOMHandler.load(loginPage(), root)

    } catch (error) {
      console.log(error);
    }

  })
}

function listenAddTask() {
  const newTask = document.querySelector(".js-newTask-form")
  newTask.addEventListener("submit", async (event) => {
    try {
      event.preventDefault()
      const { newTasks, newDate} = event.target.elements
      const dateFormated = dateStructure(newDate.value)
      const taskCreated = await createTask({title: newTasks.value, due_date: dateFormated})
      console.log(taskCreated);
      await STORAGE.fetchTasks().then(data => {
        DOMHandler.reload()})
      
    } catch (error) {
      DOMHandler.reload()
      console.log(error);
    }
  })
}

function listenShowPending(){
  const pending = document.getElementById("pending")
  pending.addEventListener("change", (event) => {
    console.log("Pending");
  })
}

function listenShowImportant(){
  const important = document.getElementById("important")
  important.addEventListener("change", (event) => {
    console.log("Important");
  })
}

function tasksPage() {
  return {
    toString(){
      return render()
    },
    addListeners(){
      listenLogout()
      listenAddTask()
      listenShowPending()
      listenShowImportant()
    }
  }

}

export default tasksPage