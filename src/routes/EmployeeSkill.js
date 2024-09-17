import express from 'express';
import EmployeeSkillController from '../controller/EmployeeSkillController';
import AuthController from '../controller/AuthController';

const route = express.Router();

route 
    .patch('/update/:id', AuthController.verifyJWT, EmployeeSkillController.update)
    .delete('/delete/:id', AuthController.verifyJWT, EmployeeSkillController.delete)
    .get('/employee/:id', AuthController.verifyJWT, EmployeeSkillController.getByEmployee)
    .get('/skill/:id', AuthController.verifyJWT, EmployeeSkillController.getBySkill)
    .post('/create', AuthController.verifyJWT, EmployeeSkillController.create)
    
export default route;