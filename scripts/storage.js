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

async function sortTasksAlphabetical(data = null) {
  if(!data) {
    const tasks = await taskList()
    this.tasks = tasksAlphabetical(tasks)
  } else if (data) {
    console.log(data);
    this.tasks = tasksAlphabetical(data)
  }
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
  actualSort: "Alphabetical (a-z)",
  actualShow: 0,
  pending: false,
  important: false,
  fetchTasks,
  pendingStorage,
  importantStorage,
  sortTasksAlphabetical,
  sortTasksDueDate,
  sortTasksImportant,
  setSort(sort) {
    this.actualSort = sort
  },
  setShow() {
    if(this.pending == false && this.important == false) {
      this.actualShow = 0
    } else if(this.pending == true && this.important == false) {
      this.actualShow = 1
    } else if(this.pending == false && this.important == true) {
      this.actualShow = 2
    } else if(this.pending == true && this.important == true) {
      this.actualShow = 3
    } else{
      return
    }
  },
}

export default STORAGE