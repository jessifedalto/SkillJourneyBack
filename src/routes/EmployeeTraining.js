import express from 'express';
import EmployeeTrainingController from '../controller/EmployeeTrainingController.js';

const route = express.Router();

route 
    .patch('/update/:id', EmployeeTrainingController.update)
    .delete('/delete/:id', EmployeeTrainingController.delete)
    .get('/employee/:id', EmployeeTrainingController.getByEmployee)
    .get('/training/:id', EmployeeTrainingController.getByTraining)
    .post('/create/:employeeId/:trainingId', EmployeeTrainingController.create)
    .get('/:id', EmployeeTrainingController.getById)
    
export default route;