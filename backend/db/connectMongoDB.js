import mongoose from "mongoose";

const connentMongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.mongoDB_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message)
    }
}

export default connentMongoDB