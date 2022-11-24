const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "")
});

app.get("/inicio", (req, res) => {
    res.sendFile(__dirname + "../src/pages/Inicio/Inicio")
});

app.listen(3001, () =>{
    console.log("rodando");
});