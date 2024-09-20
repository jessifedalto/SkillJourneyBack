import express from 'express';
import TrainingSkillController from '../controller/TrainingSkillController.js';

const route = express.Router();

route 
    .patch('/update/:id', TrainingSkillController.update)
    .delete('/delete/:id', TrainingSkillController.delete)
    .get('/training/:id', TrainingSkillController.getByTraining)
    .get('/skill/:id', TrainingSkillController.getBySkill)
    .post('/create/:skillId/:trainingId', TrainingSkillController.create)
    
export default route;