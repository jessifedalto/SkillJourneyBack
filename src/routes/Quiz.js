import express from 'express';
import QuizController from '../controller/QuizController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', QuizController.update)
    .delete('/delete/:id', QuizController.delete)
    .get('/training-content/:id', QuizController.getByTrainingContent)
    .get('/:id', QuizController.getById)
    .post('/create', QuizController.create)
    
export default route;