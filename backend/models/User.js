const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
  },
  cart:{
    type:Object,
  },
  date:{
    type:Date,
    default:Date.now,
  }

});

module.exports = mongoose.model("User", userSchema);
