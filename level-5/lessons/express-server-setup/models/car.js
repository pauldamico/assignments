const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  make: {
    type: String,
    required: true,
    },
    color: { 
    type: String,
    required: true
    },
});


module.exports = mongoose.model('car', carSchema)