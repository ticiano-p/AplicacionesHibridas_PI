import express from 'express'
import routerApi from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.static('public'))

app.get('/',(request,response)=>{
    response.send('Home')
})

routerApi(app)

app.listen(PORT, () => {
    console.log(`El servidor correra en http://localhost:${PORT}`)
})