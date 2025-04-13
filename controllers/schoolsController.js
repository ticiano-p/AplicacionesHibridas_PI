import { SchoolsModel }  from "../models/SchoolsModel.js";

export class schoolController{
    
    static async getSchool (req,res) {
        let SchoolData = await SchoolsModel.getSchool()
        res.json(SchoolData)
    }

    static async getSchoolId (req,res) {
        let { id } = req.params
        let userSchool = await SchoolsModel.getSchoolById(id)
        if(userSchool){
            res.json(userSchool)
        }else{
            res.status(404).json({'message': "Escuela no encotrado"})
        }
    }
    
    static async getSchoolProvince (req, res){
        console.log(req)
        let { Province } = req.params
        console.log(Province)
        let SchoolData = await SchoolsModel.getSchoolProvince(Province)
        console.log(SchoolData)
        if(SchoolData){
            res.json(SchoolData)
        }else{
            res.status(404).json({'message': "Escuela no encontrado"})
        }
    }

    static async getSchoolType (req, res){
        let { Type } = req.params
        let SchoolData = await SchoolsModel.getSchoolType(Type)
        if(SchoolData){
            res.json(SchoolData)
        }else{
            res.status(404).json({'message': "Escuela no encontrado"})
        }
    }

    static async getSchoolFirstName (req, res){
        let { Name } = req.params
        let SchoolData = await SchoolsModel.getSchoolFirstName(Name) 
        if(SchoolData){
            res.json(SchoolData)
        }else{
            res.status(404).json({'message': "Escuela no encontrado"})
        }
    }

    static async createSchool (req,res) {
        let school = req.body
        const newSchool = await SchoolsModel.createSchool(school)
        if(newSchool){
            res.json(JSON.parse(newSchool))
        }else{
            res.status(404).json({'message': "Escuela no creado"})
        }
    }

    static async editSchoolId(req, res) {
        try {
          const id = req.params.id;
          const datosActualizados = req.body;
          const escuelaActualizada = await SchoolsModel.updateSchool(id, datosActualizados);
          res.status(200).json({
            escuela: JSON.parse(escuelaActualizada) // por si es un string JSON
          });
        } catch (error) {
          res.status(404).json({ error: error.message });
        }
      }

    static async deleteSchoolId (req, res) {
        let { id } = req.params
        const school = await SchoolsModel.deleteUser(id)
        if(school){
            // res.json(school)
            res.json(JSON.parse(school))

        }else{
            res.status(404).json({'message': "La escuela no existe"})
        }
        
    }
}