import User from "../models/user.model.js"

export const getUsers = async (req,res) => {
    try {
        const loggedInUserId = req.user._id

        const filterdUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filterdUsers)

    } catch (error) {
        console.log(error)
        res.status(500),json({error:"Ocoreu um erro,tente novamente mais tarde"})
    }
}