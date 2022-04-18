import { Link, NavLink } from "react-router-dom"
import "./Menu.css"
function Menu() {
  return (
    <div>
      <NavLink
        to="/student/hello"
        activeClassName="customClass"
        isActive={(_, { pathname }) =>
          pathname.match("/hello") || pathname === "/"
        }
      >
        Hello
      </NavLink>
      <br />
      <NavLink to="/teacher/task-page" activeClassName="customClass">
        Tasks list
      </NavLink>
    </div>
  )
}

export default Menu
