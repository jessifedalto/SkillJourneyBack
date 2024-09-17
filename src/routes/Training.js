import express from 'express';
import TrainingController from '../controller/TrainingController';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, TrainingController.update)
    .delete('/delete/:id', AuthController.verifyJWT, TrainingController.delete)
    .get('/:id', AuthController.verifyJWT, TrainingController.getById)
    .post('/create', AuthController.verifyJWT, TrainingController.create)
    
export default route;