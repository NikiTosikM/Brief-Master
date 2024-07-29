import "./account_button.css"
import { Routes, Route, Link } from "react-router-dom"


export default function Account_Button () {
    return (
        <>
            <Link to="/account" className="account" name="button__account">Account</Link>
        </>
    )
}