import express from 'express';
import OptionController from '../controller/OptionController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, OptionController.update)
    .delete('/delete/:id', AuthController.verifyJWT, OptionController.delete)
    .get('/question/:id', AuthController.verifyJWT, OptionController.getByQuestion)
    .get('/:id', AuthController.verifyJWT, OptionController.getById)
    .post('/create', AuthController.verifyJWT, OptionController.create)
    
export default route;