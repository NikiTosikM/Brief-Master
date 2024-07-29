import "./register.css"

import Status_Request from "../status_request/status_request"
import Register_Button from "../buttons_login_register/register_button";

import { useState } from "react";


export default function Register() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [textStatus, setTextStatus] = useState("")

    return (
        <div className="container__register">
            <h2 className="title__register">Register</h2>
            <Status_Request status={textStatus}/>
            <input className="input__field__register" name="name"
                placeholder="Name"
                value={name}
                onChange={(event) => {setName(event.target.value)}}/>
            <hr className="hr__register"/>
            <input  className="input__field__register" name="lastname"
                placeholder="Lastname"
                value={lastname}
                onChange={(event) => {setLastname(event.target.value)}}/>
            <hr className="hr__register"/>
            <input  className="input__field__register" name="email"
                placeholder="Email" 
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}/>
            <hr className="hr__register"/>
            <input className="input__field__register" name="password" 
                placeholder="Password" 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}/>
            <hr className="hr__register"/>
            <Register_Button 
                name={name}
                lastname={lastname}
                email={email}
                password={password}
                setTextStatus={setTextStatus}
                component={document.querySelectorAll(".status__request")[0]}/>
        </div>
    )
}