// import model 
const Product = require("../models/product");
const Review = require("../models/review");
const { response } = require("express");

exports.createComment = async (req, res) => {
    try {
       
        const { product, user_name, body,rating,user_email } = req.body;

        
        const review = new Review({
            product, user_name, body,rating,user_email
        })

        
        const savedComment = await review.save();

        
        const updatedProduct = await Product.findByIdAndUpdate(product, { $push: { reviews: savedComment._id } },
            { new: true })
            .populate("reviews") //Populates the comment array with the comments document
            .exec();

        res.json({
            post: updatedProduct,
        })
    }
    catch (err) {
        return res.status(500).json({
            error : "Error while creating comment",            
        })
    }
}