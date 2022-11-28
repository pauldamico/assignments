const mongoose = require("mongoose");
const user = require("./user");
const Schema = mongoose.Schema;
const commentSchema = new Schema({
  issueId: { type: Schema.Types.ObjectId, ref: Issue, required: true },
  userId: { type: Schema.Types.ObjectId, ref: user, required: true },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", commentSchema);
