import useGetConversations from "../hooks/useGetConversations"
import { getRandomEmoji } from "../utils/emojis"
import Conversation from "./Conversation"


const Conversations = () => {
    const {conversations,loading} = useGetConversations()
    console.log(conversations)
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((coversation,idx) => (
                <Conversation key={coversation._id} conversation={coversation} emoji={getRandomEmoji()} lastIdx={idx === conversations.length - 1}/>
            ))}
           {loading ? <span className="loading loading-spinner"></span> : null}
        </div>
    )
}

export default Conversations