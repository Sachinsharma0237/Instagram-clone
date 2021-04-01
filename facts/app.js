const express = require("express");
const app = express();
const multer = require("multer");
app.use( express.static("public") );
app.use( express.json() );
const path = require("path");


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + path.extname(file.originalname))
    }
});


const fileFilter = function(req, file, cb){
    if( file.mimetype=="image/jpg" || file.mimetype=="image/jpeg" || file.mimetype=="image/png" ){
        cb(null, true);
    }else{
        cb(null, false);
    }
}  
  
  let upload = multer({ storage: storage , fileFilter : fileFilter});






app.post("/uploadImage", upload.single('photo') , (req,res)=>{
    console.log(req.body);
    console.log(req.file);
})

app.listen("3000", function(req, res){
    console.log("Server Started at Port 3000");
})