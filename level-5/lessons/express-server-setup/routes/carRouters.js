const express = require('express')
// const {v4:uuidv4}=require('uuid')
const carRouter = express.Router()
const Car = require('../models/car.js')


// const cars = [{
//     make:'suburu', color:'red', _id: uuidv4()}, 
//     {make:'toyota', color:'green', _id: uuidv4()},
//     {make:'chevy', color:'black', _id: uuidv4()},
//     {make:'ford', color:'white', _id: uuidv4()},
// ]


carRouter.route("/")
.get((req, res, next)=>{
    Car.find((err, cars)=>{
if(err){
    res.status(500)
    return next(err)
}
return res.status(200).send(cars)
    })
 
    })
.post((req, res, next)=>{
    const newCar = new Car(req.body)
    newCar.save((err, savedMovie)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)

    }) 
    })

carRouter.get("/:carId",(req, res)=>{
const carId = req.params.carId
const foundCar = cars.find(car=>car._id === carId && car)
res.send(foundCar)
})
carRouter.get("/search/color", (req, res)=>{
const color = req.query.color
const queryedColor = cars.filter(car=>car.color === color && car)
res.send(queryedColor)
})
carRouter.delete("/:carId", (req, res, next)=>{
const carId = req.params.carId
Car.findOneAndDelete({_id:carId}, (err, deletedCar)=>{
if(err){
    res.status(500)
    return next(err)
}
return res.status(201).send(`Removed ${deletedCar._id} from the database`)
})
})
carRouter.put("/:carId", (req, res)=>{
const carId = req.params.carId
const carIndex = cars.findIndex(car=>car._id === carId)
const updatedCar = Object.assign(cars[carIndex], req.body)
res.send(updatedCar)
})



module.exports = carRouter






















// const express = require('express')
// const carRouter = express.Router()
// const {v4:uuidv4}=require('uuid')


// const cars = [{
//     make:'suburu', color:'red', uid: uuidv4()}, 
//     {make:'toyota', color:'green', uid: uuidv4()},
//     {make:'chevy', color:'black', uid: uuidv4()},
//     {make:'ford', color:'white', uid: uuidv4()},
// ]

// carRouter.get('/', (req, res)=>{
//     res.send(cars)
//     })
    
//     carRouter.post('/', (req, res)=>{
//     const newCar = req.body
//     newCar._id=uuidv4()
//     cars.push(newCar)
//     res.send('updated database')
//     })




// module.exports = carRouter