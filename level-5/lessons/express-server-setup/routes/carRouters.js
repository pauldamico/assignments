const express = require('express')
const {v4:uuidv4}=require('uuid')
const carRouter = express.Router()


const cars = [{
    make:'suburu', color:'red', _id: uuidv4()}, 
    {make:'toyota', color:'green', _id: uuidv4()},
    {make:'chevy', color:'black', _id: uuidv4()},
    {make:'ford', color:'white', _id: uuidv4()},
]

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
carRouter.delete("/:carId", (req, res)=>{
    const carId = req.params.carId
    const carIndex = cars.findIndex(car=>car._id === carId)
    cars.splice(carIndex, 1)
    res.send(`Removed ID ${carId}`)
})
carRouter.put("/:carId", (req, res)=>{
const carId = req.params.carId
const carIndex = cars.findIndex(car=>car._id === carId)
const updatedCar = Object.assign(cars[carIndex], req.body)
res.send(updatedCar)
})

carRouter.route("/")
.get((req, res)=>{
    res.send(cars)
 
    })
.post((req, res)=>{
        const newCar = req.body
        newCar._id = uuidv4()
       cars.push(newCar)
       res.send(`Added ${newCar.make} to the database!`)
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