import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { useAuthContext } from "./context/authContext"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 min-h-screen flex justify-center items-center">
         <ToastContainer/>
      <Routes>
          <Route path="/" element={authUser ? <Home/>: <Navigate to="/login"/>} />
          <Route path="/login" element={authUser ? <Navigate to="/"/> :<Login/>}/>
          <Route path="/signup" element={authUser ? <Navigate to="/"/> : <SignUp/>} />
      </Routes>
    </div>
  )
}

export default App