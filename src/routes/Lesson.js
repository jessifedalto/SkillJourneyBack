import express from 'express';
import LessonController from '../controller/LessonController.js';

const route = express.Router();

route 
    .patch('/update/:id', LessonController.update)
    .delete('/delete/:id', LessonController.delete)
    .get('/training/:id', LessonController.getByTraining)
    .post('/create/:trainingId', LessonController.create)
    .get('/:id', LessonController.getById)
    
export default route;