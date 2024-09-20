import express from 'express';
import TrainingContentController from '../controller/TrainingContentController.js';

const route = express.Router();

route 
    .patch('/update/:id', TrainingContentController.update)
    .delete('/delete/:id', TrainingContentController.delete)
    .get('/training/:id', TrainingContentController.getByTraining)
    .post('/create/:trainingId', TrainingContentController.create)
    .get('/:id', TrainingContentController.getById)
    
export default route;