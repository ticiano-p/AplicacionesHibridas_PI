import express from "express";

import { announcementsController } from "../controllers/mongo/announcementsController.js";

const routerPayment = express.Router()


routerPayment.get ('schools/:schoolId/announcements', announcementsController.getAnnouncementsId )

routerPayment.post ('schools/:schoolId/announcements', announcementsController.postAnnouncementsId )

routerPayment.delete ('schools/:schoolId/announcements/:announcementId', announcementsController.deleteAnnouncementsId )

routerPayment.patch ('schools/:schoolId/announcements/:announcementId', announcementsController.patchAnnouncementsId )

export default routerPayment