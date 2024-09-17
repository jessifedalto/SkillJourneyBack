import express from 'express';
import EmployeeController from '../controller/EmployeeController';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .patch('/update', AuthController.verifyJWT, EmployeeController.update)
    .delete('/delete', AuthController.verifyJWT, EmployeeController.delete)

export default route;