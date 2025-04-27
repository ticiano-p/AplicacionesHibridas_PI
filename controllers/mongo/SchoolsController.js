// controllers/UserController.js
import { ScholModel } from '../../models/mongo/ScholsModel.js'
import { PaymentModel } from '../../models/mongo/PaymentModel.js';

export class schoolController{
    
    static async getSchool (req,res) {
        let SchoolData = await ScholModel.find()
        res.json(SchoolData)
    }

    static async getSchoolId(req, res) {
        try {
            const { id } = req.params;
            const SchoolID = await ScholModel.findById(id);
            res.status(200).json(SchoolID);
        } catch (error) {
            res.status(400).json({ message: `Escuela no encontrada.` });
        }
    }
    
    
    static async getSchoolProvince (req, res){
        try {
        let { Province } = req.params
        let ScholData = await ScholModel.find({Province: Province})
        if(ScholData.length === 0){
            return res.status(404).json({ message: `No se encontraron escuelas en la provincia de ${Province}.` });
        } 
        res.status(200).json(ScholData);

        } catch (error) {
            res.status(500).json({ message: "Error del servidor al buscar escuelas." });
        }
        
    }

    static async getSchoolType(req, res) {
        try {
            const { Type } = req.params;
            const ScholData = await ScholModel.find({ Type: Type });
            if (ScholData.length === 0) {
                return res.status(404).json({ message: `No se encontraron escuelas del tipo: ${Type}.` });
            }
            res.status(200).json(ScholData);
        } catch (error) {
            res.status(500).json({ message: "Error del servidor al buscar escuelas." });
        }
    }
    

    static async getSchoolFirstName (req, res){
        try {
        let { Name } = req.params
        let ScholData = await ScholModel.find({firstName: Name}) 
        if(ScholData.length === 0){
            return res.status(404).json({ message: `No se encontro ninguna escuela con el nombre: ${Name}.` });
        }
        res.status(200).json(ScholData);
        } catch (error) {
            res.status(500).json({ message: "Error del servidor al buscar la escuelas." });

        }
        
    }

    static async createSchool (req,res) {
        try {
            const paymentSchool = await PaymentModel.findOne({
                issuedTo: req.body.user_id,
                status: 'paid',
                paymentType: 'create_school'
            })
            if( !paymentSchool ){
                res.status(403).json({
                    message: 'Deber realizar el pago correspondiente para generar una escuela'
                })
            }
            const school = req.body
            const newSchool =  new ScholModel(school)
            await newSchool.save() 
            res.status(201).json(newSchool)
        } catch (error) {
            res.status(404).json({message: "Escuela no creada", error})
        }
        
    }

    static async editSchoolId(req, res) {
        try {
          const id = req.params.id;
          const datosActualizados = req.body;
          const escuelaActualizada = await ScholModel.findByIdAndUpdate(id, datosActualizados, {new: true});
          res.status(200).json({escuelaActualizada });
        } catch (error) {
          res.status(404).json({'message': `Escuela con el ID: ${req.params.id} no fue encontrado`});
        }
      }

    static async deleteSchoolId (req, res) {
        try {
            let { id } = req.params
        const school = await ScholModel.findByIdAndDelete(id)
        res.status(200).json({ mensaje: 'Usuario eliminado' });
        } catch (error) {
            res.status(404).json({'message': `Escuela con el ID: ${req.params.id} no fue encontrado`})
        }
        
    }
}