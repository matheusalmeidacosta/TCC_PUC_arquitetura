const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

const rotaCadastro = require('./routes/cadastros')
const rotaConsultas = require('./routes/consultas')


// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header', 
        'Origin, X-Requrested-With, Content-Type, Accept, Authorization',
        );
        if(req.method === 'OPTIONS'){
            res.header('Access-Contorl-Allow-Methodos', 'PUT, POST, PATCH, DELETE, GET')
            return res.status(200).send({});
        }
        next();
});

app.use(express.static(__dirname + '/'));

app.get('/inicio', function(req, res) {
    return res.sendFile(__dirname + '/inicio.html');
 });

 app.get('/cadastro', function(req, res) {
   return res.sendFile(__dirname + '/cadastro.html');
}); 
app.get('/consulta', function(req, res) {
   return res.sendFile(__dirname + '/consulta.html');
});

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = (404);
    erro.menssage ='Não encontrado';
    next(erro)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.menssage
        }
    })
})


module.exports = app;