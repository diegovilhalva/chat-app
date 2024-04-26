import { useState } from "react"
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "../context/authContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return;
        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({fullName, username, password,confirmPassword, gender})
                
            })
            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message,{
                position:"top-left"
            })
        }finally{
            setLoading(false)
        }
    }
    return {loading,signup}
}

export default useSignup

function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("Por favor, preencha todos os campos",{
            position:"top-left"
        })
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("as senhas não são iguais",{
            position:"top-left"
        })
        return false;
    }
    if (password.length < 6) {
        toast.error("Senha deve possuir mais 6 caracteres",{
            position:"top-left"
        })
        return false;
    }

    return true;
}