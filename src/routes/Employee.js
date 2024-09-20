import express from 'express';
import EmployeeController from '../controller/EmployeeController.js';

const route = express.Router();

route 
    .patch('/update/:id', EmployeeController.update)
    .delete('/delete/:id', EmployeeController.delete)
    .get('/:id', EmployeeController.getById)
    
export default route;