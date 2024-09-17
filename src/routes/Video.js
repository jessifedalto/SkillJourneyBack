import express from 'express';
import VideoController from '../controller/VideoController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, VideoController.update)
    .delete('/delete/:id', AuthController.verifyJWT, VideoController.delete)
    .get('/training-content/:id', AuthController.verifyJWT, VideoController.getByTrainingContent)
    .get('/:id', AuthController.verifyJWT, VideoController.getById)
    .post('/create', AuthController.verifyJWT, VideoController.create)
    
export default route;