import "./TaskForm.css"
import { useState, useEffect } from "react"
export default function TaskForm(props) {
  const addTask = "Add a task"
  const steps = ["enter a task title", "click on button"]
  // props.say()
  const [title, setTitle] = useState("")
  const handleAddTask = () => {
    props.addTask(title)
  }
  useEffect(() => {
    // console.log("useffect")
    document.title = title
    // setTitle("hello" + Math.random())
  })
  // console.log("avant")

  return (
    <>
      <ul>
        {steps.map(function (x, index) {
          return <li key={index}>{x}</li>
        })}
      </ul>
      <form action="" className="form">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          {addTask}
        </button>
      </form>
    </>
  )
}
