import express from "express";

import { PaymentController } from "../controllers/mongo/PaymentController.js";

const routerPayment = express.Router()

routerPayment.post ('/', PaymentController.createPayment )

routerPayment.put('/:id', PaymentController.editPayment )

export default routerPayment