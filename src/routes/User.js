import express from 'express';
import UserController from '../controller/UserController.js';

const route = express.Router();

route 
    .patch('/update/:id', UserController.update)
    .delete('/delete/:id', UserController.delete)
    .get('/:id', UserController.getById)

export default route;