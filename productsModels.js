const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: [true, "A price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: String,
    required: [false, "A rating must be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "mi", "samsung", "dell"],
      message: `{values} is not supported`,
    },
  },
});

module.exports=mongoose.model("Products",productSchema)