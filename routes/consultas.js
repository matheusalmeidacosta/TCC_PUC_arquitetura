const express = require('express')
const router = express.Router();


router.post('/', (req, res, next) => {
    const dadosIncidente = {
        dataInicio: req.body.dataInicio,
        dataFim: req.body.dataFim,
    }

    //Realizar consulta em banco

    res.status(201).send({
        mensagem: 'Novo incidente cadastrado',
        retorno: [{
            "id":1,
            "descricao": "Olá mundo"
        },{
            "id":2,
            "descricao": "mais um teste"
        }]
    })
});


module.exports = router;