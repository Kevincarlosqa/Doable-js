import DOMHandler from "./scripts/dom-handler.js";
import loginPage from "./scripts/pages/login-page.js";
import tasksPage from "./scripts/pages/tasks-page.js";
import { tokenKey, root } from "./scripts/config.js";
import STORAGE from "./scripts/storage.js";
import { tasksAlphabetical, tasksDueDate } from "./scripts/components/utils.js";
import { login, logout, signUp } from "./scripts/services/session-service.js";
import { taskList, showTask, createTask, deleteTask, editTask } from "./scripts/services/task-service.js";
import { states } from "./scripts/components/selected-state.js";

const credentials = {
	email: "kevincarlosqa@mail.com",
	password: "123456"
}

async function init() {
	//  logica de Inicio
	try {
		const token = sessionStorage.getItem(tokenKey)
		if(!token) throw new Error
    
    STORAGE.actualSort = localStorage.getItem("Actual Sort")
    STORAGE.actualShow = localStorage.getItem("Actual Show")
    // console.log(STORAGE.actualSort);
		console.log(STORAGE.actualSort);
    console.log(STORAGE.actualShow);
    // states(STORAGE.actualSort, STORAGE.actualShow)
		await STORAGE.fetchTasks()
    tasksAlphabetical(STORAGE.tasks)
    

		DOMHandler.load(tasksPage(), root)
	} catch (error) {
    STORAGE.setSort(STORAGE.actualSort)
    STORAGE.setShow()
		sessionStorage.removeItem(tokenKey)
		DOMHandler.load(loginPage(),root)
		console.log(error);
	}
}

init()