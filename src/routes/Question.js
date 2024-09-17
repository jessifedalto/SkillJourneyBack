import express from 'express';
import QuestionController from '../controller/QuestionController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, QuestionController.update)
    .delete('/delete/:id', AuthController.verifyJWT, QuestionController.delete)
    .get('/quiz/:id', AuthController.verifyJWT, QuestionController.getByQuiz)
    .get('/:id', AuthController.verifyJWT, QuestionController.getById)
    .post('/create', AuthController.verifyJWT, QuestionController.create)
    
export default route;