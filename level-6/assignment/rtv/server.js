const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
app.use(morgan('dev'))
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/rtv", ()=>{
    console.log("Connected to database")
})




app.get('/', (req, res)=>{
    res.send("test")
})





app.use((err, req, res, next)=>{
console.log(err)

})






app.listen(9000, console.log("Server listening on port 9000"))