// MODEL: regras de acesso aos dados (lista de produtos em memória)
const produtos = require('./produtos.json');

// Retorna a lista completa
const listar = () => produtos;

// Retorna um produto pelo id, ou undefined se não existir
const buscarPorId = (id) => produtos.find((p) => p.id === id);

// Gera um novo id sem repetir nenhum existente
const gerarId = () =>
  produtos.length > 0 ? Math.max(...produtos.map((p) => p.id)) + 1 : 1;

// Insere um novo produto na lista e o retorna
const inserir = ({ nome, categoria, preco, estoque }) => {
  const novo = { id: gerarId(), nome, categoria, preco, estoque };
  produtos.push(novo);
  return novo;
};

module.exports = { listar, buscarPorId, inserir };
