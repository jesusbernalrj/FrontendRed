import { Routes, Route } from "react-router-dom"
import { Auth } from "../Auth/Auth"
import { HomePage } from "../page/HomePage"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  )
}
