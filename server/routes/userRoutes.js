const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/userController");

// ✅ REGISTER ROUTE
router.post("/register", registerUser);

module.exports = router;