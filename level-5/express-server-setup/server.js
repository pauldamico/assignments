const express = require("express")
const app = express()

//1. endpoint
//2. CallBack fucntion
app.get("/user", (req, res)=>{
    res.send({name:"Joe",age:13})
})

app.listen(9000, ()=>{
    console.log("Server is running on port 9000")
})