import express from 'express';
import EmployeeTrainingController from '../controller/EmployeeTrainingController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, EmployeeTrainingController.update)
    .delete('/delete/:id', AuthController.verifyJWT, EmployeeTrainingController.delete)
    .get('/employee/:id', AuthController.verifyJWT, EmployeeTrainingController.getByEmployee)
    .get('/training/:id', AuthController.verifyJWT, EmployeeTrainingController.getByTraining)
    .post('/create', AuthController.verifyJWT, EmployeeTrainingController.create)
    
export default route;