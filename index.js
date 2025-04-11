import express from 'express'
import routerApi from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(express.json())

app.get('/',(request,response)=>{
    console.log('Ruta Raiz');
    response.send('Home')
    })

    routerApi(app)

app.listen(PORT, () => {
    console.log(`El servidor correra en http://localhost:${PORT}`)
})