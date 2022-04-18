import { Route } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Switch } from "react-router-dom"
import TaskPage from "../../pages/taskPage/TaskPage"

function StudentRoutes() {
  const { path } = useRouteMatch()
  return (
    <div>
      teacher routes
      <Switch>
        <Route exact path={`${path}/task-page`}>
          <TaskPage />
        </Route>
      </Switch>
    </div>
  )
}

export default StudentRoutes
