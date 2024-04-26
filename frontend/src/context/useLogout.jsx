import { useState } from "react"
import { useAuthContext } from "./authContext"
import { toast } from "react-toastify"


const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message, {
                position: "top-left"
            })
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}
export default useLogout