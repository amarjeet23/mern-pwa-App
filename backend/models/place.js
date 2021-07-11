const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    lag: { type: String },
    lng: { type: String }
  },
  address: {
    type: String
  },
  creator: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Place", placeSchema);
