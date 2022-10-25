const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
res.send(`<p>Welcome to the Bounty Hunter API</p><p>Use the following endpoint to access the data.   localhost:9000/bounty</p>`)
})

app.use('/bounty', require('./routes/bountyRouter.js'))


app.listen(9000, ()=>{
console.log("Server listening on port 9000")
})