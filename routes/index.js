// import productRouter from './productsRouter.js'
import  routerUser  from './userRouter.js'

export default function routerApi( app ){
    app.use('/api/user', routerUser)
    // app.use('/product', productRouter)
}
