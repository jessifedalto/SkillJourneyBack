import express from "express";
import auth from '../src/routes/Auth'
import user from '../src/routes/User'
import employee from '../src/routes/Employee'

export default function(app)
{
    app
        .use(express.json())
        .use('/sjapi/auth', auth)
        .use('/sjapi/user', user)
        .use('/sjapi/employee', employee)
};