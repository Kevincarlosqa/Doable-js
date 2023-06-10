
import { tokenKey, BASE_URI } from "./scripts/config";
import { login } from "./scripts/services/session-service";
import { createTask } from "./scripts/services/task-service";
// import fetch from "node-fetch";
// import fetch from 'node-fetch';

const fetch = require('node-fetch');

const credentials = {
	email: "kevincarlosqa@mail.com",
	password: "123456"
}
// const fetch = require('node-fetch');

test("User can create a Task", async () => {
  console.log("int");
  await login(credentials).then(user => {
    console.log("hola");
    console.log(user)})
  const token = sessionStorage.getItem(tokenKey)
  console.log(token);
})