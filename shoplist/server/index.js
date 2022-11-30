const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
var path = require('path');

app.use(express.json());
app.use(cors());

const ControllerLista = require ('./controllers/ControllersLista');

app.get('/itens', ControllerLista.findAll); 



app.listen(5173, () =>{
    console.log("rodando");
});
