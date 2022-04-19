import { useState } from "react"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleClick = () => {}
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
        <button onClick={handleClick}>Se connecter</button>
      </div>
    </div>
  )
}

export default Login
