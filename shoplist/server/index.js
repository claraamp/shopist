const express = require('express');
const app = express();
app.use(express.json());
const bodyparser = require('body-parser');
const mysql = require('mysql2');
var path = require('path');


const connection = mysql.createConnection({
    host: 'sql10.freesqldatabase.com',
    user: 'sql10581235',
    password: '4cXHBAGk7A',
    database: 'sql10581235'
  });



app.use(bodyparser.urlencoded({extended: true}))

app.listen(5173, () =>{
    console.log("rodando");
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../src/pages/Home', 'Home.jsx'));
    
});

app.post("/", (req, res)=>{

    const nome_lista = req.body.criarLista 

    connection.query("INSERT INTO listas (nome_lista) VALUES (?)", [nome_lista], (err, result)=>{
        console.log(err);
    })
})


