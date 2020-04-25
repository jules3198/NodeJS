const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const fs = require('fs');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var multer = require('multer');
const { Pool } = require("pg");


const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Camera360",
    password: "root",
    port: 5432
  });


var storage = multer.diskStorage({

    destination: function(req, file, cb) {
        cb(null, './images');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({ storage: storage })

app.post("/addDocument/:idpiece",upload.single('image'),(req,res)=>{
  date = new Date();
try {
  const sql = "INSERT INTO documents (date, titre,w1g_file_path_ftp, valid, id_piece) VALUES ($1, $2, $3, $4, $5)";
  const document = [date,date.getTime(),"/images/"+date.getTime(),false,req.params.idpiece];
  pool.query(sql, document, (err, result) => {
    if (err) {
        return console.error(err.message);
      }
      res.send("files: "+req.file+"\n"+"enregistrement reussie");
      
      fs.rename('./images/'+req.file.originalname, './images/'+date.getTime()+".jpg", () => { 
        console.log("file rename")
      });
   })
} catch (error) {
    
    console.log(error);
    res.send(400);
    
}
});

app.use(express.static('public'));
app.get('/images',(req,res, next) =>{});
app.use('/images', express.static(__dirname + '/Images'));
var server = app.listen(1723);
console.log("http://localhost:1723/images/jeuDeTest.jpg link for try with pannellum");
