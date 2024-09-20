import express from 'express';
import QuestionController from '../controller/QuestionController.js';

const route = express.Router();

route 
    .patch('/update/:id', QuestionController.update)
    .delete('/delete/:id', QuestionController.delete)
    .get('/quiz/:id', QuestionController.getByQuiz)
    .get('/:id', QuestionController.getById)
    .post('/create', QuestionController.create)
    
export default route;