import { Server } from "socket.io";
import {createServer} from "http"
import express from "express"

 const app = express()


const server = createServer(app)
const io = new Server(server, {
	cors: {
		origin:["http://localhost:5000"],
		methods: ["GET", "POST"],
        
	},
});

export  const  getReceiversocketId = (receiverId) => {
    return userSocketMap(receiverId)
} 

const userSocketMap = {}

io.on('connection',(socket) => {
    console.log("usuário conectado",socket.id)

    const userId = socket.handshake.query.userId

    if (userId != "undefined") userSocketMap[userId] = socket.id
    
    io.emit("getOnlineUsers",Object.keys(userSocketMap))
    socket.on('disconnect',() => {
        console.log("usuário desconectado",socket.id)
        delete userSocketMap[userId]
        io.emit('getOnlineUsers',Object.keys(userSocketMap))
    })
    
})


export {app,io,server}
