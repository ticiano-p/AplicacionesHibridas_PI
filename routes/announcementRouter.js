import express from "express";

import { AnnouncementController } from "../controllers/mongo/AnnouncementController.js";

const routerAnnouncement = express.Router()


routerAnnouncement.get ('/:school_id', AnnouncementController.getAnnouncement )

routerAnnouncement.post ('/:school_id', AnnouncementController.createAnnouncement )

routerAnnouncement.delete ('/:announcement_id', AnnouncementController.deleteAnnouncement )

routerAnnouncement.patch ('/:announcement_id', AnnouncementController.patchAnnouncement )

export default routerAnnouncement