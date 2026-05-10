const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders
} = require("../controllers/orderController");

// POST: create order
router.post("/", createOrder);

// GET: get all orders
router.get("/", getOrders);

module.exports = router;