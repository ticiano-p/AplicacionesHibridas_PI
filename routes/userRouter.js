import express from 'express'

import {getUsers, getUserId, newUser,editUserId,deleteUserId} from '../controllers/userController.js'

const routerUser = express.Router()

routerUser.get("/", getUsers)

routerUser.get("/:id", getUserId)

routerUser.post("/", newUser)

routerUser.put("/:id", editUserId)

routerUser.delete("/:id", deleteUserId)

export default routerUser