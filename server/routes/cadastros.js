const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o Get'
    })
});


router.post('/', (req, res, next) =>{
    const dadosIncidente = {
        descricao: req.body.descricao,
        codUsuario: req.body.codUser,
    }
    res.status(201).send({
        mensagem: 'Novo incidente cadastrado',
        retorno: dadosIncidente
    })
});


module.exports = router;