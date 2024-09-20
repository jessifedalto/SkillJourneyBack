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
import trainingContent from '../src/routes/TrainingContent.js'
import trainingContentTag from '../src/routes/TrainingContentTag.js'
import tag from '../src/routes/Tag.js'
import video from '../src/routes/Video.js'
import videoChunck from '../src/routes/VideoChunck.js'
import documentRoute from '../src/routes/Document.js'
import documentChunck from '../src/routes/DocumentChunck.js'
import quiz from '../src/routes/Quiz.js'
import question from '../src/routes/Question.js'
import option from '../src/routes/Option.js'
import m from '../src/middlewares/middleware.js'

export default function(app)
{
    app
        .use(express.json())
        .use('/sjapi/auth', m.decryptBody, auth)
        .use('/sjapi/department', m.verifyJWT, department)
        .use('/sjapi/document', m.verifyJWT, documentRoute)
        .use('/sjapi/document-chunck', m.verifyJWT, documentChunck)
        .use('/sjapi/employee', m.verifyJWT, employee)
        .use('/sjapi/employee-skill', m.verifyJWT, employeeSkill)
        .use('/sjapi/employee-training', m.verifyJWT, employeeTraining)
        .use('/sjapi/option', m.verifyJWT, option)
        .use('/sjapi/question', m.verifyJWT, question)
        .use('/sjapi/quiz', m.verifyJWT, quiz)
        .use('/sjapi/skill', m.verifyJWT, skill)
        .use('/sjapi/tag', m.verifyJWT, tag)
        .use('/sjapi/training', m.verifyJWT, training)
        .use('/sjapi/training-content', m.verifyJWT, trainingContent)
        .use('/sjapi/training-content-tag', m.verifyJWT, trainingContentTag)
        .use('/sjapi/training-skill', m.verifyJWT, trainingSkill)
        .use('/sjapi/user', m.verifyJWT, user)
        .use('/sjapi/video', m.verifyJWT, video)
        .use('/sjapi/video-chunck', m.verifyJWT, videoChunck)
};