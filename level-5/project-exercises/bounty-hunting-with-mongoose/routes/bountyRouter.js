const express = require("express");
const bountyRouter = express.Router();
const Bounty = require("../models/bounty.js");

// create get, post put, delete : crud

bountyRouter
  .route("/")
  .get((req, res, next) => {
Bounty.find((err, foundItem)=>{
    if(err){
        res.status(500)
        return next(err)
    }
res.status(200).send(foundItem)
})
  })
  .post((req, res, next) => {
    const newBountyInfo = new Bounty(req.body)
    newBountyInfo.save(req.body, (err, newBounty)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    res.send(newBounty)
})
  });
  bountyRouter.post('/:userId', (req, res, next)=>{
    req.body.user = req.params.userId   
const newBounty = new Bounty(req.body)
newBounty.save((err, savedBounty)=>{
    if(err){res.status(500)
    return next(err)}
res.send(savedBounty)
})
  })

bountyRouter.put('/:bountyId', (req, res, next) => {
Bounty.findOneAndUpdate({_id:req.params.bountyId}, req.body, {new:true}, (err, updatedBounty)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    res.send(updatedBounty)
})
});

bountyRouter.delete('/:bountyId', (req, res, next) => {
Bounty.findOneAndDelete({_id:req.params.bountyId}, (err, deletedBounty)=>{
if(err){
    res.status(500)
    return next(err)
}
res.send(`The ID of ${deletedBounty._id} has been deleted`)
})
});

module.exports = bountyRouter;
