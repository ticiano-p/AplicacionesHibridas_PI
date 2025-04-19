// controllers/UserController.js
import { UserModel } from '../../models/mongo/UserModel.js'

export class UserController {
    static randomID(){
        return crypto.randomUUID();
    }

  static async getUsers(req, res) {
    try {
      const users = await UserModel.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await UserModel.findById(req.params.id)
      if (!user) return res.status(404).json({ error: 'No encontrado' })
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getUserByEmail(req, res){
    try {
        const user = await UserModel.findOne({email: req.params.email})
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({error: "No encontrado"})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  }

  static async getUserByGender(req, res){
    try {
        const user = await UserModel.find({gender: req.params.gender })
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({error: "No encontrado"})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  }

  static async getUserByFirstName(req, res){
    try {
        const regexFirstName = new RegExp(req.params.firstName, 'i');
        // Este regex trae los valores que contengan { req.params.firstName }, con 'i' ( No case Sensitive )
        const user = await UserModel.find({firstName: regexFirstName }).limit(2)
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json({error: "No encontrado"})
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
  }

  static async createUser(req, res) {
    try {
      const user = new UserModel(req.body)
      await user.save()
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async editUserById(req, res) {
    try {
      const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      if (!user) return res.status(404).json({ error: 'No encontrado' })
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  static async deleteUserById(req, res) {
    try {
      const user = await UserModel.findByIdAndDelete(req.params.id)
      if (!user) return res.status(404).json({ error: 'No encontrado' })
      res.status(200).json({ mensaje: 'Usuario eliminado' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
