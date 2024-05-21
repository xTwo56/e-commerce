const mongoose = require('mongoose')


// Route Handler 
const reviewschema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Product" //reference to the product model
    },
    user_name: {
        type:String,
        required:true,
    },    
    body: {
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    user_email:{
        type:String,
        required:true,
    },  
    date:{
        type:Date,
        default: Date.now,
    }, 
})


// Export 
module.exports = mongoose.model("Review",reviewschema);