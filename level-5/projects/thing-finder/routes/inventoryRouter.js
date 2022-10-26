const express = require("express");
const {v4: uuidv4} = require('uuid')
const inventoryRouter = express.Router();

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id:uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id:uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id:uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id:uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id:uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id:uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id:uuidv4()
    }
]

inventoryRouter.get('/:itemId', (req, res)=>{
    const itemId = req.params.itemId
    const foundItem = inventoryItems.find(item=>item._id === itemId && item)
    res.send(foundItem)
})
inventoryRouter.get('/search/type', (req, res)=>{
    const itemType = req.query.type
    const filteredItemType = inventoryItems.filter(item=>itemType === item.type && item)
    res.send(filteredItemType)
})

inventoryRouter.get('/search/max',(req, res)=>{
const maxquery = req.query.max
const maxPrice = inventoryItems.filter(item=>item.price < maxquery && item)
res.send(maxPrice)
})
inventoryRouter.get('/search/min',(req, res)=>{
    const minQuery = req.query.min
    const priceRange = inventoryItems.filter(item=>item.price > minQuery && item)
    res.send(priceRange)
})
inventoryRouter
  .route("/")
  .get((req, res) => {
    res.send(inventoryItems);
  })
  .post((req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    inventoryItems.push(newItem)
    res.send(`${newItem.type} has been added to the database`)
  });

module.exports = inventoryRouter;
