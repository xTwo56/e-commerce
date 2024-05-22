const Product = require("../../models/product");

exports.createProduct = async(req,res)=>{
    try{
        const product = new Product({
            id:req.body.id,
            name:req.body.name,
            image:req.body.image,
            category:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price,
            quantity:req.body.quantity,
            material:req.body.material,
            available:req.body.available,
            product_details:req.body.product_details,
            material_care:req.body.material_care,
        });
        console.log(product);
        await product.save();
        console.log("Saved Successfully");
        return res.status(200).json({
            status: 201,
            message: "Product created successfully",
            data: product,
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