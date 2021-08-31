const { response } = require("express");
const express = require("express");

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());

let clients = [
    {id: 2, nome: 'Eduardo Soares', telefone: '53981430002'},
    {id: 1, nome: 'Angelo Luz', telefone: '53999999999'}
]

app.get("/clients", (req, res) => response.json(clients));

app.get("/clients/:id", (req, res) => {
    const client = clients.filter(value => value.id = req.params.id)
    response.json(client);
})

app.post('/clients', (req, res) => {
    const client = req.body;
    clients.push(req.body)
    res.json(client)
})

app.put('/clients/:id', (req, res) => {
    const id = req.params.id;
    const nome = req.body.nome;

    let client = clients.filter(value => value.id == id)

    client[0].nome = nome;

    res.json(client[0]);
})

app.delete('/clients/:id', (req, res) => {
    const id = req.params.id;
    clients = clients.filter(value => value.id != id);
    response.json(clients)
    
})

app.listen(3000);