const express = require("express")
const motorcycleRouter = express.Router()
const {v4:uuidv4}=require('uuid')

const motorcycles = [{type:"Sport", color:"black", _id: uuidv4()}, {type:"Cruiser", color:"red",_id: uuidv4()}]


motorcycleRouter.get('/:motorcycleId', (req, res)=>{
  const motorcycleId = req.params.motorcycleId
  const foundMotorcycle = motorcycles.find(motorcycle=>motorcycle._id === motorcycleId && motorcycle)
res.send(foundMotorcycle)
})

motorcycleRouter.route('/')
.get((req, res)=>{
res.send(motorcycles)
})
.post((req, res)=>{
const newMotorcycle = req.body
newMotorcycle._id = uuidv4()
motorcycles.push(newMotorcycle)
res.send(`The new motorcycle with the type ${newMotorcycle.type} has been added`)
})




module.exports = motorcycleRouter