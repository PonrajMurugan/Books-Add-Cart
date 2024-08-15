
const Product = require('../models/productModal');

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        console.log(allProducts);
        return res.status(200).json({ response: "success", response_data:  allProducts });
    } catch (error) {
        return res.status(500).json({ response: "failure", response_message: "Internal Server Error" });
    }
}



module.exports = {getAllProducts}