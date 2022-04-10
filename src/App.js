import "./App.css"
import TaskPage from "./pages/taskPage/TaskPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/task-page" />
          </Route>
          <Route exact path="/task-page">
            <TaskPage />
          </Route>
          {/* <Route exact path="/players">
            <Players />
          </Route> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
