import Main_Section from "./components/main/main_section/main.jsx"
import Page_Login_Register from "./pages/login-register.jsx"

import { Routes, Router, Route } from "react-router-dom"


export default function App() {
  return (
  <>
      <Routes>
        <Route path="/" element={<Main_Section />} />
        <Route path="/account" element={<Page_Login_Register />} />
      </Routes>
  </>
  )
}
