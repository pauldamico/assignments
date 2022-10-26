const express = require('express')
const {v4:uuidv4}=require('uuid')
const carRouter = express.Router()


const cars = [{
    make:'suburu', color:'red', _id: uuidv4()}, 
    {make:'toyota', color:'green', _id: uuidv4()},
    {make:'chevy', color:'black', _id: uuidv4()},
    {make:'ford', color:'white', _id: uuidv4()},
]

carRouter.get('/:carId',(req, res)=>{
const carId = req.params.carId
const foundCar = cars.find(car=>car._id === carId && car)
res.send(foundCar)
})
carRouter.route('/')
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

// carRouter.get('/', (req, res)=>{
// res.send(cars)
// })

// carRouter.post('/', (req, res)=>{
//     cars._id = uuidv4()
//    cars.push(req.body)
//    res.send("")
// })






















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