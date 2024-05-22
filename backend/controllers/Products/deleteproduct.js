const Product = require("../../models/product");

exports.deleteProduct = async(req,res)=>{
    try{
        await Product.findOneAndDelete({_id:req.body.id});
        console.log("Deleted successfully");
        return res.status(200).json({
            status: 201,
            message: "Product deleted successfully",
            
          });
    }
    catch(error){
        console.log("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });

    }
}