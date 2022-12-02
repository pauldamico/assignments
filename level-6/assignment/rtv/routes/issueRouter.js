const express = require("express");
const Issue = require("../models/issue.js");
const issueRouter = express.Router();

//get all issues posted by logged in user
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, allIssues) => {
    res.send(allIssues);
  });
});

//get all issues from everyone
issueRouter.get("/all", (req, res, next) => {
  Issue.find((err, allIssues) => {
    res.send(allIssues);
  });
});
//creates Issue with user ID added
issueRouter.post("/create", (req, res, next) => {
  req.body.user = req.auth._id;
  const newIssue = new Issue(req.body);
  newIssue.save((err, issue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    res.send(issue);
  });
});

//this allows you to add only one like to each issue per person
issueRouter.post("/like/:id", (req, res, next) => {
  Issue.findOne(
    {
      _id: req.params.id,
    },
    (err, userId) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      Issue.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { dislikes: req.auth._id, likes: req.auth._id } },
        { new: true },
        (err, cleared) => {}
      );

      Issue.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { likes: req.auth._id } },
        { new: true },
        (err, like) => {
          res.send(like);
        }
      );
    }
  );
});
//this allows you to add only one dislike to each issue per person
issueRouter.post("/dislike/:id", (req, res, next) => {
  Issue.findOne(
    {
      _id: req.params.id,
    },
    (err, userId) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      Issue.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { dislikes: req.auth._id, likes: req.auth._id } },
        { new: true },
        (err, cleared) => {
          if (err) {
            res.status(500);
            return next(err);
          }
        }
      );

      Issue.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { dislikes: req.auth._id } },
        { new: true },
        (err, dislikes) => {
          if (err) {
            res.status(500);
            return next(err);
          }
          res.send(dislikes);
        }
      );

    }  )})

    issueRouter.delete('/:issueId', (req, res, next)=>{      
  
    Issue.findOneAndDelete({_id:req.params.issueId, user:req.auth._id}, (err, deletedItem)=>{
      if(err){
        res.status(500)
        return next(err)
      }
     
      if(deletedItem){res.send(`${deletedItem._id} has been removed`)}
      if(!deletedItem){next(new Error("Item doesn't Exist"))}
    
    })
    
    
    })

module.exports = issueRouter;
