const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({extended:true}))

//criar o caminho de onde estão os arquivos estáticos
app.use(express.static('public'));

//rotas para o acesso as páginas da sua aplicação
app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.sendFile(__dirname + '/public/index.html')
});

app.get('/sobre', (req, res) => {
  //res.send('Página Sobre!');
  res.sendFile(__dirname + '/public/sobre.html')
});

//rota de contato
app.post("/contato", (req, res) =>{
    const {nome, email} = req.body;
    res.send(`Dados recebidos: Nome: ${nome}, Email: ${email}`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
