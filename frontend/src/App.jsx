import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"


const App = () => {
  return (
    <div className="p-4 min-h-screen flex justify-center items-center">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App