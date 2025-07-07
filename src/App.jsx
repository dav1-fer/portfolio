import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
        <Navbar location="Portugal" />
        <Outlet />
    </div>
  )
}

export default App