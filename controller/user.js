const UserDetails = require("../models/userModal");


const setProduct = async (req,res) => {
    const {id,name,price,address,email} = req.body;

      const body = {
        id,
        name,
        price,
        author:"null",
        username:"null",
        address,
        email
      }
      
      await UserDetails.create(body)
      return res.status(200).json({ response: "success" });
 }

 module.exports = {setProduct}