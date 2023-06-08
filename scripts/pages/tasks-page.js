import { root, tokenKey } from "../config.js"
import DOMHandler from "../dom-handler.js"
import loginPage from "./login-page.js"
import { renderHeader } from "../components/render.js"
import { logout } from "../services/session-service.js"
import tasks from "../components/tasks.js"
import { dateFormat } from "../components/utils.js"
import { input } from "../components/input.js"

function render() {
  const logout = "logout"
  return `
  ${renderHeader(logout)}
    <h1>Tasks</h1>
    ${tasks}
  `
}

function listenLogout() {
  const logoutLink = document.querySelector(".js-logout-link")
  logoutLink.addEventListener("click", async (event) => {
    try {
      const user = await logout()
      DOMHandler.load(loginPage(), root)

    } catch (error) {
      console.log(error);
    }

  })
}

function tasksPage() {
  return {
    toString(){
      return render()
    },
    addListeners(){
      listenLogout()
    }
  }

}

export default tasksPage