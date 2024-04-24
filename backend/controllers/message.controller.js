import Conversation from "../models/conversations.js"
import Message from "../models/message.model.js"


export const sendMessage = async (req, res) => {
    try {
        const { id: receiverId } = req.params
        const senderId = req.user._id
        const { message } = req.body

       let conversation =  await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })
        if (!conversation) {
            conversation = await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }
        
        await Promise.all([conversation.save(),newMessage.save()])


        res.status(201).json(newMessage)


    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro,tente novamente mais tarde" })
    }


}

export const getMessages = async (req,res) => {
    try {
        const {id:userToChatId} = req.params
        const senderId = req.user._id 
        const conversation = await Conversation.findOne({
            participants:{$all: [senderId,userToChatId]}
        }).populate("messages")
        if(!conversation) return res.status(200).json([])

        const messages = conversation.messages
        res.status(200).json(messages)
    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro,tente novamente mais tarde" })
    }

}