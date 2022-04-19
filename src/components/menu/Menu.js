import { Link, NavLink } from "react-router-dom"
import "./Menu.css"
function Menu({ role }) {
  return (
    <div>
      {role === "user" && (
        <NavLink
          to="/student/hello"
          activeClassName="customClass"
          isActive={(_, { pathname }) =>
            pathname.match("/hello") || pathname === "/"
          }
        >
          Hello
        </NavLink>
      )}
      {role === "admin" && (
        <NavLink to="/teacher/task-page" activeClassName="customClass">
          Tasks list
        </NavLink>
      )}
    </div>
  )
}

export default Menu
