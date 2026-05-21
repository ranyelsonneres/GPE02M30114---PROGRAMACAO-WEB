const mysql = require('mysql2');

//criar os parâmetros de conexão (credenciais)
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'admin123', //catolica
    database: 'userdb_ranyelson',
    port: '3306'
});

//estabelecer a conexão com o banco
db.connect(err =>{
    if(err) throw err;
    console.log('conectado ao banco de dados');
});

//exportar o módulo
module.exports = db;
