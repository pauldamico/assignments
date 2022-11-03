const express = require('express')
const restaurantRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const restaurants = [
    {
    name: "McDonalds",
    description: "Fast Food Burger's",
    imageUrl: "http://www.myimage....",
   completed: false,
   _id:uuidv4()
},
{
    name: "Olive Garden",
    description: "Decent italian restaurant",
    imageUrl: "http://www.myimage....",
   completed: false,
   _id:uuidv4()
},
{
    name: "Yoki",
    description: "Great Sushi restaurant",
    imageUrl: "http://www.myimage....",
   completed: false,
   _id:uuidv4()
},

]


restaurantRouter.route('/')
.get((req, res)=>{
    res.send(restaurants)
    })
.post((req, res)=>{
const newRestaurant = req.body
newRestaurant._id = uuidv4()
restaurants.push(newRestaurant)
res.send(`${newRestaurant.name} has been added`)
})

restaurantRouter.put('/:restaurantId', (req, res)=>{
const restaurantId = req.params.restaurantId
const restaurantIndex = restaurants.findIndex(restaurant=>restaurant._id === restaurantId)
const updatedRestaurant = Object.assign(restaurants[restaurantIndex], req.body)
res.send(updatedRestaurant)
})

restaurantRouter.delete('/:restaurantId', (req, res)=>{
const restaurantId = req.params.restaurantId
const restaurantIndex = restaurants.findIndex(restaurant=>restaurant._id === restaurantId)
restaurants.splice(restaurantIndex, 1)
res.send (`${restaurantId} has been removed`)
})

restaurantRouter.get('/:restaurantId', (req, res)=>{
const restaurantId = req.params.restaurantId
res.send(restaurants.find(restaurant=>restaurant._id === restaurantId))
})

module.exports = restaurantRouter
