const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/bountydb", ()=>{console.log("Connected to database")})

app.get("/", (req, res, err)=>{
    res.send("Welcome to the Bounty Hunter API")
})

app.use('/bounties', require('./routes/bountyRouter.js'))
app.use('/users', require('./routes/userRouter.js'))

app.use((err, req, res,)=>{
return res.send(err.message)
})






app.listen(9000, console.log("Server is running on port 9000"))