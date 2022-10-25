const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bountys = [
    {firstName:"Paul", lastName:"D'Amico", living:true, bountyAmount:10000, type:"sith", _id:uuidv4()}
]


bountyRouter.route('/')
.get((req, res)=>{
    res.send(bountys)
    })
.post((req, res)=>{
    const newBounty = req.body
    newBounty._id = uuidv4()
    bountys.push(newBounty)
    res.send(`Added ${newBounty.firstName} ${newBounty.lastName} to the database`)
})

module.exports = bountyRouter