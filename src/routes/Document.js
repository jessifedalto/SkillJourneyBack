import express from 'express';
import DocumentController from '../controller/DocumentController.js';


const route = express.Router();

route 
    .patch('/update/:id', DocumentController.update)
    .delete('/delete/:id', DocumentController.delete)
    .get('/training-content/:id', DocumentController.getByTrainingContent)
    .get('/:id', DocumentController.getById)
    .post('/create', DocumentController.create)
    .get('/:documentId/chunks', DocumentController.getChunks)
    
export default route;