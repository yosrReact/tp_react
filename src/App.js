import "./App.css"
import TaskPage from "./pages/taskPage/TaskPage"
import Hello from "./components/hello/Hello"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import TaskDetails from "./components/taskDetails/TaskDetails"
import TeacherRoutes from "./components/teacherRoutes/TeacherRoutes"
import StudentRoutes from "./components/studentRoutes/StudentRoutes"
import Login from "./pages/login/Login"
import { useEffect, useState } from "react"
import { me } from "./services/tasks2.service"
function App() {
  const token = localStorage.getItem("token")
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchMe = async () => {
      const user = await me()
      setUser(user)
      console.log("user: ", user)
    }
    fetchMe()
  }, [])
  if (token && user.role === "admin") {
    // private routes

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/teacher" />
          </Route>
          <Route path="/teacher">
            <TeacherRoutes />
          </Route>
        </Switch>
      </Router>
    )
  } else if (token && user.role === "user") {
    // private routes

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/student" />
          </Route>
          <Route path="/student">
            <StudentRoutes />
          </Route>
          <Route path="*">
            {/* replace with a page 404 */}
            <div>404</div>
          </Route>
        </Switch>
      </Router>
    )
  } else if (!token) {
    // public routes
    return (
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect exact to="/login" />
        </Switch>
      </Router>
    )
  } else {
    return <div>loading...</div>
  }
}

export default App
