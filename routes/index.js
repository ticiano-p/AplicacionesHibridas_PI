import  routerUser  from './userRouter.js';

 function routerApi(app){
    app.use('/users', routerUser)
}
export default routerApi
