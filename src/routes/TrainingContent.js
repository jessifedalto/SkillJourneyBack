import express from 'express';
import TrainingContentController from '../controller/TrainingContentController.js';

const route = express.Router();

route 
    .patch('/update/:id', TrainingContentController.update)
    .delete('/delete/:id', TrainingContentController.delete)
    .get('/training/:id', TrainingContentController.getByTraining)
    .post('/create', TrainingContentController.create)
    
export default route;