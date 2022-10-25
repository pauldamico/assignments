const express = require("express")
const motorcycleRouter = express.Router()
const {v4:uuidv4}=require('uuid')

const motorcycles = [{type:"Sport", color:"black", _id: uuidv4()}, {type:"Cruiser", color:"red",_id: uuidv4()}]

motorcycleRouter.get('/', (req, res)=>{
res.send(motorcycles)
})




module.exports = motorcycleRouter