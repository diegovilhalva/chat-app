import { BiSend } from "react-icons/bi"


const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
                <input type="text" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white" placeholder="Escrever mensagem" />
                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
                    <BiSend className="text-gray-50 h-6 w-6"/>
                </button>
        </div>
    </form>
  )
}

export default MessageInput