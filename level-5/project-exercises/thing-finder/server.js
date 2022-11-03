const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("<h1>Welcome to the Inventory API</h1><p>Use the /inventory endpoint to see a list of items</p>")
})

app.use('/inventory', require('./routes/inventoryRouter.js'))




app.listen(9000, ()=>{
    console.log(`Server listening on port 9000`)
})