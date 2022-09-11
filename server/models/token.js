const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300,// this is the expiry time in seconds
  },
});


const Token = mongoose.model("Token", tokenSchema);

module.exports = { Token };