import express from 'express';
import TagController from '../controller/TagController.js';

const route = express.Router();

route 
    .patch('/update/:id', TagController.update)
    .delete('/delete/:id', TagController.delete)
    .get('/', TagController.getAll)
    .post('/create', TagController.create)

export default route;