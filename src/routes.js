// requisição para chamar o express
const express = require('express');
// chamando o express para controlar as rotas
const router = express.Router();
const UsuarioController = require('./controller/UsuarioController')
// deixando as rotas visiveis para além deste arquivo
module.exports = router;