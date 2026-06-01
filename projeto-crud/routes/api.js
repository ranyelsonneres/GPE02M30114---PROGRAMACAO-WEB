//lógica do backend - CRUD
const express = require('express');

//modularizar as rotas
const router = express.Router();

const db = require('../db'); //conectando ao banco de dados

//CRUD
//create - post (sql: insert)
router.post('/', (req, res)=>{
    const {nome, email} = req.body; //corpo da requisição

    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) => {
            if(err) return res.status(500).send(err);
            res.status(201).json({id:result.insertId, nome, email});
        }
    );
});

//read - get (sql: select)
router.get('/', (req, res) => {
    //executar a consulta SQL
    db.query('SELECT * FROM users', (err, results) =>{
        if(err) return res.status(500).send(err);
        res.json(results);
    });
});

//update - put(sql: update)
router.put('/:id', (req, res) => {
    //extrair os dados
    const {nome, email} = req.body;
    const {id} = req.params;

    //executar a instrução SQL
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err) =>{
        if(err) return res.status(500).send(err);
        res.json({id, nome, email});
    });
});

//delete - delete (sql: delete)
router.delete('/:id', (req, res) =>{
    //pegar o ID do usuário
    const {id} = req.params;

    //executar a instrução SQL
    db.query('DELETE FROM users WHERE id = ?', [id], (err)=>{
        if(err) return res.status(500).send(err);
        res.sendStatus(204);
    });
});

//exportar o módulo para o arquivo principal (server.js)
module.exports = router;
