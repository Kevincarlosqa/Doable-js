import { root, tokenKey } from "../config.js"
import DOMHandler from "../dom-handler.js"
import loginPage from "./login-page.js"
import { renderHeader, renderNewTask, renderShow, renderSort } from "../components/render.js"
import { logout } from "../services/session-service.js"
import tasks from "../components/tasks.js"
import { dateStructure } from "../components/utils.js"
import { input } from "../components/input.js"
import { createTask, editTask } from "../services/task-service.js"
import STORAGE from "../storage.js"
import { selectedLib, states, showState } from "../components/selected-state.js"
import { tasksAlphabetical, tasksDueDate, tasksImportance } from "../components/utils.js"

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
      // await STORAGE.fetchTasks().then(data => {
      //   DOMHandler.reload()})
      const state = states(STORAGE.actualSort, STORAGE.actualShow)
      console.log(state);
      await selectedLib(state)
    } catch (error) {
      DOMHandler.reload()
      console.log(error);
    }
  })
}

// Opciones del Show

function listenShowPending(){
  const pending = document.getElementById("pending")
  showState()
  pending.addEventListener("change", async (event) => {
    console.log("Pending");
    STORAGE.pending? STORAGE.pending = false : STORAGE.pending = true
    STORAGE.setShow()
    console.log(STORAGE.actualSort);
    console.log(STORAGE.actualShow);
    const state = states(STORAGE.actualSort, STORAGE.actualShow)
    console.log(state);
    await selectedLib(state)
    // await STORAGE.pendingStorage().then(data => {
    //   STORAGE.actualShow = "pending"
    //   DOMHandler.reload()})
  })
}

function listenShowImportant(){
  const important = document.getElementById("important")
  showState()
  important.addEventListener("change", async (event) => {
    console.log("Important");
    STORAGE.important? STORAGE.important = false : STORAGE.important = true
    STORAGE.setShow()
    console.log(STORAGE.actualSort);
    console.log(STORAGE.actualShow);
    const state = states(STORAGE.actualSort, STORAGE.actualShow)
    console.log(state);
    await selectedLib(state)
    // await STORAGE.importantStorage().then(data => {
    //   STORAGE.actualShow = "important"
    //   DOMHandler.reload()})
  })
}

// Funciones de los Tasks
function listenCheckTask() {
  const checkTask = document.querySelector(".js-tasks-list")
  checkTask.addEventListener("change", async (event) => {
    const check = event.target.closest("[data-id]")
    if(!check) return
    console.log(check);
    let task = STORAGE.tasks.find(task => task.id === +check.dataset.id)
    console.log(task);
    task.completed? task.completed = false : task.completed = true
    await editTask({...task},task.id).then(data => DOMHandler.reload())
  })
}

function listenImportantTask() {
  const checkTask = document.querySelector(".js-tasks-list")
  checkTask.addEventListener("click", async (event) => {
    const logoTask = event.target.closest("[data-logo]")
    if(!logoTask) return
    let task = STORAGE.tasks.find(task => task.id === +logoTask.dataset.logo)
    task.important? task.important = false : task.important = true
    await editTask({...task},task.id).then(data => DOMHandler.reload())
  })
}

function listenSelectSort() {
  const sort = document.querySelector("#js-sort")
  sort.addEventListener("change", async (event) => {
    if(event.target.value == "Alphabetical (a-z)"){
      STORAGE.setSort("Alphabetical (a-z)")
      // await STORAGE.sortTasksAlphabetical().then(dat => {
      //   DOMHandler.reload()
      // })
      const state = states(event.target.value)
      await selectedLib(state)
    } else if(event.target.value == "Due date") {
      STORAGE.setSort("Due date")
      // await STORAGE.sortTasksDueDate().then(dat => {
      //   DOMHandler.reload()
      // })
      const state = states(event.target.value)
      await selectedLib(state)
    } else if(event.target.value == "Importance") {
      console.log("imp");
      STORAGE.setSort("Importance")
      // await STORAGE.sortTasksImportant().then(dat => {
      //   DOMHandler.reload()
      // })
      const state = states(event.target.value)
      await selectedLib(state)
    } else {
      return
    }
  })
}

function tasksPage() {
  return {
    toString(){
      return render.call(this)
    },
    addListeners(){
      listenLogout()
      listenAddTask()
      listenShowPending()
      listenShowImportant()
      listenCheckTask()
      listenImportantTask()
      listenSelectSort()
    }
  }

}

export default tasksPage