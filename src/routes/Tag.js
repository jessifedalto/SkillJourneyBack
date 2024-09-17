import express from 'express';
import TagController from '../controller/TagController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, TagController.update)
    .delete('/delete/:id', AuthController.verifyJWT, TagController.delete)
    .get('/', AuthController.verifyJWT, TagController.getAll)
    .post('/create', AuthController.verifyJWT, TagController.create)

export default route;