import express from 'express';
import TrainingSkillController from '../controller/TrainingSkillController';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, TrainingSkillController.update)
    .delete('/delete/:id', AuthController.verifyJWT, TrainingSkillController.delete)
    .get('/training/:id', AuthController.verifyJWT, TrainingSkillController.getByTraining)
    .get('/skill/:id', AuthController.verifyJWT, TrainingSkillController.getBySkill)
    .post('/create', AuthController.verifyJWT, TrainingSkillController.create)
    
export default route;