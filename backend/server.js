import express  from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

import authRoutes from "./route/auth.route.js"
import messageRoutes from "./route/message.route.js"
import userRoute from "./route/user.route.js"


import connentMongoDB from './db/connectMongoDB.js'


const PORT = process.env.PORT || 5000
const app = express()


dotenv.config()

app.use(cookieParser())
app.use(express.json())


app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRoute)



app.listen(PORT,()=>{
    connentMongoDB();
    console.log(`Server running on port ${PORT}`)})