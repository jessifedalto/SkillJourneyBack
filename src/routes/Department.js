import express from 'express';
import DepartmentController from '../controller/DepartmentController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, DepartmentController.update)
    .delete('/delete/:id', AuthController.verifyJWT, DepartmentController.delete)
    .get('/', AuthController.verifyJWT, DepartmentController.getAll)
    .post('/create', AuthController.verifyJWT, DepartmentController.create)

export default route;