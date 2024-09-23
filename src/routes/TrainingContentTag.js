import express from 'express';
import TrainingContentTagController from '../controller/TrainingContentTagController.js';

const route = express.Router();

route 
    .delete('/delete/:id', TrainingContentTagController.delete)
    .get('/tag/:id', TrainingContentTagController.getByTag)
    .get('/training-content/:id', TrainingContentTagController.getByTrainingContent)
    .post('/create/:trainingContentId/:tagId', TrainingContentTagController.create)
    
export default route;