const express = require('express')
const app = express()

app.use(express.json())



app.listen(9000, (req, res)=>{
res.send("Server listening on port 9000")
})