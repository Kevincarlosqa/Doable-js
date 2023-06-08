import DOMHandler from "./scripts/dom-handler.js";
import loginPage from "./scripts/pages/login-page.js";
import tasksPage from "./scripts/pages/tasks-page.js";
import { tokenKey, root } from "./scripts/config.js";
import { login, logout, signUp } from "./scripts/services/session-service.js";
import { taskList, showTask, createTask, deleteTask, editTask } from "./scripts/services/task-service.js";


// let load
// DOMHandler.load(loginPage(), root)

const credentials = {
	email: "kevincarlosqa@mail.com",
	password: "123456"
}

// await login(credentials)
// let edit2Task = {
// 	title: "edit Study English",
// 	due_date: "2023-06-09",
//   completed: true,
//   important: true,
// }
// await editTask(edit2Task, 289).then(data => console.log(data))

// logout()

async function init() {
	//  logica de Inicio
	try {
		const token = sessionStorage.getItem(tokenKey)
		if(!token) throw new Error
		// console.log(STORE.user);
		// await STORE.fetchContacts()
		DOMHandler.load(tasksPage(), root)
	} catch (error) {
		sessionStorage.removeItem(tokenKey)
		DOMHandler.load(loginPage(),root)
		console.log(error);
	}
}

init()