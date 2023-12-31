import { taskList } from "./services/task-service.js"
import { tasksAlphabetical, tasksDueDate, tasksImportance } from "./components/utils.js"

async function fetchTasks() {
    const tasks = await taskList()
    this.tasks = tasks
}

async function pendingStorage(data = null) {
  if (!data) {
    const tasks = await taskList()
    this.tasks = tasks.filter((pending) => pending.completed == false)
  } else if (data) {
    this.tasks = data.filter((pending) => pending.completed == false)
  }
}

async function importantStorage(data = null) {
  if(!data) {
    const tasks = await taskList()
    this.tasks = tasks.filter((important) => important.important == true)
  } else if(data) {
    this.tasks = data.filter((important) => important.important == true)
  }
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

async function sortTasksDueDate(data = null) {
  if (!data) {
    const tasks = await taskList()
    this.tasks = tasksDueDate(tasks)
  } else if (data) {
    console.log(data);
    this.tasks = tasksAlphabetical(data)
  }
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
    localStorage.setItem("Actual Sort", this.actualSort)
  },
  setShow() {
    localStorage.setItem("Actual Show", this.actualShow)
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