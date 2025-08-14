# Minha Loja Redux Saga

Este projeto é uma aplicação de loja virtual simples construída com **React**, **Redux Toolkit**, **Redux-Saga** e **Vite**. Ele demonstra autenticação de usuário, listagem de produtos e gerenciamento de carrinho de compras, utilizando uma API pública fake para simular operações reais.

## Tecnologias Utilizadas

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux-Saga](https://redux-saga.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Vite](https://vitejs.dev/) (build e dev server)
- [TypeScript](https://www.typescriptlang.org/)

## Funcionalidades

- **Login**: Autenticação de usuário via API fake.
- **Listagem de Produtos**: Busca e exibe produtos de uma API pública.
- **Carrinho de Compras**: Adiciona, remove e envia produtos do carrinho.
- **Proteção de Rotas**: Apenas usuários autenticados acessam a área de produtos.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como baixar e rodar o projeto

1. **Clone o repositório:**
```sh
git clone https://github.com/seu-usuario/minha-loja-redux-saga.git
cd minha-loja-redux-saga
``` 

2. **Instale as dependências:**
```sh
npm install
# ou
yarn
```

3. **Rode o projeto localmente:**
```sh
npm run dev
# ou
yarn dev
```
4. **Acesse no navegador:**
```sh
http://localhost:5173
```

## Observações

- O login utiliza a Fake Store API. Use um usuário válido da documentação da API, por exemplo:
    - Usuário: mor_2314
    - Senha: 83r5^_

- O projeto não possui backend próprio, todas as operações são simuladas via API pública.

---
Sinta-se à vontade para modificar e expandir o projeto!