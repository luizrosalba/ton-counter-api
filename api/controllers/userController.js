// Models
const UserModel = require('../models/userModel');

class UserController {

    getOne = async (req, res) => {
        const {
            id
        } = req.body /// x-www-form-urlencoded 
        let user = ''
        if (id)
            user = await UserModel.findOne({ 
                IdUser: id},
                "Users"
            );
        return res.status(200).send(user);
    };

    createUser = async (req, res) => {
        const {
            username,
            password,
            email,
            cpf    
        } = req.body /// x-www-form-urlencoded 
        let userCpfExists = ''
        let userNameExists = ''
        let userEmailExists = ''   
        let user = ''
        
        if (req.body){

            userCpfExists = await UserModel.findOne({ 
                Cpf:cpf},
                "Users"
            );
            if (userCpfExists) return res.status(200).send(userCpfExists)

            userNameExists = await UserModel.findOne({ 
                UserName:username},
                "Users"
            );         
            if (userNameExists) return res.status(200).send(userNameExists)

            userEmailExists = await UserModel.findOne({ 
                Email:email},
                "Users"
            );
            if (userEmailExists) return res.status(200).send(userEmailExists)

            user = await UserModel.insertOne(
                req.body,
                "Users"
            );
            return res.status(200).send(user);
        }else{
            return res.send("Dados de usuário incorretos");
        }
    };
}
  
module.exports = new UserController;