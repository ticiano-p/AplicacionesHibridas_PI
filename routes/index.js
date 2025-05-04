import  routerUser  from './userRouter.js';
import  routerSchool  from './schoolsRouter.js';
import routerPayment from './paymentRouter.js';
import routerAnnouncement from './announcementRouter.js';

 function routerApi(app){
    app.use('/users', routerUser)
    app.use('/school', routerSchool)
    app.use('/announcement', routerAnnouncement)
    app.use('/payment', routerPayment)

}
export default routerApi
