

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id:Number,
    name: String,
    price: Number,
    author: String,
    username:String,
    address:String,
    email:String,
}, { collection: "User" });

const UserDetails = mongoose.model("User", userSchema);

module.exports = UserDetails;