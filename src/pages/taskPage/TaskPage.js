import "./TaskPage.css"
import { useState, useEffect } from "react"
import * as api from "../../services/tasks.service"
import Task from "../../components/task/Task"
import TaskForm from "../../components/taskForm/TaskForm"
import TasksList from "../../components/tasksList/TasksList"

export default function TaskPage() {
  function sayHello() {
    alert("say hello")
  }
  const [isVisible, setIsVisible] = useState(true)
  // console.log("isVisible: ", isVisible)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      // setError(false)
      try {
        const result = await api.fetchTasks()
        setTasks(result)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError(true)
      }
    }

    fetchData()
  }, [])
  const [searchValue, setSearchValue] = useState("")

  // 3ème forme de useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty")
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       console.log("tasks form api : " + searchValue)
  //       setTasks(result)
  //       setLoading(false)
  //     }
  //   }
  //   console.log("searchValue", searchValue)
  //   fetchData()
  // }, [searchValue])

  // 4ème forme de useEffect
  // useEffect(() => {
  //   let didCancel = false
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (!searchValue) {
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       if (!didCancel) {
  //         console.log("result: ", searchValue)

  //         setTasks(result)
  //         setLoading(false)
  //       }
  //     }
  //   }
  //   // console.log("useEffect:", searchValue)
  //   fetchData()

  //   return () => {
  //     console.log("cleanup: ", searchValue)
  //     didCancel = true
  //   }
  // }, [searchValue])

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title: title }])
  }
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const updateTask = (id, title) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { id, title: title } : task
    )
    setTasks(newTasks)
  }
  return (
    <div className="App">
      {/* 1ère solution */}
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      {/* 2ème solution */}
      {/* <button onClick={toggleVisibility}>Toggle visibility</button> */}
      <TaskForm addTask={addTask} />
      <div className="search">
        <input
          type="search"
          name="search"
          placeholder="search task by name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {loading && <div>Loading ... </div>}
      {error && <div>Error....</div>}
      {!loading && isVisible && (
        <>
          <TasksList
            myTasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </>
      )}
    </div>
  )
}
