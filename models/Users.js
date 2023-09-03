const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      default: "Buyer",
      required: false
    },
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
    },
    otp: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
      required: false,
    },
    companyName: {
      type: String,
      required: false,
    },
    companyAddress: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false
    },
    zipCode: {
      type: Number,
      required: false
    },
    province: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: false
    },
    phoneNumber: {
      type: String,
      required: false
    }
  },
  {
    timestamps: false,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
