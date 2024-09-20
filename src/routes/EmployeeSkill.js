import express from 'express';
import EmployeeSkillController from '../controller/EmployeeSkillController.js';

const route = express.Router();

route 
    .patch('/update/:id', EmployeeSkillController.update)
    .get('/employee/:id', EmployeeSkillController.getByEmployee)
    .get('/skill/:id', EmployeeSkillController.getBySkill)
    .post('/create/:employeeId/:skillId', EmployeeSkillController.create)
    
export default route;