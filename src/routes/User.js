import express from 'express';
import UserController from '../controller/UserController';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .patch('/update', AuthController.verifyJWT, UserController.update)
    .delete('/delete', AuthController.verifyJWT, UserController.delete)

export default route;