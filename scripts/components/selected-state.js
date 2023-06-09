import STORAGE from "../storage.js"
import DOMHandler from "../dom-handler.js"

function showState() {
  const pending = document.getElementById("pending")
  const important = document.getElementById("important")
  console.log(pending.checked);
  console.log(important.checked);
}

function states(sort, show = 0) {
  if(sort == "Alphabetical (a-z)" && show == 0) return 0
  if(sort == "Due date" && show == 0)           return 1
  if(sort == "Importance" && show == 0)         return 2
  if(sort == "Alphabetical (a-z)" && show == 1) return 3
  if(sort == "Due date" && show == 1)           return 4
  if(sort == "Importance" && show == 1)         return 5
  if(sort == "Alphabetical (a-z)" && show == 2) return 6
  if(sort == "Due date" && show == 2)           return 7
  if(sort == "Importance" && show == 2)         return 8
  if(sort == "Alphabetical (a-z)" && show == 3) return 9
  if(sort == "Due date" && show == 3)           return 10
  if(sort == "Importance" && show == 3)         return 11
}

async function selectedLib(state){
  switch (state) {
    case 0:
      STORAGE.setSort("Alphabetical (a-z)")
      await STORAGE.sortTasksAlphabetical().then(dat => {
        DOMHandler.reload()})
      break;
    case 1:
      STORAGE.setSort("Due date")
      await STORAGE.sortTasksDueDate().then(dat => {
        DOMHandler.reload()})
      break;
    case 2:
      STORAGE.setSort("Importance")
      await STORAGE.sortTasksImportant().then(dat => {
        DOMHandler.reload()})
      break;
    case 3:
      await STORAGE.pendingStorage().then((data) => {
        console.log(STORAGE.tasks);
        STORAGE.sortTasksAlphabetical(STORAGE.tasks)
          DOMHandler.reload()
        })
       
      break;
    case 4:
      STORAGE.setSort("Due date")
      await STORAGE.sortTasksDueDate().then(dat => {
        STORAGE.pendingStorage(STORAGE.tasks)
        DOMHandler.reload()})
      break;
    case 5:
      STORAGE.setSort("Importance")
      await STORAGE.sortTasksImportant().then(dat => {
        STORAGE.pendingStorage(STORAGE.tasks)
        DOMHandler.reload()})
      break;
    case 6:
      await STORAGE.importantStorage().then(data => {
        console.log(STORAGE.tasks);
        STORAGE.sortTasksAlphabetical(STORAGE.tasks)
          DOMHandler.reload()
        })
      break;
    case 7:
      STORAGE.setSort("Due date")
      await STORAGE.sortTasksDueDate().then(dat => {
        STORAGE.importantStorage(STORAGE.tasks)
        DOMHandler.reload()})
      break;
    case 8:
      STORAGE.setSort("Importance")
      await STORAGE.sortTasksImportant().then(dat => {
        STORAGE.importantStorage(STORAGE.tasks)
        DOMHandler.reload()})
      break;
    case 9:
      
      break;
  
    default:
      break;
  }
}

export { selectedLib, states, showState }