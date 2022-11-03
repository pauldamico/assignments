const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    name:{
        type:String,
        required:true    
    },
    cost:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }


})

module.exports = mongoose.model('inventory', inventorySchema)