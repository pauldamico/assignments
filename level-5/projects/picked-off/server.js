const express = require('express')
const app = express()

app.use(express.json())


app.get('/', (req, res, next)=>{
    res.send("Use /fruit")
})

app.use('/fruit', require("./routes/fruitRouter.js"))

app.listen(9000, console.log("Server listening on port 9000"))