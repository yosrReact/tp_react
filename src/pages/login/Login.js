import { useState } from "react"
import { login } from "../../services/tasks2.service"
import { useHistory } from "react-router-dom"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory()
  const handleClick = async () => {
    const token = await login({ email, password })
    console.log("token: ", token)
    localStorage.setItem("token", token)
    // history.push("/")
    window.location = "/"
  }
  return (
    <div>
      <div>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button data-testid="submit" onClick={handleClick}>
          Se connecter
        </button>
      </div>
    </div>
  )
}

export default Login
