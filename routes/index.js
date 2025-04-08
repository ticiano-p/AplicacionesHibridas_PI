import  routerUser  from './userRouter.js';

 function routerApi(app){
    app.use('/api/user', routerUser)
}
export default routerApi
