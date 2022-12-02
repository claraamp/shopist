const db = require ('../config/db');


module.exports = {
    async findAll (req,res) {
        try {
            let response = await db.query('SELECT * FROM produtos')
            res.send(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async insert (req,res) {
        let data = {
            "nomelista": req.body.nomelista
        }
        try {
            let response = await db.query('INSERT INTO listas SET ?', [data]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },

    async find (req,res) {
        try {
        let response = await db.query('SELECT * FROM listas')
        res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async order (req,res) {
        try {
        let response = await db.query('SELECT * FROM categorias')
        res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async show (req,res) {
        try {
        let response = await db.query('SELECT * FROM listas_itens')
        res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },

    async add (req,res) {
        let data = {
            "idlistas": req.body.idlistas,
            "idproduto": req.body.idproduto,
            "nome_produto": req.body.nome_produto

        }
        try {
            let response = await db.query('INSERT INTO listas_itens SET ?', [data]);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    },

    async delete (req, res) {
        let idlistas = req.body.idlistas;
    
        try {
          let response = await db.query('DELETE FROM listas WHERE idlistas=?', [idlistas]);
          res.json(response);
        } catch (error) {
          console.log(error);
        }
      },
    
    async gone (req,res) {
        let idlistas_itens = req.body.idlistas_itens

        try {
            let response = await db.query('DELETE FROM listas_itens WHERE idlistas_itens=?', [idlistas_itens]);
            res.json(response);
          } catch (error) {
            console.log(error);
          }
    }
    



}
    