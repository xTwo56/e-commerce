const mongoose= require('mongoose');

const Product = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
   },
   image:{
        type:String,
        required:true,
   },
   category:{
        type:String,
        required:true,
   },
   new_price:{
        type:Number,
        required:true,
   },
   old_price:{
        type:Number,
        required:true,
   },
   material:{
        type:String,
        required:true,
   },
   available:{
        type:String,
        required:true,
   },
   product_details:{
        type:String,
        required:true,
   },
   material_care:{
        type:String,
        required:true,
   },
   date:{
        type:Date,
        default: Date.now,
   },
   reviews : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Review",
    }],
});

module.exports = mongoose.model("Product", Product);