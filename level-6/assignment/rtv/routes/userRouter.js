const express = require("express");
const User = require("../models/user.js");
const userRouter = express.Router();
const jwt = require('jsonwebtoken')

/// New user Creation
userRouter.post("/signup", (req, res, next) => {
User.findOne(({username:req.body.username.toLowerCase()}), (err, foundUser)=>{
  console.log(req.body)
  if(err){
    res.status(500)
    return next(err)
  }
  if(!req.body.username || !req.body.password){
    res.status(403)
    return next(new Error("You must enter a username and password"))
  }
if(foundUser){
return next(new Error("Username already exists"))
}
})
   const newUser = new User (req.body)
   if(req.body.username || req.body.password){
  newUser.save((err, addedUser) => {
    if(err){
        res.status(500)
        return next(err)
    }
    if(!req.body.username || !req.body.password){
      res.status(403)
      return next(new Error("username or password can not be blank"))}

   const token = jwt.sign(addedUser.deletePassword(), process.env.SECRET) 
res.send({token, user:addedUser.deletePassword()})
  });
}

});
// logs in current user and gives it a token
userRouter.post("/login", (req, res, next) => {
  console.log(req.body.username)
  User.findOne(({username:req.body.username.toLowerCase()}), (err, user)=>{
    if(err){
      res.status(500)
      return next(err)    }

    if(!req.body.username || !req.body.password){
      res.status(403)
      return next(new Error("You must enter a username and password"))
    }
    if(!user){
      res.status(401)
      return next(new Error("User name or Password doesn't Exist"))
    }
  // if(req.body.password !== user.password){
  //   res.status(401)
  //  return next(new Error("User name or Password doesn't Exist"))
  // }
  if(!user){
    res.status(401)
   return next(new Error("User name or Password doesn't Exist"))
  }

  user.checkPassword(req.body.password, (err, isMatch)=>{
    if(err){
      res.status(403)
      return next(err)
    }
    if(!isMatch){
      res.status(403)
      return next(new Error("User name or password is incorrect"))
    }    

    const token = jwt.sign(user.deletePassword(), process.env.SECRET)
    return res.send({token, user:user.deletePassword()})
  })


  })  
 
  });
  





module.exports = userRouter;
