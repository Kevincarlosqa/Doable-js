import DOMHandler from "./scripts/dom-handler.js";
import loginPage from "./scripts/pages/login-page.js";

const root = document.querySelector("#root")
let load
DOMHandler.load(loginPage(), root)