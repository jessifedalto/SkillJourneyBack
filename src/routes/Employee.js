import express from 'express';
import EmployeeController from '../controller/EmployeeController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, EmployeeController.update)
    .delete('/delete/:id', AuthController.verifyJWT, EmployeeController.delete)
    .get('/:id', AuthController.verifyJWT, EmployeeController.getById)
    
export default route;