# api_trabalho1
# api_trabalho1
metodo get padrao
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

metodo get para retornar os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos)
});

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

link para as imagens do postman: https://docs.google.com/document/d/14mq3ZXaM4j7xCujdMnHQXMStD7Sya6vzaOYbdtQ0GcM/edit?usp=sharing

exemplo de uma requisição postman
{
    "id": 6,
    "nome": "Controle gamerSir",
    "preco": 250,
    "categoria": "eletronico",
    "estoque": 10
}
