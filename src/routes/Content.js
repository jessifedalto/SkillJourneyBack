import express from 'express';
import ContentController from '../controller/ContentController.js';


const route = express.Router();

route 
    .patch('/update/:id', ContentController.update)
    .delete('/delete/:id', ContentController.delete)
    .get('/lesson/:id', ContentController.getByTrainingContent)
    .get('/:id', ContentController.getById)
    .post('/create', ContentController.create)
    
export default route;