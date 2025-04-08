import express from 'express'
import routerApi from './routes/index.js'

const PORT = 5000
const app = express()
app.use(express.json())
routerApi(app)

app.listen(PORT, () => {
    console.log(`El servidor correra en http://localhost:${PORT}`)
})