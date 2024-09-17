import express from 'express';
import TrainingContentTagController from '../controller/TrainingContentTagController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .delete('/delete/:id', AuthController.verifyJWT, TrainingContentTagController.delete)
    .get('/tag/:id', AuthController.verifyJWT, TrainingContentTagController.getByTag)
    .get('/training-content/:id', AuthController.verifyJWT, TrainingContentTagController.getByTrainingContent)
    .post('/create', AuthController.verifyJWT, TrainingContentTagController.create)
    
export default route;