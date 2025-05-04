import express from 'express'
import routerApi from './routes/index.js'
import dotenv from 'dotenv'
import { connectMongoose } from './config/mongoDB.js'
import swaggerUi from 'swagger-ui-express' // librería para documentar API
import specs from "./swagger/swagger.js"


dotenv.config()
const app = express()
const PORT = process.env.PORT
connectMongoose()

app.use(express.json())
app.use(express.static('public'))
app.use( '/api-docs' , swaggerUi.serve, swaggerUi.setup(specs))

app.get('/',(request,response)=>{
    response.send('Home')
})

routerApi(app)

app.listen(PORT, () => {
    console.log(`El servidor correra en http://localhost:${PORT}`)
})