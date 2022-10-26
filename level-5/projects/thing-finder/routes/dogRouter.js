const express = require("express");
const {v4: uuidv4} = require('uuid')
const dogRouter = express.Router();

const dogs = [
  { type: "goldendoodle", size: "all", color: "brown", _id:uuidv4() },
  { type: "golden retriever", size: "large", color: "yellow", _id:uuidv4()},
  { type: "pug", size: "small", color: "black", _id:uuidv4()}
];

dogRouter.get('/:dogId', (req, res)=>{
    const dogId = req.params.dogId
    const foundDog = dogs.find(dog=>dog._id === dogId && dog)
    res.send(foundDog)
})
dogRouter.get('/search/type', (req, res)=>{
    const dogType = req.query.type
    const filteredDogType = dogs.filter(dog=>dogType === dog.type && dog)
    res.send(filteredDogType)
})

dogRouter
  .route("/")
  .get((req, res) => {
    res.send(dogs);
  })
  .post((req, res) => {
    const newDog = req.body;
    newDog._id = uuidv4();
    dogs.push(newDog)
    res.send(`${newDog.type} has been added to the database`)
  });

module.exports = dogRouter;
