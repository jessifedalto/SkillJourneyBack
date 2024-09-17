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

export default function(app)
{
    app
        .use(express.json())
        .use('/sjapi/auth', auth)
        .use('/sjapi/department', department)
        .use('/sjapi/document', documentRoute)
        .use('/sjapi/document-chunck', documentChunck)
        .use('/sjapi/employee', employee)
        .use('/sjapi/employee-skill', employeeSkill)
        .use('/sjapi/employee-training', employeeTraining)
        .use('/sjapi/option', option)
        .use('/sjapi/question', question)
        .use('/sjapi/quiz', quiz)
        .use('/sjapi/skill', skill)
        .use('/sjapi/tag', tag)
        .use('/sjapi/training', training)
        .use('/sjapi/training-content', trainingContent)
        .use('/sjapi/training-content-tag', trainingContentTag)
        .use('/sjapi/training-skill', trainingSkill)
        .use('/sjapi/user', user)
        .use('/sjapi/video', video)
        .use('/sjapi/video-chunck', videoChunck)
};