import express from 'express';
import VideoController from '../controller/VideoController.js';

const route = express.Router();

route 
    .patch('/update/:id', VideoController.update)
    .delete('/delete/:id', VideoController.delete)
    .get('/training-content/:id', VideoController.getByTrainingContent)
    .get('/:id', VideoController.getById)
    .post('/create/:trainingContentId', VideoController.create)
    .get('/:videoId/chunks', VideoController.getChunks)
    
export default route;