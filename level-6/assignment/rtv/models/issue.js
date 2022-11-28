const mongoose = require('mongoose')
const Schema = mongoose.Schema
const issueSchema = new Schema({
    issue: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required:true },
    likes:[String],
    dislikes:[String],
    dateCreated:{type:Date, default: Date.now}
  }

)


module.exports = mongoose.model("Issue", issueSchema)