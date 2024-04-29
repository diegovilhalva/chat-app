import { useState } from "react"
import useConversation from "../zustand/useConversation"
import { useEffect } from "react"
import { toast } from "react-toastify"


const useGetMessages = () => {
 const [loading,setLoading] = useState(false)

 const  {messages,setMessages,selectedConversation} = useConversation() 
 useEffect(() => {
    const getMessages = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`)
            const data = await res.json()
            if (data.error) {
                throw Error(data.error)
            }
            setMessages(data)
        } catch (error) {
            toast.error(error.messages,{
                position:"top-left"
            })
        }finally{
            setLoading(false)
        }
    }
   if (selectedConversation?._id) {
    getMessages()
   }
 },[selectedConversation?._id,setMessages])
 
 return {messages,loading}
}

export default useGetMessages