const express = require("express");
const dbConnect = require("./config/database")
const bodyParser = require('body-parser')

const cors = require('cors');
const { getAllProducts } = require("./controller/product");
const Product = require("./models/productModal");
require('dotenv').config()
const port = process.env.PORT;
const app = express();

app.use(bodyParser.json())
app.use(cors())
// app.use('/uploads', express.static('uploads'));
dbConnect()
app.get("/product",getAllProducts)
const insert = async() => {
    await Product.create({
        name:"Simeon"
    })
}

insert()


app.listen(port, () => {
    console.log("running port", port)
})
