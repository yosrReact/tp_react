import { useState } from "react"
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
  return (
    <div className="task">
      {!updateMode ? (
        <>
          <div className="title">
            {title}
            {duration && <span> ({duration} mn)</span>}
          </div>
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
