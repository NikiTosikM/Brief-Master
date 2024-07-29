import "./login.css"
import Status_Request from "../status_request/status_request"
import { useState } from "react"
import Login_Button from "../buttons_login_register/login_button"



export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [textStatus, setTextStatus] = useState("")

    return (
        <div className="container__login">
            <h2 className="title__login">Login</h2>
            <Status_Request status={textStatus}/>
            <input className="input__field__login" name="login"
                placeholder="Email"
                value={email} onChange={(event) => setEmail(event.target.value)}/>
            <hr className="hr__login" />
            <input className="input__field__login" name="password"
                placeholder="Password"
                value={password} onChange={(event) => {setPassword(event.target.value)}}/>
            <hr className="hr__login" />
            <Login_Button email={email} 
                password={password} setTextStatus={setTextStatus}
                component={document.querySelectorAll(".status__request")[1]}/>
        </div>
    )
}