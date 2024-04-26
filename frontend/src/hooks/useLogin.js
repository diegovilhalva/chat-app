import { useState } from "react"
import { toast } from "react-toastify"
import { useAuthContext } from "../context/authContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()

    const login = async (username, password) => {
        const success = handleInputErrors(username, password);
		if (!success) return;
        setLoading(true)
        try {
            const res = await fetch("/api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json()
           
            if (data.error) {
                throw new Error(data.error)
                
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message, {
                position: "top-left"
            })
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { login, loading }
}

export default useLogin

function handleInputErrors(username, password) {
    if (!username || !password) {
        toast.error("Por favor, preencha todos os campos",{
            position:"top-left"
        })
        return false;
    }
    return true
}