import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ error: "Sua sessão expirou. Por favor, faça login novamente para continuar." })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).status({ error: "O token de autenticação fornecido é inválido" })
        }   
        const user = await User.findById(decoded.userId).select("-password")
        if (!user) {
            return res.status(404).status({ error: "Usuário não encontrado" })
        }

        req.user = user

        next()

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Ocorreu um erro,tente novamente mais tarde" })
    }
}