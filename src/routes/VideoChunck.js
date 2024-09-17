import express from 'express';
import VideoChunckController from '../controller/VideoChunckController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .delete('/delete/:id', AuthController.verifyJWT, VideoChunckController.delete)
    .post('/create', AuthController.verifyJWT, VideoChunckController.create)
    
export default route;