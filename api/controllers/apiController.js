const ApiModel = require('../models/apiModel');
const HttpException = require('../utils/HttpException.utils');
const countapi = require ('countapi-js');

class ApiController {
    ///////////////////////
    /*           Routes */
    ///////////////////////
    accesses = async (req, res) => {
        const {
            key, 
            namespace
        } = req.body /// x-www-form-urlencoded 
        if (key && namespace)
            countapi.get(namespace, key).then(
                (result) =>{
                    return res.status(200).send(result);
                }
            )
        else {
            return("Error");
        }
    };

    setKeyValue = async (req, res) => {
        const {
            key, 
            namespace,
            value
        } = req.body /// x-www-form-urlencoded 
        //console.log(req.body)
        if (key!==null && namespace!==null && value!==null)
            countapi.set(namespace, key, value).then(
                (result) =>{
                    return res.status(200).send(result);
                }
            )
        else {
            return("Error");
        }
    };

    getInfoKey = async (req, res) => {
        const {
            key, 
            namespace
        } = req.body /// x-www-form-urlencoded 
        if (key && namespace)
            countapi.info(namespace, key).then(
                (result) =>{
                    return res.status(200).send(result);
                }
            )
        else {
            return("Error");
        }
    };

    updateKeyValue = async (req, res) => {
        const {
            key, 
            namespace,
            amount
        } = req.body /// x-www-form-urlencoded 
        if (key!==null && namespace!==null && amount!==null)
            countapi.update(namespace, key, amount).then(
                (result) =>{
                    return res.status(200).send(result);
                }
            )
        else {
            return("Error");
        }
    };
    
}
module.exports = new ApiController;