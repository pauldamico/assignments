const express = require('express')
const User = require('../models/user')
const userRouter = express.Router()


userRouter.get('/', (req, res, next)=>{
User.find((err, users)=>{
res.send(users)
})
})

userRouter.post('/', (req, res, next)=>{
    const newUser = new User(req.body)
    newUser.save((err, newUser)=>{
        if(err){
            res.status(500)
            return next(err)
        }
res.send(newUser)
    })
})

module.exports = userRouter