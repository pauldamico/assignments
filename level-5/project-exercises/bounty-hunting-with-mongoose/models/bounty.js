const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  firstName: { type: String, required: true },
  lastName: {type:String, required:true},
  living:{type:Boolean, required:true},
  bountyAmount:{type:Number, required:true},
  type:{type:String, required:true},
  user:{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
  }

});

module.exports = mongoose.model("bounty", bountySchema);
