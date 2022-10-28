const express = require('express')
const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Welcome")
})

app.use('/restaurants', require('./routes/restaurantRouter.js'))


app.listen(9000, ()=>{
    console.log("Server listening on port 9000")
})