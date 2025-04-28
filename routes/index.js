import  routerUser  from './userRouter.js';
import  routerSchool  from './schoolsRouter.js';
import routerPayment from './paymentRouter.js'

 function routerApi(app){
    app.use('/users', routerUser)
    app.use('/schools', routerSchool)
    app.use('/payment', routerPayment)
    app.use('/schoolPost', routerPayment)

}
export default routerApi
