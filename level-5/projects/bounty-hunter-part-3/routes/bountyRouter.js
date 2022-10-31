const express = require("express")
const {v4: uuidv4} = require('uuid')
const bountyRouter = express.Router()

const bountys = [{
    firstName:"Paul", 
    lastName:"DAmico",
    living:true,
    amount:1000,
    type:"sith",
    id:uuidv4()

}]

bountyRouter.put('/:bountyId', (req, res)=>{
   const bountyId = req.params.bountyId
   const updatedBounty = req.body
 const bountyIndex = bountys.findIndex(bounty=>bounty.id  === bountyId)
 Object.assign(bountys[bountyIndex], updatedBounty)
 res.send(`${bountyId} has been updated`)

})

bountyRouter.delete('/:bountyId', (req, res)=>{
    const bountyId = req.params.bountyId
    const bountyIndex = bountys.findIndex(bounty=>bounty.id === bountyId)
    bountys.splice(bountyIndex, 1)
    res.send(`${bountyId} has been removed`)
})


bountyRouter.route('/')
.get((req, res)=>{
    res.send(bountys)
})
.post((req, res)=>{
    const newBounty = req.body
    newBounty.id = uuidv4()
    bountys.push(newBounty)
    res.send(`A bounty was created for ${newBounty.firstName} ${newBounty.lastName}`)
})



module.exports = bountyRouter

