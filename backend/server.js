import express from "express"

const app = express()


app.get('/',(req,res) => {
    res.send("Ola Mundo")
})

const PORT = process.env.PORT || 5000

app.listen(5000,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})