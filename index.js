import DOMHandler from "./scripts/dom-handler.js";
import loginPage from "./scripts/pages/login-page.js";
import { login, logout } from "./scripts/services/session-service.js";

// const root = document.querySelector("#root")
// let load
// DOMHandler.load(loginPage(), root)

const credentials = {
	email: "kevincarlosqa@mail.com",
	password: "123456"
}

login(credentials).then(user => console.log(user))

logout()
