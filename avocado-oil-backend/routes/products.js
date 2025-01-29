const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add new product
router.post("/", async (req, res) => {
  try {
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, category },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
});

// Delete product
router.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
});

module.exports = router;