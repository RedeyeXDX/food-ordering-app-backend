const db = require("../db/models/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();

const register = async (req, res) => {
  try {
    console.log("📌 Incoming request:", req.body);
    const { name, email, password } = req.body;

    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("❌ Validation Errors:", errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    let user = await db.User.findOne({ where: { email } });
    if (user) {
      console.log("❌ User already exists:", email);
      return res.status(400).json({ error: "User already exists" });
    }

    console.log("🔑 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("📝 Creating new user...");
    user = await db.User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await db.User.findOne({ where: { email } });
    if (!user) {
      console.log("❌ User already exists:", email);
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { register, login };
