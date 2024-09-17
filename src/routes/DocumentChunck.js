import express from 'express';
import DocumentController from '../controller/DocumentController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .delete('/delete/:id', AuthController.verifyJWT, DocumentController.delete)
    .post('/create', AuthController.verifyJWT, DocumentController.create)
    
export default route;