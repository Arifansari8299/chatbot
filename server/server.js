import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

// Database Connection
mongoose.connect(MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch((error)=>console.log("Error: ", error))

app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})