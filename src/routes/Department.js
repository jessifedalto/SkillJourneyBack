import express from 'express';
import DepartmentController from '../controller/DepartmentController.js';

const route = express.Router();

route 
    .patch('/update/:id', DepartmentController.update)
    .delete('/delete/:id', DepartmentController.delete)
    .get('/', DepartmentController.getAll)
    .post('/create', DepartmentController.create)
    .get('/:id', DepartmentController.getById)

export default route;