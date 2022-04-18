import { useState } from "react"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Task.css"
export default function Task({
  title = "learn c++",
  duration,
  details,
  type,
  startDate,
  deleteTask,
  updateTask,
  id,
}) {
  // console.log("props: ", props)
  const [titleToUpdate, setTitleToUpdate] = useState(title)
  const [updateMode, setUpdateMode] = useState(false)

  function renderActions() {
    return (
      <div className="actions">
        <button onClick={() => deleteTask(id)}>delete</button>
        <button onClick={() => setUpdateMode(true)}>update</button>
      </div>
    )
  }
  const history = useHistory()
  console.log("history: ", history)
  const [completed, setCompleted] = useState(false)
  const handleClick = () => {
    // todos
    // history.push(`/task-page/${id}`)
    setCompleted(true)
  }
  return (
    <div className="task">
      {completed && <Redirect to={`/task-page/${id}`} />}
      {!updateMode ? (
        <>
          {/* <Link to={"/task-page/" + id}> */}
          {/* <Link to={`/task-page/${id}`}> */}
          <div className="title" onClick={handleClick}>
            {title}
            {duration && <span> ({duration} mn)</span>}
          </div>
          {/* </Link> */}
          <div>
            {/* {details && (
          <>
            {details.type}
            {details.startDate}
          </>
        )} */}
            {type}
            {startDate}
          </div>

          {renderActions()}
        </>
      ) : (
        <div>
          <input
            type="text"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />
          <button
            onClick={() => {
              updateTask(id, titleToUpdate)
              setUpdateMode(false)
            }}
          >
            update Task
          </button>
        </div>
      )}
    </div>
  )
}
