const express = require('express')
const app = express()
const port = 3000

//informar o caminho dos arquivos estáticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//conectar ao banco
const db = require('./db');

//rota principal
app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  //cd projeto-crud/public/index.html
})

//puxar as rotas criadas em api.js
const apiRoutes = require('./routes/api');
//JSON
app.use(express.json());
app.use('/api/users', apiRoutes); //caminho para chegar em api.js

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
