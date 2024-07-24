// requisição para chamar o express
const express = require('express');
// indicando o rquivo onde estão nossas rotas
const routes = require('./routes');
// iniciando o servidor
const server = express();
// executando o servidor
server.use('/api', routes);
server.listen(()=>{
    console.log("Servidor rodando")
});