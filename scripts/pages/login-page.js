import { input } from "../components/input.js"
import { renderHeader } from "../components/render.js"
import DOMHandler from "../dom-handler.js"
import signUpPage from "./signup-page.js"
import { login } from "../services/session-service.js"
import tasksPage from "./tasks-page.js"
import { root } from "../config.js"

function render() {
  // const loginError = this.state.loginError
  return `
  ${renderHeader()}
  <main class="section">
    <section class="container">
      <form class="flex flex-column gap-4 mb-4 js-login-form">

        ${input({
          label: "email",
          id: "email",
          name: "email",
          placeholder: "jhon@example.com",
          type: "email",
          required: true,
          value: "kevincarlosqa@mail.com",
        })}


        ${input({
          label: "password",
          id: "password",
          name: "password",
          placeholder: "********",
          type: "password",
          required: true,
          value: "123456",
        })}        
       
        <button class="button button--primary">Login</button>
      </form>
      <a class="block primary-300 text-center js-signup-link">Create Account</a>
    </section>
  </main>`
}

function listenSignUp() {
  const signUp = document.querySelector(".js-signup-link")
  signUp.addEventListener("click", () => {

    DOMHandler.load(signUpPage(), root)

  })
}

function listenSubmit() {
  const form = document.querySelector(".js-login-form")
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault()
      console.log("submit")
      const { email, password } = event.target.elements
      const credentials = {
        email: email.value,
        password: password.value
      }
      const user = await login(credentials)
      DOMHandler.load(tasksPage(),root)
      
    } catch (error) {
      DOMHandler.reload()
      console.log(error);
    }

  })
}






function loginPage() {
  return {
    toString(){
      return render()
    },
    addListeners(){
      listenSubmit(),
      listenSignUp()
    }
  }

}

export default loginPage