const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },
  accountVerificationOtp: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
