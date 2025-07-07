import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="flex gap-8">
        <Navbar location="Portugal" />
        <Outlet />
    </div>
  )
}

export default App