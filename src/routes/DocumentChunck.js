import express from 'express';
import DocumentController from '../controller/DocumentController.js';

const route = express.Router();

route 
    .delete('/delete/:id', DocumentController.delete)
    .post('/create', DocumentController.create)
    
export default route;