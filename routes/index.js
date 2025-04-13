import  routerUser  from './userRouter.js';
import  routerSchool  from './schoolsRouter.js';

 function routerApi(app){
    app.use('/users', routerUser)
    app.use('/schools', routerSchool)
}
export default routerApi
