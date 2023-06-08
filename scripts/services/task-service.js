import { tokenKey, BASE_URI } from "../config.js";

async function taskList() {
  const response = await fetch(`${BASE_URI}tasks`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    }
  })

  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.errors)
  }
  const data = await response.json();

  return data
}

async function showTask(id) {
  const response = await fetch(`${BASE_URI}tasks/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    }
  })

  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.errors)
  }
  const data = await response.json();

  return data
}

async function createTask({ title, due_date, important = false, completed = false}) {
  const newTask = {
    title: title,
    due_date: due_date,
    important: important,
    completed: completed
  }
  const response = await fetch(`${BASE_URI}tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
    body: JSON.stringify(newTask)
  })

  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.errors)
  }
  const data = await response.json();

  return data
}

async function deleteTask(id) {
  const token = sessionStorage.getItem(tokenKey)

  const response = await fetch(`${BASE_URI}tasks/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token token=${token}`,
    },
  })

  let data
    try {
      data = await response.json()
    } catch (error) {
      data = response.statusText
    }

  if (!response.ok) {
    data = await response.json() 
    throw new Error(data.errors)
  }

  return data
}

async function editTask({ title, due_date, important = false, completed = false}, id) {
  const editTask = {
    title: title,
    due_date: due_date,
    important: important,
    completed: completed
  }
  const response = await fetch(`${BASE_URI}tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem(tokenKey)}`,
    },
    body: JSON.stringify(editTask)
  })

  if(!response.ok) {
    const data = await response.json()
    throw new Error(data.errors)
  }
  const data = await response.json();

  return data
}

export { taskList, showTask, createTask, deleteTask, editTask }