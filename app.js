// Importa o módulo Express
const express = require("express");

// Importa a biblioteca Faker.js
const {faker} = require("@faker-js/faker");

// Define app
const app = express();

// Define a porta do servidor
const port = 3000;

// Define o idioma
faker.locale="pt_BR";

// Gera uma rota GET
app.get("/api/produtos/categoria/livros",(req,res)=> {

// Analisa o qtd, se não existir, usa o valor 5
const quantidade = req.query.qtd || 5;

// Array de usuários
const usuarios = [];

// Loop que gera a quantidade pedida
for(let i = 0;i < quantidade;i++) {
    usuarios.push({
        id:faker.string.uuid(), // Gera um ID único e fictício
        nome:faker.commerce.productName(),  // Nome fictício do livro
        data:faker.date(),  // Data fictícia
        preco: faker.commerce.price(),  // Preço fictício
        autor:faker.person.fullName(),  // Nome de autor fictício
        descricao: faker.commerce.productDescription()  // Descrição fictícia do livro
    });
}

// Retorna os usuários em formato JSON
res.json(usuarios);
});

// Inicia o servidor
app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
})