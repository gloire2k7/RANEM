// admin.js
const express = require("express");
const Product = require("../models/Product");
const multer = require("multer");
const adminAuth = require("../middleware/adminAuth");

const router = express.Router();

// Define multer storage and upload settings
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to file name
  },
});

const upload = multer({ storage });

// Add Product
router.post("/", adminAuth, async (req, res) => {
  try {
    const { name, price, category, image } = req.body;
    const newProduct = new Product({ name, price, category, image });
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error adding product", error });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
      const products = await Product.find(); // Assuming you have a Product model
      res.json(products);
  } catch (error) {
      res.status(500).json({ message: "Error fetching products" });
  }
});

// Edit Product
router.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
});

// Delete Product
router.delete("/products/:id" , async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
});

module.exports = router;
