import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { fetchTaskById } from "../../services/tasks.service"
import { useState } from "react"
function TaskDetails() {
  const { id } = useParams()
  const [task, setTask] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTaskById(id)
      setTask(result)
    }
    fetchData()
  }, [id])

  return <div>title: {task.title} </div>
}

export default TaskDetails
