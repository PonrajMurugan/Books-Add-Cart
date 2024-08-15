const UserDetails = require("../models/userModal");


const setProduct = async (req,res) => {
    const {id,name,price,author,username,address,email} = req.body;

      const body = {
        id,
        name,
        price,
        author: author?author:"",
        username:username?username:"",
        address,
        email
      }
      
      await UserDetails.create(body)
      return res.status(200).json({ response: "success" });
 }

 module.exports = {setProduct}