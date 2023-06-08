import { root } from "../config.js"
import { renderHeader } from "../components/render.js"

function render() {
  const logout = "logout"
  return `
  ${renderHeader(logout)}
    <h1>Tasks</h1>
  `
}

function tasksPage() {
  return {
    toString(){
      return render()
    },
    addListeners(){
      // listenSubmit()
    }
  }

}

export default tasksPage