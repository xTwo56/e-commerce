const express = require('express');
const router = express.Router();
const upload = require("../../middlewares/multer");
const cloudinary = require('./cloudinary');

router.post("/upload",upload.single('image'),function (req,res){
    cloudinary.uploader.upload(req.file.path,function(err,result){
        if(err){
            return res.status(500).json({
                success:false
            })
        }
        else{
            res.status(200).json({
                success:true,
                data:result
            })
        }
    })
})
module.exports = router;