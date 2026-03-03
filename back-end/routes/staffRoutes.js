const express = require("express");
const router = express.Router();
const Staff = require("../models/Staff");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET;

// STAFF LOGIN
router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  const staff = await Staff.findOne({ username });

  if (!staff)
    return res.status(400).json({ message: "User not found" });

  const valid = await bcrypt.compare(
    password,
    staff.password
  );

  if (!valid)
    return res.status(400).json({
      message: "Wrong Password"
    });

  const token = jwt.sign(
    { id: staff._id },
    process.env.JWT_SECRET
  );

  res.json({ token });
});
module.exports = router;