const ApiModel = require('../models/apiModel');
const HttpException = require('../utils/HttpException.utils');
const countapi = require ('countapi-js');

class ApiController {
    ///////////////////////
    /*           Routes */
    ///////////////////////
    getAll = async (req, res) => {
        let example = await ApiModel.find({},"table_example");
        if (!example.length) {
            return Promise.reject('example not found').catch(err => {
                throw new HttpException(404, 'example not found');
            });
        }
        res.send(example);
    };
    
    getOne = async (req, res) => {
        const {
            id
        } = req.body /// x-www-form-urlencoded 
        let output = ''
        if (id)
            output = await ApiModel.findOne({ 
                actor_id: id},
                "actor"
            );
        return(output);
    };

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