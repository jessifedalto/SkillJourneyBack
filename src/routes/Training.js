import express from 'express';
import TrainingController from '../controller/TrainingController.js';

const route = express.Router();

route 
    .patch('/update/:id', TrainingController.update)
    .delete('/delete/:id', TrainingController.delete)
    .get('/:id', TrainingController.getById)
    .post('/create', TrainingController.create)
    .get('/search/:name', TrainingController.getByName)

    
export default route;