const mongoose= require('mongoose');

//for women


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
   category: {
     type: {
       // Main category (e.g., Men, Women, Kids)
       maincategory: {
         type: String,
         required: true,
       },
       // Subcategories within the main category
       subcategories: {
         type: String,
         required: true,
       },
       lastcategories:{
          type:String,
          required:true,
       },
     },
     required: true,
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
   quantity:{
        type:Number,
        
   },
   material_care:{
        type:String,
        required:true,
   },
   shipping:{
          type:String,
          
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