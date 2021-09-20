// Controllers
//import UserController from '../controllers/UserController';

const ApiController = require('../controllers/apiController');
const UserController = require('../controllers/userController');
const queryValidation = require('../utils/queryvalidation');

const { Router } = require('express');

const routes = new Router();

var path = require('path');
const fs = require("fs")

const env = process.env; 

//const uuid = require("uuid");
//const multer = require("multer");


/////////////////////
/* Routes           */
/////////////////////

// log middleware 
routes.use(function timeLog(req, res, next) {
  var fullTime = new Date().toLocaleTimeString('en-US')
  let day = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  console.log('Time: ', day,'/', month,'/', year, fullTime, req.method, req.url );
  next();
});

// server Alive 
routes.get('/isAlive', function(req, res) {
  res.status(200).send('Server Alive');
});

/////////////
// user route
////////////

// Users
routes.post('/users/getOne', UserController.getOne);
routes.post('/users/createUser', UserController.createUser);
// routes.delete('/users/:id', token, UserController.delete);

/////////////
// count API routes
////////////

routes.post('/counter/accesses', ApiController.accesses);

routes.post('/counter/setKeyValue', ApiController.setKeyValue);

routes.post('/counter/getInfoKey', ApiController.getInfoKey);

routes.post('/counter/updateKeyValue', ApiController.updateKeyValue);

// For invalid routes MUST be last function 
routes.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

module.exports = routes;