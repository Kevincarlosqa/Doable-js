import { taskList } from "./services/task-service.js"
import { tasksAlphabetical, tasksDueDate, tasksImportance } from "./components/utils.js"

async function fetchTasks() {
  const tasks = await taskList()
  this.tasks = tasks
  // this.onlyPending = tasks.filter((pending) => pending.completed == false)
  // this == STORE
}

async function pendingStorage() {
  const tasks = await taskList()
  this.tasks = tasks.filter((pending) => pending.completed == false)
}

async function importantStorage() {
  const tasks = await taskList()
  this.tasks = tasks.filter((important) => important.important == true)
}

async function sortTasksAlphabetical() {
  const tasks = await taskList()
  this.tasks = tasksAlphabetical(tasks)
}

async function sortTasksDueDate() {
  const tasks = await taskList()
  this.tasks = tasksDueDate(tasks)
}

async function sortTasksImportant() {
  const tasks = await taskList()
  this.tasks = tasksImportance(tasks)
}

const STORAGE = {
  user: null,
  tasks: [],
  // onlyPending: [],
  // onlyImportant: [],
  // contactId: null,
  fetchTasks,
  pendingStorage,
  importantStorage,
  sortTasksAlphabetical,
  sortTasksDueDate,
  sortTasksImportant
}

export default STORAGE