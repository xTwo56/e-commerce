
import "./Register.css"

export function Register() {
  return (
    <div className="registerContainer">
      <p id="registerText">Register an account</p>
      <input type="text" placeholder="Email address" />
      <p id="registerText2">A password will be sent to your email address.</p>
      <span id="registerText3">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
        <span id="redUnderlinedText"> privacy policy</span>
      </span>
      <button>Register</button>
    </div>
  )
}
