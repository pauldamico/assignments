const express = require('express')
const Comment = require('../models/comment.js')
const commentRouter = express.Router()

// creates the comment with the user ID and the issue ID
commentRouter.post('/create/:issueId', (req, res, next)=>{
    req.body.user = req.auth._id
    req.body.issue = req.params.issueId
const newComment = new Comment(req.body)
newComment.save((err, comment)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.send(comment)
})
})

commentRouter.get('/list/:issueId', (req, res, next)=>
{   
    Comment.find({issue:req.params.issueId}, (err, comments)=>{
        if(err){
            res.status(500)
            return next(err)
        }
    res.send(comments)
    })

})






module.exports = commentRouter