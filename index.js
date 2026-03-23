// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

// Banco de dados "fake" em memória
let produtos = [
    {
        id: 1,
        nome: "Notebook Dell",
        preco: 3500,
        categoria: "Informática",
        estoque: 15
    },
    {
        id: 2,
        nome: "Mouse Logitech",
        preco: 150,
        categoria: "Informática",
        estoque: 50
    },
    {
        id: 3,
        nome: "Livro JavaScript",
        preco: 89,
        categoria: "Livros",
        estoque: 30
    },
    {
        id: 4,
        nome: "Teclado Mecânico",
        preco: 450,
        categoria: "Informática",
        estoque: 20
    },
    {
        id: 5,
        nome: "fone",
        preco: 200,
        categoria: "informatica",
        estoque: 10
    },
];
           
// 5. Criar primeiro endpoint
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

//Metodo get para retornar os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos)
});
// 6. Endpoint de informações

app.post('/api/produtos', (req, res) => {
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        preco: req.body.preco,
        categoria: req.body.categoria,
        estoque: req.body.estoque
    };

    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});


// 7. Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});