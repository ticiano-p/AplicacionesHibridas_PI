import mongoose from 'mongoose'
import 'dotenv/config'

const MDB_USER = process.env.MDB_USER
const MDB_PASSWORD = process.env.MDB_PASSWORD
const MDB_SERVER = process.env.MDB_SERVER

const uri = `mongodb+srv://${MDB_USER}:${MDB_PASSWORD}@${MDB_SERVER}/?retryWrites=true&w=majority&appName=Cluster0`

export const connectMongoose = async () => {
    try {
        console.log(uri)
        await mongoose.connect(uri, { dbName: 'final_prueba' })
        console.log('✅ Conectado a MongoDB con Mongoose')
    } catch (error) {
        console.error('❌ Error de conexión:', error)
    }
}
