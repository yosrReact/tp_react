import { Link, NavLink } from "react-router-dom"
import "./StudentMenu.css"

function StudentMenu() {
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
    </div>
  )
}

export default StudentMenu
