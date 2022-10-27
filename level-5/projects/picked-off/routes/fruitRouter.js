const { application } = require("express")
const express = require("express")
const fruitRouter = express.Router()

const fruit = [{type: "apple"}]


fruitRouter.use('/',(req, res, next)=>{
req.body = fruit
next()
})
fruitRouter.use('/', (req, res, next)=>{
   res.send(req.body)
})

module.exports = fruitRouter