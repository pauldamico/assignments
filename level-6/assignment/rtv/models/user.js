const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
username:{
    type:String,
    unique:true,
    require:true,
    lowercase:true
},
password:{
    type:String,
    require:true
},
memberSince:{
   type:Date,
   default:Date.now
},
isAdmin:{
    type:Boolean,
    default:false
}

})

module.exports = mongoose.model("User", userSchema)