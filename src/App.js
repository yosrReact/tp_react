import "./App.css"
import TaskPage from "./pages/taskPage/TaskPage"
import Hello from "./components/hello/Hello"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Menu from "./components/menu/Menu"
import Layout from "./components/layout/Layout"
import TaskDetails from "./components/taskDetails/TaskDetails"
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import StudentRoutes from "./components/studentRoutes/StudentRoutes"
function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Redirect to="/teacher" />
            </Route>
            <Route path="/teacher">
              <TeacherRoutes />
            </Route>
            <Route path="/student">
              <StudentRoutes />
            </Route>
            <Route path="/hello/jjj">
              <Hello />
            </Route>
            {/* <Route exact path="/hello">
              <Hello />
            </Route>
            <Route exact path="/">
              <Hello />
            </Route>
            <Route exact path="/task-page">
              <TaskPage />
            </Route>
            <Route exact path="/task-page/:id">
              <TaskDetails />
            </Route> */}
            {/* <Route exact path="/players">
            <Players />
          </Route> */}
          </Switch>
        </Layout>
      </Router>
    </div>
  )
}

export default App
