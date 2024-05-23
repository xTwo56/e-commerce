{/*const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return(null,`${file.filename}_${Date.now()}${path.extname(file)}`)
    }
});

const upload = multer({storage:storage})

app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
     res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
     })
})*/}