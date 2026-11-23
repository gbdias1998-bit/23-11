// SERVER: cria o servidor, define as rotas e inicia na porta 3366
const express = require('express');
const produtoController = require('../controller/produtoController');

const app = express();
const PORTA = 3366;

app.use(express.json()); // interpreta o JSON enviado no body

app.get('/produtos', produtoController.listarProdutos);
app.get('/produtos/:id', produtoController.exibirProduto);
app.post('/produtos', produtoController.inserirProduto);

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});
