const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to the Dog API</h1><p>Use the /dogs endpoint to see a list of dogs</p>")
})

app.use('/dogs', require('./routes/dogRouter.js'))




app.listen(9000, ()=>{
    console.log(`Server listening on port 9000`)
})