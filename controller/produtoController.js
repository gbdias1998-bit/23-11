// CONTROLLER: recebe a requisição, usa o Model e envia a resposta
const produtoModel = require('../model/produtoModel');

// GET /produtos
const listarProdutos = (req, res) => {
  res.status(200).json(produtoModel.listar());
};

// GET /produtos/:id
const exibirProduto = (req, res) => {
  const id = Number(req.params.id);
  const produto = produtoModel.buscarPorId(id);

  if (!produto) {
    return res.status(404).json({ erro: `Produto com código ${req.params.id} não encontrado.` });
  }
  return res.status(200).json(produto);
};

// POST /produtos
const inserirProduto = (req, res) => {
  const { nome, categoria, preco, estoque } = req.body || {};

  const ausente = (v) => v === undefined || v === null || v === '';
  if ([nome, categoria, preco, estoque].some(ausente)) {
    return res.status(400).json({
      erro: 'Campos obrigatórios: nome, categoria, preco e estoque.'
    });
  }

  if (isNaN(Number(preco)) || isNaN(Number(estoque))) {
    return res.status(400).json({ erro: 'preco e estoque devem ser números.' });
  }

  const novo = produtoModel.inserir({
    nome,
    categoria,
    preco: Number(preco),
    estoque: Number(estoque)
  });
  return res.status(201).json(novo);
};

module.exports = { listarProdutos, exibirProduto, inserirProduto };
