const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const ControllerLista = require ('./controllers/ControllersLista');

app.get('/itens', ControllerLista.findAll); 
app.post ('/listas', ControllerLista.insert);
app.get('/listas', ControllerLista.find);

app.listen(5174, () =>{
    console.log("rodando");
});
