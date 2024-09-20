import express from 'express';
import OptionController from '../controller/OptionController.js';

const route = express.Router();

route 
    .patch('/update/:id', OptionController.update)
    .delete('/delete/:id', OptionController.delete)
    .get('/question/:id', OptionController.getByQuestion)
    .get('/:id', OptionController.getById)
    .post('/create', OptionController.create)
    
export default route;