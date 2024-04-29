const express = require("express");
const mongoose = require("mongoose");
//const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(
    "mongodb+srv://mohan23:mohan9177@backenddb.mvu7rrq.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to Database!");
    app.listen(3006, (req, res) => {
      console.log("Server is running on the port 3006");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

/** API's
// Get all products

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a product

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a product

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a product

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete a product

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
**/
