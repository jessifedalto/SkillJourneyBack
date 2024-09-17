import express from 'express';
import UserController from '../controller/UserController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, UserController.update)
    .delete('/delete/:id', AuthController.verifyJWT, UserController.delete)
    .get('/:id', AuthController.verifyJWT, UserController.getById)

export default route;