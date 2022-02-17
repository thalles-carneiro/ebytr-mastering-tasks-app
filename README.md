# Boas vindas ao Mastering Tasks

## Contexto

Esse projeto está em desenvolvimento para atender as demandas da empresa **Ebytr**.

O intuito é implementar um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

A aplicação visa centralizar as tarefas de uma pessoa colaboradora. De início, iremos criar os testes e implementar as funcionalidades para a página de tarefas.

### [Figma do Projeto Mastering Tasks](https://www.figma.com/file/gFtJkvWcqzfZ8ZQ7SD7t2n/Mastering-Tasks-%7C-Ebytr?node-id=0%3A1)

---
---

## Modo de utilização

A API consta com 8 endpoints:

- `/login` ---> [`POST`] (em construção...)
- `/register` ---> [`POST`] (em construção...)

- `/users` ---> Rota que lida com pessoas usuárias (em construção...)
  - `/` ---> [`POST`] Cria uma nova pessoa usuária
  - `/:id` ---> [`GET`] Pega a pessoa usuária por id

- `/tasks` ---> Rota que lida com as tarefas de uma determinada pessoa usuária
  - `/tasks` ---> [`POST`] Cria uma nova tarefa
  - `/tasks` ---> [`GET`] Cria todas as tarefas
  - `/tasks/:id` ---> [`PUT`] Atualiza a tarefa por id
  - `/tasks/:id` ---> [`DELETE`] Deleta a tarefa por id

---
---

## Modo de desenvolvimento

O projeto será desenvolvido em TDD, inicialmente com testes unitários, e posteriormente testes de integração serão implementados.

### Tecnologias

---
- Backend:

  - Servidor: `NodeJS com Express`

  - Autorização: `JSON Web Token` (em construção...)

  - Bando de Dados: `MongoDB com Mongoose`

  - Testes Unitátios: `Mocha, Chai e Sinon`

- Frontend:

  - Cliente: `React com Vite`

  - Estilização: `Bootstrap` (em construção...)

  - Testes Unitátios: `RTL`

### Banco de dados

---
Seguindo a Stack [MERN](https://www.mongodb.com/mern-stack), a aplicação irá utilizar o [**MongoDB**](https://docs.mongodb.com/) como bando de dados. Também será utilizado com o intuito de facilitar a manipulação do banco e aumentar a agilidade no desenvolvimento, o [*Mongoose*](https://mongoosejs.com/). Uma biblioteca para Modelagem de Dados de Objeto (Object Data Modeling - ODM).


---
---

## Referências

- [Repositório do Desafio Auto Trybe Backend](https://github.com/pauloricardoz/desafio-auto-trybe-back)
  - Utilizei de inspiração para aplicar o `TDD` e o `Conventional Commits`

---
---

## Contatos

### Thalles de Oliveira Carneiro 

[Linkedin](https://www.linkedin.com/in/thallescarneiro/)

[Github](https://github.com/thalles-carneiro)
