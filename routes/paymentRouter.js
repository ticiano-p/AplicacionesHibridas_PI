import express from "express";

import { PaymentController } from "../controllers/mongo/PaymentController.js";

const routerPayment = express.Router()

routerPayment.post ('/createSchool', PaymentController.createSchool )

routerPayment.put('/:id/editPayment', PaymentController.editPayment )

export default routerPayment