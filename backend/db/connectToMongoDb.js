import mongoose from "mongoose";

const connectToMongDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Banco de dados conectado!")
    } catch (error) {
        console.log("Erro ao connectar banco de dados",error.message)
    }

}

export default connectToMongDb