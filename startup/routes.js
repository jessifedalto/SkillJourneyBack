import express from "express";
import auth from '../src/routes/Auth'
import user from '../src/routes/User'
import employee from '../src/routes/Employee'
import skill from '../src/routes/Skill'
import employeeSkill from '../src/routes/EmployeeSkill'
import training from '../src/routes/Training'
import trainingSkill from '../src/routes/TrainingSkill'
import department from '../src/routes/Department'
import employeeTraining from '../src/routes/EmployeeTraining'
import trainingContent from '../src/routes/TrainingContent'

export default function(app)
{
    app
        .use(express.json())
        .use('/sjapi/auth', auth)
        .use('/sjapi/department', department)
        .use('/sjapi/employee', employee)
        .use('/sjapi/employee-skill', employeeSkill)
        .use('/sjapi/employee-training', employeeTraining)
        .use('/sjapi/skill', skill)
        .use('/sjapi/training', training)
        .use('/sjapi/training-content', trainingContent)
        .use('/sjapi/training-skill', trainingSkill)
        .use('/sjapi/user', user)
};