import express from 'express';
import VideoChunckController from '../controller/VideoChunckController.js';

const route = express.Router();

route 
    .delete('/delete/:id', VideoChunckController.delete)
    .post('/create', VideoChunckController.create)
    
export default route;