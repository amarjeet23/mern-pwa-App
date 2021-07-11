const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required:true,
    // default:'amar1@gmail.com'
  },
  password: {
    type: String,
    required: true,
    // default:'12345'
  }
});
module.exports = mongoose.model("User", userSchema);
