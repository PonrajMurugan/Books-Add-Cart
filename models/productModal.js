const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:Number,
    image: String,
    title: String,
    author: String,
    price:Number,
    description:String,
}, { collection: "Product" });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
