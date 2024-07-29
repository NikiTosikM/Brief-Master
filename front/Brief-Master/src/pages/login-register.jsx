import Register from "../components/login-register/register/register"
import Login  from "../components/login-register/login/login"

import "../components/login-register/login-registet-page/main.css"


export default function Page_Login_Register() {

    return (
        <div className="main__container__login-register">
            <Register/>
            <Login />
        </div>
    )
}