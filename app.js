import express from 'express'
import routerApi from './routes/index.js'
import dotenv from 'dotenv'
import { connectMongoose } from './config/mongoDB.js'
  
dotenv.config()
const app = express()
const PORT = process.env.PORT
connectMongoose()

app.use(express.json())
app.use(express.static('public'))

app.get('/',(request,response)=>{
    response.send('Home')
})

routerApi(app)

app.listen(PORT, () => {
    console.log(`El servidor correra en http://localhost:${PORT}`)
})