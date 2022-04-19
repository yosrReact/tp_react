import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchTaskById } from "../../services/tasks2.service"
import { useState } from "react"
function TaskDetails() {
  const { id } = useParams()
  const [task, setTask] = useState({})
  console.log("task: ", task)
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTaskById(id)
      console.log("result: ", result)
      setTask(result)
    }
    fetchData()
  }, [id])

  return <div>{task && <div>title: {task.title} </div>}</div>
}

export default TaskDetails
