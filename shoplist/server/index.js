const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const ControllerLista = require('./controllers/ControllersLista');

//PRODUTOS - get tabela produtos - todos os produtos, idproduto, nome, url_foto etc...
app.get('/itens', ControllerLista.findAll);
//LISTAS - post tabela listas - envia pro back nome das listas (nomelista) a partir do popup
app.post ('/listas', ControllerLista.insert);
//LISTAS - get tabela listas - pega os nomes das listas (nomelista)
app.get('/listas', ControllerLista.find);
//CATEGORIAS - get tabela categorias - categorias dos produtos(descricao) e ordem(ordem)
app.get('/categorias', ControllerLista.order);
//LISTAS_ITENS - get tabela listas_itens - envia produtos para listas 
app.post('/additens', ControllerLista.add);
//LISTAS_ITENS - get tabela listas_itens 
app.get('/getitens', ControllerLista.show);
//LISTAS - deleta listas
app.delete('/deletarlista', ControllerLista.delete);
//LISTAS_ITENS - deleta itens da lista
app.delete('/deletaritens', ControllerLista.gone); 



app.listen(5174, () =>{
    console.log("rodando");
});
