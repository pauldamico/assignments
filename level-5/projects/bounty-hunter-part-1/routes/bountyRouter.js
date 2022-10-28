const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bountys = [
    {firstName:"Paul", lastName:"D'Amico", living:true, bountyAmount:10000, type:"sith", _id:uuidv4()}
]

bountyRouter.delete('/:bountyId', (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bountys.findIndex(bounty=>bounty._id === bountyId)
    bountys.splice(bountyIndex, 1)
res.send(`${bountyId} has been removed`)
})
bountyRouter.put('/:bountyId', (req, res)=>{
const bountyId = req.params.bountyId
const bountyIndex = bountys.findIndex(bounty=>bounty._id === bountyId)
const updatedBounty = Object.assign(bountys[bountyIndex], req.body)
res.send(updatedBounty)
})
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