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
      required: true,
    },
    companyAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true
    },
    zipCode: {
      type: Number,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
