import Task from "./../task/Task"
function TasksList(props) {
  return (
    <div>
      {props.myTasks.map(function (x) {
        return (
          <Task
            key={x._id}
            id={x._id}
            title={x.title}
            duration={x.duration}
            // details={x.details}
            type={x.type}
            startDate={x.startDate}
            deleteTask={props.deleteTask}
            updateTask={props.updateTask}
          />
        )
      })}
      {/* <Task
          title="learn html"
          duration={60}
          details={{
            type: "IT",
            startDate: "2021-02-16",
          }}
        />
        <Task title="learn css" />
        <Task title="learn react" /> */}
    </div>
  )
}

export default TasksList
