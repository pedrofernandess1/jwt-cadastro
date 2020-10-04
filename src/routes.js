const express = require('express');
const { check, validationResult } = require('express-validator');


const routes = express.Router();

const UserController = require('./controllers/UserController');
const EnsureAuthentication = require('./middlewares/EnsureAuthentication');

routes.post('/new-user/', UserController.create)

// after this middleware all routes below requires jwt authentication
routes.use(EnsureAuthentication);

routes.get('/profile/', UserController.profile)
module.exports = routes