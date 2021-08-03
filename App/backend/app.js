const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./models/Carro')
const Carro = mongoose.model('carros')

// Configuração

    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/apicarros").then(() =>{
            console.log("Banco de dados conectado com sucesso")
        }).catch((err) => {
            console.log("Houve um erro ao se conectar com o banco: "+err)
        })    

// Rotas
//Rota Principal
app.get('/', (req, res)=>{
    res.redirect('http://localhost:3000/')
})

// Retorna JSON com carros
app.get('/veiculos', (req, res) => {
    Carro.find().lean().then((carros) => {
        res.json(carros)
    }).catch((err) => {
        console.log('Houve um erro ao tentar listar os carros'+err)
        res.redirect('/veiculos')
    })
})

// Registrando veiculos
app.post('/veiculos', (req, res) =>{

    const novoVeiculo = {
        veiculo: req.body.veiculo,
        ano: req.body.ano,
        marca: req.body.marca,
        descricao: req.body.descricao,
        vendido: req.body.vendido,
        data: req.body.created
    }

    new Carro(novoVeiculo).save().then(() => {
        console.log("Veiculo cadastrado com sucesso")
        res.redirect('/veiculos')
    }).catch((err) => {
        console.log("Erro ao tentar salvar veiculo no db "+err)
        res.redirect('/veiculos')
    })
})

// app.get('/veiculos/find/:ano', (req, res) => {
//     Carro.findOne({ano: ano}.then((carro) => {
//         res.render('/veiculos', {carro: carro})
//     }).catch((err) => {
//         console.log('houve um erro ao tentar filtrar')
//         res.redirect('/')
//     }))
// })

// Outros
const PORT = 8081
app.listen(PORT,() => {
    console.log('Servidor rodando na porta 8081')
})