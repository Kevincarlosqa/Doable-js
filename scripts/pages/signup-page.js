import { renderHeader } from "../components/render.js"
import { input } from "../components/input.js"
import { root } from "../config.js"
import DOMHandler from "../dom-handler.js"
import loginPage from "./login-page.js"
import tasksPage from "./tasks-page.js"
import { signUp } from "../services/session-service.js"

function render() {
  // const loginError = this.state.loginError
  return `
  ${renderHeader()}
  <main class="section">
    <section class="container">
      <form class="flex flex-column gap-4 mb-4 js-signup-form">

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
       
        <button class="button button--primary">Create Account</button>
      </form>
      <a class="block primary-300 text-center js-login-link">Login</a>
    </section>
  </main>`
}

function listenLogin() {
  const login = document.querySelector(".js-login-link")
  login.addEventListener("click", () => {
    DOMHandler.load(loginPage(), root)
  })
}

function listenSignUpForm() {
  const form = document.querySelector(".js-signup-form")
  form.addEventListener("submit", async (event) => {
    try {
      event.preventDefault()
      console.log("submit sign")
      const { email, password } = event.target.elements
      const credentials = {
        email: email.value,
        password: password.value
      }
      console.log(credentials);
      const user = await signUp(credentials)
      DOMHandler.load(tasksPage(),root)
      
    } catch (error) {
      DOMHandler.reload()
      console.log(error);
    }

  })
}

function signUpPage() {
  return {
    toString(){
      return render()
    },
    addListeners(){
      listenLogin(),
      listenSignUpForm()
    }
  }

}

export default signUpPage