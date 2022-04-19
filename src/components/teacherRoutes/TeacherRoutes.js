import { Route } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Switch } from "react-router-dom"
import TaskPage from "../../pages/taskPage/TaskPage"
import Layout from "../layout/Layout"
import TaskDetails from "../taskDetails/TaskDetails"

function TeacherRoutes() {
  console.log("useLocation(): ", useLocation())
  console.log("useRouteMatch(): ", useRouteMatch())
  const { path } = useRouteMatch()
  return (
    <div>
      <Layout role="admin">
        teacher routes
        <Switch>
          <Route exact path={`${path}/task-page`}>
            <TaskPage />
          </Route>
          <Route exact path={`${path}/task-page/:id`}>
            <TaskDetails />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default TeacherRoutes
