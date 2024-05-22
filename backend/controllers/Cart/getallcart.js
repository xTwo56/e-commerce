const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.getAllCartUser = async(req,res)=>{
    try{
       
        const {token} = req.body;
        const decode = jwt.verify(token, "prayas");
       
        let finder = decode.id;
        const cart = await User.findById({_id:finder})
            .populate("cart") //Populates the comment array with the comments document
            .exec();

        console.log("Fetched successfully");
        res.send(cart.cart);
        console.log(cart.cart);
        
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}