import express from "express";
import auth from '../src/routes/Auth.js'
import user from '../src/routes/User.js'
import employee from '../src/routes/Employee.js'
import skill from '../src/routes/Skill.js'
import employeeSkill from '../src/routes/EmployeeSkill.js'
import training from '../src/routes/Training.js'
import trainingSkill from '../src/routes/TrainingSkill.js'
import department from '../src/routes/Department.js'
import employeeTraining from '../src/routes/EmployeeTraining.js'
import lesson from '../src/routes/Lesson.js'
import trainingTag from '../src/routes/TrainingTag.js'
import tag from '../src/routes/Tag.js'
import video from '../src/routes/Video.js'
import content from '../src/routes/Content.js'
import m from '../src/middlewares/middleware.js'

export default function(app)
{
    app
        .use(express.json())
        .use('/sjapi/auth', m.decryptBody, auth)
        .use('/sjapi/department', m.verifyJWT, department)
        .use('/sjapi/content', m.verifyJWT, content)
        .use('/sjapi/employee', m.verifyJWT, employee)
        .use('/sjapi/employee-skill', m.verifyJWT, employeeSkill)
        .use('/sjapi/employee-training', m.verifyJWT, employeeTraining)
        .use('/sjapi/skill', m.verifyJWT, skill)
        .use('/sjapi/tag', m.verifyJWT, tag)
        .use('/sjapi/training', m.verifyJWT, training)
        .use('/sjapi/lesson', m.verifyJWT, lesson)
        .use('/sjapi/training-tag', m.verifyJWT, trainingTag)
        .use('/sjapi/training-skill', m.verifyJWT, trainingSkill)
        .use('/sjapi/user', m.verifyJWT, user)
        .use('/sjapi/video', m.verifyJWT, video)
};