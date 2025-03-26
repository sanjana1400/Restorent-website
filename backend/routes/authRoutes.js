// import { Router } from "express";
// import express from "express";
// import User from "../models/User.js";
// import { compare } from "bcryptjs";
// import jwt from "jsonwebtoken";  // ✅ Use default import
// const { sign } = jwt;  // ✅ Extract `sign`

// const router = express.Router();

// const dummyUser = {
//   // email: "sanju@1234gmail.com",
//   // password: "123456789",
// };

// router.post("/signup", async (req, res) => {
//   try {
//     console.log("Request Body:", req.body); // ✅ Log the incoming request

//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required" });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     const user = new User({ email, password });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Signup Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   if (email === dummyUser.email && password === dummyUser.password) {
//     return res.status(200).json({ message: "Login successful", token: "fake-jwt-token" });
//   } else {
//     return res.status(401).json({ message: "Invalid credentials" });
//   }
// });
// export default router;



import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
const { sign } = jwt;

// ✅ Signup Route (No Change Needed)
// router.post("/signup", async (req, res) => {
//   try {
//     console.log("Request Body:", req.body); // ✅ Log request for debugging

//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required" });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // ✅ Hash Password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Signup Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });
// router.post("/signup", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ error: "Email and password are required" });
//     }

//     // Check if the user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ error: "User already exists" });
//     }

//     // ✅ Hash the password before saving
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = new User({ email, password: hashedPassword });
//     await user.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Signup Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      // Check if the user already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ error: "User already exists" });
      }
  
      // Create a new user instance (password will be hashed automatically)
      const newUser = new User({
        email,
        password, // No need to manually hash here; the model will handle it
      });
  
      await newUser.save(); // The password is hashed automatically
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  


// ✅ Updated Login Route: Check User from Database
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Compare Hashed Password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Generate JWT Token
//     const token = sign({ userId: user._id, email: user.email }, "your_secret_key", { expiresIn: "1h" });

//     res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // ✅ Fetch user from database
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Compare the input password with the hashed password stored in the DB
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     // ✅ Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET || "your_secret_key",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     console.log("Login attempt for:", email); // Debugging

//     const user = await User.findOne({ email });

//     if (!user) {
//       console.log("User not found");
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     console.log("Stored password:", user.password);
//     console.log("Entered password:", password);

//     const isMatch = await bcrypt.compare(password, user.password);
//     console.log("Password match:", isMatch);

//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }

//     const token = jwt.sign(
//       { userId: user._id, email: user.email },
//       process.env.JWT_SECRET || "your_secret_key",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//     console.error("Login Error:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// router.post("/login", async (req, res) => {
//   try {
//       const { email, password } = req.body;
//       console.log("Login attempt for:", email); // Debugging

//       const user = await User.findOne({ email });
//       if (!user) {
//           console.log("User not found");
//           return res.status(401).json({ message: "Invalid credentials" });
//       }

//       console.log("Stored password:", user.password);
//       console.log("Entered password:", password);

//       const isMatch = await bcrypt.compare(password, user.password);
//       console.log("Password match:", isMatch);

//       if (!isMatch) {
//           return res.status(401).json({ message: "Invalid credentials" });
//       }

//       const token = jwt.sign(
//           { userId: user._id, email: user.email },
//           process.env.JWT_SECRET || "your_secret_key",
//           { expiresIn: "1h" }
//       );

//       res.status(200).json({ message: "Login successful", token });
//   } catch (err) {
//       console.error("Login Error:", err);
//       res.status(500).json({ error: "Server error" });
//   }
// });

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
  
        const user = await User.findOne({ email });
        console.log("User found:", user); // Log the entire user object
  
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }
  
        // Log the password and hashed password for debugging
        console.log("Entered Password:", password);
        console.log("Stored Hash:", user.password);
  
        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
  
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
  
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Server error" });
    }
  });
  



export default router;


