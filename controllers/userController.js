import UserModel from "../models/UserModel.js";

const userModel = new UserModel();

const getUsers = async (req,res) => {
    let userData = await userModel.getUsers()
    res.json(userData)
}

const getUserId = async (req,res) => {
    let { id } = req.params
    let userData = await userModel.getUserById(id)
    if(userData.id){
        res.json(userData)
    }else{
        res.status(404).json({'message': "Usuario no encotrado"})
    }
}

const newUser = async (req,res) => {
    let user = req.body
    const newUser = await userModel.addUser(user)
    if(newUser){
        res.json(JSON.parse(newUser))
    }else{
        res.status(404).json({'message': "Usuario no creado"})
    }
}

const editUserId = async (req, res) => {
    let user = req.body
    let { id } = req.params
    const updateUser = await userModel.updateUser(id, user)
    if( updateUser ){
        res.json(JSON.parse(updateUser))
    } else {
        res.json({ "message": "Error al querer actualizr un usuario" })
    }

}

const deleteUserId = async (req, res) => {
    let { id } = req.params
    const users = await userModel.deleteUser(id)
    if(!users){
        res.json(users)
    }else{
        res.json(JSON.parse(users))
    }
}

export {getUsers, getUserId, newUser, editUserId, deleteUserId}