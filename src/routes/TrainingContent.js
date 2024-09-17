import express from 'express';
import TrainingContentController from '../controller/TrainingContentController';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, TrainingContentController.update)
    .delete('/delete/:id', AuthController.verifyJWT, TrainingContentController.delete)
    .get('/training/:id', AuthController.verifyJWT, TrainingContentController.getByTraining)
    .post('/create', AuthController.verifyJWT, TrainingContentController.create)
    
export default route;