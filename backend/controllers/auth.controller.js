
export const signup = async(req,res) => {
    try {
        const  {fullName,username,password,confirmPassword,gender} =req.body
    } catch (error) {
        
    }
}

export const login = async (req,res) => {
    res.send("login ok")
}

export const logout = async (req,res) => {
    res.send("logout ok")
}