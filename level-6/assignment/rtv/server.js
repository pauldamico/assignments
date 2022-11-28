const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
const {expressjwt} = require('express-jwt')
const app = express()
app.use(morgan('dev'))
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/rtv", ()=>{
    console.log("Connected to database")
})




app.use('/auth', require('./routes/userRouter.js'))
app.use('/api', expressjwt({secret: process.env.SECRET, algorithms:['HS256']}))
app.use('/api/issue', require('./routes/issueRouter.js'))
app.use('/api/comment', require('./routes/commentRouter.js'))

app.get('/', (req, res)=>{
    res.send("test")
})

app.use((err, req, res, next)=>{
console.log(err)
res.send(err.message)

})



app.listen(9000, console.log("Server listening on port 9000"))

