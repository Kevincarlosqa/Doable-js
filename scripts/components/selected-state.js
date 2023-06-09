import STORAGE from "../storage.js"
import DOMHandler from "../dom-handler.js"


function states(sort, show = 0) {
  if(sort == "Alphabetical (a-z)" && show == 0) return 0
  if(sort == "Due date" && show == 0)           return 1
  if(sort == "Importance" && show == 0)         return 2
  if(sort == "Alphabetical (a-z)" && show == 1) return 3
  if(sort == "Alphabetical (a-z)" && show == 1) return 4
  if(sort == "Alphabetical (a-z)" && show == 1) return 5
  if(sort == "Due date" && show == 2)           return 6
  if(sort == "Due date" && show == 2)           return 7
  if(sort == "Due date" && show == 2)           return 8
  if(sort == "Importance" && show == 3)         return 9
  if(sort == "Importance" && show == 3)         return 10
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
        DOMHandler.reload()
      })
      break;
    case 2:
      STORAGE.setSort("Importance")
      await STORAGE.sortTasksImportant().then(dat => {
        DOMHandler.reload()
      })
      break;
    case 3:
      
      break;
    case 4:
      
      break;
    case 5:
      
      break;
    case 6:
      
      break;
    case 7:
      
      break;
    case 8:
      
      break;
    case 9:
      
      break;
  
    default:
      break;
  }
}

export { selectedLib, states }