const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: String,
  address: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  total: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);

