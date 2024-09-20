import express from 'express';
import EmployeeSkillController from '../controller/EmployeeSkillController.js';

const route = express.Router();

route 
    .patch('/update/:id', EmployeeSkillController.update)
    .delete('/delete/:id', EmployeeSkillController.delete)
    .get('/employee/:id', EmployeeSkillController.getByEmployee)
    .get('/skill/:id', EmployeeSkillController.getBySkill)
    .post('/create/:employeeId/:skillId', EmployeeSkillController.create)
    
export default route;