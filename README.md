# Catálogo MVC – Papelaria Saber

## Como executar
npm install
npm start      (ou npm run dev)

Servidor: http://localhost:3366

## Papel de cada pasta
- model/      dados (produtos.json) e regras de acesso a eles (produtoModel.js)
- controller/ recebe a requisição, usa o Model e devolve a resposta (produtoController.js)
- server/     cria o servidor Express, define as rotas e inicia na porta 3366 (server.js)

## Rotas
| Método | Rota           | Resposta                                   |
|--------|----------------|--------------------------------------------|
| GET    | /produtos      | 200 – lista completa                       |
| GET    | /produtos/:id  | 200 – produto / 404 – não encontrado       |
| POST   | /produtos      | 201 – criado / 400 – campo ausente         |
