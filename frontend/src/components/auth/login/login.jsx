
import "./Login.css"
import { useState } from "react"

export function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  return (
    <div className="loginContainer">
      <input type="text" placeholder="Username or email address" onChange={(e) => {
        setUsername(e.target.value)
      }} />

      <input type="password" placeholder="Password" onChange={(e) => {
        setPassword(e.target.value)
      }} />

      <div className="info">
        <label>
          <input type="checkbox" placeholder="remember me" id="checkbox" onChange={(e) => {
            setRemember(e.target.checked)
          }} />
          Remember me
        </label>
        <p className="redForgotPassword">forgot your password?</p>
      </div>

      <button>Login</button>
    </div >
  )
}
