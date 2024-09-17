import express from 'express';
import DocumentController from '../controller/DocumentController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, DocumentController.update)
    .delete('/delete/:id', AuthController.verifyJWT, DocumentController.delete)
    .get('/training-content/:id', AuthController.verifyJWT, DocumentController.getByTrainingContent)
    .get('/:id', AuthController.verifyJWT, DocumentController.getById)
    .post('/create', AuthController.verifyJWT, DocumentController.create)
    
export default route;