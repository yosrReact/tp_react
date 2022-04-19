import { Route } from "react-router-dom"
import { useRouteMatch } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Switch } from "react-router-dom"
import TaskPage from "../../pages/taskPage/TaskPage"
import Hello from "../hello/Hello"
import Layout from "../layout/Layout"

function StudentRoutes() {
  const { path } = useRouteMatch()
  return (
    <div>
      <Layout role="user">
        student routes
        <Switch>
          <Route exact path={`${path}/hello`}>
            <Hello />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default StudentRoutes
