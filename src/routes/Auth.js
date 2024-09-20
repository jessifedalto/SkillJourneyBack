import express from 'express';
import AuthController from '../controller/AuthController.js';
import m from '../middlewares/middleware.js'

const route = express.Router();

route 
    .post('/register', m.verifyJWT, AuthController.register)
    .post('/login', AuthController.login)

export default route;