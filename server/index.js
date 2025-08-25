import express from 'express'
import mongoose from 'mongoose'
import { UserRouter } from './routes/user.js'
import cors from "cors"
import cookieParser from 'cookie-parser'

const app = express()
const port = 3000
process.env.KEY="jwttokenkey"

app.use(express.json())
app.use(cors({
  origin:["http://localhost:5173"],
  credentials:true
}))
app.use(cookieParser())
app.use('/auth',UserRouter)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')

app.listen(port, () => {
  console.log(`server is running on port : ${port}`)
})
