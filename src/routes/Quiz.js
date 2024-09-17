import express from 'express';
import QuizController from '../controller/QuizController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, QuizController.update)
    .delete('/delete/:id', AuthController.verifyJWT, QuizController.delete)
    .get('/training-content/:id', AuthController.verifyJWT, QuizController.getByTrainingContent)
    .get('/:id', AuthController.verifyJWT, QuizController.getById)
    .post('/create', AuthController.verifyJWT, QuizController.create)
    
export default route;