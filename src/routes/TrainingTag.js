import express from 'express';
import TrainingTagController from '../controller/TrainingTagController.js';

const route = express.Router();

route 
    .delete('/delete/:id', TrainingTagController.delete)
    .get('/tag/:id', TrainingTagController.getByTag)
    .get('/training/:id', TrainingTagController.getByTraining)
    .post('/create/:trainingId/:tagId', TrainingTagController.create)
    
export default route;