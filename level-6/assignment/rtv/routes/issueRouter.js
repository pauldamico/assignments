const express = require("express");
const { Schema } = require("mongoose");
const Issue = require("../models/issue.js");
const jwt = require("jsonwebtoken");
const issueRouter = express.Router();

issueRouter.post("/create", (req, res, next) => {
  req.body.user = req.auth._id;
  const newIssue = new Issue(req.body);
  newIssue.save((error, issue) => {
    if (error) {
      res.status(500);
      return next(err);
    }
    res.send(issue);
  });
});

issueRouter.post("/like/:id", (req, res, next) => {
  Issue.findOne(
    {
      _id: req.params.id,
    },
    (err, userId) => {
        if(err){res.status(500)
            return next(err)
            }
      Issue.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { dislikes: req.auth._id, likes:req.auth._id },  },
        { new: true },
        (err, cleared) => {
        console.log(cleared.likes, cleared.dislikes)
        }
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

issueRouter.post("/dislike/:id", (req, res, next) => {
    Issue.findOne(
      {
        _id: req.params.id,
      },
      (err, userId) => {
        if(err){res.status(500)
        return next(err)
        }
        Issue.findOneAndUpdate(
          { _id: req.params.id },
          { $pull: { dislikes: req.auth._id, likes:req.auth._id },  },
          { new: true },
          (err, cleared) => {
          console.log(cleared.likes, cleared.dislikes)
          }
        );
  
        Issue.findOneAndUpdate(
          { _id: req.params.id },
          { $push: { dislikes: req.auth._id } },
          { new: true },
          (err, dislikes) => {
            res.send(dislikes);
          }
        );
      }
    );
  });

// issueRouter.post('/:dislike', (req, res, next)=>{

// })

module.exports = issueRouter;
