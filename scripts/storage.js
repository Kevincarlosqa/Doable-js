import { taskList } from "./services/task-service.js"

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

const STORAGE = {
  user: null,
  tasks: [],
  // onlyPending: [],
  // onlyImportant: [],
  // contactId: null,
  fetchTasks,
  pendingStorage,
  importantStorage
}

export default STORAGE