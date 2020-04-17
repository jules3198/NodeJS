const express = require("express");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var multer = require('multer');
const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Camera360",
    password: "jules",
    port: 5432
  });


  console.log("Connexion réussie à la base de données");

app.listen(3000, () => {
  console.log("Serveur démarré (http://localhost:3000/) ");
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


app.post("/addDocument",upload.single('image'),(req,res)=>{

try {
    
    
    date=new Date();
    titre=req.file.originalname;
    w1g_file_path_ftp="/images/"+titre;
    const sql = "INSERT INTO documents (date, titre,w1g_file_path_ftp ) VALUES ($1, $2, $3)";
  const document = [date, titre, w1g_file_path_ftp];
  pool.query(sql, document, (err, result) => {
    if (err) {
        return console.error(err.message);
      }

      res.send("files: "+req.file+"\n"+"enregistrement reussie");

    })
} catch (error) {
    
    console.log(error);
    res.send(400);
}

});

app.post("/addDocuments",upload.array('documents', 4),(req,res)=>{

    try {
        


   req.files.forEach(file => {

    date=new Date();
    titre=file.originalname;
    w1g_file_path_ftp="/images/"+titre;

    const sql = "INSERT INTO documents (date, titre,w1g_file_path_ftp ) VALUES ($1, $2, $3)";
  const documents = [date, titre, w1g_file_path_ftp];
  pool.query(sql, documents, (err, result) => {
    if (err) {
        return console.error(err.message);
      }

      res.send("files: "+req.files+"\n"+"enregistrement : "+result.rows);
  });

       
   });

    } catch(error) {
          console.log(error);
           res.send(400);
    }

})

app.get("/allDocuments", (req, res) => {
 
    const sql = "SELECT * FROM documents";
    pool.query(sql, [], (err, result) => {
      if (err) {
        return console.error(err.message);
      }

      console.log("resultat",result)
     res.send(result.rows);
    });
});


app.get("/oneDocument/:id", (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM documents WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
          }
      res.send(result.rows);
    });
  });


  app.post("/updateDocument/:id", (req, res) => {
    const id = req.params.id;
    console.log("id",req.params.id)
    console.log("body",req.body);
    const document = [req.body.date, req.body.titre, req.body.w1g_file_path_ftp, id];
    const sql = "UPDATE documents SET date = $1, titre = $2, w1g_file_path_ftp = $3 WHERE (id = $4)";
    pool.query(sql, document, (err, result) => {
        if (err) {
            return console.error(err.message);
          }
      res.send(result)
    });
  });



  app.get("/deleteDocument/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE  FROM documents WHERE id = $1";
    pool.query(sql, [id], (err, result) => {
        if (err) {
            return console.error(err.message);
          }
      res.render("delete", { model: result.rows[0] });
    });
  });