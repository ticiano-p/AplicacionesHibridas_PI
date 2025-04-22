import express from 'express'

import { schoolController } from '../controllers/mongo/SchoolsController.js'

const routerSchool = express.Router()

 routerSchool.get("/", schoolController.getSchool)

 routerSchool.get("/:id", schoolController.getSchoolId)

routerSchool.get("/:Province/Province", schoolController.getSchoolProvince)

 routerSchool.get("/:Type/Type", schoolController.getSchoolType)

 routerSchool.get("/:Name/Name", schoolController.getSchoolFirstName)

routerSchool.post("/", schoolController.createSchool)

routerSchool.put("/:id", schoolController.editSchoolId)

 routerSchool.delete("/:id", schoolController.deleteSchoolId)

export default routerSchool
