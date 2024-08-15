const express = require("express");
const dbConnect = require("./config/database")
const bodyParser = require('body-parser')

const cors = require('cors');
const { getAllProducts } = require("./controller/product");
const Product = require("./models/productModal");
const { setProduct } = require("./controller/user");
require('dotenv').config()
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json())
app.use(cors())
// app.use('/uploads', express.static('uploads'));
dbConnect()
app.get("/product",getAllProducts)
app.post("/apiuser",setProduct)


// insert()


app.listen(port, () => {
    console.log("running port", port)
})
