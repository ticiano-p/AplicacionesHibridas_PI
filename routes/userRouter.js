import express from 'express'

import { UserController } from '../controllers/userController.js'

const routerUser = express.Router()

routerUser.get("/", UserController.getUsers)

routerUser.get("/:id", UserController.getUserId)

routerUser.get("/:email/email", UserController.getUserEmail)

routerUser.get("/:gender/gender", UserController.getUserGender)

routerUser.get("/:firstName/firstName", UserController.getUserFirstName)

routerUser.post("/", UserController.createUser)

routerUser.put("/:id", UserController.editUserId)

routerUser.delete("/:id", UserController.deleteUserId)

export default routerUser