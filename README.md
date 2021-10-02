# Developers CRUD - Backend
Backend para cadastro, listagem, edição e exclusão desenvolvido com NodeJS, utilizando a biblioteca Express para rotas e requisições, MongoDB como banco de dados e a biblioteca Mongoose para interação com o banco de dados.

## Como rodar

* Clone o repositório
* Faça a instalação das dependências
````
npm install
````
* Altere o nome do arquivo .env.example para .env e faça as alterações nas configurações da aplicação caso seja necessário
* O comando abaixo irá rodar a aplicação em sua máquina local
````
npm start
````
## Rotas
Método    | Rota           | Retorno
--------- | ---------      | ---------
GET       | /developers     | Retorna um JSON com os desenvolvedores cadastrados
GET       | /developers/id  | Retorna um JSON com os dados de um desenvolvedor pelo seu id
POST      | /developers     | Cadastra um novo desenvolvedor
PUT       | /developers/id  | Atualiza os dados de um desenvolvedor pelo seu id
DELETE    | /developers/id  | Deleta os dados de um desenvolvedor pelo seu id