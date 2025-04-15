import express from 'express'
import routerApi from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const dburi = process.env.MONGODV_URI
const PORT = process.env.PORT
console.log(dburi)
mongoose.connect(dburi)
const db = mongoose.connection
db.on('error', () => { console.error('Error') })
db.once('open', () => { console.log('To joya ') })

app.use(express.json())
app.use(express.static('public'))

app.get('/',(request,response)=>{
    response.send('Home')
})

routerApi(app)

app.listen(PORT, () => {
    console.log(`El servidor correra en http://localhost:${PORT}`)
})