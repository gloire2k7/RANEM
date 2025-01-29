const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// User Signup
router.post("/api/users/signup", async (req, res) => {
  console.log("Signup request received with body:", req.body); // Debug log
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password }); // Hashing is handled in the User model
    await newUser.save();
    res.status(201).json({ message: "User created successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed.", error: err.message });
  }
});

// User Login
router.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await user.matchPassword(password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token, userId: user._id, role: user.role });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
