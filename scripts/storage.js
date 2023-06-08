import { taskList } from "./services/task-service.js"

async function fetchTasks() {
  const tasks = await taskList()
  this.tasks = tasks
  // this.favorites = contacts.filter((favorite) => favorite.favorite == true)
  // this == STORE
}
const STORAGE = {
  user: null,
  tasks: [],
  // favorites: [],
  // contactId: null,
  fetchTasks
}

export default STORAGE