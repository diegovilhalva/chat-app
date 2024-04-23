import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.send("Ola Mundo")
})

app.use('/api/auth',authRoutes)

app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})