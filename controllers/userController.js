import { UserModel }  from "../models/UserModel.js";

export class UserController{
    
    static async getUsers (req,res) {
        let userData = await UserModel.getUsers()
        res.json(userData)
    }

    static async getUserId (req,res) {
        let { id } = req.params
        let userData = await UserModel.getUserById(id)
        if(userData.id){
            res.json(userData)
        }else{
            res.status(404).json({'message': "Usuario no encotrado"})
        }
    }
    
    static async getUserEmail (req, res){
        console.log(req)
        let { email } = req.params
        console.log(email)
        let userData = await UserModel.getUserByEmail(email)
        console.log(userData)
        if(userData){
            res.json(userData)
        }else{
            res.status(404).json({'message': "Usuario no encontrado"})
        }
    }

    static async getUserGender (req, res){
        let { gender } = req.params
        let userData = await UserModel.getUserByGender(gender)
        if(userData){
            res.json(userData)
        }else{
            res.status(404).json({'message': "Usuario no encontrado"})
        }
    }

    static async getUserFirstName (req, res){
        let { firstName } = req.params
        let userData = await UserModel.getUserByFirstName(firstName) 
        if(userData){
            res.json(userData)
        }else{
            res.status(404).json({'message': "Usuario no encontrado"})
        }
    }

    static async createUser (req,res) {
        let user = req.body
        const newUser = await UserModel.createUser(user)
        if(newUser){
            res.json(JSON.parse(newUser))
        }else{
            res.status(404).json({'message': "Usuario no creado"})
        }
    }

    static async editUserId (req, res) {
        let user = req.body
        let { id } = req.params
        const updateUser = await UserModel.updateUser(id, user)
        if( updateUser ){
            res.json(updateUser)
        } else {
            res.json({ "message": "Error al querer actualizr un usuario" })
        }
    }

    static async deleteUserId (req, res) {
        let { id } = req.params
        const users = await UserModel.deleteUser(id)
        if(!users){
            res.json(users)
        }else{
            res.json(JSON.parse(users))
        }
    }
}
