const express = require('express')
const inventory = require('../models/inventory.js')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

inventoryRouter.route('/')
.get((req, res, next)=>{
Inventory.find((err, items)=>{
    if(err){
        res.status(500)
        return next(err)
    }
    return res.status(200).send(items)
})
})
.post((req, res, next)=>{
    const newItem = new Inventory(req.body)
    newItem.save((err, savedItem)=>{   
if(err){
    res.status(500)
    return next(err)
}
return res.status(201).send(savedItem)
})
})

inventoryRouter.delete('/:itemId', (req, res, next)=>{
 Inventory.findOneAndDelete({_id:req.params.itemId}, (err, deletedItem)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(`You have deleted ${deletedItem._id}`)

    })
})

inventoryRouter.put('/:itemId', (req, res, next)=>{
    Inventory.findOneAndUpdate({_id:req.params.itemId}, req.body, {new:true}, (err, updatedItem)=>{
           if(err){
               res.status(500)
               return next(err)
           }
           return res.status(201).send(updatedItem)
   
       })
   })
   


module.exports = inventoryRouter