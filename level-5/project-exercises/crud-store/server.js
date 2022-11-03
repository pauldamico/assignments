const express = require("express")
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/inventorydb', console.log('Connected to Database'))

app.get('/', (req, res)=>{
res.send('welcome')
})

app.use('/inventory', require('./routes/inventoryRouter'))

app.use((err, req, res, next)=>{
    console.log(err)
  return  res.send(err.message)
})



app.listen(9000, console.log('Server running on port 9000'))
