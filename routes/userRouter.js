import express from 'express'

// import { UserController } from '../controllers/userController.js'
import { UserController } from '../controllers/mongo/UserController.js'
 
const routerUser = express.Router()

routerUser.get("/", UserController.getUsers)

routerUser.get("/:id", UserController.getUserById)

routerUser.get("/:email/email", UserController.getUserByEmail)

routerUser.get("/:gender/gender", UserController.getUserByGender)

routerUser.get("/:firstName/firstName", UserController.getUserByFirstName)

routerUser.post("/", UserController.createUser)

routerUser.put("/:id", UserController.editUserById)

routerUser.delete("/:id", UserController.deleteUserById)

export default routerUser