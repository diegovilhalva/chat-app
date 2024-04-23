import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "As senhas não são iguais" })
        }
        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ error: "Usuário já existe" })
        }

        const salt = await bcrypt.genSalt(10)

        const hashPassword = await bcrypt.hash(password, salt)

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        const newUser = new User({
            fullName,
            username,
            password: hashPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username
            })
        } else {
            return res.status(400).json({ error: "Dados inválidos" })
        }


    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro,tente novamente mais tarde" })
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Usuário ou senha incorreta" })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        })

    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro,tente novamente mais tarde" })
    }
}

export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({message:"Usuário deslogado com sucesso!"})
    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro,tente novamente mais tarde" })
    }
}