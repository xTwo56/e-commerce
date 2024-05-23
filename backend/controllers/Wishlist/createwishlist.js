// import model 
const Product = require("../../models/product");
const Wishlist = require("../../models/Wishlist");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");


const { response } = require("express");

exports.createWishlist = async (req, res) => {
    try {
       
        const { product,token } = req.body;
        
        const getProduct = await Product.findById({_id:product});
            
        const { image, name } = getProduct;
       const price = getProduct.new_price;
      
        const wishlist = new Wishlist({
            product, image, name,price
        })
      
        const savedwishlist = await wishlist.save();

        
        
        
        const decode = jwt.verify(token, "prayas");
       
        let finder = decode.id;
        
        const updatedUserWishlist = await User.findByIdAndUpdate(finder, { $push: { wishlist: savedwishlist._id } },
            { new: true })
            

        res.json({
            post: updatedUserWishlist,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}