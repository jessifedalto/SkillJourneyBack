import express from 'express';
import SkillController from '../controller/SkillController.js';

const route = express.Router();

route 
    .patch('/update/:id', SkillController.update)
    .delete('/delete/:id', SkillController.delete)
    .get('/:id', SkillController.getById)
    .get('/', SkillController.getAll)
    .post('/create', SkillController.create)

export default route;