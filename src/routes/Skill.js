import express from 'express';
import SkillController from '../controller/SkillController.js';

const route = express.Router();

route 
    .patch('/update/:id', SkillController.update)
    .delete('/delete/:id', SkillController.delete)
    .get('/:id', SkillController.getById)
    .get('/', SkillController.getAll)
    .get('/type/:type', SkillController.getByType)
    .post('/create', SkillController.create)
    .get('/search/:name', SkillController.getByName)


export default route;