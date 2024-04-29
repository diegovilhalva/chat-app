
import { useState } from "react"
import {IoSearchSharp} from "react-icons/io5"
import useCoversation from "../zustand/useConversation"
import useGetConversations from "../hooks/useGetConversations"
import { toast } from "react-toastify"

const SearchInput = () => {
  const [search,setSearch] = useState('')
  const {setSelectedConversation} = useCoversation()
  const {conversations,loading} = useGetConversations()
  const handleSubmit = (e) => {
      e.preventDefault()
      if(!search) return;
      if (search.length < 3) {
          return toast.error("Pesquisa deve ter no mínimo 3 caracteres",{position:"top-left"})
      }

      const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
      if (conversation) {
        setSelectedConversation(conversation)
        setSearch('')

      }else{
        toast.error('Usuário não encontrado',{
          position:"top-left"
        })
      }

  }
  return (
    <form onSubmit={handleSubmit} className="flex  items-center gap-2">
        <input type="text" placeholder="Pesquisar" className="input input-bordered rounded-full" 
      value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="btn btn-circle bg-sky-500 text-white">
            <IoSearchSharp className="h-6 w-6 outline-PSnone"/>
        </button>
    </form>
  )
}

export default SearchInput