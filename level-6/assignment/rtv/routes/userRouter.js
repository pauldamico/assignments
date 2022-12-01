const express = require("express");
const User = require("../models/user.js");
const userRouter = express.Router();
const jwt = require('jsonwebtoken')

/// New user Creation
userRouter.post("/signup", (req, res, next) => {
User.findOne(({username:req.body.username.toLowerCase()}), (err, foundUser)=>{
  if(err){
    res.status(500)
    return next(err)
  }
if(foundUser){
return next(new Error("Username already exists"))
}
})
   const newUser = new User (req.body)
  newUser.save((err, addedUser) => {
    if(err){
        res.status(500)
        return next(err)
    }
    const token = jwt.sign(newUser.toObject(), process.env.SECRET) 
res.send({token, user:newUser})
  });
});
// logs in current user and gives it a token
userRouter.post("/login", (req, res, next) => {
  console.log("test")
  User.findOne(({username:req.body.username.toLowerCase()}), (err, user)=>{
    if(err){
      res.status(500)
      return next(err)
    }
  if(req.body.password !== user.password){
    res.status(401)
   return next(new Error("User name or Password doesn't Exist"))
  }
  if(!user){
    res.status(401)
   return next(new Error("User name or Password doesn't Exist"))
  }

  const token = jwt.sign(user.toObject(), process.env.SECRET)
  return res.send({token, user})

  })  
 
  });
  





module.exports = userRouter;
