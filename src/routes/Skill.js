import express from 'express';
import SkillController from '../controller/SkillController.js';
import AuthController from '../controller/AuthController.js';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, SkillController.update)
    .delete('/delete/:id', AuthController.verifyJWT, SkillController.delete)
    .get('/:id', AuthController.verifyJWT, SkillController.getById)
    .get('/', AuthController.verifyJWT, SkillController.getAll)
    .post('/create', AuthController.verifyJWT, SkillController.create)

export default route;