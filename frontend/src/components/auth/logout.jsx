
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Register } from "./register/register"
import { Login } from "./login/login"
import "./Layout.css"

export function Auth() {

  return (
    <div>
      <div className="redHeading">My Account</div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {

  const navigate = useNavigate();
  return (
    <div className="appBarContainer">

      <div className="paths" onClick={() => {
        console.log("signup clicked")
        navigate("/login")
      }}>Login</div>
      <div className="paths" onClick={() => {
        navigate("/register")
      }}>Register</div>
    </div>
  )
}
