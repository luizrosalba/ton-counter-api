// Dependencies

// import * as Yup from 'yup';
// import jwt from 'jsonwebtoken';

// Configs
// import authConfig from '../../config/auth';

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
        return res.sendStatus(200).send(user);
    };

    createUser = async (req, res) => {
        const {
            UserName,
            Password,
            Email,
            Cpf    
        } = req.body /// x-www-form-urlencoded 
        let user = ''
        if (req.body) /// validate
            user = await UserModel.insertOne(
                req.body,
                "Users"
            );
        return res.sendStatus(200).send(user);
    };
}
  
module.exports = new UserController;