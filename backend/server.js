import express from "express"
import { app, server } from "./socket/socket.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/users.routes.js"
import messageRoutes from "./routes/message.routes.js"
import connectToMongDb from "./db/connectToMongoDb.js"
import path from "path"
dotenv.config()
const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

app.use(express.json())
app.use(cookieParser())
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', userRoutes)
app.use(express.static(path.join(__dirname,"frontend/dist")))

app.get("*",(req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
server.listen(PORT, () => {
    connectToMongDb()
    console.log(`Servidor rodando na porta ${PORT}`)
})