import Axios from "axios"

export const addTask = async (task) => {
  const result = await Axios.post("http://localhost:5000/api/v1/tasks", task)
  return result.data.model
}

export const updateTask = async (id, task) => {
  const result = await Axios.put(
    "http://localhost:5000/api/v1/tasks/" + id,
    task
  )
  return result.data.model
}

export const deleteTask = async (id) => {
  const result = await Axios.delete("http://localhost:5000/api/v1/tasks/" + id)
  return result.data.model
}

export const fetchTaskById = async (taskId) => {
  const result = await Axios.get("http://localhost:5000/api/v1/tasks/" + taskId)
  return result.data.model
}

export const fetchTasks = async () => {
  // await delay(500)
  const result = await Axios.get("http://localhost:5000/api/v1/tasks")
  return result.data.model
}
