import express from 'express';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .post('/register', AuthController.verifyJWT, AuthController.register)
    .post('/login', AuthController.login)

export default route;