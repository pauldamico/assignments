const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// hook
userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      next(err);
    }
    this.password = hash;
    next();
  });
});

// methods check user password and remove password from sending
userSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch)=>{
if(err){return callback(err)}
return callback(null, isMatch)
    })
}

userSchema.methods.deletePassword = function () {
    const user = this.toObject()
    delete user.password
    return user
}



module.exports = mongoose.model("User", userSchema);
