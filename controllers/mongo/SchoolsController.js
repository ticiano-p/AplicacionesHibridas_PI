// controllers/UserController.js
import { ScholModel } from '../../models/mongo/ScholsModel.js'

export class schoolController{
    
    static async getSchool (req,res) {
        let SchoolData = await ScholModel.find()
        res.json(SchoolData)
    }

    static async getSchoolId (req,res) {
        let { id } = req.params
        let userSchool = await ScholModel.findById(id)
        if(userSchool){
            res.json(userSchool)
        }else{
            res.status(404).json({'message': "Escuela no encotrado"})
        }
    }
    
    static async getSchoolProvince (req, res){
        let { Province } = req.params
        let SchoolData = await ScholModel.findOne({Province: Province})
        if(SchoolData){
            res.json(SchoolData)
        }else{
            res.status(404).json({'message': "Escuela no encontrado"})
        }
    }

    static async getSchoolType (req, res){
        let { Type } = req.params
        let SchoolData = await ScholModel.findOne({Type})
        if(SchoolData){
            res.json(SchoolData)
        }else{
            res.status(404).json({'message': "Escuela no encontrado"})
        }
    }

    static async getSchoolFirstName (req, res){
        let { Name } = req.params
        let SchoolData = await ScholModel.getSchoolFirstName(Name) 
        if(SchoolData){
            res.json(SchoolData)
        }else{
            res.status(404).json({'message': "Escuela no encontrado"})
        }
    }

    static async createSchool (req,res) {
        let school = req.body
        const newSchool = await new ScholModel(school)
        newSchool.save()
        if(newSchool){
            res.json(JSON.parse(newSchool))
        }else{
            res.status(404).json({'message': "Escuela no creado"})
        }
    }

    // static async editSchoolId(req, res) {
    //     try {
    //       const id = req.params.id;
    //       const datosActualizados = req.body;
    //       const escuelaActualizada = await ScholModel.updateSchool(id, datosActualizados);
    //       res.status(200).json({
    //         escuela: JSON.parse(escuelaActualizada) // por si es un string JSON
    //       });
    //     } catch (error) {
    //       res.status(404).json({ error: error.message });
    //     }
    //   }

    // static async deleteSchoolId (req, res) {
    //     let { id } = req.params
    //     const school = await ScholModel.deleteUser(id)
    //     if(school){
    //         // res.json(school)
    //         res.json(JSON.parse(school))

    //     }else{
    //         res.status(404).json({'message': "La escuela no existe"})
    //     }
        
    // }
}